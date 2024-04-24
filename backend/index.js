const port = 4001;
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

// // Database Connection
mongoose.connect(
  "mongodb+srv://rhemarajagopal2018:Rema%40%4092@mernapp.tcgquk8.mongodb.net/?retryWrites=true&w=majority&appName=MernApp/"
);
//api creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});
// Image stoarge
// //imag
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });
//Creating Upload Enpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Schema for creating Products
const ProductSchema = new mongoose.Schema({
  // id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String }, // Assuming image is optional
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

const Product = mongoose.model("Product", ProductSchema);

app.post("/addproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let lastProduct = products[products.length - 1];
      id = lastProduct.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log("saved");

    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// id: req.body.id,
//     name: req.body.name,
//     image: req.body.image,
//     category: req.body.category,
//     new_price: req.body.new_price,
//     old_price: req.body.old_price
// const { id, name, image, category, new_price, old_price } = req.body;
// try {
//   const product = await Product.create({
//     id: id1,
//     name,
//     image,
//     category,
//     new_price,
//     old_price,
//   });
//     console.log("saved");
//     res.status(200).json(product);
//     res.json({
//       success: true,
//       name: req.body.name,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }

//   //   res.json({ msssg: "Post product" });
// });

// console.log(product);
//all products
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched");

  res.send(products);
});
//remove

app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});
//listen

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server listening on port ${process.env.PORT || 4001}`);
  } else {
    console.log("error" + error);
  }
});

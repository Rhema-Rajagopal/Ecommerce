// const express = require("express");
// const Product = require("../models/productModel");
// const router = express.Router();

// router.get("/allproducts", async (req, res) => {
//   let products = await Product.find({});
//   console.log("all Products");
//   res.send(products);
//   res.json({ msssg: "GET all products" });
// });

// router.get("/:id", (req, res) => {
//   res.json({ msssg: "GET single product" });
// });

// // router.post("/", async (req, res) => {
// //   let products = await Product.find({});
// //   let id1;
// //   if (products.length > 0) {
// //     let last_product_array = products.slice(-1);
// //     let last_product = last_product_array[0];
// //     id1 = last_product.id + 1;
// //   } else {
// //     id1 = 1;
// //   }

// //   // id: req.body.id,
// //   //     name: req.body.name,
// //   //     image: req.body.image,
// //   //     category: req.body.category,
// //   //     new_price: req.body.new_price,
// //   //     old_price: req.body.old_price
// //   const { id, name, image, category, new_price, old_price } = req.body;
// //   try {
// //     const product = await Product.create({
// //       id: id1,
// //       name,
// //       image,
// //       category,
// //       new_price,
// //       old_price,
// //     });
// //     console.log("saved");
// //     res.status(200).json(product);
// //     res.json({
// //       success: true,
// //       name: req.body.name,
// //     });
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }

// //   //   res.json({ msssg: "Post product" });
// // });
// router.delete("/:id", async (req, res) => {
//   await Product.findOneAndDelete({ id: req.body.id });
//   console.log("Removed");
//   res.json({ msssg: "delete single product" });
// });

// // router.post("/removeproduct", async (req, res) => {
// //   await Product.findOneAndDelete({ id: req.body.id });
// //   console.log("Removed");
// //   res.json({
// //     sucecess: true,
// //     name: req.body.name,
// //   });
// // });
// router.patch("/:id", (req, res) => {
//   res.json({ msssg: "update single product" });
// });
// module.exports = router;

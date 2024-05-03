const router = require("express").Router();
const crypto = require("crypto");
const products = require("../models/products");

router.post("/", (req, res) => {
  const { name, price, quantity, location, active } = req.body;

  if (!name) {
    return res.status(422).json({ message: "Name input is required." });
  }
  const id = crypto.randomUUID();

  products.push({
    id,
    name,
    price,
    quantity,
    location,
    active,
  });
  res.status(201).json({ message: "Product created successfully.." });
});

//Index route...
router.get("/", (req, res) => {
  res.status(200).send(products);
});

//Show route..
router.get("/:id", (req, res) => {
  const product = products.find((product) => product.id == req.params.id);

  if (!product) {
    return res.status(204).json({ message: "No content" });
  }
  res.status(200).json(product);
});

//Update route...
router.put("/:id", (req, res) => {
  const product = products.find((product) => product.id == req.params.id);
  if (!product) {
    return res.status(204).json();
  }
  const { name, price, quantity, location, active } = req.body;
  if (name) {
    product.name = name;
  }
  if (price) {
    product.price = price;
  }
  if (quantity) {
    product.quantity = quantity;
  }
  if (location) {
    product.location = location;
  }
  if ("active" in req.body) {
    product.active = active;
  }
  res.status(200).json({ message: "Product updated successfully" });
});

//Delete route
router.delete("/:id", (req, res) => {
  const productIndex = products.findIndex(
    (product) => product.id == req.params.id
  );
  if (productIndex == -1) {
    res.status(404).json({ message: "No product found" });
  }
  products.splice(productIndex, 1);
  res.status(200).json({ message: "Product successfully deleted.." });
});

module.exports = router;

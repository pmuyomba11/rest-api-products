const router = require("express").Router();
const crypto = require("crypto");
const products = require("../models/products");
const productsController = require("../controllers/productsController");

//Create route
router.post("/", productsController.createNewProduct);

//Index route...
router.get("/", productsController.getAllProducts);

//Show route..
router.get("/:id", productsController.getProductById);

//Update route...
router.put("/:id", productsController.updateProductById);

//Delete route
router.delete("/:id", productsController.deleteProductById);

module.exports = router;

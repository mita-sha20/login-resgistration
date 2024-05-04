const express = require('express');
const route = express.Router();
const productController = require("../../controllers/productController")
const viewAllproduct = require("../../controllers/viewAllproduct")
const selectController = require("../../controllers/selectController")
const viewselectController = require("../../controllers/viewselectController")

route.post('/product', productController)
route.post('/select', selectController)

route.get("/allproduct", viewAllproduct)
route.get("/allselect", viewselectController)

module.exports = route;
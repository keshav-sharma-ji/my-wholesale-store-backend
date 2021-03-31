const express = require("express");
const router = express.Router();

const {
	getProductById,
	createProduct,
	getProduct,
	photo,
	updateProduct,
	deleteProduct,
	getAllProducts,
	getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedin, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, getUser } = require("../controllers/user");

//Params
router.param("userId", getUserById);
router.param("productId", getProductById);

//actual routes

//create
router.post(
	"/product/create/:userId",
	isSignedin,
	isAuthenticated,
	isAdmin,
	createProduct
);

//read
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//update
router.put(
	"/product/:productId/:userId",
	isSignedin,
	isAuthenticated,
	isAdmin,
	updateProduct
);

//delete
router.delete(
	"/product/:productId/:userId",
	isSignedin,
	isAuthenticated,
	isAdmin,
	deleteProduct
);

//listing routes
router.get("/products", getAllProducts);
router.get("/product/categories", getAllUniqueCategories);

module.exports = router;

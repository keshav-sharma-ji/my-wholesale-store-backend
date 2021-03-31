var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");

const {
	signout,
	signup,
	signin,
	isSignedin,
} = require("../controllers/auth.js");

router.post(
	"/signup",
	[
		check("name", "Name should be at least 3 character").isLength({ min: 3 }),
		check("email", "email is required").isEmail(),
		check("password", "Password should be at least 3 character").isLength({
			min: 3,
		}),
	],
	signup
);

router.post(
	"/signin",
	[
		check("email", "Email is required").isEmail(),
		check("password", "Password is required").isLength({ min: 1 }),
	],
	signin
);

router.get("/signout", signout);

router.get("/testroute", isSignedin, (req, res) => {
	res.send("Protected routes");
});

module.exports = router;

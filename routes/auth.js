const express = require("express");

const { check, validationResult } = require("express-validator");
const { signup, signin } = require("../controllers/auth");

const router = express.Router();

// POST Route
// Signining up the author with email, password and name
router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 character").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least three charcater").isLength({
      min: 3,
    }),
  ],
  signup
);

// POST
// Singin in author
router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({
      min: 3,
    }),
  ],
  signin
);

module.exports = router;

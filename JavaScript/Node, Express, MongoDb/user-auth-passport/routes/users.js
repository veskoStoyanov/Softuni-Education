const express = require("express");
const router = express.Router();
const Authorization = require('../authorization/auth');

// Load User model
const User = require("../models/User");

// Login Page
router.get("/login",  (req, res) => res.render("login"));

// Register Page
router.get("/register", (req, res) =>
  res.render("register")
);
// Register
router.post("/register", Authorization.register);

// Login
//на ред 2 и 3 си инициализираме passport и jwt
router.post("/login", Authorization.login);



// Logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/users/login");
});

module.exports = router;

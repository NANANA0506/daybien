const db = require("../db");
const express = require("express");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/", checkLogin, (req, res, next) => {
    const loggedIn = req.session.isLoggedIn;


})

module.exports = router;
const db = require("../db");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {

    res.render("layouts/main")
})

module.exports = router;
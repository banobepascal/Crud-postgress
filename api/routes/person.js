const { pool } = require("../../migrations/dbSetup");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("Welcome Pascal u are doing great");
});



module.exports = router;

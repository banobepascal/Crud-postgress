const { pool } = require("../../migrations/dbSetup");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("Welcome Pascal u are doing great");
});

router.get("/person", (req, res) => {
  pool.connect((err, client, done) => {
    const query = "SELECT * FROM users";
    client.query(query, (error, result) => {
      if (error) {
        res.status(400).json({ error });
      }
      if (result.rows < "1") {
        res.status(404).json({
          status: "Failed",
          message: "No information for you"
        });
      } else {
        res.status(200).json({
          status: "Successful",
          message: "You are served"
        });
      }
    });
  });
});

module.exports = router;

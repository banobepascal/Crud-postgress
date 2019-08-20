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
      done();
      if (error) {
        res.status(400).json({ error });
      }
      if (result.rows < "1") {
        res.status(404).send({
          status: "Failed",
          message: "No information for you"
        });
      } else {
        res.status(200).send({
          status: "Successful",
          message: "You are served"
        });
      }
    });
  });
});

router.post("/people", (res, req) => {
  const data = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email
  };

  pool.connect((err, client, done) => {
    const query =
      "INSERT INTO users(first_name, last_name, email) VALUES($1,$2,$3) RETURNING *";
    const values = [data.firstname, data.lastname, data.email];

    client.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(404).json({ error });
      } else {
        res.status(200).send({
          status: "Successful",
          message: "You have added data",
          result: result.rows[0]
        });
      }
    });
  });
});

module.exports = router;

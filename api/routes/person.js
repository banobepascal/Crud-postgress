const { pool } = require("../../migrations/dbSetup");
const express = require("express");

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      res.status(400).json({error});
    }
    if (results.rows < '1'){
      res.status(404).send({
        status : "Failed",
        message : "No information availble"
      });
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const {firstname, lastname, email} = req.body;
    pool.query('INSERT INTO users(first_name, last_name, email) VALUES ($1, $2, $3)', [firstname, lastname, email], (error, results) => {
      if (error) {
        throw error
      }
      res.status(202).send(`User has been created : ${results.insertId}`)
    });
};

module.exports = { 
  getUsers,
  createUser
}

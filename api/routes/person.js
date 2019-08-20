const { pool } = require("../../migrations/dbSetup");

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      res.status(400).json({ error });
    }
    res.status(200).send(results.rows);
  });
};

const getUserByID = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      res.status(400).json({ error });
    }
    res.status(202).send(results.rows);
  });
};

const createUser = (req, res) => {
  const { firstname, lastname, email } = req.body;
  pool.query(
    "INSERT INTO users(first_name, last_name, email) VALUES ($1, $2, $3)",
    [firstname, lastname, email],
    (error, results) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(200).send(results.rows[0]);
    }
  );
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { firstname, lastname, email } = req.body;
  pool.query(
    "UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4",
    [firstname, lastname, email, id],
    (error, results) => {
      if (error) {
        res.status(400).json({ error });
      }
      res.status(202).send(results.rows);
    }
  );
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      res.status(400).json({ error });
    }
    res.status(202).send(results.rows);
  });
};

module.exports = {
  getUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser
};

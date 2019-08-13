const pg = require("pg");

const config = {
  user: "profile_app",
  database: "profile",
  password: "profile_app",
  port: 5432,
  max: 20
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("Connected to database");
});

const createTables = () => {
  const users = `CREATE TABLE IF NOT EXISTS 
        users(
        id SERIAL PRIMARY KEY,
        first_name  VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        email TEXT UNIQUE NOT NULL
      )`;

  pool
    .query(users)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });

  const profileTable = `CREATE TABLE IF NOT EXISTS
      profiles(
        id SERIAL PRIMARY KEY,
        profile_name VARCHAR(128) NOT NULL,
        profile_age INT NOT NULL,
        profile_contact VARCHAR(15) NOT NULL,
        profile_status VARCHAR(128) NOT NULL
      )`;

  pool
    .query(profileTable)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });

  const authentication = `CREATE TABLE IF NOT EXISTS 
      authentication(
      id SERIAL PRIMARY KEY,
      username VARCHAR(150) UNIQUE NOT NULL,
      password TEXT NOT NULL
      )`;

  pool
    .query(authentication)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });

  const books = `CREATE TABLE IF NOT EXISTS 
      books(
      id SERIAL PRIMARY KEY,
      title VARCHAR(150) UNIQUE NOT NULL
      )`;

  pool
    .query(books)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });

  const roles = `CREATE TABLE IF NOT EXISTS 
    roles(
    id SERIAL PRIMARY KEY,
    position VARCHAR(150) NOT NULL
    )`;

  pool
    .query(roles)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

pool.on("remove", () => {
  console.log("client removed");
  process.exit(0);
});

module.exports = {
  createTables,
  pool
};

require("make-runnable");

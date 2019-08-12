const pg = require('pg');

const config = {
  user: 'recipe',
  database: 'recipe-book',
  password: 'recipe',
  port: 5432,
  max: 20,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Connected to database');
})

const createTables = () => {
  const profileTable = `CREATE TABLE IF NOT EXISTS
      profiles(
        id SERIAL PRIMARY KEY,
        profile_name VARCHAR(128) NOT NULL,
        profile_age SERIAL(3) NOT NULL,
        profile_contact SERIAL(15) NOT NULL,
        profile_status VARCHAR(128) NOT NULL
      )`;
      pool.query(profileTable)
        .then((res) => {
          console.log(res);
          pool.end();
        })
        .catch((err) => {
          console.log(err);
          pool.end();
        });
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  pool,
};

require('make-runnable');

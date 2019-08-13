// import { users,  authentication } from './dbquery';
import setupTables from './dbquery';
// const {users,  authentication} = require('./dbquery');
const pg = require('pg');

const config = {
  user: 'profile_app',
  database: 'profile',
  password: 'profile_app',
  port: 5432,
  max: 20,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('Connected to database');
});

// pool.query(setupTables, (error) => {
//   console.log('error', error);
//   pool.end();
// });


const createTables = () => {
  // const profileTable = `CREATE TABLE IF NOT EXISTS
  //     profiles(
  //       id SERIAL PRIMARY KEY,
  //       profile_name VARCHAR(128) NOT NULL,
  //       profile_age INT NOT NULL,
  //       profile_contact VARCHAR(15) NOT NULL,
  //       profile_status VARCHAR(128) NOT NULL
  //     )`;
 
      pool.query(setupTables)
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

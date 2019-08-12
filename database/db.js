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
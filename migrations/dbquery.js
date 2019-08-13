const users = `CREATE TABLE IF NOT EXISTS 
        users(
        id SERIAL PRIMARY KEY,
        first_name  VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        email TEXT UNIQUE NOT NULL,
        ON DELETE CASCADE
);`;

const authentication = `
CREATE TABLE IF NOT EXISTS authentication(
  id SERIAL PRIMARY KEY,
  username VARCHAR(150) UNIQUE NOT NULL,
  password TEXT NOT NULL
);`;


const dropTables = `
        DROP TABLE IF EXISTS users cascade;
`;

module.exports = `${users}${authentication}`;
module.exports = dropTables;
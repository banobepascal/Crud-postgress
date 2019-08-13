const users = `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL NUMBER PRIMARY KEY,
        first_name  VARCHAR(20) NOT NULL,
        last_name VARCHAR(20) NOT NULL,
        email TEXT UNIQUE NOT NULL,
        ON DELETE CASCADE
)`;

const dropTables = `
        DROP TABLE IF EXISTS users cascade;
`;

module.exports = `${users}`;
module.exports = dropTables;
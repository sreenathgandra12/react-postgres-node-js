// Importing the Pool class from the 'pg' module
const { Pool } = require('pg');
// Creating a new instance of Pool to manage connections to the PostgreSQL database
const pool = new Pool({
  user: 'postgres',// PostgreSQL username
  host: 'localhost',//PostgreSQL server host
  database: 'project',//PostgreSQL database name
  password: 'root',//PostgreSQL password
  port: 5432, // default PostgreSQL port
});

// Exporting the pool instance to be used in other module
module.exports = pool;

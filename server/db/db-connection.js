const { Pool } = require('pg');
const db = new Pool({
    //connectionString: process.env.DATABASE_URI
    connectionString: "postgresql://localhost/blog"
  });
//console.log("database test: " + process.env.DATABASE_URI)
  module.exports = db;
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Knmietm4',
  database: 'airbnb'
});

module.exports = pool.promise();
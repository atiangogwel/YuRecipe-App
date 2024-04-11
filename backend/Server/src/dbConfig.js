const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'pass123',
  database: 'YurRecipe'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;

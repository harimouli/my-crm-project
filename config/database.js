const { Sequelize } = require('sequelize');
const sqlite3 = require('sqlite3');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: sqlite3,
  storage: process.env.DB_NAME || 'crm-database.db',
  logging: false, // Disable logging for better performance
  define: {
    timestamps: false // Disable automatic timestamps for all models
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); 
  });

module.exports = sequelize;

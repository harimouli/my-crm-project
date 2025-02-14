const { Sequelize } = require('sequelize');
const sqlite = require('sqlite3');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_NAME || 'crm-database.db',
  logging: true, // Disable logging for better performance
  define: {
    timestamps: true // Disable automatic timestamps for all models
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

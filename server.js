require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());


// Use the routes from the routes folder
app.use('/api', routes);

sequelize.sync()  // Sync database (Note: In production, use migrations)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log('Server is running...');
    });
  })
  .catch(err => console.error('Error syncing database:', err));

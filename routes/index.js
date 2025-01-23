const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth');
const userController = require('../controllers/userController');
const customerController = require('../controllers/customerController');

// User Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Customer Routes
router.post('/customers', authenticate, customerController.createCustomer);
router.get('/customers', authenticate, customerController.getAllCustomers);
router.put('/customers/:id', authenticate, customerController.updateCustomer);  // Update route with id
router.delete('/customers/:id', authenticate, customerController.deleteCustomer);  // Delete route with id

//  handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = router;

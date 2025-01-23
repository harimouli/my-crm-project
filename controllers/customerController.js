const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
  const { name, email, phone, company } = req.body;
  const userId = req.user.id;

  try {
    const customer = await Customer.create({ name, email, phone, company, userId });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateCustomer = async (req, res) => {
  const { id, name, email, phone, company } = req.body;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    customer.name = name || customer.name;
    customer.email = email || customer.email;
    customer.phone = phone || customer.phone;
    customer.company = company || customer.company;

    await customer.save();
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    await customer.destroy();
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

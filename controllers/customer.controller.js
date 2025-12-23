const { Op } = require("sequelize");
const { Customer } = require("../models/index.js");
const { validateCustomer } = require("../validation/customer.validation.js");

//  Create Customer
exports.createCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//  Get All Customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).send(customers);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//  Get Customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//  Update Customer
exports.updateCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    await customer.update(req.body);
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//  Delete Customer
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    const deletedData = customer.toJSON();
    await customer.destroy();

    res.status(200).send(deletedData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//  Search Customer
exports.searchCustomer = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const customers = await Customer.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
          { address: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(customers);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

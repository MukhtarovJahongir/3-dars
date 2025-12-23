const { Op } = require("sequelize");
const { Car } = require("../models/index.js");
const { validateCar } = require("../validation/car.validation.js"); 

// Create Car
exports.createCar = async (req, res) => {
  // const { error } = validateCar(req.body);
  // if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const car = await Car.create(req.body);
    res.status(201).send(car);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get All Cars
exports.getCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).send(cars);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get Car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).send("Car not found");

    res.status(200).send(car);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update Car
exports.updateCar = async (req, res) => {
  // const { error } = validateCar(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).send("Car not found");

    await car.update(req.body);
    res.status(200).send(car);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete Car
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) return res.status(404).send("Car not found");

    const deletedData = car.toJSON();
    await car.destroy();

    res.status(200).send(deletedData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Search Car
exports.searchCar = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query)
      return res.status(400).send("Search query is required");

    const cars = await Car.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { model: { [Op.iLike]: `%${query}%` } },
          { color: { [Op.iLike]: `%${query}%` } },
          { gasoline: { [Op.iLike]: `%${query}%` } },
          { carType: { [Op.iLike]: `%${query}%` } },
          { yearMachine: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(cars);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

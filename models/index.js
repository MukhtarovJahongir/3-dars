const sequelize = require("../config/database");
const Sequelize = require("sequelize");


const User = require("./user.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Car = require("./car.model")(sequelize, Sequelize);  

User.associate(sequelize.models)
Customer.associate(sequelize.models)

module.exports = { User, Customer, Car, sequelize };

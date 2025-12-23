const Joi = require("joi");

const validateCar = (car) => {
  const schema = Joi.object({
    title: Joi.string().min(2).required(),
    model: Joi.string().min(1).required(),
    description: Joi.string().allow(""),
    color: Joi.string().min(2).required(),
    horsePower: Joi.number().required(),
    carType: Joi.string().min(2).required(),
    charging: Joi.string().allow(""),
    weight: Joi.string().required(),
    gasoline: Joi.string().required(),
    yearMachine: Joi.string().required(),
    price: Joi.number().required(),
  });

  return schema.validate(car);
};

module.exports = { validateCar };

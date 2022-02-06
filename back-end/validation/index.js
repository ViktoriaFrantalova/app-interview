const Joi = require("joi");

const cardSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
});

const isValidCard = card => (cardSchema.validate(card).error ? false : true);

// regex
const isValidId = id => !/^[0-9]+$/.test(id);

module.exports = {
  cardSchema,
  isValidCard,
  isValidId,
};

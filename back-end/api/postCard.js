const express = require("express");
const routerCard = express.Router();
const helper = require("../helper");
const validation = require("../validation");

routerCard.route("/card").post(async (req, res) => {
  const { body } = req;
  const isValid = validation.isValidCard(body);
  if (isValid) {
    const data = await helper.loadData();
    const dataParsed = JSON.parse(data);
    const reducer = (previousValue, currentValue) => (previousValue > +currentValue.id ? previousValue : +currentValue.id);
    const nextId = String(dataParsed.reduce(reducer, 0) + 1);
    const newData = [{ ...body, id: nextId }].concat(dataParsed);
    await helper.storeData(newData);
    res.status(200).send(newData);
  } else {
    res.status(405).send("New card is not valid");
  }
});

module.exports = routerCard;

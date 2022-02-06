const express = require("express");

const routerCard = express.Router();
const validation = require("../validation");
const helper = require("../helper");

routerCard.route("/card/:id").delete(async (req, res) => {
  const { id } = req.params;
  if (validation.isValidId(id)) {
    res.status(400).send("Invalid card id format supplied");
    return;
  }
  const data = await helper.loadData();
  const dataParsed = JSON.parse(data);
  const card = dataParsed.find(card => card.id === id);
  if (card) {
    const newData = dataParsed.filter(card => card.id !== id);
    await helper.storeData(newData);
    res.status(200).send(newData);
  } else {
    res.status(405).send("Card is not found");
  }
});

module.exports = routerCard;

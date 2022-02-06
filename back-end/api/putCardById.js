const express = require("express");
const routerCard = express.Router();
const helper = require("../helper");
const validation = require("../validation");

routerCard.route("/card").put(async (req, res) => {
  const { title, description, id, images } = req.body;
  if (validation.isValidId(id)) {
    return res.status(400).send("Invalid card id format supplied");
  }
  const data = await helper.loadData();
  const dataParsed = JSON.parse(data);
  const card = dataParsed.find(card => card.id === id);
  if (!card) {
    return res.status(404).send("Card is not found");
  }
  if (typeof title !== "string" || typeof description !== "string" || typeof id !== "string" || typeof images !== "string") {
    const newData = dataParsed.map(card => {
      if (card.id === id) {
        card.title = title;
        card.description = description;
        return card;
      }
      return card;
    });
    console.log(newData);
    await helper.storeData(newData);
    res.status(200).send(newData);
  } else {
    res.status(405).send("New card is not valid");
  }
});

module.exports = routerCard;

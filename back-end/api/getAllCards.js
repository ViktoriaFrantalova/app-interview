const express = require("express");
const routerCard = express.Router();
const helper = require("../helper");

routerCard.route("/cards").get(async (_, res) => {
  try {
    const data = await helper.loadData();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = routerCard;

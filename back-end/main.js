const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

const port = 8080;
app.use(express.json());

const postCard = require("./api/postCard.js");
app.use(postCard);
const getAllCards = require("./api/getAllCards.js");
app.use(getAllCards);
const deleteCardById = require("./api/deleteCardById.js");
app.use(deleteCardById);
const putCardById = require("./api/putCardById.js");
app.use(putCardById);

app.listen(port, () => console.log(`Server is running with port: ${port}`));

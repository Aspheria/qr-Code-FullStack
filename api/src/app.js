const express = require('express');
const CardController = require('./Controller');

const app = express();
const cors = require('cors')

app.use(cors());

app.use(express.json());

const cardController = new CardController();

app.get('/card1/:name', cardController.getCardByName);
app.post('/card1', cardController.createCard);

module.exports = app;
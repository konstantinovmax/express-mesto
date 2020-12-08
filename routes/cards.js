const cardsRouter = require('express').Router();
const path = require('path');

const cardsData = path.join(__dirname, '../data/cards.json');

const cardsList = (req, res) => {
  res.json(require(cardsData));
};

cardsRouter.get('/cards', cardsList);

module.exports = cardsRouter;

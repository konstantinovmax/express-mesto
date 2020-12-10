const cardsRouter = require('express').Router();
const path = require('path');
const fsPromises = require('fs').promises;

const cardsData = path.join(__dirname, '../data/cards.json');

const cardsList = (req, res) => {
  fsPromises.readFile(cardsData, { encoding: 'utf8' })
    .then(() => {
      res.json(require(cardsData));
    })
    .catch(() => {
      res.status(404).send({ error: 'Запрашиваемый файл не найден' });
    });
};

cardsRouter.get('/cards', cardsList);

module.exports = cardsRouter;

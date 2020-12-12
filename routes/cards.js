const cardsRouter = require('express').Router();
const { cardsList, createCard, deleteCard, cardLike, cardLikeRemove } = require('../controllers/cards');

cardsRouter.get('/cards', cardsList);
cardsRouter.post('/cards', createCard);
cardsRouter.delete('/cards/:cardId', deleteCard);
cardsRouter.put('/cards/:cardId/likes', cardLike);
cardsRouter.delete('/cards/:cardId/likes', cardLikeRemove);

module.exports = cardsRouter;

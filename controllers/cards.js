const Card = require('../models/card');

const cardsList = (req, res) => {
  Card.find({})
    .populate(['owner', 'likes'])
    .then((cards) => res.status(200).send(cards))
    .catch(() => res.status(500).send({ message: 'Не удалось загрузить список карточек' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Ошибка при создании карточки' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const deleteCard = (req, res) => {
  Card.deleteOne(req.params.cardId)
    .orFail(() => {
      const customError = new Error('CustomError');
      return customError;
    })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.message === 'CustomError') {
        res.status(404).send({ message: 'Не удалось удалить карточку' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const cardLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .orFail(() => {
      const customError = new Error('CustomError');
      return customError;
    })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.message === 'CustomError') {
        res.status(404).send({ message: 'Не удалось поставить лайк карточке' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const cardLikeRemove = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .orFail(() => {
      const customError = new Error('CustomError');
      return customError;
    })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.message === 'CustomError') {
        res.status(404).send({ message: 'Не удалось убрать лайк у карточки' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

module.exports = { cardsList, createCard, deleteCard, cardLike, cardLikeRemove };

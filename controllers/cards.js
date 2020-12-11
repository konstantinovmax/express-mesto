const Card = require('../models/card');

const cardsList = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(() => res.status(500).send({ message: 'Не удалось загрузить список карточек' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then((card) => res.status(200).send(card))
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные при создании карточки' }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.status(200).send(card))
    .catch(() => res.status(404).send({ message: 'Не удалось удалить карточку' }));
};

const cardLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => res.status(200).send(card))
    .catch(() => res.status(404).send({ message: 'Не удалось поставить лайк карточке' }));
}

const cardLikeRemove = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => res.status(200).send(card))
    .catch(() => res.status(404).send({ message: 'Не удалось убрать лайк у карточки' }));
}


module.exports = { cardsList, createCard, deleteCard, cardLike, cardLikeRemove };

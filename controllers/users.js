const User = require('../models/user');

const usersList = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() => res.status(500).send({ message: 'Не удалось загрузить список пользователей' }));
};

const doesUserExist = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.status(200).send(user))
    .catch(() => res.status(404).send({ message: 'Не удалось найти пользователя' }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch(() => res.status(400).send({ message: 'Переданы некорректные данные при создании пользователя' }));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.params.id, { name, about })
    .then(() => res.status(200).send({ name, about }))
    .catch(() => res.status(404).send({ message: 'Не удалось обновить данные пользователя' }));
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.params.id, { avatar })
    .then(() => res.status(200).send({ avatar }))
    .catch(() => res.status(404).send({ message: 'Не удалось обновить аватар пользователя' }));
};


module.exports = { usersList, doesUserExist, createUser, updateUser, updateUserAvatar };

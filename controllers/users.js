const User = require('../models/user');

const usersList = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() => res.status(500).send({ message: 'Не удалось загрузить список пользователей' }));
};

const doesUserExist = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Не удалось найти пользователя' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(400).send({ message: 'Некорректно указан id пользователя' });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { runValidators: true, new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Не удалось найти пользователя' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const updateUserAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true, new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Не удалось найти пользователя' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).send({ message: err.message });
      }
      return res.status(500).send({ message: 'Ошибка сервера' });
    });
};

module.exports = { usersList, doesUserExist, createUser, updateUser, updateUserAvatar };

const usersRouter = require('express').Router();
const path = require('path');
const fsPromises = require('fs').promises;

const usersData = path.join(__dirname, '../data/users.json');

const usersList = (req, res) => {
  fsPromises.readFile(usersData, { encoding: 'utf8' })
    .then(() => {
      res.json(require(usersData));
    })
    .catch(() => {
      res.status(404).send({ error: 'Запрашиваемый файл не найден' });
    });
};

const doesUserExist = (req, res) => {
  fsPromises.readFile(usersData, { encoding: 'utf8' })
    .then(JSON.parse)
    .then((users) => {
      const user = users.find((user) => user._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

usersRouter.get('/users', usersList);
usersRouter.get('/users/:id', doesUserExist);

module.exports = usersRouter;

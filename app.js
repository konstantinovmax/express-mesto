const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const nonexistentUrlRouter = require('express').Router();
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const nonexistentUrl = (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
};
nonexistentUrlRouter.get('*', nonexistentUrl);

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '5fd396f34be2973ef4c854eb'
  };

  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('*', nonexistentUrlRouter);

app.listen(PORT, () => {
  console.log('Ссылка на сервер: http://localhost:3000/');
});

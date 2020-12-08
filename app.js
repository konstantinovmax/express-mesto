const express = require('express');
const path = require('path');
const nonexistentUrlRouter = require('express').Router();

const { PORT = 3000 } = process.env;
const app = express();

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const nonexistentUrl = (req, res) => {
  res.send({ message: 'Запрашиваемый ресурс не найден' });
};
nonexistentUrlRouter.get('*', nonexistentUrl);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('*', nonexistentUrlRouter);

app.listen(PORT, () => {
  console.log('Ссылка на сервер: http://localhost:3000/');
});

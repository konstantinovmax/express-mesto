const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

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
app.use('*', (req, res, next) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });

  next();
});

app.listen(PORT, () => {
  console.log('Ссылка на сервер: http://localhost:3000/');
});

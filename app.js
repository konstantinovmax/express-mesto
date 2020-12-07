const express = require('express');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log('Ссылка на сервер: http://localhost:3000/');
});

app.use(express.static(path.join(__dirname, 'public')));
const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

const PORT = 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`FluentME API rodando na porta ${PORT}`);
  });
}

module.exports = app;
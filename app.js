const express = require('express');
const morgan = require('morgan');
const models = require('./models');

const layout = require('./views/layout');

models.db.authenticate().then(() => {
  console.log('Connected to the database');
});

const app = express();
app.use(morgan('dev'));
app.use(express.static('stylesheets'));

app.get('/', (req, res) => {
  res.send(layout(''));
});

async function syncDB() {
  await models.db.sync();
}

syncDB();

const port = 3000;
app.listen(port, () => console.log('Now listening on port 3000'));

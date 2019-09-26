const express = require('express');
const morgan = require('morgan');

const userRoute = require('./routes/user');
const wikiRoute = require('./routes/wiki');

const models = require('./models');

const layout = require('./views/layout');

models.db.authenticate().then(() => {
  console.log('Connected to the database');
});

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(express.static('stylesheets'));

app.use('/wiki', wikiRoute);
app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.redirect('./wiki');
});

async function syncDB() {
  await models.db.sync();
}

syncDB();

const port = 3000;
app.listen(port, () => console.log('Now listening on port 3000'));

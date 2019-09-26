const express = require('express');

const addPage = require('../views/addPage');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("hi");
});

router.post('/', (req, res) => {
  let getTitleInput =res.json(req.body);

  console.log(getTitleInput);

  //res.send('inside the post route');
});

router.get('/add', (req, res) => {
  res.send(addPage());
});


module.exports = router;

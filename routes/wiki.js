const express = require('express');
const addPage = require('../views/addPage');
const wikipage = require('../views/wikipage');
const router = express.Router();
const Page = require('../models/index').Page;

router.get('/', (req, res) => {
  res.send('hi');
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  let title = req.body.title;
  let content = req.body.content;
  let status = req.body.status;
  try {
    await Page.create({
      title,
      content,
      status,
    }).then(page => {
      res.redirect(`/wiki/${page.slug}`);
    });
  } catch (e) {
    console.log('Something happened...', e);
    next();
  }
});

router.get('/add', (req, res) => {
  res.send(addPage());
});


router.get('/:slug', async (req, res, next) => {
  try {
    let slugReq = req.params.slug;
    let page = await Page.findOne({
      where: { slug: slugReq }
    });

    res.send(wikipage(page));
  } catch(err) {
    next(err);
  }
});


module.exports = router;

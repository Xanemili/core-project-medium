const express = require('express');
const router = express.Router();
const { User, Topic, Babble } = require('../db/models');

router.get('/', async (req, res) => {
  res.redirect('/welcome')
  // res.render('profile');
})

router.get('/users/:id(\\d+)/profile', async (req, res) => {
  res.render('profile', {
    id: req.params.id
  });
}) // implement viewing others profiles

router.get('/users/:id(\\d+)/profile/edit', async(req, res) => {
  res.render('profile-edit')
})

router.get('/users/:id(\\d+)/followers', async(req, res) => {
  res.render('followers')
})

router.get('/users/:id(\\d+)/following', async(req, res) => {
  res.render('following')
})

router.get('/sign-up', (req, res) => {
  res.render('sign-up')
})

router.get('/log-in', (req, res) => {
  res.render('log-in')
})

router.get('/welcome', (req, res) => {
  res.render('welcome')
})

router.get('/babbles/:id(\\d+)', (req, res) => {
  res.render('babble')
});

router.get('/babbles/create', async(req, res) => {
  const topics = await Topic.findAll();
  res.render('babble-create', { topics })
});

router.get('/babbles/:id(\\d+)/edit', async (req, res) => {
  const topics = await Topic.findAll();
  res.render('babble-create', {
    topics
  })
});

router.get('/babbles', async(req, res) => {
  const topics = await Topic.findAll();
  res.render('babble-feed', { topics });
});


router.get('/babbles/search/:search', async(req, res) => {
  res.render('search-topic')
})

router.get('/topics/search/:search', async (req, res) => {
  res.render('search-topic')
})


module.exports = router;

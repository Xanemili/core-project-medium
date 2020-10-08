const express = require('express');
const router = express.Router();
const { User, Topic, Babble } = require('../db/models');

router.get('/', async(req,res) => {
  res.render('profile');
  })

router.get('/sign-up', (req, res) => {
    res.render('sign-up')
  })

router.get('/log-in', (req, res) => {
  res.render('log-in')
})

router.get('/babbles/:id(\\d+)', (req, res) => {
  res.render('babble')
});




router.get('/babbles/create', async(req, res) => {
  const topics = await Topic.findAll();

  res.render('babble-create', { topics })
});

module.exports = router;

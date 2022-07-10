const router = require('express').Router();
const profileModel = require('../porfileModel');

router.get('/', async (req, res) => {
  await new profileModel(req.body).save();
  res.send('register');
});

module.exports = router;

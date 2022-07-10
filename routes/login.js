const router = require('express').Router();
const jwt = require('jsonwebtoken');
const profileModel = require('../porfileModel');

router.post('/', async (req, res) => {
  //email is already present or not
  const user = await profileModel.findOne({ email: req.body.email });
  if (!user) return req.status(401).send({ msg: 'user not found' });

  //initializing token
  const token = jwt.sign({ _id: user._id }, 'sjshewmcpqwndsbha');

  res.send({ token: token });
});

module.exports = router;

const router = require('express').Router();
const porfileModel = require('../porfileModel');
const Profile = require('../porfileModel');
const jwt = require('jsonwebtoken');
const profileModel=require('../profileModel');
const mid=require('../mid');

router.get('/', mid,(req, res) => {
  
  const user=await profileModel.findOne({_id:req.user._id})
  res.send(user);
  
});

module.exports = router;

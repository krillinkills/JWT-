const express = require('express');
const app = express();
const mongoose = require('mongoose');
const URL = 'mongodb://localhost/JWT';

mongoose
  .connect(URL)
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err));

//ROUTES
app.use('/login', require('./routes/login'));
app.use('/profile', require('./routes/profile'));
app.use('/register', require('./routes/register'));

app.listen(4000);

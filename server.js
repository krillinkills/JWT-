const express = require('express');
const app = express();

//ROUTES
app.use('/login', require('./routes/login'));
app.use('/profile', require('./routes/profile'));
app.use('/register', require('./routes/register'));

app.listen(4000);

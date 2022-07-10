const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!req.header('token')) return res.send({ msg: 'missing token' });
  const token = req.headers.token;
  try {
    const verify = jwt.verify(token, 'sjshewmcpqwndsbha');
    req.user = verify;
    next();
  } catch (err) {
    return res.send({ msg: 'Invalid token' });
  }
};

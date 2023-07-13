const jwt = require('jsonwebtoken');
const secrets = require('../../server/secret.js');

const generateToken = (user) => {
  const payload = {
    userId: user.user_id,
    username: user.user_name,
  };
  const secret = 'super secret password';
  const options = {
    expiresIn: '6h',
  };
  return jwt.sign(payload, secret, options);
};

const verifyToken = (req, res, next) => {
  const secret = secrets.jwtSecret;
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ msg: 'Authentication required. Please log in to continue.' });
      } else {
        req.decodedToken = decodedToken;
        next();
      };
    });
  } else {
    res.status(400).json({ msg: 'invalid credentials' });
  };
};

module.exports = {
  generateToken,
  verifyToken,
};

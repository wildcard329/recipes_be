require('dotenv').config();
const jwt = require('jsonwebtoken');
const serverRes = require('./res.js');

const generateToken = (user) => {
  const payload = {
    userId: user.user_id,
    username: user.user_name,
  };
  const secret = process.env.JWT_SECRET || 'default password';
  const options = {
    expiresIn: '6h',
  };
  return jwt.sign(payload, secret, options);
};

const verifyToken = (req, res, next) => {
  const secret = process.env.JWT_SECRET || 'default password';
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      if (error) {
        const errMsg = { msg: 'Authentication required. Please log in to continue.' };
        serverRes.sendRes(res, 401, errMsg);
      } else {
        req.decodedToken = decodedToken;
        next();
      };
    });
  } else {
    const errMsg = { msg: 'invalid credentials' };
    serverRes.sendRes(res, 400, errMsg);
  };
};

module.exports = {
  generateToken,
  verifyToken,
};

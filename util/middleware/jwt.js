const jwt = require('jsonwebtoken');

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

module.exports = {
  generateToken,
};

const bcrypt = require('bcrypt');

const saltPassword = (password) => bcrypt.hashSync(password, process.env.HASH_ROUNDS || 4);

const comparePasswordSalt = (password, userPassword) => bcrypt.compareSync(password, userPassword);

module.exports = {
  saltPassword,
  comparePasswordSalt,
};

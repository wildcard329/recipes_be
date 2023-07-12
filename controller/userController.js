const userRepo = require('../repository/userRepository.js');
const roles = require('./roleController.js');
const userRoles = require('./userRoleController.js');
const bcrypt = require('../util/middleware/bcrypt.js');
const jwt = require('../util/middleware/jwt.js');

const getUsers = async () => (await userRepo.getUsers()).rows;

const getUserById = async (id) => ((await userRepo.getUserById(id)).rows[0]);

const addUser = async (user) => {
  const { username, email, password } = user;
  const timestamp = Date.now();
  const saltedPassword = bcrypt.saltPassword(password);
  const userId = await userRepo.addUser(username, saltedPassword, email, timestamp);
  let roleId;
  if (roles.getRoleByRoleName('user').rows[0] !== null) {
    roleId = roles.getRoleByRoleName('user'),rows[0];
  } else {
    roleId = roles.addRole('user').rows[0];
  };
  await userRoles.assignUserRole(userId, roleId);
  return userId;
};

const loginUser = async (user) => {
  const { password, email } = user;
  const dbUser = userRepo.getUserByEmail(email);
  if (bcrypt.comparePasswordSalt(password, dbUser.password)) {
    return jwt.generateToken(dbUser);
  } else {
    return false;
  };
};

const updateUser = async (user) => {
  const { username, password, id } = user;
  await userRepo.updateUser(username, password, id);
};

const removeUser = async (id) => await userRepo.removeUser(id);

module.exports = {
  addUser,
  getUsers,
  getUserById,
  loginUser,
  updateUser,
  removeUser,
};

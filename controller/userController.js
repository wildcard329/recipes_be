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
  const userId = (await userRepo.addUser({username, password: saltedPassword, email, timestamp})).rows[0].user_id;
  let roleId;
  if (await roles.getRoleByRoleName('user') !== null) {
    roleId = await roles.getRoleByRoleName('user');
  } else {
    roleId = await roles.addRole('user');
  };
  
  await userRoles.assignUserRole(userId, roleId);
  return userId;
};

const loginUser = async (user) => {
  const { password, email } = user;
  const dbUser = (await userRepo.getUserByEmail(email)).rows[0];
  if (bcrypt.comparePasswordSalt(password, dbUser.password)) {
    return jwt.generateToken(dbUser);
  } else {
    return false;
  };
};

const updateUser = async (user) => {
  const { username, password, id } = user;
  const saltedPassword = bcrypt.saltPassword(password);
  await userRepo.updateUser({ username, password: saltedPassword, id });
};

const removeUser = async (id) => {
  await userRoles.removeUserRole(id);
  await userRepo.removeUser(id);
}

module.exports = {
  addUser,
  getUsers,
  getUserById,
  loginUser,
  updateUser,
  removeUser,
};

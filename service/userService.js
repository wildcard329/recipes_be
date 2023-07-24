const userRepo = require('../repository/userRepository.js');
const roles = require('./roleService.js');
const userRoles = require('./userRoleService.js');
const bcrypt = require('../util/middleware/bcrypt.js');
const jwt = require('../util/middleware/jwt.js');

const getUsers = async () => userRepo.getUsers();

const getUserById = async (id) => userRepo.getUserById(parseInt(id));

const addUser = async (user) => {
  const { username, email, password } = user;
  const timestamp = Date.now();
  const saltedPassword = bcrypt.saltPassword(password);
  const userId = (await userRepo.addUser({username, password: saltedPassword, email, timestamp})).rows[0].user_id;
  let roleId;
  const userRoleId = await roles.getRoleByRoleName('user');
  if (userRoleId !== null) {
    roleId = userRoleId;
  } else {
    const newRoleId = await roles.addRole('user');
    roleId = newRoleId;
  };
  await userRoles.assignUserRole(userId, roleId);
  return userId;
};

const loginUser = async (user) => {
  let token;
  const { password, email } = user;
  const dbUser = (await userRepo.getUserByEmail(email)).rows[0];
  const correctPassword = bcrypt.comparePasswordSalt(password, dbUser.password);
  if (correctPassword) {
    token = jwt.generateToken(dbUser);
  } else {
    throw console.error();
  };
  return token; 
};

const updateUser = async (user) => {
  const { username, password, id } = user;
  const saltedPassword = bcrypt.saltPassword(password);
  await userRepo.updateUser({ username, password: saltedPassword, id });
};

const removeUser = async (id) => {
  await userRoles.removeUserRole(id);
  await userRepo.removeUser(id);
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  loginUser,
  updateUser,
  removeUser,
};

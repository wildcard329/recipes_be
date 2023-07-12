const userRepo = require('../repository/userRepository.js');
const roles = require('./roleController.js');
const userRoles = require('./userRoleController.js');

const getUsers = async () => (await userRepo.getUsers()).rows;

const getUserById = async (id) => ((await userRepo.getUserById(id)).rows[0]);

const addUser = async (user) => {
  const { username, email, password } = user;
  const timestamp = Date.now();
  const userId = await userRepo.addUser(username, password, email, timestamp);
  let roleId;
  if (roles.getRoleByRoleName('user').rows[0] !== null) {
    roleId = roles.getRoleByRoleName('user'),rows[0];
  } else {
    roleId = roles.addRole('user').rows[0];
  };
  await userRoles.assignUserRole(userId, roleId);
  return userId;
};

const updateUser = async (user) => {
  const { username, password, id } = user;
  await userRepo.updateUser(username, password, id);
};

const removeUser = async (id) => await userRepo.removeUser(id);

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  removeUser,
};

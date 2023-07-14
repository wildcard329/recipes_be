const userService = require('../service/userService.js');

const getUsers = async () => await userService.getUsers();

const getUserById = async (id) => {
  const userId = parseInt(id);
  return await userService.getUserById(userId);
};

const addUser = async (user) => await userService.addUser(user);

const loginUser = async (user) => await userService.loginUser(user);

const updateUser = async (user) => await userService.updateUser(user);

const removeUser = async (id) => {
  const userId = parseInt(id);
  return await userService.removeUser(userId);
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  loginUser,
  updateUser,
  removeUser,
};

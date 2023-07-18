const userService = require('../service/userService.js');
const controller = require('../util/middleware/controller.js');

const getUsers = async () => await controller.controllerOperationReData(userService.getUsers);

const getUserById = async (id) => controller.controllerOperationReData(userService.getUserById, id);

const addUser = async (user) => await controller.controllerOperationReData(userService.addUser, user);

const loginUser = async (user) => await controller.controllerOperationReData(userService.loginUser, user);

const updateUser = async (user) => await controller.controllerOperationNoData(userService.updateUser, user);

const removeUser = async (id) => await controller.controllerOperationNoData(userService.removeUser, id);

module.exports = {
  addUser,
  getUsers,
  getUserById,
  loginUser,
  updateUser,
  removeUser,
};

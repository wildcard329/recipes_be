const userRepo = require('../repository/userRepository.js');

const getUsers = async () => (await userRepo.getUsers()).rows;

const getUserById = async (id) => ((await userRepo.getUserById(id)).rows[0]);

module.exports = {
  getUsers,
  getUserById,
};

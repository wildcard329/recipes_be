const userRoleRepo = require('../repository/userRoleRepository.js');

const assignUserRole = async (userId, roleId) => (await userRoleRepo.assignRole(userId, roleId));

const updateUserRole = async (userId, roleId) => (await userRoleRepo.updateRole(userId, roleId));

const removeUserRole = async (userId) => (await userRoleRepo.removeRoleRecord(userId));

module.exports = {
  assignUserRole,
  updateUserRole,
  removeUserRole,
};

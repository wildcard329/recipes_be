const userRoleRepo = require('../repository/userRoleRepository.js');

const assignUserRole = async (userId, roleId) => {
  try {
    return (await userRoleRepo.assignRole(userId, roleId));
  } catch (error) {
    throw error;
  };
};

const updateUserRole = async (userId, roleId) => {
  try {
    return (await userRoleRepo.updateRole(userId, roleId));
  } catch (error) {
    throw error;
  };
};

const removeUserRole = async (userId) => {
  try {
    return (await userRoleRepo.removeRoleRecord(userId));
  } catch (error) {
    throw error;
  };
};

module.exports = {
  assignUserRole,
  updateUserRole,
  removeUserRole,
};

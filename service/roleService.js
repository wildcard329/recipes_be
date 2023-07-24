const roleRepo = require('../repository/roleRepository.js');
const { basicServiceFn } = require('../util/middleware/service.js');

const addRole = async (roleName) => (await basicServiceFn(roleRepo.addRole, roleName)).rows[0];

const getRoleByRoleName = async (roleName) => (await basicServiceFn(roleRepo.getRoleByRoleName, roleName)).rows[0].role_id;

const getRoleById = async (roleId) => (await basicServiceFn(roleRepo.getRoleById, roleId)).rows[0];

const updateRole = async (roleName, roleId) => {
  try {
    return (await roleRepo.updateRole(roleName, roleId));
  } catch (error) {
    console.error(error);
    throw error;
  };
};

const removeRole = async (roleId) => {
  try {
    return (await roleRepo.removeRole(roleId));
  } catch (error) {
    console.error(error);
  };
};

module.exports = {
  addRole,
  getRoleByRoleName,
  getRoleById,
  updateRole,
  removeRole,
};

const roleRepo = require('../repository/roleRepository.js');

const addRole = async (roleName) => (await roleRepo.addRole(roleName)).rows[0];

const getRoleByRoleName = async (roleName) => (await roleRepo.getRoleByRoleName(roleName).rows[0]);

const getRoleById = async (roleId) => (await roleRepo.getRoleById(roleId).rows[0]);

const updateRole = async (roleName, roleId) => (await roleRepo.updateRole(roleName, roleId));

const removeRole = async (roleId) => (await roleRepo.removeRole(roleId));

module.exports = {
  addRole,
  getRoleByRoleName,
  getRoleById,
  updateRole,
  removeRole,
}

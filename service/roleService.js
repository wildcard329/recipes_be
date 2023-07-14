const roleRepo = require('../repository/roleRepository.js');
const codes = require('../util/config/serverCodes.json');

const success = codes.success.serverOk;
const created = codes.success.serverCreated;

const serverError = codes.serverErrors.serverInternalError;

const addRole = async (roleName) => {
  let status, resData;
  try {
    const roleId = (await roleRepo.addRole(roleName)).rows[0];
    status = created.code;
    resData = { msg: created.msg, data: roleId };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const getRoleByRoleName = async (roleName) => {
  let status, resData;
  try {
    const roleId = (await roleRepo.getRoleByRoleName(roleName)).rows[0].role_id;
    status = success.code;
    resData = { msg: success.msg, data: roleId };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const getRoleById = async (roleId) => {
  let status, resData;
  try {
    const role = (await roleRepo.getRoleById(roleId).rows[0]);
    status = success.code;
    resData = { msg: success.msg, data: { ...role }};
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const updateRole = async (roleName, roleId) => {
  let status, resData;
  try {
    (await roleRepo.updateRole(roleName, roleId));
    status = success.code;
    resData = { msg: success.msg };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const removeRole = async (roleId) => {
  let status, resData;
  try {
    (await roleRepo.removeRole(roleId));
    status = success.code;
    resData = { msg: success.msg };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

module.exports = {
  addRole,
  getRoleByRoleName,
  getRoleById,
  updateRole,
  removeRole,
};

const userRoleRepo = require('../repository/userRoleRepository.js');
const codes = require('../util/config/serverCodes.json');

const success = codes.success.serverOk;
const serverError = codes.serverErrors.serverInternalError;

const assignUserRole = async (userId, roleId) => {
  let status, resData;
  try {
    (await userRoleRepo.assignRole(userId, roleId));
    status = success.code;
    resData = { msg: success.msg };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const updateUserRole = async (userId, roleId) => {
  let status, resData;
  try {
    (await userRoleRepo.updateRole(userId, roleId));
    status = success.code;
    resData = { msg: serverError.msg };
  } catch (error) {
    console.error(error);
    status = serverError.msg;
    resData = { msg: serverError.msg };
  };
};

const removeUserRole = async (userId) => {
  let status, resData;
  try {
    (await userRoleRepo.removeRoleRecord(userId));
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
  assignUserRole,
  updateUserRole,
  removeUserRole,
};

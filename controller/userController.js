const userRepo = require('../repository/userRepository.js');
const roles = require('./roleController.js');
const userRoles = require('./userRoleController.js');
const bcrypt = require('../util/middleware/bcrypt.js');
const jwt = require('../util/middleware/jwt.js');
const codes = require('../util/config/serverCodes.json');

const success = codes.success.serverOk;
const created = codes.success.serverCreated;

const clientError = codes.clientErrors.serverBadRequest;
const clientUnauthorized = codes.clientErrors.serverUnauthorized;
const serverError = codes.serverErrors.serverInternalError;

const getUsers = async () => {
  let status, resData;
  try {
    const users = (await userRepo.getUsers()).rows;
    status = success.code;
    resData = { msg: success.msg, data: users };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
};

const getUserById = async (id) => {
  let status, resData;
  try {
    const user = ((await userRepo.getUserById(id)).rows[0]);
    status = success.code;
    resData = { msg: success.msg, data: user };
  } catch (error) {
    if (error instanceof NotFoundError) {
      status = clientError.code;
      resData = { msg: clientError.msg };
    } else {
      console.error(serverError.msg, error);
      status = serverError.code;
      resData = { msg: serverError.msg };
    };
  };
  return { status, resData };
}

const addUser = async (user) => {
  let status, resData;
  try {
    const { username, email, password } = user;
    const timestamp = Date.now();
    const saltedPassword = bcrypt.saltPassword(password);
    const userId = (await userRepo.addUser({username, password: saltedPassword, email, timestamp})).rows[0].user_id;
    let roleId;
    const { resData: roleData } = await roles.getRoleByRoleName('user');
    if (roleData.data !== null) {
      roleId = roleData.data;
    } else {
      const { resData: newRole } = await roles.addRole('user');
      roleId = newRole.data;
    };
    await userRoles.assignUserRole(userId, roleId);
    status = created.code;
    resData = { msg: created.msg, data: userId }
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const loginUser = async (user) => {
  let status, resData, token;
  const { password, email } = user;
  try {
    const dbUser = (await userRepo.getUserByEmail(email)).rows[0];
    const correctPassword = bcrypt.comparePasswordSalt(password, dbUser.password);
    if (correctPassword) {
      token = jwt.generateToken(dbUser);
      resData = { msg: success.msg, data: token };
      status = created.code;
    } else {
      resData = { msg: clientUnauthorized.msg }
      status = clientUnauthorized.code;
    }
  } catch (error) {
    console.error(error);
    resData = { msg: serverError.msg };
    status = serverError.code;
  };
  return { status, resData };
};

const updateUser = async (user) => {
  let status, resData;
  const { username, password, id } = user;
  const saltedPassword = bcrypt.saltPassword(password);
  try {
    await userRepo.updateUser({ username, password: saltedPassword, id });
    status = success.code;
    resData = { msg: success.msg };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
  };
  return { status, resData };
};

const removeUser = async (id) => {
  let status, resData;
  try {
    await userRoles.removeUserRole(id);
    await userRepo.removeUser(id);
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
  addUser,
  getUsers,
  getUserById,
  loginUser,
  updateUser,
  removeUser,
};

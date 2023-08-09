const codes = require('../config/serverCodes.json');

const success = codes.success.serverOk;
const created = codes.success.serverCreated;

const clientError = codes.clientErrors.serverBadRequest;
const clientUnauthorized = codes.clientErrors.serverUnauthorized;
const serverError = codes.serverErrors.serverInternalError;


const controllerOperationReData = async (cb, cbArg) => {
  let status, resData;
  try {
    const controlData = cbArg ? await cb(cbArg) : await cb();
    status = success.code;
    resData = { msg: success.msg, data: controlData };
  } catch (error) {
    console.error(error);
    status = serverError.code;
    resData = { msg: serverError.msg };
    // if (error instanceof NotFoundError) {
    //   status = clientError.code;
    //   resData = { msg: clientError.msg };
    // } else {
    //   console.error(serverError.msg, error);
    //   status = serverError.code;
    //   resData = { msg: serverError.msg };
    // };
  };
  return { status, resData };
};

const controllerOperationNoData = async (cb, cbArg) => {
  let status, resData;
  try {
    { cbArg ? await cb(cbArg) : await cb() };
    status = success.code;
    resData = { msg: success.msg };
  } catch (error) {
    console.error(serverError.msg, error);
    status = serverError.code;
    resData = { msg: serverError.msg };
    // if (error instanceof NotFoundError) {
    //   status = clientError.code;
    //   resData = { msg: clientError.msg };
    // } else {
    //   console.error(serverError.msg, error);
    //   status = serverError.code;
    //   resData = { msg: serverError.msg };
    // };
  };
  return { status, resData };
};

module.exports = {
  controllerOperationNoData,
  controllerOperationReData,
};

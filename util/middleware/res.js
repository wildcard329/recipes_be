const sendRes = (res, resStatus, resData) => res.status(resStatus).json(resData);

const compileRes = async (res, routeCb, cbArg) => {
  const { status, resData } = cbArg ? await routeCb(cbArg) : await routeCb(); 
  sendRes(res, status, { ...resData });
};

module.exports = {
  sendRes,
  compileRes,
};

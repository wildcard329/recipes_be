const sendRes = (res, resStatus, resData) => res.status(resStatus).json(resData);

module.exports = {
  sendRes,
};

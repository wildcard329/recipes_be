const basicServiceFn = async (serviceCb, serviceArg) => {
  try {
    return await serviceCb(serviceArg);
  } catch (error) {
    throw error;
  };
};

module.exports = {
  basicServiceFn,
};

const unitService = require('../service/unitService.js');
const controller = require('../util/middleware/controller.js');

const addUnit = async (unit) => await controller.controllerOperationReData(unitService.addUnit, unit);

const deleteUnit = async (unitId) => await controller.controllerOperationNoData(unitService.deleteUnit, unitId);

// may delete later in favor of implementing search units
const getUnits = async () => await controller.controllerOperationReData(unitService.getUnits);

const updateUnit = async (unit) => await controller.controllerOperationNoData(unitService.updateUnit, unit);

module.exports = {
  addUnit,
  deleteUnit,
  getUnits,
  updateUnit,
};

const unitRepo = require('../repository/measuringUnitRepository.js');

const addUnit = async (unitName) => await (await unitRepo.addUnit(unitName)).rows;

const deleteUnit = async (id) => await unitRepo.deleteUnit(id);

const getUnits = async () => await (await unitRepo.getUnits()).rows;

const getUnitById = async (id) => await (await unitRepo.getUnitById(id)).rows[0];

const updateUnit = async (unit) => {
  const { unitId, unitName } = unit;
  await unitRepo.updateUnit(unitName, unitId);
};

module.exports = {
  addUnit,
  deleteUnit,
  getUnits,
  getUnitById,
  updateUnit,
};

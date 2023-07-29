const unitRepo = require('../repository/measuringUnitRepository.js');

const addUnit = async (unit) => {
  const { unitName } = unit;
  await (await unitRepo.addUnit({ unitName })).rows[0].unit_id;
}

const deleteUnit = async (id) => await unitRepo.deleteUnit(id);

const getUnits = async () => await (await unitRepo.getUnits()).rows;

const getUnitById = async (id) => await (await unitRepo.getUnitById(id)).rows[0];

const getUnitId = async (unit) => {
  let unitDbId;
  unit?.unitId !== null ? unitDbId = unit?.unitId : unitDbId = await addUnit(unit);
  return unitDbId;
}

const updateUnit = async (unit) => {
  const { unitId, unitName } = unit;
  await unitRepo.updateUnit({ unitName, unitId });
};

module.exports = {
  addUnit,
  deleteUnit,
  getUnits,
  getUnitById,
  getUnitId,
  updateUnit,
};

const db = require('../util/config/pg.js');

const addUnit = ({ unitName }) => db.query('INSERT INTO measuring_units (unit_name) VALUES ($1) RETURNING unit_id', [unitName]);

const deleteUnit = (unitId) => db.query('DELETE FROM measuring_units WHERE unit_id = $1', [unitId]);

const getUnits = () => db.query('SELECT * FROM measuring_units ORDER BY unit_name');

const getUnitById = (unitId) => db.query('SELECT * FROM measuring_units WHERE unit_id = $1', [unitId]);

const updateUnit = ({ unitName, unitId }) => db.query('UPDATE measuring_units SET unit_name = $1 WHERE unit_id = $2', [unitName, unitId]);

module.exports = {
  addUnit,
  deleteUnit,
  getUnits,
  getUnitById,
  updateUnit,
};

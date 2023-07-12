const db = require('../util/config/pg.js');

const getRoleByRoleName = (roleName) => db.query('SELECT role_id FROM roles WHERE role_name = $1', [roleName]);

const getRoleById = (id) => db.query('SELECT * FROM roles WHERE role_id = $1', [id]);

const addRole = (roleName) => db.query('INSERT INTO roles (role_name) VALUES ($1) RETURNING role_id', [roleName]);

const updateRole = (roleName, id) => db.query('UPDATE roles SET role_name = $1 WHERE role_id = $2', [roleName, id]);

const removeRole = (id) => db.query('DELETE FROM roles WHERE role_id = $1', [id]);

module.exports = {
  getRoleByRoleName,
  getRoleById,
  addRole,
  updateRole,
  removeRole,
};

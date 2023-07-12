const db = require('../util/config/pg.js');

const assignRole = (userId, roleId) => db.query('INSERT INTO account_roles (user_id, role_id) VALUES ($1, $2)', [userId, roleId]);

const updateRole = (userId, roleId) => db.query('UPDATE account_roles SET user_id = $1, role_id = $2 WHERE user_id = $1', [userId, roleId]);

const removeRoleRecord = (userId) => db.query('DELETE FROM account_roles WHERE user_id = $1', [userId]);

module.exports = {
  assignRole,
  updateRole,
  removeRoleRecord,
};

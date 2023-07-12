const db = require('../util/config/pg');

const getUsers = () => db.query('SELECT * FROM users ORDER BY user_id');

const getUserById = (id) => db.query('SELECT * FROM users WHERE user_id = $1', [id]);

const getUserByEmail = (email) => db.query('SELECT * FROM uswers WHERE email = $1', [email]);

const addUser = ({ username, password, email, timestamp }) => db.query('INSERT INTO users (user_name, password, email, created_on) VALUES ($1, $2, $3, $4) RETURNING user_id', [username, password, email, timestamp]);

const updateUserLastLogin = ({ id, timestamp }) => db.query('UPDATE users SET last_login = $2 WHERE user_id = $1', [id, timestamp]);

const updateUser = ({ username, password, id }) => db.query('UPDATE users SET user_name = $1, password = $2 WHERE user_id = $3', [username, password, id])

const removeUser = (id) => db.query('DELETE FROM users WHERE user_id = $1', [id]);

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  addUser,
  updateUserLastLogin,
  updateUser,
  removeUser,
};

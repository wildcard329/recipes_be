const db = require('../util/config/pg.js');

const addIngredient = ({ ingredientName }) => db.query('INSERT INTO ingredients (ingredient_name) VALUES ($1) RETURNING ingredient_id', [ingredientName]);

const deleteIngredient = (ingredientId) => db.query('DELETE FROM ingredients WHERE ingredient_id = $1', [ingredientId]);

const getIngredients = () => db.query('SELECT * FROM ingredients ORDER BY ingredient_name');

const getIngredientById = (ingredientId) => db.query('SELECT * FROM ingredients WHERE ingredient_id = $1', [ingredientId]);

const updateIngredient = ({ ingredientName, ingredientId }) => db.query('UPDATE ingredients SET ingredient_name = $1 WHERE ingredient_id = $2', [ingredientName, ingredientId]);

module.exports = {
  addIngredient,
  deleteIngredient,
  getIngredients,
  getIngredientById,
  updateIngredient,
};

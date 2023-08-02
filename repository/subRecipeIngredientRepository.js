const db = require('../util/config/pg.js');

const addSubRecipeIngredient = ({ subRecipeId, ingredientId, unitId, amount }) => db.query('INSERT INTO sub_recipe_ingredients (sub_recipe_id, ingredient_id, unit_id, quantity) VALUES ($1, $2, $3, $4)', [subRecipeId, ingredientId, unitId, amount]);

const deleteSubRecipeIngredients = (subRecipeId) => db.query('DELETE FROM sub_recipe_ingredients WHERE sub_recipe_id = $1', [subRecipeId]);

const getSubRecipeIngredients = (subRecipeId) => db.query('SELECT quantity, i.*, u.* FROM sub_recipe_ingredients sri JOIN sub_recipes sr ON sr.sub_recipe_id = sri.sub_recipe_id JOIN ingredients i ON i.ingredient_id = sri.ingredient_id JOIN measuring_units u ON u.unit_id = sri.unit_id WHERE sr.sub_recipe_id = $1', [subRecipeId]);

module.exports = {
  addSubRecipeIngredient,
  deleteSubRecipeIngredients,
  getSubRecipeIngredients,
};

const db = require('../util/config/pg.js');

const addRecipeIngredient = (recipeId, ingredientId, unitId, amount) => db.query('INSERT INTO recipe_ingredients (recipe_id, ingredient_id, unit_id, quantity) VALUES ($1, $2, $3, $4)', [recipeId, ingredientId, unitId, amount]);

const addRecipeIngredientWithoutUnit = (recipeId, ingredientId, amount) => db.query('INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity) VALUES ($1, $2, $3)', [recipeId, ingredientId, amount]);

const deleteRecipeIngredients = (recipeId) => db.query('DELETE FROM recipe_ingredients WHERE recipe_id = $1', [recipeId]);

const getRecipeIngredients = (recipeId) => db.query('SELECT quantity, i.*, u.* FROM recipe_ingredients ri JOIN recipes r ON r.recipe_id = ri.recipe_id JOIN ingredients i ON i.ingredient_id = ri.ingredient_id JOIN measuring_units u ON u.unit_id = ri.unit_id WHERE ri.recipe_id = r.recipe_id', [recipeId]);

module.exports = {
  addRecipeIngredient,
  addRecipeIngredientWithoutUnit,
  deleteRecipeIngredients,
  getRecipeIngredients
};

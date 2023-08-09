const db = require('../util/config/pg.js');

const addRecipeSubRecipe = (recipeId, subRecipeId, unitId, amount) => db.query('INSERT INTO recipe_sub_recipes (recipe_id, sub_recipe_id, unit_id, quantity) VALUES ($1, $2, $3, $4)', [recipeId, subRecipeId, unitId, amount])

const addRecipeSubRecipeWithoutAmount = (recipeId, subRecipeId) => db.query('INSERT INTO recipe_sub_recipes (recipe_id, sub_recipe_id) VALUES ($1, $2)', [recipeId, subRecipeId]);

const addRecipeSubRecipeWithoutUnit = (recipeId, subRecipeId, amount) => db.query('INSERT INTO recipe_sub_recipes (recipe_id, sub_recipe_id, quantity) VALUES ($1, $2, $3)', [recipeId, subRecipeId, amount]);

const deleteRecipeSubRecipes = (recipeId) => db.query('DELETE FROM recipe_sub_recipes WHERE recipe_id = $1', [recipeId]);

const getRecipeSubRecipes = (recipeId) => db.query('SELECT sub_recipe_id,  quantity, i.*, u.* FROM recipe_sub_recipes rsr JOIN recipes r ON r.recipe_id = rsr.recipe_id JOIN sub_recipes sr ON sr.sub_recipe_id = rsr.sub_recipe_id JOIN measuring_units u ON u.unit_id = rsr.unit_id WHERE rsr.recipe_id = $1', [recipeId]);

module.exports = {
  addRecipeSubRecipe,
  addRecipeSubRecipeWithoutAmount,
  addRecipeSubRecipeWithoutUnit,
  deleteRecipeSubRecipes,
  getRecipeSubRecipes,
};

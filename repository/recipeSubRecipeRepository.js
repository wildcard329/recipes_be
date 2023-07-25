const db = require('../util/config/pg.js');

const addRecipeSubRecipe = (recipeId, subRecipeId, unitId, amount) => db.query('INSERT INTO recipe_sub_recipes (recipe_id, sub_recipe_id, unit_id, quantity) VALUES ($1, $2, $3, $4)', [recipeId, subRecipeId, unitId, amount])

const deleteRecipeSubRecipes = (recipeId) => db.query('DELETE FROM recipe_sub_recipes WHERE recipe_id = $1', [recipeId]);

module.exports = {
  addRecipeSubRecipe,
  deleteRecipeSubRecipes,
};

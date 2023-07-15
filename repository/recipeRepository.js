const db = require('../util/config/pg.js');

const addRecipe = ({ recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime}) => db.query('INSERT INTO recipes (recipe_name, recipe_description, recipe_image_name, user_id, prep_time, cook_time, total_time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING recipe_id', [recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime]);

const deleteRecipe = (recipeId) => db.query('DELETE FROM recipes WHERE recipe_id = $1', [recipeId]);

const getRecipes = () => db.query('SELECT recipe_name, recipe_description, recipe_image_name, recipe_id FROM recipes ORDER BY recipe_name');

const getRecipeById = (recipeId) => db.query('SELECT * FROM recipes WHERE recipe_id = $1', [recipeId]);

const updateRecipe = ({ recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeId }) => db.query('UPDATE recipes SET recipe_name = $1, recipe_description = $2, recipe_image_name = $3, user_id = $4, prep_time =$5, cook_time = $6, total_time = $7 WHERE recipe_id = $8', [recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeId]);

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};

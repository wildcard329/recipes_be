  const db = require('../util/config/pg.js');

const addSubRecipe = ({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime }) => db.query('INSERT INTO sub_recipes (sub_recipe_name, sub_recipe_description, sub_recipe_image_name, user_id, prep_time, cook_time, total_time) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING sub_recipe_id', [subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime ]);

const deleteSubRecipe = (subRecipeId) => db.query('DELETE FROM sub_recipes WHERE sub_recipe_id = $1', [subRecipeId]);

const getSubRecipeById = (subRecipeId) => db.query('SELECT * FROM sub_recipes WHERE sub_recipe_id = $1', [subRecipeId]);

const getSubRecipes = () => db.query('SELECT * FROM sub_recipes ORDER BY sub_recipe_name');

const updateSubRecipe = ({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, recipeId }) => db.query('UPDATE sub_recipes SET sub_recipe_name = $1, sub_recipe_description = $2, sub_recipe_image_name = $3, user_id = $4, prep_time =$5, cook_time = $6, total_time = $7 WHERE sub_recipe_id = $8', [subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, recipeId]);

module.exports = {
  addSubRecipe,
  deleteSubRecipe,
  getSubRecipeById,
  getSubRecipes,
  updateSubRecipe,
};

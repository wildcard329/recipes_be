const repo = require('../repository/recipeSubRecipeRepository.js');

const addRecipeSubRecipe = async (recipeId, subRecipeId) => await repo.addRecipeSubRecipe(recipeId, subRecipeId);

const deleteRecipeSubRecipes = async (id) => await repo.deleteRecipeSubRecipes(id);

const getRecipeSubRecipes = async (id) => await repo.getRecipeSubRecipes(id);

module.exports = {
  addRecipeSubRecipe,
  deleteRecipeSubRecipes,
  getRecipeSubRecipes,
};

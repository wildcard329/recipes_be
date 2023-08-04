const repo = require('../repository/recipeCategoryRepository.js');

const addRecipeCategory = async (recipeId, categoryId) => await repo.addRecipeCategory(recipeId, categoryId);

const deleteRecipeCategories = async (recipeId) => await repo.deleteRecipeCategories(recipeId);

const getRecipeCategories = async (recipeId) => (await repo.getRecipeCategories(recipeId)).rows;

module.exports = {
  addRecipeCategory,
  deleteRecipeCategories,
  getRecipeCategories,
};

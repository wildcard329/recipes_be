const repo = require('../repository/subRecipeCategoryRepository.js');

const addSubRecipeCategory = async (subRecipeId, categoryId) => await repo.addSubRecipeCategory(subRecipeId, categoryId);

const deleteSubRecipeCategories = async (subRecipeId) => await repo.deleteSubRecipeCategories(subRecipeId);

const getSubRecipeCategories = async (subRecipeId) => await repo.getSubRecipeCategories(subRecipeId).rows[0];

module.exports = {
  addSubRecipeCategory,
  deleteSubRecipeCategories,
  getSubRecipeCategories,
};

const repo = require('../repository/subRecipeCategoryRepository.js');

const addSubRecipeCategory = async (subRecipeId, categoryId) => await repo.addSubRecipeCategory(subRecipeId, categoryId);

const deleteSubRecipeCategories = async (subRecipeId) => await repo.deleteSubRecipeCategories(subRecipeId);

const getSubRecipeCategories = async (subRecipeId) => await (await repo.getSubRecipeCategories(subRecipeId)).rows;

module.exports = {
  addSubRecipeCategory,
  deleteSubRecipeCategories,
  getSubRecipeCategories,
};

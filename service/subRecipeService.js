const subRecipeRepo = require('../repository/subRecipeRepository.js');

const addSubRecipe = async (subRecipe) => {
  const { subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeIngredients, subRecipeInstructions, subRecipeCategories } = subRecipe;
  const subRecipeId = await subRecipeRepo.addSubRecipe({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime });
  return subRecipeId;
};

const deleteSubRecipe = async (subRecipeId) => {
  await subRecipeRepo.deleteSubRecipe(subRecipeId);
};

const getSubRecipeById = async (subRecipeId) => {
  const subRecipe = await subRecipeRepo.getSubRecipeById(subRecipeId);
  return { ...subRecipe };
};

const updateSubRecipe = async (subRecipe) => {
  const { subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeIngredients, subRecipeInstructions, subRecipeCategories, subRecipeId } = subRecipe;
  await subRecipeRepo.updateSubRecipe({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeId });
};

module.exports = {
  addSubRecipe,
  deleteSubRecipe,
  getSubRecipeById,
  updateSubRecipe,
};

const repo = require('../repository/subRecipeIngredientRepository.js');

const addSubRecipeIngredients = async ({ subRecipeId, ingredientId, quantity, unitId }) => {
  if (!isNaN(subRecipeId) && !isNaN(ingredientId) && !isNaN(unitId) && !isNaN(quantity)) {
    await repo.addSubRecipeIngredient({ subRecipeId, ingredientId, unitId, quantity });
  } else if (!isNaN(subRecipeId) && !isNaN(ingredientId) && !isNaN(quantity)) {
    await repo.addSubRecipeIngredient({ subRecipeId, ingredientId, quantity });
  } else if (!isNaN(subRecipeId) && !isNaN(ingredientId)) {
    await repo.addSubRecipeIngredient({ subRecipeId, ingredientId });
  }
};

const addSubRecipeIngredientWithoutAmount = async (subRecipeId, ingredientId) => await repo.addSubRecipeIngredientWithoutAmount(subRecipeId, ingredientId);

const addSubRecipeIngredientWithoutUnit = async (subRecipeId, ingredientId, amount) => await repo.addSubRecipeIngredientWithoutUnit(subRecipeId, ingredientId, amount);

const deleteSubRecipeIngredients = (subRecipeId) => {
  repo.deleteSubRecipeIngredients(subRecipeId);
};

const getSubRecipeIngredients = async (subRecipeId) => await (await repo.getSubRecipeIngredients(subRecipeId)).rows;

module.exports = {
  addSubRecipeIngredients,
  addSubRecipeIngredientWithoutAmount,
  addSubRecipeIngredientWithoutUnit,
  deleteSubRecipeIngredients,
  getSubRecipeIngredients,
};

const recipeIngredientsRepo = require('../repository/recipeIngredientRepository.js');

const addRecipeIngredient = async ({ recipeId, ingredientId, unitId, quantity }) => {
  if (!isNaN(recipeId) && !isNaN(ingredientId) && !isNaN(unitId) && !isNaN(quantity)) {
    await recipeIngredientsRepo.addRecipeIngredient({ recipeId, ingredientId, unitId, quantity });
  } else if (!isNaN(recipeId) && !isNaN(ingredientId) && !isNaN(quantity)) {
    await recipeIngredientsRepo.addRecipeIngredient({ recipeId, ingredientId, quantity });
  } else if (!isNaN(recipeId) && !isNaN(ingredientId)) {
    await recipeIngredientsRepo.addRecipeIngredient({ recipeId, ingredientId });
  }
}

const addRecipeIngredientWithoutUnit = async (recipeId, ingredientId, quantity) => await recipeIngredientsRepo.addRecipeIngredientWithoutUnit(recipeId, ingredientId, quantity);

const addRecipeIngredientWithoutAmount = async (recipeId, ingredientId) => await recipeIngredientsRepo.addRecipeIngredientWithoutAmount(recipeId, ingredientId);

const deleteRecipeIngredients = async (recipeId) => await recipeIngredientsRepo.deleteRecipeIngredients(recipeId);

const getRecipeIngredients = async (recipeId) => await (await recipeIngredientsRepo.getRecipeIngredients(recipeId)).rows;

module.exports = {
  addRecipeIngredient,
  addRecipeIngredientWithoutUnit,
  addRecipeIngredientWithoutAmount,
  deleteRecipeIngredients,
  getRecipeIngredients,
};

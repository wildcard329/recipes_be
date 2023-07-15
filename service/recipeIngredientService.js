const recipeIngredientsRepo = require('../repository/recipeIngredientRepository.js');

const addRecipeIngredient = async (recipeId, ingredientId, unitId, quantity) => await recipeIngredientsRepo.addRecipeIngredient(recipeId, ingredientId, unitId, quantity);

const addRecipeIngredientWithoutUnit = async (recipeId, ingredientId, quantity) => await recipeIngredientsRepo.addRecipeIngredientWithoutUnit(recipeId, ingredientId, quantity);

const deleteRecipeIngredients = async (recipeId) => await recipeIngredientsRepo.deleteRecipeIngredients(recipeId);

const getRecipeIngredients = async (recipeId) => await (await recipeIngredientsRepo.getRecipeIngredients(recipeId)).rows;

module.exports = {
  addRecipeIngredient,
  addRecipeIngredientWithoutUnit,
  deleteRecipeIngredients,
  getRecipeIngredients,
};

const recipeRepo = require('../repository/recipeRepository.js');
const recipeIngredientsService = require('./recipeIngredientService.js');
const ingredientsService = require('./ingredientService.js');
const unitsService = require('./unitService.js');

const addRecipe = async (recipe) => {
  const { recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeIngredients, recipeInstructions, recipeCategories } = recipe;
  const recipeId = (await recipeRepo.addRecipe(recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime)).rows;
  recipeIngredients.forEach(async ingredient => {
    if (!!ingredient.unit) {
      await recipeIngredientsService.addRecipeIngredient(recipeId, ingredient.ingredientId, ingredient.unit.unitId, ingredient.quantity);
    } else {
      await recipeIngredientsService.addRecipeIngredientWithoutUnit(recipeId, ingredient.ingredientId, ingredient.quantity);
    };
  });
  recipeCategories.forEach(async (category) => {
    await null;
  });
  recipeInstructions.forEach(async (instruction) => {
    await null;
  });
  return recipeId;
};

const deleteRecipe = async (id) => {
  await recipeIngredientsService.deleteRecipeIngredients(id);
  await recipeRepo.deleteRecipe(id);
};

const getRecipes = async () => (await recipeRepo.getRecipes()).rows;

const getRecipeById = async (id) => {
  const recipe = await recipeRepo.getRecipeById(id);
  const recipeIngredients = await recipeIngredientsService.getRecipeIngredients(id);
  return { ...recipe, ...recipeIngredients };
};

const updateRecipe = async (recipe) => {
  const { recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeIngredients, recipeInstructions, recipeCategories, recipeId } = recipe;
  await recipeRepo.updateRecipe({ recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeId });
  await recipeIngredientsService.deleteRecipeIngredients(recipeId);
  await recipeIngredients.forEach((ingredient) => {
    if (!!ingredient.unit) {
      recipeIngredientsService.addRecipeIngredient(recipeId, ingredient.ingredientId, ingredient.unit.unitId, ingredient.quantity);
    } else {
      recipeIngredientsService.addRecipeIngredientWithoutUnit(recipeId, ingredient.ingredientId, ingredient.quantity);
    };
  });
};

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};
 
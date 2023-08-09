const recipeRepo = require('../repository/recipeRepository.js');
const recipeCategoryService = require('./recipeCategoryService.js');
const recipeIngredientService = require('./recipeIngredientService.js');
const recipeInstructionService = require('./recipeInstructionService.js');
const categoryService = require('./categoryService.js');
const ingredientService = require('./ingredientService.js');
const unitService = require('./unitService.js');

const _addIngredients = async (recipeId, ingredients) => {
  for (let ingredient of ingredients) {
    const { quantity, unit } = ingredient;
    let unitId;
    const ingredientId = await parseInt(await ingredientService.getIngredientId(ingredient));
    if (!!unit) {
      unitId = await unitService.getUnitId(unit);
    };
    if (!isNaN(recipeId)  && !isNaN(ingredientId) && !isNaN(quantity) && !isNaN(unitId)) {
      await recipeIngredientService.addRecipeIngredient(recipeId, ingredientId, unitId, quantity);
    } else if (!isNaN(recipeId) && !isNaN(ingredientId) && !isNaN(quantity)) {
      await recipeIngredientService.addRecipeIngredientWithoutUnit(recipeId, ingredientId, quantity);
    } else if (!isNaN(recipeId) && !isNaN(ingredientId)) {
      await recipeIngredientService.addRecipeIngredientWithoutAmount(recipeId, ingredientId);
    };
  };
};

const _addInstructions = async (recipeId, instructions) => {
  for (let instruction of instructions) {
    const { stepNumber, stepDescription } = instruction;
    await recipeInstructionService.addRecipeInstruction({ recipeId, stepNumber, stepDescription });
  };
};

const _addCategories = async (recipeId, categories) => {
  for (let category of categories) {
    const subCategoryId = await categoryService.getCategoryId(category);
    await recipeCategoryService.addRecipeCategory(recipeId, subCategoryId);
  };
};

const _deleteRecipeIngredients = async (recipeId) => await recipeIngredientService.deleteSubRecipeIngredients(recipeId);

const _deleteRecipeInstructions = async (recipeId) => await recipeInstructionService.deleteSubRecipeCategories(recipeId);

const _deleteRecipeCategories = async (recipeId) => await subRecipeCategoryService.deleteSubRecipeCategories(recipeId);

const addRecipe = async (recipe) => {
  const { recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeIngredients, recipeInstructions, recipeCategories } = recipe;
  const recipeId = (await recipeRepo.addRecipe({ recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime })).rows[0].recipe_id;
  await _addIngredients(recipeId, recipeIngredients);
  await _addInstructions(recipeId, recipeInstructions);
  await _addCategories(recipeId, recipeCategories);
  return recipeId;
};

const deleteRecipe = async (id) => {
  await _deleteRecipeIngredients(id);
  await _deleteRecipeInstructions(id);
  await _deleteRecipeCategories(id);
  await recipeRepo.deleteRecipe(id);
};

const getRecipes = async () => (await recipeRepo.getRecipes()).rows;

const getRecipeById = async (id) => {
  const recipe = (await recipeRepo.getRecipeById(id)).rows[0];
  const ingredients = await recipeIngredientService.getRecipeIngredients(id);
  const instructions = await recipeInstructionService.getRecipeInstructions(id);
  const categories = await recipeCategoryService.getRecipeCategories(id);
  return { ...recipe, ingredients, instructions, categories };
};

const updateRecipe = async (recipe) => {
  const { recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeIngredients, recipeInstructions, recipeCategories, recipeId } = recipe;
  await recipeRepo.updateRecipe({ recipeName, recipeDescription, recipeImageName, userId, prepTime, cookTime, totalTime, recipeId });
  await _deleteRecipeIngredients(recipeId);
  await _deleteRecipeInstructions(recipeId);
  await _deleteRecipeCategories(recipeId);
  await _addIngredients(recipeId, recipeIngredients);
  await _addInstructions(recipeId, recipeInstructions);
  await _addCategories(recipeId, recipeCategories);
};

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};
 
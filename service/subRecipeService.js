const categoryService = require('./categoryService.js');
const ingredientService = require('./ingredientService.js');
const unitService = require('./unitService.js');
const subRecipeCategoryService = require('./subRecipeCategoryService.js');
const subRecipeIngredientService = require('./subRecipeIngredientService.js');
const subRecipeInstructionService = require('./subRecipeInstructionService.js');

const subRecipeRepo = require('../repository/subRecipeRepository.js');

const _addIngredients = async (ingredients) => {
  for (let ingredient of ingredients) {
    const { quantity, unit } = ingredient;
    let subRUnitId;
    const subRIngredientId = await parseInt(await ingredientService.getIngredientId(ingredient));
    if (!!unit) {
      subRUnitId = await unitService.getUnitId(unit);
    };
    if (!isNaN(subRecipeId)  && !isNaN(subRIngredientId) && !isNaN(quantity) && !isNaN(subRUnitId)) {
      await subRecipeIngredientService.addSubRecipeIngredients({ subRecipeId, subRIngredientId, quantity, subRUnitId });
    } else if (!isNaN(subRecipeId) && !isNaN(subRIngredientId) && !isNaN(quantity)) {
      await subRecipeIngredientService.addSubRecipeIngredients({ subRecipeId, subRIngredientId, quantity });
    } else if (!isNaN(subRecipeId && !isNaN(subRIngredientId))) {
      await subRecipeIngredientService.addSubRecipeIngredients({ subRecipeId, subRIngredientId });
    };
  };
};

const _addInstructions = async (instructions) => {
  for (let instruction of instructions) {
    const { stepNumber, stepDescription } = instruction;
    await subRecipeInstructionService.addSubRecipeInstruction({ subRecipeId, stepNumber, stepDescription });
  };
};

const _addCategories = async (categories) => {
  for (let category of categories) {
    const subCategoryId = await categoryService.getCategoryId(category);
    await subRecipeCategoryService.addSubRecipeCategory(subRecipeId, subCategoryId);
  };
};

const _deleteIngredients = async (recipeId) => await subRecipeIngredientService.deleteSubRecipeIngredients(recipeId);

const _deleteInstructions = async (recipeId) => await subRecipeCategoryService.deleteSubRecipeCategories(recipeId);

const _deleteRecipeCategories = async (recipeId) => await subRecipeCategoryService.deleteSubRecipeCategories(recipeId);

const addSubRecipe = async (subRecipe) => {
  const { subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeIngredients, subRecipeInstructions, subRecipeCategories } = subRecipe;
  const subRecipeId = (await subRecipeRepo.addSubRecipe({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime })).rows[0].sub_recipe_id;
  await _addIngredients(subRecipeIngredients);
  await _addInstructions(subRecipeInstructions);
  await _addCategories(subRecipeCategories);
  return subRecipeId;
};

const deleteSubRecipe = async (subRecipeId) => {
  await _deleteIngredients(subRecipeId);
  await _deleteInstructions(subRecipeId);
  await _deleteRecipeCategories(subRecipeId);
  await subRecipeRepo.deleteSubRecipe(subRecipeId);
};

const getSubRecipeById = async (subRecipeId) => {
  const id = parseInt(subRecipeId);
  const subRecipe = (await subRecipeRepo.getSubRecipeById(id)).rows[0];
  const ingredients = await subRecipeIngredientService.getSubRecipeIngredients(id);
  const categories = await subRecipeCategoryService.getSubRecipeCategories(id);
  const instructions = await subRecipeInstructionService.getSubRecipeInstructions(id);
  return { ...subRecipe, ingredients, categories, instructions };
};

const getSubRecipes = async () => (await subRecipeRepo.getSubRecipes()).rows;

const updateSubRecipe = async (subRecipe) => {
  const { subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeIngredients, subRecipeInstructions, subRecipeCategories, subRecipeId } = subRecipe;
  await subRecipeRepo.updateSubRecipe({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeId });
  await _deleteIngredients(subRecipeId);
  await _deleteInstructions(subRecipeId);
  await _deleteRecipeCategories(subRecipeId);
  await _addIngredients(subRecipeIngredients);
  await _addInstructions(subRecipeInstructions);
  await _addCategories(subRecipeCategories);
};

module.exports = {
  addSubRecipe,
  deleteSubRecipe,
  getSubRecipeById,
  getSubRecipes,
  updateSubRecipe,
};

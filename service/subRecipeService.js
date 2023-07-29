const categoryService = require('./categoryService.js');
const ingredientService = require('./ingredientService.js');
const unitService = require('./unitService.js');
const subRecipeCategoryService = require('./subRecipeCategoryService.js');
const subRecipeIngredientService = require('./subRecipeIngredientService.js');
const subRecipeInstructionService = require('./subRecipeInstructionService.js');

const subRecipeRepo = require('../repository/subRecipeRepository.js');

const _assembleIngredients = async (ingredients) => {
  // console.log('data 0 ', ingredients);
  const updatedIngredients = await Array.from(ingredients).forEach(async (ingredient) => { console.log('fn ', await ingredientService.getIngredientId(ingredient)); return ({ ...ingredient, ingredientId: await ingredientService.getIngredientId(ingredient) }) });
  console.log('data ', updatedIngredients);
  return updatedIngredients;
};

const addSubRecipe = async (subRecipe) => {
  const { subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeIngredients, subRecipeInstructions, subRecipeCategories } = subRecipe;
  const subRecipeId = (await subRecipeRepo.addSubRecipe({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime })).rows[0].sub_recipe_id;
  // const ingredients = await _assembleIngredients(subRecipeIngredients);
  for (let ingredient of subRecipeIngredients) {
    const { quantity, unit } = ingredient;
    let subRUnitId;
    const subRIngredientId = await ingredientService.getIngredientId(ingredient);
    if (!!unit) {
      subRUnitId = await unitService.getUnitId(unit);
    }
    if (!isNaN(subRecipeId)  && !isNaN(subRIngredientId) && !isNaN(quantity) && !isNaN(subRUnitId)) {
      console.log('all vars defined', subRecipeId, subRIngredientId, quantity, subRUnitId);
      await subRecipeIngredientService.addSubRecipeIngredients({ subRecipeId, subRIngredientId, quantity, subRUnitId });
    } else if (!isNaN(subRecipeId) && !isNaN(subRIngredientId) && !isNaN(quantity)) {
      console.log('unit not defined', ingredient);      
      await subRecipeIngredientService.addSubRecipeIngredients({ subRecipeId, subRIngredientId, quantity });
    } else if (!isNaN(subRecipeId && !isNaN(subRIngredientId))) {
      console.log('unit and quantity not defined', ingredient);
      await subRecipeIngredientService.addSubRecipeIngredients({ subRecipeId, subRIngredientId });
    };
  };
  for (let instruction of subRecipeInstructions) {
    const { stepNumber, stepDescription } = instruction;
    await subRecipeInstructionService.addSubRecipeInstruction({ subRecipeId, stepNumber, stepDescription });
  };
  for (let category of subRecipeCategories) {
    const subCategoryId = await categoryService.getCategoryId(category);
    await subRecipeCategoryService.addSubRecipeCategory(subRecipeId, subCategoryId);
  };
  return subRecipeId;
};

const deleteSubRecipe = async (subRecipeId) => {
  await subRecipeRepo.deleteSubRecipe(subRecipeId);
};

const getSubRecipeById = async (subRecipeId) => {
  const subRecipe = await subRecipeRepo.getSubRecipeById(subRecipeId);
  return { ...subRecipe };
};

const getSubRecipes = async () => (await subRecipeRepo.getSubRecipes()).rows;

const updateSubRecipe = async (subRecipe) => {
  const { subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeIngredients, subRecipeInstructions, subRecipeCategories, subRecipeId } = subRecipe;
  await subRecipeRepo.updateSubRecipe({ subRecipeName, subRecipeDescription, subRecipeImageName, userId, prepTime, cookTime, totalTime, subRecipeId });
};

module.exports = {
  addSubRecipe,
  deleteSubRecipe,
  getSubRecipeById,
  getSubRecipes,
  updateSubRecipe,
};

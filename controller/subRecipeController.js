const subRecipeService = require('../service/subRecipeService.js');
const controllerFn = require('../util/middleware/controller.js');

const addRecipe = async (recipe) => await controller.controllerOperationReData(subRecipeService.addRecipe, recipe);

const deleteRecipe = async (id) => await controller.controllerOperationNoData(subRecipeService.deleteRecipe, id);

const getRecipes = async () => await controller.controllerOperationReData(subRecipeService.getRecipes);

const getRecipeById = async (id) => await controller.controllerOperationReData(subRecipeService.getRecipeById, id);

const updateRecipe = async (recipe) => await controller.controllerOperationNoData(subRecipeService.updateRecipe, recipe);

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};

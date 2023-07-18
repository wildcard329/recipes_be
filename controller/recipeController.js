const recipeService = require('../service/recipeService.js');
const controller = require('../util/middleware/controller.js');

const addRecipe = async (recipe) => await controller.controllerOperationReData(recipeService.addRecipe, recipe);

const deleteRecipe = async (id) => await controller.controllerOperationNoData(recipeService.deleteRecipe, id);

const getRecipes = async () => await controller.controllerOperationReData(recipeService.getRecipes);

const getRecipeById = async (id) => await controller.controllerOperationReData(recipeService.getRecipeById, id);

const updateRecipe = async (recipe) => await controller.controllerOperationNoData(recipeService.updateRecipe, recipe);

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};

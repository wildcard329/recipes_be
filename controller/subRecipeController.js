const subRecipeService = require('../service/subRecipeService.js');
const controller = require('../util/middleware/controller.js');

const addRecipe = async (recipe) => await controller.controllerOperationReData(subRecipeService.addSubRecipe, recipe);

const deleteRecipe = async (id) => await controller.controllerOperationNoData(subRecipeService.deleteSubRecipe, id);

const getRecipes = async () => await controller.controllerOperationReData(subRecipeService.getSubRecipes);

const getRecipeById = async (id) => await controller.controllerOperationReData(subRecipeService.getSubRecipeById, id);

const updateRecipe = async (recipe) => await controller.controllerOperationNoData(subRecipeService.updateSubRecipe, recipe);

module.exports = {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
};

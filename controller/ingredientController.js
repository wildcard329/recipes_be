const ingredientService = require('../service/ingredientService.js');
const controller = require('../util/middleware/controller.js');

const addIngredient = async (ingredient) => await controller.controllerOperationReData(ingredientService.addIngredient, ingredient);

const deleteIngredient = async (ingredientId) => await controller.controllerOperationNoData(ingredientService.deleteIngredient, ingredientId);

const getIngredients = async () => await controller.controllerOperationReData(ingredientService.getIngredients);

const updateIngredient = async (ingredient) => await controller.controllerOperationNoData(ingredientService.updateIngredient, ingredient);

module.exports = {
  addIngredient,
  deleteIngredient,
  getIngredients,
  updateIngredient,
};

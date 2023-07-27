const categoryService = require('../service/categoryService.js');
const controller = require('../util/middleware/controller.js');

const addCategory = async (category) => await controller.controllerOperationReData(categoryService.addCategory, category);

const deleteCategory = async (categoryId) => await controller.controllerOperationNoData(categoryService.deleteCategory, categoryId);

const updateCategory = async (category) => await controller.controllerOperationNoData(categoryService.updateCategory, category);

module.exports = {
  addCategory,
  deleteCategory,
  updateCategory,
};

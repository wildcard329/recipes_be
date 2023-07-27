const categoryRepo = require('../repository/categoryRepository');

const addCategory = async (category) => {
  const { categoryName } = category;
  return (await categoryRepo.addCategory({ categoryName })).rows;
};

const deleteCategory = async (categoryId) => await categoryRepo.deleteCategory(categoryId);

const getCategoryById = async (categoryId) => await categoryRepo.getCategoryById(categoryId);

const getCategories = async () => (await categoryRepo.getCategories()).rows;

const updateCategory = async (category) => {
  const { categoryName, categoryId } = category;
  await categoryRepo.updateCategory({ categoryName, categoryId });
};

module.exports = {
  addCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
};

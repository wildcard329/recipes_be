const ingredientRepo = require('../repository/ingredientRepository.js');

const addIngredient = async (ingredientName) => (await ingredientRepo.addIngredient(ingredientName)).rows;

const deleteIngredient = async (ingredientId) => await ingredientRepo.deleteIngredient(ingredientId);

const getIngredients = async () => await ingredientRepo.getIngredients();

const getIngredientById = async (id) => (await ingredientRepo.getIngredientById(id)).rows[0];

const updateIngredient = async (ingredient) => {
  const { ingredientId, ingredientName } = ingredient;
  ingredientRepo.updateIngredient({ ingredientId, ingredientName });
};

module.exports = {
  addIngredient,
  deleteIngredient,
  getIngredients,
  getIngredientById,
  updateIngredient,
};

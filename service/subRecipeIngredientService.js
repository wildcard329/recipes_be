const repo = require('../repository/subRecipeIngredientRepository.js');

const addSubRecipeIngredients = ({ subRecipeId, ingredientId, quantity, unitId }) => {
  if (!isNaN(subRecipeId) && !isNaN(ingredientId) && !isNaN(unitId) && !isNaN(quantity)) {
    repo.addSubRecipeIngredient({ subRecipeId, ingredientId, unitId, quantity });
  } else if (!isNaN(subRecipeId) && !isNaN(ingredientId) && !isNaN(quantity)) {
    repo.addSubRecipeIngredient({ subRecipeId, ingredientId, quantity });
  } else if (!isNaN(subRecipeId) && !isNaN(ingredientId)) {
    repo.addSubRecipeIngredient({ subRecipeId, ingredientId });
  }
};

const deleteSubRecipeIngredients = (subRecipeId) => {
  repo.deleteSubRecipeIngredients(subRecipeId);
};

const getSubRecipeIngredients = async (subRecipeId) => await (await repo.getSubRecipeIngredients(subRecipeId)).rows;

module.exports = {
  addSubRecipeIngredients,
  deleteSubRecipeIngredients,
  getSubRecipeIngredients,
};

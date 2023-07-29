const ingredientRepo = require('../repository/ingredientRepository.js');

const addIngredient = async (ingredient) => {
  const { ingredientName } = ingredient;
  return (await ingredientRepo.addIngredient({ ingredientName })).rows[0].ingredient_id;
};

const deleteIngredient = async (ingredientId) => await ingredientRepo.deleteIngredient(ingredientId);

const getIngredients = async () => (await ingredientRepo.getIngredients()).rows;

const getIngredientById = async (id) => (await ingredientRepo.getIngredientById(id)).rows[0];

const getIngredientId = async (ingredient) => {
  if (ingredient?.ingredientId && ingredient?.ingredientId !== null) {
    return ingredient.ingredientId;
  } else {
    try {
      const newIngredientId = await addIngredient(ingredient);
      return newIngredientId;
    } catch (error) {
      console.error(error);
    };
  };
};

const updateIngredient = async (ingredient) => {
  const { ingredientId, ingredientName } = ingredient;
  ingredientRepo.updateIngredient({ ingredientId, ingredientName });
};

module.exports = {
  addIngredient,
  deleteIngredient,
  getIngredientById,
  getIngredientId,
  getIngredients,
  updateIngredient,
};

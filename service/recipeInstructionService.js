const instructionRepo = require('../repository/recipeInstructionRepository.js');

const addRecipeInstruction = ({ recipeId, stepNumber, stepDescription }) => instructionRepo.addRecipeInstruction({ recipeId, stepNumber, stepDescription });

const deleteRecipeInstructions = (recipeId) => instructionRepo.deleteRecipeInstructions(recipeId);

const getRecipeInstructions = async (recipeId) => (await instructionRepo.getRecipeInstructions(recipeId)).rows;

module.exports = {
  addRecipeInstruction,
  deleteRecipeInstructions,
  getRecipeInstructions,
};

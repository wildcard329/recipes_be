const repo = require('../repository/subRecipeInstructionRepository.js');

const addSubRecipeInstruction = ({ subRecipeId, stepNumber, stepDescription }) => {
  repo.addSubRecipeInstruction({ subRecipeId, stepNumber, stepDescription });
};

const deleteSubRecipeInstructions = async (subRecipeId) => await repo.deleteSubRecipeInstructions(subRecipeId);

const getSubRecipeInstructions = async (subRecipeId) => await (await repo.getSubRecipeInstructions(subRecipeId)).rows;

module.exports = {
  addSubRecipeInstruction,
  deleteSubRecipeInstructions,
  getSubRecipeInstructions,
};

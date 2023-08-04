const db = require('../util/config/pg.js');

const addRecipeInstruction = ({ recipeId, stepNumber, stepDescription }) => db.query('INSERT INTO recipe_instructions (recipe_id, step_number, step_description) VALUES ($1, $2, $3)', [recipeId, stepNumber, stepDescription]);

const deleteRecipeInstructions = (recipeId) => db.query('DELETE FROM recipe_instructions WHERE recipe_id = $1', [recipeId]);

const getRecipeInstructions = (recipeId) => db.query('SELECT * FROM recipe_instructions WHERE recipe_id = $1', [recipeId]);

module.exports = {
  addRecipeInstruction,
  deleteRecipeInstructions,
  getRecipeInstructions,
};

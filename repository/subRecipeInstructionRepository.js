const db = require('../util/config/pg.js');

const addSubRecipeInstruction = (subRecipeId, stepNumber, stepDescription) => db.query('INSERT INTO sub_recipe_instructions (sub_recipe_id, step_number, step_description) VALUES ($1, $2, $3)', [subRecipeId, stepNumber, stepDescription]);

const deleteSubRecipeInstructions = (subRecipeId) => db.query('DELETE FROM sub_recipe_instructions WHERE sub_recipe_id = $1', [subRecipeId]);

const getSubRecipeInstructions = (subRecipeId) => db.query('SELECT * FROM sub_recipe_instructions WHERE sub_recipe_id = $1', [subRecipeId]);


module.exports = {
  addSubRecipeInstruction,
  deleteSubRecipeInstructions,
  getSubRecipeInstructions,
};

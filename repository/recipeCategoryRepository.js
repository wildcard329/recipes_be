const db = require('../util/config/pg.js');

const addRecipeCategory = (recipeId, categoryId) => db.query('INSERT INTO recipe_categories (recipe_id, category_id) VALUES ($1, $2)', [recipeId, categoryId]);

const deleteRecipeCategories = (recipeId) => db.query('DELETE FROM recipe_categories WHERE recipe_id = $1', [recipeId]);

const getRecipeCategories = (recipeId) => db.query('SELECT category_name FROM categories c JOIN recipe_categories rc ON rc.category_id = c.category_id WHERE rc.recipe_id = $1', [recipeId]);

module.exports = {
  addRecipeCategory,
  deleteRecipeCategories,
  getRecipeCategories,
};

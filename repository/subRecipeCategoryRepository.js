const db = require('../util/config/pg.js');

const addSubRecipeCategory = (subRecipeId, categoryId) => db.query('INSERT INTO sub_recipe_categories (sub_recipe_id, category_id) VALUES ($1, $2)', [subRecipeId, categoryId]);

const deleteSubRecipeCategories = (subRecipeId) => db.query('DELETE FROM sub_recipe_categories WHERE sub_recipe_id = $1', [subRecipeId]);

const getSubRecipeCategories = (subRecipeId) => db.query('SELECT c.* FROM sub_recipe_categories sc JOIN categories c ON c.category_id = sc.category_id WHERE sc.sub_recipe_id = $1', [subRecipeId]);

module.exports = {
  addSubRecipeCategory,
  deleteSubRecipeCategories,
  getSubRecipeCategories,
};

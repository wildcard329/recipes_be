const db = require('../util/config/pg.js');

const addCategory = (categoryName) => db.query('INSERT INTO categories (category_name) VALUES ($1) RETURNING category_id', [categoryName]);

const deleteCategory = (categoryId) => db.query('DELETE FROM categories WHERE category_id = $1', [categoryId]);

const getCategoryById = (categoryId) => db.query('SELECT * FROM categories WHERE category_id = $1', [categoryId]);

const getCategories = () => db.query('SELECT * FROM categories ORDER BY category_name');

const updateCategory = (categoryName, categoryId) => db.query('UPDATE categories SET category_name = $1 WHERE category_id = $2', [categoryName, categoryId]);

module.exports = {
  addCategory,
  deleteCategory,
  getCategoryById,
  getCategories,
  updateCategory,
};

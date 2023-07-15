const router = require('express').Router();
const recipes = require('../../controller/recipeController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', async (req, res) => serverRes.compileRes(res, recipes.getRecipes));

router.get('/:id', async (req, res) => serverRes.compileRes(res, recipes.getRecipeById, req.params.id));

module.exports = router;

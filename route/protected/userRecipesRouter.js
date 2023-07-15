const router = require('express').Router();
const recipes = require('../../controller/recipeController.js');
const serverRes = require('../../util/middleware/res.js');

router.post('/', async (req, res) => serverRes.compileRes(res, recipes.addRecipe, req.body));

router.put('/', async (req, res) => serverRes.compileRes(res, recipes.updateRecipe, req.body));

router.delete('/:id', async (req, res) => serverRes.compileRes(res, recipes.deleteRecipe, req.params.id));

module.exports = router;

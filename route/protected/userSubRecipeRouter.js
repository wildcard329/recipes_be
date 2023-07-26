const router = require('express').Router();
const subRecipes = require('../../controller/subRecipeController.js');
const serverRes = require('../../util/middleware/res.js');

router.post('/', async, (req, res) => serverRes.compileRes(res, subRecipes.addRecipe, req.body));

router.put('/', async (req, res) => serverRes.compileRes(res, subRecipes.updateRecipe, req.body));

router.delete('/:id', async (req, res) => serverRes.compileRes(res, subRecipes.deleteRecipe, req.params.id));

module.exports = router;

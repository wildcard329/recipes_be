const router = require('express').Router();
const subRecipes = require('../../controller/subRecipeController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', (req, res) => serverRes.compileRes(res, subRecipes.getRecipes));

router.get('/:id', (req, res) => serverRes.compileRes(res, subRecipes.getRecipeById, req.params.id));

module.exports = router;

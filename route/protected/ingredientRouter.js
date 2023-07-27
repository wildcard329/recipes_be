const router = require('express').Router();
const ingredients = require('../../controller/ingredientController.js');
const serverRes = require('../../util/middleware/res.js');

router.post('/', async (req, res) => serverRes.compileRes(res, ingredients.addIngredient, req.body));

router.put('/', async (req, res) => serverRes.compileRes(res, ingredients.updateIngredient, req.body));

router.delete('/:id', async (req, res) => serverRes.compileRes(res, ingredients.deleteIngredient, req.params.id));

module.exports = router;

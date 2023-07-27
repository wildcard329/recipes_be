const router = require('express').Router();
const ingredients = require('../../controller/ingredientController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', async (req, res) => serverRes.compileRes(res, ingredients.getIngredients));

module.exports = router;

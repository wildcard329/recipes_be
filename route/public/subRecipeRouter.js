const router = require('express').Router();
const subRecipes = require('../../controller/subRecipeController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', (req, res) => serverRes.compileRes(res, subRecipes.getRecipes));

module.exports = router;

const router = require('express').Router();
const categories = require('../../controller/categoryController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', async (req, res) => serverRes.compileRes(res, categories.getCategories));

module.exports = router;

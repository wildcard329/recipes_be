const router = require('express').Router();
const categories = require('../../controller/categoryController.js');
const serverRes = require('../../util/middleware/res.js');

router.post('/', async (req, res) => serverRes.compileRes(res, categories.addCategory, req.body));

router.put('/', async (req, res) => serverRes.compileRes(res, categories.updateCategory, req.body));

router.delete('/:id', async (req, res) => serverRes.compileRes(res, categories.deleteCategory, req.params.id));

module.exports = router;

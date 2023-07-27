const router = require('express').Router();
const units = require('../../controller/unitController.js');
const serverRes = require('../../util/middleware/res.js');

router.post('/', async (req, res) => serverRes.compileRes(res, units.addUnit, req.body));

router.put('/', async (req, res) => serverRes.compileRes(res, units.updateUnit, req.body));

router.delete('/:id', async (req, res) => serverRes.compileRes(res, units.deleteUnit, req.params.id));

module.exports = router;

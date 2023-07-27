const router = require('express').Router();
const units = require('../../controller/unitController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', async (req, res) => await serverRes.compileRes(res, units.getUnits));

module.exports = router;

const router = require('express').Router();
const users = require('../../controller/userController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', async (req, res) => await serverRes.compileRes(res, users.getUsers))

router.get('/:id', async (req, res) => await serverRes.compileRes(res, users.getUserById, req.params.id));

router.post('/', async (req, res) => await serverRes.compileRes(res, users.addUser, req.body));

router.put('/', async (req, res) => await serverRes.compileRes(res, users.updateUser, req.body));

router.delete('/:id', async (req, res) => await serverRes.compileRes(res, users.removeUser, req.params.id));

module.exports = router;

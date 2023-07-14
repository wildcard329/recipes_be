const router = require('express').Router();
const users = require('../../controller/userController.js');
const serverRes = require('../../util/middleware/res.js');

router.post('/login', async (req, res) => serverRes.compileRes(res, users.loginUser, req.body));

router.post('/register', async (req, res) => serverRes.compileRes(res, users.addUser, req.body));

module.exports = router;

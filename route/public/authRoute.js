const router = require('express').Router();
const users = require('../../controller/userController.js');

router.post('/login', async (req, res) => {
  const token = await users.loginUser(req.body);
  serverRes.sendRes(res, 201, { msg: 'ok', data: token });
});

router.post('/register', async (req, res) => {
  const userId = users.addUser(req.body);
  serverRes.sendRes(res, 201, { msg: 'ok', data: userId });
});

module.exports = router;

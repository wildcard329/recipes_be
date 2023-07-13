const router = require('express').Router();
const users = require('../../controller/userController.js');
const serverRes = require('../../util/middleware/res.js');

router.get('/', async (req, res) => {
  const userData = (await users.getUsers());
  serverRes.sendRes(res, 200, { msg: 'ok', data: userData });
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = await users.getUserById(id);
  serverRes.sendRes(res, 200, { msg: 'ok', data: userData });
});

router.post('/', async (req, res) => {
  const userId = await users.addUser(req.body);
  serverRes.sendRes(res, 201, { msg: 'ok', data: userId });
});

router.put('/', async (req, res) => {
  await users.updateUser(req.body);
  serverRes.sendRes(res, 200, { msg: 'ok' });
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await users.removeUser(id);
  serverRes.sendRes(res, 200, { msg: 'ok' });
});

module.exports = router;

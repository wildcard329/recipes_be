const router = require('express').Router();
const users = require('../../controller/userController.js');

router.get('/', async (req, res) => {
  const userData = (await users.getUsers());
  res.status(200).json({ msg: 'ok', data: userData });
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = await users.getUserById(id);
  res.status(200).json({ msg: 'ok', data: userData });
});

router.post('/', async (req, res) => {
  const userId = await users.addUser(req.body);
  res.status(201).json({ msg: 'ok', data: userId });
});

router.put('/', async (req, res) => {
  await users.updateUser(req.body);
  res.status(200).json({ msg: 'ok' });
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await users.removeUser(id);
  res.status(200).json({ msg: 'ok' });
});

module.exports = router;

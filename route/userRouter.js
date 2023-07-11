const router = require('express').Router();
const users = require('../controller/userController.js');

router.get('/', async (req, res) => {
  const userData = (await users.getUsers());
  res.status(200).json({ msg: 'get users works', data: userData });
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const userData = await users.getUserById(id);
  res.status(200).json({ msg: `get user ${id} works`, data: userData });
});

router.post('/', async (req, res) => {
  const body = req.body;
  res.status(200).json({ msg: `post user ${body} works`});
});

router.put('/', async (req, res) => {
  const body = req.body;
  res.status(200).json({ msg: `put user ${body} works`});
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json({ msg: `delete user ${id} works`});
});

module.exports = router;

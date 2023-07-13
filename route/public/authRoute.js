const router = require('express').Router();
const users = require('../../controller/userController.js');

router.post('/login', async (req, res) => {
  const token = await users.loginUser(req.body);
  res.status(200).json({ msg: 'logged in successfully', data: token });
});

router.post('/register', async (req, res) => {
  const userId = users.addUser(req.body);
  res.status(201).json({ msg: 'new user added', data: userId });
});

module.exports = router;

const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).json({ msg: 'get users works' });
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  res.status(200).json({ msg: `get user ${id} works`});
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

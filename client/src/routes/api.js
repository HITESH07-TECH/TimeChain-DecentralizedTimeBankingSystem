const express = require('express');
const router = express.Router();

router.get('/example', (req, res) => {
  res.json({ message: 'This is an example API endpoint' });
});

module.exports = router;

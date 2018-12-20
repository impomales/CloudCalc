const router = require('express').Router();
const { Label } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const labels = await Label.findAll();

    res.json(labels);
  } catch (err) {
    next(err);
  }
})

module.exports = router;

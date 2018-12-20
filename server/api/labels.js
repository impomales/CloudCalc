const router = require('express').Router()
const {Label} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const labels = await Label.findAll()

    res.status(200).json(labels)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {title, firstNumber, secondNumber, result, operation} = req.body

    let label = await Label.create({
      title,
      firstNumber,
      secondNumber,
      result,
      operation
    })

    res.status(201).json({
      message: 'label successfully created',
      label
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router

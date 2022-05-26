const router = require('express').Router()
const { models: {User}} = require('../db/models')


router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
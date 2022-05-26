const router = require('express').Router()
const {models: { Plant } }  = require('../db/models')


// get route for all plants
router.get('/', async (req, res, next) => {
  try {
    console.log('in plant api')
    const plants = await Plant.findAll()
    res.send(plants)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
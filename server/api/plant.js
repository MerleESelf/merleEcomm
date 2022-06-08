const router = require('express').Router()
const {models: { Plant } }  = require('../db/models')


// get route for all plants
router.get('/', async (req, res, next) => {
  try {
    const plants = await Plant.findAll()
    console.log('plaanntttssssss in api', plants)
    res.send(plants)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
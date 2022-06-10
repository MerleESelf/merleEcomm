const router = require('express').Router()
const { models: { Plant } } = require('../db/models')


// get route for all plants
router.get('/', async (req, res, next) => {
  try {
    const { page, limit, total } = req.query
    const offset = limit * (page - 1)

    const params = {}

    if (page && limit) {
      params.limit = limit
      params.offset = offset
    }
    if (total) {
      const { count, rows } = await Plant.findAndCountAll(params)
      return res.send({ count, rows })
    }
    const plants = await Plant.findAll(params)
    res.send(plants)
  } catch (err) {
    console.log(err)
  }
})



module.exports = router
const router = require('express').Router()


//user api 
router.use('/user', require('./user'))

// plant api
router.use('/plant', require('./plant'))

//order api      
router.use('/order', require('./order'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
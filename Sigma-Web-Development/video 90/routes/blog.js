const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// middleware is a function that executes before every request
// in this case middleware executes before any blog request
// it has req object
// it has res object
// it can modify request
// it can send response
// it can perform authention using req headers
// it can send request to route handlers
// order of middlewares is very important

// 

const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('This is my blog ... home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

module.exports = router
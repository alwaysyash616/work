const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
  res.send('This is Yash Blog home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('This page will display about section from blogs of Yash')
})
// define the about route
router.get('/blogpost/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router
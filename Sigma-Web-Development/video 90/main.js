const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')


app.use('/blog', blog)

app.use(express.static("public"))

// Middleware-1 -   Logger for our applicaton
app.use((req, res, next) => {
    console.log(req.headers)
    req.yash="I need you by my side"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // console.log('middleware-1')
    next()
})
// Middleware-2
app.use((req, res, next) => {
    req.yash="how many words do you think there are in the english language"
    console.log('middleware-2')
    next()
})
// Middleware-3
app.use((req, res, next) => {
    // res.send('Response recieved...')
    console.log('middleware-3')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello, All I need is ' + req.yash)
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// Middleware modifies my request


// types of middleware
// 1. Application level middleware    app.use(....)

// 2. Router level middleware         router.use(...)

// 3. Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

// 4. Built-in middlewares
// express.static
// express.json
// express.urlencoded

// 5. Third party middleware
//
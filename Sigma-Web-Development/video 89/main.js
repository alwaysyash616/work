const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use('/blog', blog)
app.use('/shop', shop)

// app.use() means we are using a middleware
// express.static() is a built-in middleware
app.use(express.static('public'))

// Get request limit 8Kb
// Post request limit (large)
app.get('/', (req, res) => {
    console.log("Hey it's a get request")
    res.send('Simple Get Request')
}).post('/', (req, res) => {
    console.log("Hey it's a post request")
    res.send('this is a post request')
}).put('/', (req, res) => {
    console.log("hey it's a put request")
    res.send('this is a put request')
})

app.get("/index", (req, res) => {
    console.log("hey it is index")
    // res.send("HEY IT'S INDEX")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name:["Yash", "Naveen"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
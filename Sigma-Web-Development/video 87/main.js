const express = require('express')
const app = express()
const port = 3000

// app.use() used to use middlewares
// express.static() is a built-in middleware
app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('About Us')
})
app.get('/contact', (req, res) => {
    res.send('Hello Contact')
})
app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})
// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro-to-js from db
//     res.send('Introduction to Python')
// })
// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro-to-python from db
//     res.send('Introduction to Javascript')
// })
app.get('/blog/:slug', (req, res) => {
    //logic to fetch ${slug} from db
    res.send(`Introduction to ${req.params.slug}`)
    // For URL: http://127.0.0.1:3000/blog/shrishti?mode=yash&region=home
    console.log(req.params)
    console.log(req.query)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
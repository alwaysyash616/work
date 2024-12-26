const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
// other view engines
// pug, templateenginehandlebars
// Python Flask, Django does the same (view engine)

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    // Let we fetched something from database for ex- siteName, searchText
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr= ["Hey", "Love you", "very much 3000"]
    // res.sendFile("templates/index.html", { root: __dirname })
    res.render("index", { siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Louis Vuitton"
    let blogContent = "Search Now"
    // how do we insert these variables inside this index.html file
    // res.sendFile("templates/index.html", { root: __dirname })
    res.render("blogpost", { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
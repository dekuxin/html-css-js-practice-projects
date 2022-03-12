const express = require('express');
const app = express();
const path = require('path');
const fileUpload = require('express-fileupload');

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(fileUpload())

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', (req, res) => {
    console.log(req.files.file)
})

app.listen(port, (err) => {
    if(err) console.log(err)

    console.log('Server started at http://localhost:3000/')
})
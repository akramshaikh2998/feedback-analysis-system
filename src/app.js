const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeRouter = require('./app/routers/homeRouter')
const port  = process.env.port || 8080;

const app = express();

mongoose.connect('mongodb://localhost:27017/studentsdata', { useNewUrlParser: true }, (error) => {
    if (error) {
        console.log(error);
    }

    const db = mongoose.connection;

    db.on("error", () => { console.log("error in conection"); })
    db.once('open', () => { console.log("Connected"); })

    app.set('login engine', 'ejs')

    app.use(express.static('public'))

    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json())

    app.use('/', homeRouter)

    app.listen(port,() => {
        console.log("Server is running")
    })
})
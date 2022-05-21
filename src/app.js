var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var homeRouter = require('./routers/homeRouter')
// var port  = process.env.port || 8080;

var app  = express();

// db con

mongoose.connect('mongodb://localhost:27017/studentsdata',{useNewUrlParser:true})
var db = mongoose.connection;

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})

app.set('login engine','ejs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/', homeRouter)

// app.listen(port)
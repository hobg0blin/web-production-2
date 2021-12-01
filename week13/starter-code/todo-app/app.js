require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(bodyParser.urlencoded({extended: true}))

let Sent = require('sentiment')
let sentiment = new Sent()
//
// set up and connect to our remote database
let mongoose = require('mongoose')
let mongoDB = process.env.MONGO_DB
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
let db = mongoose.connection
//
// get our models
const Todo = require('./models/Todo.js')

// set up handlebars view engine
var handlebars = require('express-handlebars').create({
    defaultLayout:'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// middleware to add list data to context
app.use(function(req, res, next){
	if(!res.locals.partials) res.locals.partials = {};
  // 	res.locals.partials.listOfWorks = listOfWorks;
 	next();
});



app.get('/', function(req, res){
  res.render('todos');
})


app.get('/data/todos', function(req, res) {
  Todo.find()
    .then(todos => {
      console.log('todos: ', todos)
      res.json(todos)
    })
})

app.post('/todo', function(req, res) {
  let newTodo = new Todo(req.body)
  newTodo.itemId = newTodo._id.toString()
  newTodo.save((err, doc) => {
    console.log('data: ', doc)
    res.send({success: true})
  })
})

app.put('/todo', function(req, res) {
  console.log('req.body: ', req.body)
  Todo.findOneAndUpdate({itemId: req.body.itemId}, req.body).then(data => {
    console.log('data: ', data)
    res.send({success: true})
  })
})


app.delete('/todo', function(req, res) {
  Todo.deleteOne({ itemId: req.body.itemId}, function(err, doc) {
    res.send({success:true})
  })
})

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});

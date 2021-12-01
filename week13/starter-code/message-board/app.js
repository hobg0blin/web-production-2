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
const Post = require('./models/Post.js')
const Comment = require('./models/Comment.js')

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
  res.render('messages');
})



function sentimentToEmoji(message) {
  message.sentiment = sentiment.analyze(message.text)
  if (message.sentiment.score > 0) {
    message.emoji = "😊"
  } else if (message.sentiment.score == 0) {
    message.emoji = "😐"
  } else {
    message.emoji = "☹️"
  }

}

app.get('/messages', function(req,res) {
  res.render('messages')
})

// this function allows us to get comments by their assigned post ID
function combineMessagesAndComments(messages, comments) {
  let output = messages.map(message => {
    let matchedComments = comments.filter(comment => {
      return comment.postId == message.postId
    })
    return { message: message, comments: matchedComments }
  })
  return output
}

app.get('/data/messages', function(req, res) {
})

app.post('/message', function(req, res) {
  sentimentToEmoji(req.body)
})

app.put('/message', function(req, res) {
  sentimentToEmoji(req.body)
})

app.post('/comment', function(req, res) {
  })

app.get('/edit-messages', function(req,res) {
  res.render('edit-messages')
})

app.delete('/message', function(req, res) {
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

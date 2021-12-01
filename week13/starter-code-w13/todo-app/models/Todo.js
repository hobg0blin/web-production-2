const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema({
  _id: {type: mongoose.Schema.ObjectId, auto: true},
	itemId: {type:String },
	text: {type:String, default:''},
  isDone: {type: Boolean, default: false},
	schema: {type:String, default:'todo', immutable:true},
  timestamp: {type:Date, default: new Date(), immutable:true},
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo

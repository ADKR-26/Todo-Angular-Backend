const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  todo_name: String,
  todo_description: String,
  todo_completed: Boolean,
});

const addTodo = mongoose.model("Todo", todoSchema);

module.exports = addTodo;

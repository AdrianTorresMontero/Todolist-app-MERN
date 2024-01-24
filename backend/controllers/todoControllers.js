const Todo = require('../models/todoModel');

const todo_show=(req,res)=>{
  Todo.find().then(resp=>res.json(resp))
}

const todo_post= async(req,res)=>{

  const {todo}= req.body

  const data={
    task:todo
  }

  //inserting data to mongodb
  await Todo.insertMany([data])
}

const todo_delete= async(req, res)=>{

  await Todo.findOneAndDelete(req.body);
  res.status(200).send({ message: 'Task deleted successfully' });
}

module.exports={
  todo_show,
  todo_post,
  todo_delete
}
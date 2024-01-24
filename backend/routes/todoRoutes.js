const router = require('express').Router();
const Todo = require('../models/todoModel');

router.get('/',(req,res)=>{
  Todo.find().then(resp=>res.json(resp))
})

router.post('/', async(req,res)=>{
  const {todo}= req.body

  const data={
    task:todo
  }

  //inserting data to mongodb
  await Todo.insertMany([data])
})


router.delete('/', async(req, res)=>{
  await Todo.findOneAndDelete(req.body);
  res.status(200).send({ message: 'Task deleted successfully' });
})

module.exports = router
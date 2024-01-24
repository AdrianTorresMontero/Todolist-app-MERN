import { useState } from "react";
import axios from 'axios'
import useFetch from "./custom/useFetch";

const Todo = () => {
  const url=process.env.REACT_APP_URL;

  const [todo, setTodo] = useState('')
  const [tasks, setTask] = useState(null);

  //adding task
  const submit= async (e)=>{
    e.preventDefault();
    setTodo('');
    try {
      await axios.post(url,{
        todo
      })
    } catch (error) {
      console.log(error);
    }
  }

  //deleting task
  const handleDelete= async (taski)=>{
    try {
      await axios.delete(url,{
        data:taski
      })
    } catch (error) {
      console.log(error);
    }
  }

  useFetch(axios, url, setTask,tasks);

  return ( 
    <div>
      <form action="POST">
        <input type="text" name="task" value={todo} placeholder="What's your task?" onChange={(e)=>setTodo(e.target.value)}/>
        <button className="add" onClick={submit}>Add</button>
      </form>
      {tasks && tasks.map(task=>(

        <div className="task-container">
          <p>{task.task}</p>
          <button className="delete" onClick={()=>handleDelete(task)}>Delete</button>
        </div>

      ))}
    </div>
  );
}

export default Todo;
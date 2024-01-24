import { useState,useEffect } from "react";

const useFetch = (axios,url,setTask,tasks)=>{

  useEffect(()=>{
    const fetching=async()=>{
      try {
        const data = await axios.get(url)
        setTask(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetching()
  },[tasks])
}

export default useFetch

import Task from "./components/Task";
import AddTask from "./components/AddTask";
import "./index.css";
import { useEffect, useState } from "react";
import {v4} from "uuid";

function App (){
  const [task, setTask]= useState(JSON.parse(localStorage.getItem("task")) || [] );

useEffect(() => {
  localStorage.setItem("task" , JSON.stringify(task));
}, [task]);

useEffect(() =>{
  async function fetchTask() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    method: 'GET'
  });
  
  const data = await response.json()

  setTask(data);
  
  };

  fetchTask();
}, []);



function onTaskClick(taskId)
{
  const newTask = task.map( task =>
  {
    //ATUALIZAR TAREFA
    if (task.id ==  taskId)
    {
      return{...task, isCompleted: !task.isCompleted}
    }

    //NÃO PRECISO ATUALIZAR ESTA TAREFA
    return task;
  });
  
  setTask(newTask);
}

function onDeletTaskClick(taskId){
  const newTask = task.filter(task => task.id !== taskId)

  setTask(newTask);
}

function onAddTaskSubmit(title, description){
  const newTask = {
    id: v4(),
    title: title,
    description: description,
    isCompleted: false,
  };

  setTask([...task, newTask]);
}

  return(
    <div className="gerenciador">
      <div className="gerenciador-container">
        <h1 className="title">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Task task={task} onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeletTaskClick}/>
      </div>
    </div>
  );
}

export default App;

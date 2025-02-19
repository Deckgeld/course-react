import React, {useContext} from "react";
import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0){
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
  }

  return (
    // grid es para hacer un grid de 4 columnas
    // gap-2 es para darle un espacio entre las columnas
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

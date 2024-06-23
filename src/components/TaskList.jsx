'use client'
import { useState, useEffect } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { formatTask } from '@/utils/formatTask'; 

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('/api/getTasks');
        const data = await response.json();
        if (Array.isArray(data)) {
          setTasks(data.map(task => ({ ...task, formattedText: formatTask(task.texto) }))); 
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

  const addTaskToList = (newTask) => {
    const formattedTask = { ...newTask, formattedText: formatTask(newTask.texto) };
    setTasks([formattedTask, ...tasks]); 
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col gap-3 gap-y-5">
      <AddTask addTaskToList={addTaskToList} />
      {Array.isArray(tasks) && tasks.map((task) => (
        <Task key={task.id} id={task.id} texto={task.texto} formattedText={task.formattedText} onDelete={handleDelete} />
      ))}
    </div>
  );
}

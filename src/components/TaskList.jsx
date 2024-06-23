'use client'
import { useState, useEffect } from 'react';
import Task from './Task';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('/api/getTasks');
        const data = await response.json();
        if (Array.isArray(data)) {
          setTasks(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex flex-col gap-3 gap-y-5">
      {Array.isArray(tasks) && tasks.map((task) => (
        <Task key={task.id} id={task.id} texto={task.texto} onDelete={handleDelete} />
      ))}
    </div>
  );
}

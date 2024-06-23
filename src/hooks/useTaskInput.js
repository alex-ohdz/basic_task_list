"use client";
import { useState, useRef, useEffect } from "react";
import { formatTask, handleFormatText } from '@/utils/formatTask';

export function useTaskInput() {
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [task]);

  const handleInputBlur = () => {
    if (task.trim() === "") {
      return false;
    } else {
      console.log("Nueva tarea:", task);
      return true;
    }
  };

  const handleIconClick = async () => {
    if (task.trim() === "") {
      setTask("");
      return false;
    } else {
      try {
        const response = await fetch('/api/addTask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ texto: task }),
        });
        const data = await response.json();
        console.log('Task added:', data);
        setTask("");
        return data; 
      } catch (error) {
        console.error('Error adding task:', error);
        return false;
      }
    }
  };

  const handleKeyUp = (e) => {
    setTask(prevTask => handleFormatText(prevTask, e.key));
  };

  const formattedTask = formatTask(task);

  const isTaskEmpty = task.trim() === "";

  return {
    task,
    setTask,
    isTaskEmpty,
    isEditing,
    setIsEditing,
    handleInputChange,
    handleInputBlur,
    handleIconClick,
    handleKeyUp,
    textareaRef,
    formattedTask,
  };
}

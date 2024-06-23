"use client";
import { useState, useRef, useEffect } from "react";

export function useTaskInput() {
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const userRegex = /(^|\s)@\w+/;
  const linkRegex = /(^|\s)\bhttps?:\/\/\S+/;
  const hashtagRegex = /(^|\s)#\w+/;

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

  const handleIconClick = async (e) => {
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
        return true;
      } catch (error) {
        console.error('Error adding task:', error);
        return false;
      }
    }
  };

  const handleFormatText = (e) => {
    if (e.key === " ") {
      setTask((prevTask) => {
        const words = prevTask.split(' ');
        const lastWord = words.pop();
        if (emailRegex.test(lastWord)) {
          words.push(`<span style="color: green ;">${lastWord}</span>`);
        } else if (userRegex.test(lastWord)) {
          words.push(`<span style="color: blue;">${lastWord}</span>`);
        } else if (linkRegex.test(lastWord)) {
          words.push(`<span style="color: purple;">${lastWord}</span>`);
        } else if (hashtagRegex.test(lastWord)) {
          words.push(`<span style="color: orange;">${lastWord}</span>`);
        } else {
          words.push(lastWord);
        }
        return words.join(' ') + ' ';
      });
    }
  };

  const formatTask = (task) => {
    return task.split(' ').map(word => {
      if (emailRegex.test(word)) {
        return `<span style="color: green;">${word}</span>`;
      }
      if (userRegex.test(word)) {
        return `<span style="color: blue;">${word}</span>`;
      }
      if (linkRegex.test(word)) {
        return `<span style="color: purple;">${word}</span>`;
      }
      if (hashtagRegex.test(word)) {
        return `<span style="color: orange;">${word}</span>`;
      }
      return word;
    }).join(' ');
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
    handleFormatText,
    textareaRef,
    formattedTask,
  };
}

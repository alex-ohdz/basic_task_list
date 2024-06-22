"use client";
import { useState, useRef, useEffect } from "react";

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

  const handleIconClick = (e) => {
    if (task.trim() === "") {
      setTask("");
      return false;
    } else {
      console.log("Click");
      return true;
    }
  };

  const handleFormatText = (e) => {
    if (e.key === " ") {
      console.log("perro");
    }
  };

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
  };
}

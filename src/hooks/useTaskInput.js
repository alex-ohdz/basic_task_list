'use client';
import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1230);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export function useTaskInput() {
  const [task, setTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleInputBlur = () => {
    if (task.trim() === "") {
      return false;
    } else {
      console.log("Nueva tarea:", task);
      return true;
    }
  };

  const handleIconClick = () => {
    if (task.trim() === "") {
      setTask(""); // Clear the input if the task is empty and X icon is clicked
      return false;
    } else {
      console.log("Click");
      return true;
    }
  };

  const isTaskEmpty = task.trim() === "";

  return { task, setTask, isTaskEmpty, isEditing, setIsEditing, handleInputChange, handleInputBlur, handleIconClick };
}

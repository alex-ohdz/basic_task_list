"use client";
import { useEffect, useState } from "react";
import feather from "feather-icons";
import { Avatar } from "@mui/material";

function AddTask() {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState("");

  useEffect(() => {
    feather.replace();
  }, []); // Ejecutar solo una vez cuando el componente se monta

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleInputBlur = () => {
    if (task.trim() === "") {
      setIsEditing(false);
    } else {
      console.log("Nueva tarea:", task);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col items-center mx-14 mt-14 h-[40px]">
      <div className="flex w-full h-full items-center space-x-3">
        <button onClick={handleButtonClick} className="active:text-blue-300">
          <i
            className="text-sky-blue active:text-blue-300"
            data-feather="plus-square"
          ></i>
        </button>
        {isEditing ? (
          <div className="flex items-center justify-between w-full h-full">
            <input
              type="text"
              className="flex-grow text-gray-700 border-none outline-none caret-sky-blue"
              placeholder="Type to add new task"
              value={task}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              autoFocus
            />
            <Avatar
              alt="image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              sx={{ width: 24, height: 24 }}
            />
          </div>
        ) : (
          <button
            className="flex w-full h-full items-center space-x-3 text-gray-400"
            onClick={handleButtonClick}
          >
            <span>Type to add new task</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default AddTask;

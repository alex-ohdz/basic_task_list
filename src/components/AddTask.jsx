"use client";
import { useEffect, useState } from "react";
import feather from "feather-icons";
import { Avatar } from "@mui/material";
import ButtonBar from "@/components/ButtonBar";

function AddTask() {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState("");

  useEffect(() => {
    feather.replace();
  }, []);

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
    <div className="flex flex-col max-w-[1360px] items-center mx-10 mt-14">
      <div
        className={`flex w-full flex-col bg-white ${
          isEditing ? " shadow-custom2 rounded-lg" : ""
        }`}
      >
        <div className="flex items-center gap-3 pl-4 pt-3 pb-6 ">
          <button onClick={handleButtonClick} className="active:text-blue-300">
            <i
              className="text-sky-blue active:text-blue-300"
              data-feather="plus-square"
            ></i>
          </button>
          {isEditing ? (
            <div className="flex items-center justify-between w-full ">
              <input
                type="text"
                className="flex-grow text-customGray2 border-none outline-none caret-sky-blue text-input"
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
                style={{ position: "relative", bottom: 6, right: 4 }}
              />
            </div>
          ) : (
            <button
              className="flex w-full h-full items-center space-x-3 text-gray-400"
              onClick={handleButtonClick}
            >
              <span className="text-input text-customGray2">
                Type to add new task
              </span>
            </button>
          )}
        </div>
        {isEditing && <ButtonBar />}
      </div>
    </div>
  );
}

export default AddTask;

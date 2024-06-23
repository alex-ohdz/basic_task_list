"use client";
import { useTaskInput } from "@/hooks/useTaskInput";
import { Avatar } from "@mui/material";
import ButtonBar from "@/components/ButtonBar";
import FeatherIcon from "@/components/FeatherIcon";
import { useEffect } from "react";

function AddTask() {
  const {
    task,
    isTaskEmpty,
    isEditing,
    setIsEditing,
    handleInputChange,
    handleInputBlur,
    handleIconClick,
    handleFormatText,
    textareaRef,
    formattedTask,
  } = useTaskInput();

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const updateLabelWidth = () => {
      if (textareaRef.current) {
        const label = document.getElementById('label');
        if (label) {
          label.style.width = `${textareaRef.current.clientWidth}px`;
        }
      }
    };

    updateLabelWidth();
    window.addEventListener('resize', updateLabelWidth);

    return () => {
      window.removeEventListener('resize', updateLabelWidth);
    };
  }, [textareaRef, task]);

  return (
    <div className="flex flex-col max-w-[1360px] items-center mx-10 mt-14">
      <div
        className={`flex w-full flex-col bg-white ${
            isEditing ? "shadow-custom rounded" : ""
        }`}
      >
        <div
          className={`flex items-center gap-3 pl-4 pt-3 pb-6 ${
              isEditing ? "shadow-border-top rounded-t" : ""
          }`}
        >
          <div className="flex w-7">
            <button
              onClick={handleButtonClick}
              className="absolute top-[68px] active:text-blue-300"
            >
              <FeatherIcon
                icon="plus-square"
                className="text-sky-blue active:text-blue-300"
              />
            </button>
          </div>
          {  isEditing ? (
            <div className="flex w-full">
              <label
                id="label"
                className="absolute text-input break-all resize-none overflow-hidden pointer-events-none"
                style={{ left: "95px", top: "68px" }}
                dangerouslySetInnerHTML={{ __html: formattedTask }}
              />
              <textarea
                ref={textareaRef}
                className="w-full text-transparent border-none outline-none caret-sky-blue text-input break-all resize-none overflow-hidden"
                placeholder="Type to add new task"
                value={task}
                onKeyUp={handleFormatText}
                onChange={handleInputChange}
                onBlur={() => {
                  if (!handleInputBlur()) {
                    setIsEditing(false);
                  }
                }}
                autoFocus
              />
              <div className="flex w-11">
                <Avatar
                  alt="image"
                  src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                  sx={{ width: 24, height: 24 }}
                  style={{ position: "absolute", top: "65px", right: "50px" }}
                />
              </div>
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
        {  isEditing && (
           <ButtonBar
           isTaskEmpty={isTaskEmpty}
           setIsEditing={setIsEditing}
           handleIconClick={handleIconClick}
         />
        )}
      </div>
    </div>
  );
}

export default AddTask;

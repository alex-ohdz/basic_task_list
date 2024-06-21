"use client";
import { useIsMobile } from "@/hooks/useTaskInput";
import CircleIcon from "@/public/icons/Circle.svg";
import FeatherIcon from "@/components/FeatherIcon";

function ButtonBar({ isTaskEmpty, handleIconClick, setIsEditing }) {
  const isMobile = useIsMobile();

  return (
    <div className="flex justify-between items-center p-2">
      <div className={`flex ${isMobile ? "sm:gap-10 gap-3" : "gap-8"} text-m`}>
        <button
          className={`flex items-center gap-3 bg_gray h-10 justify-center rounded ${
            isMobile ? "icon-button" : "min-w-[111px]"
          } ${isTaskEmpty ? "disabled" : ""}`}
          disabled={isTaskEmpty}
        >
          <FeatherIcon icon="maximize-2" data-testid="maximize-2" />
          {!isMobile && <span>Open</span>}
        </button>
        <div className="flex gap-1">
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[117px]"} ${
              isTaskEmpty ? "disabled" : ""
            }`}
            disabled={isTaskEmpty}
          >
            <FeatherIcon icon="calendar" data-testid="calendar" />
            {!isMobile && <span>Today</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[119px]"} ${
              isTaskEmpty ? "disabled" : ""
            }`}
            disabled={isTaskEmpty}
          >
            <FeatherIcon icon="unlock" data-testid="unlock" />
            {!isMobile && <span>Public</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[139px]"} ${
              isTaskEmpty ? "disabled" : ""
            }`}
            disabled={isTaskEmpty}
          >
            <FeatherIcon icon="sun" data-testid="sun" />
            {!isMobile && <span>Highlight</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[150px]"} ${
              isTaskEmpty ? "disabled" : ""
            }`}
            disabled={isTaskEmpty}
          >
            <CircleIcon className="w-6 h-6" data-testid="circle-icon" />
            {!isMobile && <span>Estimation</span>}
          </button>
        </div>
      </div>
      <div className="flex gap-1">
        {isMobile ? (
          <button
            onClick={() => {
              if (handleIconClick()) {
                setIsEditing(false);
              }
            }}
            className={`bg-customBlue rounded min-w-[75px] icon-button text-white`}
          >
            <FeatherIcon icon={isTaskEmpty ? "x" : "plus"} data-testid={isTaskEmpty ? "x" : "plus"} />
          </button>
        ) : (
          <>
            <button
              className="bg-customGray text-m rounded min-w-[95px]"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (handleIconClick()) {
                  setIsEditing(false);
                }
              }}
              className={`bg-customBlue text-m text-white px-4 py-2 rounded min-w-[75px]`}
            >
              {isTaskEmpty ? "Ok" : "Add"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ButtonBar;

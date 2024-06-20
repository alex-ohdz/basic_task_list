"use client";
import { useEffect, useState } from "react";
import CircleIcon from "@/public/icons/Circle.svg";
import LightIcon from "@/public/icons/Light.svg";
import FeatherIcon from "@/components/FeatherIcon";

function ButtonBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1230);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="flex justify-between items-center p-2">
      <div className={`flex ${isMobile ? "sm:gap-10 gap-3" : "gap-8"} text-m`}>
        <button
          className={`flex items-center gap-3 bg_gray h-10 justify-center rounded ${
            isMobile ? "icon-button" : "min-w-[111px]"
          }`}
        >
          <FeatherIcon icon="maximize-2" testid="maximize-2" />
          {!isMobile && <span>Open</span>}
        </button>
        <div className="flex gap-1">
           <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[117px]"}`}
          >
            <FeatherIcon icon="calendar" testid="calendar" />
            {!isMobile && <span>Today</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[119px]"}`}
          >
            <FeatherIcon icon="unlock" testid="unlock" />
            {!isMobile && <span>Public</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[139px]"}`}
          >
            <LightIcon className="w-6 h-6" testid="light-icon" />
            {!isMobile && <span>Highlight</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[150px]"}`}
          >
            <CircleIcon className="w-6 h-6" testid="circle-icon" />
            {!isMobile && <span>Estimation</span>}
          </button>
        </div>
      </div>
      <div className="flex gap-1">
        {isMobile ? (
          <button className="bg-customBlue rounded min-w-[75px] icon-button text-white">
            <FeatherIcon icon="plus" testid="plus" />
          </button>
        ) : (
          <>
            <button className="bg-customGray text-m rounded min-w-[95px]">
              Cancel
            </button>
            <button className="bg-customBlue text-m text-white px-4 py-2 rounded min-w-[75px]">
              Ok
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ButtonBar;

"use client";
import { useEffect, useState } from "react";
import feather from "feather-icons";
import CircleIcon from "@/public/icons/Circle.svg";
import LightIcon from "@/public/icons/Light.svg";

function ButtonBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    feather.replace();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1230);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    feather.replace();
  }, [isMobile]);

  return (
    <div className="flex justify-between items-center p-2">
      <div className={`flex ${isMobile ? "sm:gap-10 gap-3" : "gap-8"} text-m`}>
        <button
          className={`flex items-center gap-3 bg_gray h-10 justify-center rounded ${
            isMobile ? "icon-button ml-auto" : "min-w-[111px]"
          }`}
        >
          <i data-feather="maximize-2" testid="maximize-2"></i>
          {!isMobile && <span>Open</span>}
        </button>
        <div className="flex gap-1">
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[117px]"}`}
          >
            <i
              data-feather="calendar"
              className="customGray"
              testid="calendar"
            ></i>
            {!isMobile && <span>Today</span>}
          </button>
          <button
            className={`btnBar ${isMobile ? "icon-button" : "min-w-[119px]"}`}
          >
            <i data-feather="unlock" testid="unlock"></i>
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
            <i data-feather="plus" testid="plus"></i>
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

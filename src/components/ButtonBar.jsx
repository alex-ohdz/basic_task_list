"use client";
import { useEffect } from "react";
import feather from "feather-icons";
import CircleIcon from "@/public/icons/Circle.svg";
import LightIcon from "@/public/icons/Light.svg";

function ButtonBar() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="flex justify-between items-center p-2 border-t shadow-custom1">
      <div className="flex gap-8 text-m">
        <button className="flex items-center gap-3 bg_gray h-10 w-[111px] justify-center rounded">
          <i data-feather="maximize-2"></i>
          <span>Open</span>
        </button>
        <div className="flex gap-1">
          <button className="btnBar min-w-[117px]">
            <i data-feather="calendar" className="customGray"></i>
            <span>Today</span>
          </button>
          <button className="btnBar min-w-[119px]">
            <i data-feather="unlock"></i>
            <span>Public</span>
          </button>
          <button className="btnBar min-w-[139px]">
            <LightIcon className="w-6 h-6" />
            <span>Highlight</span>
          </button>
          <button className="btnBar min-w-[150px]">
            <CircleIcon className="w-6 h-6" />
            <span>Estimation</span>
          </button>
        </div>
      </div>
      <div className="flex gap-1">
        <button className="bg-customGray text-m rounded min-w-[95px]">Cancel</button>
        <button className="bg-customBlue text-m text-white px-4 py-2 rounded min-w-[75px]">
          Add
        </button>
      </div>
    </div>
  );
}

export default ButtonBar;

export default function Task() {
  return (
    <div className="flex">
      <div className="flex items-center w-[1328px] space-x-3 ml-14 mt-2">
        <button className="flex items-center space-x-2">
          <i data-feather="maximize-2 "></i>
          <span className="text-m text-blue-gray ">Open</span>
        </button>
      </div>
      <div>
        <button>
          <i data-feather="calendar"></i>
          <span>Today</span>
        </button>
        <button>
          <i data-feather="unlock"></i>
          <span>Today</span>
        </button>
        <button>
          <i data-feather="count-circle-0"></i>
          <span>Estimation</span>
        </button>
      </div>
    </div>
  );
}

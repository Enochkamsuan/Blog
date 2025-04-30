import React, { useState } from "react";
import idleImages from "./assets/images/todo.png";
import { HiPlus } from "react-icons/hi2";

const Main = () => {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(true);
  };
  return (
    <div>
      <div className="bg-black h-screen w-full relative py-6">
        <div className="text-center text-white font-bold text-2xl">
          To Do List
        </div>
        {showInput ? (
          <div className="relative left-1/2 top-[26px] -translate-x-1/2 w-[45%]">
            <div>
              <input
                type="text"
                className="bg-white focus:outline-none w-full rounded-md py-5 px-3"
                placeholder="Add your tasks"
              />
            </div>
            <div className="flex justify-between">
              <div className="text-sm absolute top-[1px] left-[12px]">
                Cancel
              </div>
              <div className="text-sm absolute top-[1px] right-[16px]">
                Save
              </div>
            </div>
          </div>
        ) : null}
        {!showInput && (
          <div className="flex justify-center items-center">
            <img src={idleImages} alt="idleImages" className="w-[40%]" />
          </div>
        )}

        {!showInput && (
          <div className="absolute right-[18em] top-[30em]">
            <button
              onClick={handleClick}
              className="bg-gray-800 w-15 h-15 rounded-full p-3"
            >
              <HiPlus className="text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;

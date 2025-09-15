import React from "react";
import { VscSymbolColor } from "react-icons/vsc";

const Personalization = ({ setBackground }) => {
  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <h1 className="text-2xl mb-2">Personalization</h1>
      <div>
        <h2>Theme</h2>
        <h3 className="text-[14px] text-gray-300/60">App color theme</h3>
        <label
          htmlFor="theme"
          className="max-w-[200px] flex items-center gap-1 py-2 px-6 mt-2 rounded-lg cursor-pointer bg-[rgba(59,60,59,255)]"
        >
          <VscSymbolColor style={{ fontSize: "20px" }} />
          <select
            name="theme"
            id="theme"
            className="  outline-none focus:outline-none text-[14px] bg-[rgba(59,60,59,255)]"
          >
            <option value="System Default">System Default</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <div>
        <div>
          <p className="text-lg">Chat wallpaper</p>
          <div className="flex flex-wrap gap-3 mt-2">
            <div
              onClick={() => setBackground("bg-red-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-red-500"
            ></div>
            <div
              onClick={() => setBackground("bg-green-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-green-500"
            ></div>
            <div
              onClick={() => setBackground("bg-yellow-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-yellow-500"
            ></div>
            <div
              onClick={() => setBackground("bg-pink-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-pink-500"
            ></div>
            <div
              onClick={() => setBackground("bg-blue-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-blue-500"
            ></div>
            <div
              onClick={() => setBackground("bg-orange-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-orange-500"
            ></div>
            <div
              onClick={() => setBackground("bg-purple-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-purple-500"
            ></div>
            <div
              onClick={() => setBackground("bg-indigo-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-indigo-500"
            ></div>
            <div
              onClick={() => setBackground("bg-cyan-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-cyan-500"
            ></div>
            <div
              onClick={() => setBackground("bg-teal-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-teal-500"
            ></div>
            <div
              onClick={() => setBackground("bg-lime-500")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-lime-500"
            ></div>
            <div
              onClick={() => setBackground("bg-blue-800")}
              className="cursor-pointer rounded-md h-[50px] w-[50px] bg-blue-800"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex">
        <label htmlFor="doodle" className="flex items-center gap-2">
          <input type="checkbox" id="doodle" className="w-4 h-5" />
          ArunApp Doodle
        </label>
      </div>
    </div>
  );
};

export default Personalization;

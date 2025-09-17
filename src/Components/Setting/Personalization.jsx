import React from "react";
import { VscSymbolColor } from "react-icons/vsc";

const Personalization = ({ setBackground }) => {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto h-full">
      <h1 className="text-xl mb-2">Personalization</h1>
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
            className="outline-none focus:outline-none text-[14px] bg-[rgba(59,60,59,255)]"
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
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-red-500"
            ></div>
            <div
              onClick={() => setBackground("bg-green-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-green-500"
            ></div>
            <div
              onClick={() => setBackground("bg-yellow-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-yellow-500"
            ></div>
            <div
              onClick={() => setBackground("bg-pink-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-pink-500"
            ></div>
            <div
              onClick={() => setBackground("bg-blue-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-blue-500"
            ></div>
            <div
              onClick={() => setBackground("bg-orange-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-orange-500"
            ></div>
            <div
              onClick={() => setBackground("bg-purple-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-purple-500"
            ></div>
            <div
              onClick={() => setBackground("bg-indigo-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-indigo-500"
            ></div>
            <div
              onClick={() => setBackground("bg-cyan-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-cyan-500"
            ></div>
            <div
              onClick={() => setBackground("bg-teal-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-teal-500"
            ></div>
            <div
              onClick={() => setBackground("bg-lime-500")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-lime-500"
            ></div>
            <div
              onClick={() => setBackground("bg-blue-800")}
              className="hover:border-2 border-white cursor-pointer rounded-md h-[50px] w-[50px] bg-blue-800"
            ></div>
          </div>
        </div>
      </div>
      <div className="flex">
        <label htmlFor="doodle" className="flex items-center gap-2">
          <input
            type="checkbox"
            id="doodle"
            className="w-4 h-5"
            defaultChecked={true}
          />
          ArunApp Doodle
        </label>
      </div>
      <button
        onClick={() =>
          setBackground("bg-[url('/chat-backgrounds/chat-bg.jpg')]")
        }
        className="px-3 py-1.5 bg-[rgba(60,60,60,255)] w-[120px] rounded-lg cursor-pointer"
      >
        Reset
      </button>
      <div className="flex flex-col gap-1.5">
        <p className="text-xl">Text Size</p>
        <select
          name="text-size"
          id="text-size"
          className="bg-[rgba(60,60,60,255)] px-3 py-2 outline-0 focus:outline-0 max-w-[200px] rounded-md cursor-pointer"
        >
          <option value="150%">150%</option>
          <option value="140%">140%</option>
          <option value="120%">130%</option>
          <option value="120%">120%</option>
          <option value="110%">110%</option>
          <option value="100%">100%</option>
          <option value="90%">90%</option>
          <option value="80%">80%</option>
          <option value="70%">70%</option>
          <option value="60%">60%</option>
          <option value="50%">50%</option>
          <option value="40%">40%</option>
          <option value="30%">30%</option>
          <option value="20%">20%</option>
          <option value="10%">10%</option>
        </select>
        <p className="text-[14px] text-gray-300/80 leading-4">
          Use ctrl +/- to increase or decrease your text size
        </p>
      </div>
    </div>
  );
};

export default Personalization;

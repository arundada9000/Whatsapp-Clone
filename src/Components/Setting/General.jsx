import React, { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
import { IoToggleSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

const General = () => {
  const [startAtLogin, setStartAtLogin] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">General</h1>
      <h2>Login</h2>
      <div className="flex items-center justify-between">
        <p
          className={`${startAtLogin ? "text-white" : "text-gray-300"} text-sm`}
        >
          Start ArunApp at Login
        </p>

        {startAtLogin && (
          <div
            className="flex gap-2 text-green-500 items-center"
            onClick={() => setStartAtLogin(!startAtLogin)}
          >
            <label>On</label>
            <IoToggleSharp style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        )}

        {!startAtLogin && (
          <div
            className="flex gap-2 text-gray-200 items-center"
            onClick={() => setStartAtLogin(!startAtLogin)}
          >
            <label>Off</label>
            <FaToggleOff style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        )}
      </div>
      <h2 className="text-xl">Language</h2>
      <div className="bg-[rgba(60,60,60,255)] px-4 py-2 flex items-center gap-3 w-fit rounded-md">
        <CiGlobe style={{ fontSize: "25px" }} />
        <select
          name="Language"
          id="language"
          className="outline-none focus:outline-none"
        >
          <option value="System Default">System Default</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Nepali">Nepali</option>
        </select>
      </div>
    </div>
  );
};

export default General;

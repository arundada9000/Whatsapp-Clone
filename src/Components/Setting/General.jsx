import React, { useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
import { IoToggleSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

const General = () => {
  const [startAtLogin, setStartAtLogin] = useState(false);
  const [emojiReplace, setEmojiReplace] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl">General</h1>
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
      <h2 className="text-xl">Typing</h2>
      <p className="text-[12px] text-gray-300">
        Change typing settings for <strong>autocorrect</strong> and{" "}
        <strong>misspelled highlight</strong> from{" "}
        <a
          className="text-green-500 border-b-1 border-green cursor-pointer hover:border-0"
          href="#"
        >
          Windows Settings.
        </a>
      </p>
      <h2 className="text-md">Replace text with emoji</h2>
      <div className="flex items-center justify-between">
        <p className="text-[12px] text-gray-300 w-[180px] text-wrap">
          Emoji will replace specific text as you type
        </p>
        <div className="flex items-center gap-3">
          <span>😁</span>
          {emojiReplace && (
            <div
              className="flex gap-2 text-green-500 items-center"
              onClick={() => setEmojiReplace(!emojiReplace)}
            >
              <IoToggleSharp style={{ fontSize: "25px", cursor: "pointer" }} />
            </div>
          )}

          {!emojiReplace && (
            <div
              className="flex gap-2 text-gray-200 items-center"
              onClick={() => setEmojiReplace(!emojiReplace)}
            >
              <FaToggleOff style={{ fontSize: "25px", cursor: "pointer" }} />
            </div>
          )}
        </div>
      </div>
      <div className="w-full border-b-1 border-white/30"></div>
      <p className="text-[12px] text-gray-300">
        To log out of ArunApp on this computer go to your{" "}
        <a
          href="#"
          className="text-green-500 border-b-1 border-green cursor-pointer hover:border-0"
        >
          Profile
        </a>
      </p>
    </div>
  );
};

export default General;

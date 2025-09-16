import React from "react";
import { PiDesktopTowerLight } from "react-icons/pi";

const Chats = () => {
  return (
    <div className="flex flex-col gap-6 overflow-auto">
      <h1 className="text-xl">Chats</h1>
      <div>
        <h2 className="text-xl">Chat history</h2>
        <div className="flex items-center text-sm gap-2.5">
          <PiDesktopTowerLight
            style={{ fontSize: "20px", cursor: "pointer" }}
          />
          <p>Synced with your phone</p>
        </div>
      </div>
      <div>
        <button className="px-2 py-1 bg-[rgba(59,60,59,255)] text-[14px] cursor-pointer">
          Archive all chats
        </button>
        <p className="text-[14px] text-gray-300/80 leading-none mt-2 ">
          You will still receive new messages from archived chats
        </p>
      </div>
      <div>
        <button className="px-2 py-1 bg-[rgba(59,60,59,255)] text-red-300 text-[14px] cursor-pointer">
          Clear all messages
        </button>
        <p className="text-[14px] text-gray-300/80 leading-none mt-2">
          Delete all messages from chat and groups
        </p>
      </div>
      <div>
        <button className="px-2 py-1 bg-[rgba(59,60,59,255)] text-red-300 text-[14px] cursor-pointer">
          Delete all chats
        </button>
        <p className="text-[14px] text-gray-300/80 leading-none mt-2">
          Delete all messages clear the chats from your history
        </p>
      </div>
    </div>
  );
};

export default Chats;

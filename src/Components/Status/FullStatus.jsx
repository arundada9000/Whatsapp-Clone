import React from "react";
import { LuLock } from "react-icons/lu";

const FullStatus = () => {
  return (
    <div
      className={`fixed top-[41px] left-[400px] right-0 bottom-0 flex flex-col items-center justify-center text-white 
    bg-[rgba(44,44,44,255)] 
    `}
    >
      <h1 className="text-sm text-white/60">
        Click on a contact to view their status updates
      </h1>
      <div className="flex items-center pl-15 gap-1 text-sm text-white/60 fixed bottom-10 left-1/2">
        <LuLock style={{ fontSize: "12px" }} />
        <p>Status updates are end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default FullStatus;

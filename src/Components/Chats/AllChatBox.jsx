import React from "react";
import UserChats from "./UserChats";
import { IoCreateOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";

const AllChatBox = ({ fullChatData, setFullChatData }) => {
  return (
    <div className="min-h-screen pl-[61px] pt-[57px] max-h-screen overflow-auto w-[400px] bg-[rgba(44,44,44,255)] text-white p-6 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Chats</h1>
        <div className="flex items-center gap-1">
          <div className="hover:bg-[rgba(58,58,58,255)] cursor-pointer rounded-md p-3">
            <IoCreateOutline style={{ fontSize: "18px", cursor: "pointer" }} />
          </div>
          <div className="hover:bg-[rgba(58,58,58,255)] cursor-pointer rounded-md p-3">
            <IoFilterOutline style={{ fontSize: "18px", cursor: "pointer" }} />
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2 items-center px-4 py-1 bg-[rgba(34,34,34,255)] border-b-3 border-[rgba(27,157,90,255)] rounded-md">
        <VscSearch style={{ fontSize: "14px", cursor: "pointer" }} />
        <input
          type="text"
          placeholder="Search or Start a new chat"
          className="w-90 outline-none focus:outline-none"
        />
      </div>
      <UserChats setFullChatData={setFullChatData} />
    </div>
  );
};

export default AllChatBox;

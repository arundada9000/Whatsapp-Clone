import React from "react";
import UserCalls from "./UserCalls";
import { BsTelephonePlus } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineUserAdd } from "react-icons/ai";

const AllCalls = () => {
  return (
    <div className="min-h-screen pl-[61px] pt-[57px] max-h-screen overflow-auto w-[400px] bg-[rgba(44,44,44,255)] text-white p-6 flex flex-col border-r-1 border-black">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Calls</h1>
        <div className="flex items-center gap-1">
          <div className="hover:bg-[rgba(58,58,58,255)] cursor-pointer rounded-md p-3">
            <BsTelephonePlus style={{ fontSize: "18px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 items-center px-4 py-1 bg-[rgba(34,34,34,255)] border-b-3 border-[rgba(27,157,90,255)] rounded-md">
        <VscSearch style={{ fontSize: "14px", cursor: "pointer" }} />
        <input
          type="text"
          placeholder="Search or Start a new call"
          className="w-90 outline-none focus:outline-none"
        />
      </div>
      <div className="mt-2 bg-[rgba(44,44,44,255)] hover:bg-[rgba(58,58,58,255)] border-y-4 border-black">
        <p className="pl-1 text-white/60">Favorites</p>
        <div className="p-4 pl-1 flex items-center gap-4">
          <div className="flex items-center justify-center p-4 rounded-full bg-[rgba(56,56,56,255)]">
            <AiOutlineUserAdd style={{ fontSize: "20px" }} />
          </div>
          <div>Add favorite</div>
        </div>
      </div>
      <div>
        <p className="text-white/60">Recent</p>
      </div>
      <UserCalls />
    </div>
  );
};

export default AllCalls;

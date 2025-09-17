import React from "react";
import { VscSearch } from "react-icons/vsc";

const AllStarred = () => {
  return (
    <div className="min-h-screen pl-[61px] pt-[57px] max-h-screen overflow-auto w-[400px] bg-[rgba(44,44,44,255)] text-white p-6 flex flex-col border-r-1 border-black">
      <h1 className="text-xl">Archived</h1>
      <div className="flex gap-2 mt-2 items-center px-4 py-1 bg-[rgba(34,34,34,255)] border-b-3 border-[rgba(27,157,90,255)] rounded-md">
        <VscSearch style={{ fontSize: "14px", cursor: "pointer" }} />
        <input
          type="text"
          placeholder="Search archived messages"
          className="w-90 outline-none focus:outline-none"
        />
      </div>
      <div className="flex-1 flex items-center justify-center text-white/60">
        No results
      </div>
    </div>
  );
};
export default AllStarred;

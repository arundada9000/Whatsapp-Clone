import React from "react";
import { CgProfile } from "react-icons/cg";

const AllStatus = () => {
  return (
    <div className="min-h-screen pl-[66px] pt-[57px] max-h-screen overflow-auto w-[400px] bg-[rgba(44,44,44,255)] text-white p-6 flex flex-col gap-5 border-r-1 border-black">
      <h1 className="text-xl">Status</h1>
      <div className="flex items-center gap-2">
        <CgProfile style={{ fontSize: "50px", color: "white" }} />
        <div className="flex flex-col gap-0">
          <p className="text-md text-white">My status</p>
          <p className="text-md text-white/80">No updates</p>
        </div>
      </div>
      <div className="text-center text-white/80 text-md">
        No contact updates
      </div>
    </div>
  );
};
export default AllStatus;

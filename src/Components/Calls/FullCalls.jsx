import React from "react";
import { FaVideo } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";
import { IoMdKeypad } from "react-icons/io";

const FullCalls = () => {
  return (
    <div
      className={`fixed top-[41px] left-[400px] right-0 bottom-0 flex items-center justify-center text-white 
    bg-[rgba(44,44,44,255)] 
    `}
    >
      <div className="flex items-center gap-15">
        <div className="flex items-center justify-center p-4 rounded-2xl bg-[rgba(56,56,56,255)] hover:bg-[rgba(61,61,61,255)] cursor-pointer">
          <FaVideo style={{ fontSize: "40px", color: "rgba(29,170,97,255)" }} />
        </div>
        <div className="flex items-center justify-center p-4 rounded-2xl bg-[rgba(56,56,56,255)] hover:bg-[rgba(61,61,61,255)] cursor-pointer relative">
          <CiVideoOn style={{ fontSize: "40px", color: "white" }} />
          <IoLinkOutline
            style={{
              fontSize: "18px",
              color: "white",
              position: "absolute",
              bottom: "16px",
              left: "16px",
              font: "bold",
              zIndex: "5",
            }}
          />
        </div>
        <div className="flex items-center justify-center p-4 rounded-2xl bg-[rgba(56,56,56,255)] hover:bg-[rgba(61,61,61,255)] cursor-pointer">
          <IoMdKeypad style={{ fontSize: "40px", color: "white" }} />
        </div>
      </div>
    </div>
  );
};
export default FullCalls;

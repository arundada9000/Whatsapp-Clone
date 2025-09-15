import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiChatCircleDots } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { LuArchive } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ settingOpen, setSettingOpen }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleHamburgerClick = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div
      className={`fixed top-8 pt-8 left-0 bottom-0 z-40 ${
        sideBarOpen
          ? "w-[220px] bg-[rgba(47,48,45,255)]"
          : "w-[45px] bg-[rgba(32,32,32,255)]"
      } overflow-x-hidden transition-all duration-100 ease-in-out`}
    >
      <div className={` flex flex-col text-white w-[200px]`}>
        <div
          onClick={handleHamburgerClick}
          className="p-3 hover:bg-[rgba(45,45,45,255)] border-l-2 border-[rgba(27,157,90,255)]"
        >
          <RxHamburgerMenu style={{ fontSize: "18px", cursor: "pointer" }} />
        </div>
        <div className="flex flex-col mt-8 ">
          <div>
            <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
              <PiChatCircleDots
                style={{ fontSize: "18px", cursor: "pointer" }}
              />
              <p className="text-sm cursor-pointer">Chats</p>
            </div>
            <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
              <IoCallOutline style={{ fontSize: "18px", cursor: "pointer" }} />
              <p className="text-sm cursor-pointer">Calls</p>
            </div>
            <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
              <IoIosAddCircleOutline
                style={{ fontSize: "18px", cursor: "pointer" }}
              />
              <p className="text-sm cursor-pointer">Status</p>
            </div>
          </div>
          <div className="mt-10">
            <div>
              <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
                <CiStar style={{ fontSize: "18px", cursor: "pointer" }} />
                <p className="text-sm cursor-pointer">Starred Message</p>
              </div>
              <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
                <LuArchive style={{ fontSize: "18px", cursor: "pointer" }} />
                <p className="text-sm cursor-pointer">Archived Chats</p>
              </div>
              <div className="p-1.5">
                <div className="border-1 border-white/20"></div>
              </div>
            </div>
            <div onClick={() => setSettingOpen(!settingOpen)}>
              <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
                <IoSettingsOutline
                  style={{ fontSize: "18px", cursor: "pointer" }}
                />
                <p className="text-sm cursor-pointer">Settings</p>
              </div>
              <div className="w-full p-3 hover:bg-[rgba(45,45,45,255)] flex items-center gap-4">
                <CgProfile style={{ fontSize: "18px", cursor: "pointer" }} />
                <p className="text-sm cursor-pointer">Profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

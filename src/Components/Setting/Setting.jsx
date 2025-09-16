import React from "react";
import { LuLaptopMinimal } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";
import { RiChatSmile2Line } from "react-icons/ri";
import { CiVideoOn } from "react-icons/ci";
import { GrNotification } from "react-icons/gr";
import { BsBrush } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { LuKeyboard } from "react-icons/lu";
import { MdInfoOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import General from "./General";
import Account from "./Account";
import Chats from "./Chats";
import VideoVoice from "./VideoVoice";
import Notifications from "./Notifications";
import Personalization from "./Personalization";
import Storage from "./Storage";
import Shortcuts from "./Shortcuts";
import Help from "./Help";
import Profile from "./Profile";

const Setting = ({ settingOpen, setBackground, activeTab, setActiveTab }) => {
  return (
    <div
      className={`flex rounded-sm fixed bottom-1 left-[50px] z-40 text-white  ${
        settingOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col rounded-sm p-1 w-[180px] bg-[rgba(47,47,47,255)] ">
        <div
          onClick={() => setActiveTab("General")}
          className={`py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]
          ${
            activeTab === "General"
              ? "bg-[rgba(59,60,59,255)]"
              : "hover:bg-[rgba(59,60,59,255)]"
          }
          `}
        >
          <div
            className={` ${
              activeTab === "General"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-l-0"
            }`}
          ></div>
          <LuLaptopMinimal style={{ fontSize: "20px", color: "white" }} />
          <div>General</div>
        </div>
        <div
          onClick={() => setActiveTab("Account")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Account"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <IoKeyOutline style={{ fontSize: "20px", color: "white" }} />
          <div>Account</div>
        </div>
        <div
          onClick={() => setActiveTab("Chats")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Chats"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <RiChatSmile2Line style={{ fontSize: "20px", color: "white" }} />
          <div>Chats</div>
        </div>
        <div
          onClick={() => setActiveTab("VideoVoice")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "VideoVoice"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <CiVideoOn style={{ fontSize: "20px", color: "white" }} />
          <div>Video & Voice</div>
        </div>
        <div
          onClick={() => setActiveTab("Notifications")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Notifications"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <GrNotification style={{ fontSize: "20px", color: "white" }} />
          <div>Notifications</div>
        </div>
        <div
          onClick={() => setActiveTab("Personalization")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Personalization"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <BsBrush style={{ fontSize: "20px", color: "white" }} />
          <div>Personalization</div>
        </div>
        <div
          onClick={() => setActiveTab("Storage")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Storage"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <AiOutlineDatabase style={{ fontSize: "20px", color: "white" }} />
          <div>Storage</div>
        </div>
        <div
          onClick={() => setActiveTab("Shortcuts")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Shortcuts"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <LuKeyboard style={{ fontSize: "20px", color: "white" }} />
          <div>Shortcuts</div>
        </div>
        <div
          onClick={() => setActiveTab("Help")}
          className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Help"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <MdInfoOutline style={{ fontSize: "20px", color: "white" }} />
          <div>Help</div>
        </div>
        <div
          onClick={() => setActiveTab("Profile")}
          className="mt-22 py-2 px-1 text-sm cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]"
        >
          <div
            className={` ${
              activeTab === "Profile"
                ? "border-l-3 border-[rgba(29,170,97,255)]"
                : " border-transparent"
            }`}
          ></div>
          <CgProfile style={{ fontSize: "20px", color: "white" }} />
          <div>Profile</div>
        </div>
      </div>
      <div className="bg-[rgba(48,48,48,255)] w-[300px] p-4 rounded-sm h-[500px] overflow-auto">
        {activeTab === "General" && <General />}
        {activeTab === "Account" && <Account />}
        {activeTab === "Chats" && <Chats />}
        {activeTab === "VideoVoice" && <VideoVoice />}
        {activeTab === "Notifications" && <Notifications />}
        {activeTab === "Personalization" && (
          <Personalization setBackground={setBackground} />
        )}
        {activeTab === "Storage" && <Storage />}
        {activeTab === "Shortcuts" && <Shortcuts />}
        {activeTab === "Help" && <Help />}
        {activeTab === "Profile" && <Profile />}
      </div>
    </div>
  );
};

export default Setting;

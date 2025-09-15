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

const Setting = ({ settingOpen }) => {
  return (
    <div
      className={`flex rounded-sm fixed bottom-1 left-[50px] z-40 text-white  ${
        settingOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col rounded-sm p-1 w-[180px] bg-[rgba(47,47,47,255)] ">
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="border-l-3 border-[rgba(29,170,97,255)]"></div>
          <LuLaptopMinimal style={{ fontSize: "20px", color: "white" }} />
          <div>General</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <IoKeyOutline style={{ fontSize: "20px", color: "white" }} />
          <div>Account</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <RiChatSmile2Line style={{ fontSize: "20px", color: "white" }} />
          <div>Chats</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <CiVideoOn style={{ fontSize: "20px", color: "white" }} />
          <div>Video & Voice</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <GrNotification style={{ fontSize: "20px", color: "white" }} />
          <div>Notifications</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <BsBrush style={{ fontSize: "20px", color: "white" }} />
          <div>Personalization</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <AiOutlineDatabase style={{ fontSize: "20px", color: "white" }} />
          <div>Storage</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <LuKeyboard style={{ fontSize: "20px", color: "white" }} />
          <div>Shortcuts</div>
        </div>
        <div className=" py-2 px-1 text-md cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <MdInfoOutline style={{ fontSize: "20px", color: "white" }} />
          <div>Help</div>
        </div>
        <div className="mt-22 py-2 px-1 text-sm cursor-pointer flex gap-3 rounded-sm hover:bg-[rgba(59,60,59,255)]">
          <div className="hidden border-l-3 border-[rgba(29,170,97,255)]"></div>
          <CgProfile style={{ fontSize: "20px", color: "white" }} />
          <div>Profile</div>
        </div>
      </div>
      <div className="bg-[rgba(48,48,48,255)] w-[300px] p-4 rounded-sm">
        <General />
      </div>
    </div>
  );
};

export default Setting;

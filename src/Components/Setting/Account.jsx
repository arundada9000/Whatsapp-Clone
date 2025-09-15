import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { GoPaperclip } from "react-icons/go";
import { GrLocationPin } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaToggleOff } from "react-icons/fa6";
import { IoToggleSharp } from "react-icons/io5";

const Account = () => {
  const [computer, setComputer] = useState(false);
  return (
    <div className="flex flex-col gap-5 overflow-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Account</h1>
        <h2>Privacy</h2>
        <i className="font-normal ">Managed on your phone</i>
        <p className="text-sm">
          <span className="text-gray-300/60">Last seen and online</span> <br />
          My contacts, everyone
        </p>
        <p className="text-sm">
          <span className="text-gray-300/60"> Profile photo</span> <br />
          Everyone
        </p>
        <p className="text-sm">
          <span className="text-gray-300/60"> About</span> <br />
          My contacts
        </p>
        <p className="text-sm">
          <span className="text-gray-300/60"> Add to group</span> <br />
          Everyone
        </p>
        <p className="text-sm">
          <span className="text-gray-300/60">Read Receipts</span> <br />
          On <br />
          <span className="text-gray-300/60 text-[12px]">
            Read Receipts are always sent for group chats
          </span>
        </p>
      </div>
      <div className="border-b-1 border-white/20 "></div>
      <div className="flex flex-col gap-1">
        <h2>Blocked contacts</h2>
        <i className="font-normal ">Managed on your phone</i>
        <p className="text-[12px]">No Blocked Contact</p>
      </div>
      <div className="border-b-1 border-white/20 "></div>
      <div className="flex flex-col gap-1">
        <h2>Security</h2>
        <p className="text-sm">Your chats and calls are private</p>
        <p className="text-[12px] text-gray-200">
          End-to-end encryption keeps your personal messages and calls between
          you and the people you choose. No one outside of the chat, not even
          ArunApp, can read, listen to, or share them. This includes your:
        </p>
        <div className="flex flex-col gap-1 text-white/80 text-sm">
          <div className="flex items-center gap-3">
            <BsChatText style={{ fontSize: "16px" }} />
            <p>Text and voice messages</p>
          </div>
          <div className="flex items-center gap-3">
            <IoCallOutline style={{ fontSize: "16px" }} />
            <p>Audio and Video calls</p>
          </div>
          <div className="flex items-center gap-3">
            <GoPaperclip style={{ fontSize: "16px" }} />
            <p>Photos, videos and documents</p>
          </div>
          <div className="flex items-center gap-3">
            <GrLocationPin style={{ fontSize: "16px" }} />
            <p>Location sharing</p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosAddCircleOutline style={{ fontSize: "16px" }} />
            <p>Status updates</p>
          </div>
          <a
            href="#"
            className="text-green-500 border-b-1 border-green cursor-pointer hover:border-0 w-fit text-[14px]"
          >
            Learn More
          </a>
          <p className="text-sm mt-4">
            Show security notifications on this computer
          </p>
          {computer && (
            <div className="flex items-center gap-2 text-gray-300 text-md">
              <IoToggleSharp
                onClick={() => setComputer(!computer)}
                style={{ fontSize: "25px", cursor: "pointer", color: "green" }}
              />
              On
            </div>
          )}
          {!computer && (
            <div className="flex items-center gap-2 text-gray-500 text-md">
              <FaToggleOff
                onClick={() => setComputer(!computer)}
                style={{ fontSize: "25px", cursor: "pointer", color: "white" }}
              />
              Off
            </div>
          )}
          <p className="text-[12px]">
            Get notified when your security code changes for a contact's
            phone.If you have multiple devices, this setting must be enabled on
            each device where you want to get notifications.{" "}
            <a
              href="#"
              className="text-green-500 border-b-1 border-green cursor-pointer hover:border-0 w-fit text-[12px]"
            >
              Learn More
            </a>
          </p>
        </div>
      </div>
      <div className="border-b-1 border-white/20 "></div>
      <div>
        <button className="text-sm pr-3 py-1 hover:bg-gray-400/20 cursor-pointer text-green-500">
          How to delete my account
        </button>
      </div>
    </div>
  );
};

export default Account;

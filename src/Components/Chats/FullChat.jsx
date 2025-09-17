import React, { useState, useEffect, useRef } from "react";
import { CiVideoOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoSmiley } from "react-icons/go";
import { PiMicrophoneLight } from "react-icons/pi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";

const FullChat = ({
  fullChatData = {
    src: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Arun Neupane",
  },
  setFullChatData,
  bg,
}) => {
  const [typedValue, setTypedValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [fullChatData.messages]);

  useEffect(() => {
    setFullChatData(fullChatData);
  }, [fullChatData, setFullChatData]);

  const { src, name, messages } = fullChatData;

  if (fullChatData.length === 0)
    return (
      <div
        className="fixed top-[41px] left-[400px] right-0 bottom-0 flex items-center justify-center text-white 
    bg-[rgba(44,44,44,255)] bg-cover bg-center
    "
      >
        <div>
          <div className="flex items-center justify-center">
            <FaWhatsapp style={{ fontSize: "100px" }} />
          </div>
          <h1 className="mb-3 text-center text-white/80 text-2xl font-semibold">
            ArunApp for web
          </h1>
          <h2 className="text-md text-gray-400/80 text-center">
            Send and receive messages without keeping your phone online
          </h2>
          <h2 className="text-md text-gray-400/80 text-center">
            Use ArunApp on up to 4 linked devices and 1 phone at the same time
          </h2>
          <div className="pt-25 flex text-gray-200/40 items-center justify-center text-sm gap-2">
            <div>
              <IoLockClosedOutline />
            </div>
            <div className=" text-center">End-to-end encrypted</div>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={`fixed top-[41px] left-[400px] right-0 bottom-0 flex flex-col text-white 
    ${bg} bg-cover bg-center
    `}
    >
      <div className="flex items-center justify-between bg-[rgba(44,44,44,255)] p-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center ">
            <img
              src={src}
              alt={name}
              className="w-[40px] h-[40px] rounded-full"
            />
          </div>
          <div>{name}</div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-[rgba(52,52,52,255)] rounded-md">
            <div className="flex items-center justify-center py-3 pl-3 cursor-pointer hover:bg-[rgba(64,64,64,255)] rounded-md">
              <div className="flex items-center justify-center border-r-1 border-white pr-3">
                <CiVideoOn
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-center p-3 cursor-pointer hover:bg-[rgba(64,64,64,255)] rounded-md">
              <IoCallOutline
                style={{
                  color: "white",
                  fontSize: "20px",
                }}
              />
            </div>
          </div>
          <div className="ml-2 flex items-center justify-center p-3 cursor-pointer hover:bg-[rgba(64,64,64,255)] rounded-md">
            <CiSearch style={{ color: "white", fontSize: "20px" }} />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesEndRef} className="p-4 overflow-auto pb-14">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">
            Start a conversation
          </div>
        ) : (
          messages.map((message, index) => {
            const { from, text, time, status } = message;

            return (
              <div
                key={index}
                className={`flex w-full mb-2 ${
                  from === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`relative
              max-w-[600px]
              w-fit
              px-4 py-2
              rounded-md
              text-md
              break-words
              ${
                from === "me"
                  ? "bg-[rgba(0,92,75,255)] text-white"
                  : "bg-[rgba(53,53,53,255)] text-white"
              }
              pr-22
            `}
                >
                  {text}
                  <div className="absolute bottom-[8px] right-[20px] text-[12px] text-gray-300">
                    {time}
                  </div>
                  {from === "me" && (
                    <div className="absolute bottom-[8px] right-[5px]">
                      {status === "seen" ? (
                        <IoCheckmarkDoneOutline
                          style={{
                            fontSize: "15px",
                            color: "rgba(30,127,133,255)",
                          }}
                        />
                      ) : status === "delivered" ? (
                        <IoCheckmarkDoneOutline style={{ fontSize: "15px" }} />
                      ) : (
                        <IoCheckmark style={{ fontSize: "15px" }} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="fixed bottom-0 right-0 left-[400px] bg-[rgba(44,44,44,255)] p-1 flex items-center">
        <div className="flex items-center justify-center p-3 cursor-pointer hover:bg-[rgba(64,64,64,255)] rounded-md">
          <GoSmiley
            style={{
              color: "white",
              fontSize: "20px",
            }}
          />
        </div>
        <div className="flex items-center justify-center p-3 cursor-pointer hover:bg-[rgba(64,64,64,255)] rounded-md">
          <AiOutlinePaperClip
            style={{
              color: "white",
              fontSize: "20px",
            }}
          />
        </div>
        <div className="flex-1">
          <input
            value={typedValue}
            onChange={(e) => {
              setTypedValue(e.target.value);
            }}
            type="text"
            placeholder="Type a message"
            className="outline-none focus:outline-none p-2"
          />
        </div>
        <div className="flex items-center justify-center p-3 cursor-pointer hover:bg-[rgba(64,64,64,255)] rounded-md">
          {typedValue === "" && (
            <PiMicrophoneLight
              style={{
                color: "white",
                fontSize: "20px",
              }}
            />
          )}
          {typedValue !== "" && (
            <VscSend
              style={{
                color: "white",
                fontSize: "20px",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default FullChat;


// Smooth scrolling instead of jump
// useEffect(() => {
//   if (messagesEndRef.current) {
//     messagesEndRef.current.scrollTo({
//       top: messagesEndRef.current.scrollHeight,
//       behavior: "smooth" 
//     });
//   }
// }, [fullChatData.messages]);

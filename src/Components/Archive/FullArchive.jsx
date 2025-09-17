import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";

const FullStarred = () => {
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
};
export default FullStarred;

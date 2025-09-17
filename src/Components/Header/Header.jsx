import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[rgba(32,32,32,255)] text-white px-3 py-2">
      <div className="font-semibold text-sm flex gap-3 z-50">
        <FaWhatsapp
          style={{ fontSize: "25px", cursor: "pointer", color: "#25d366" }}
        />
        <span>ArunApp</span>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import License from "./License";

const Help = () => {
  const [licenseOpen, setLicenseOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 overflow-auto">
      <h1 className="text-xl">Help</h1>
      <div>
        <p className="text-xl text-white/90">Whats for Windows</p>
        <p className="text-white/60 text-sm">Version 2.2535.3.0</p>
      </div>
      <div className="border-b-1 border-white/20"></div>
      <div>
        <p className="text-xl text-white/90">Contact Us</p>
        <p className="text-white/60 text-sm leading-4 mt-2">
          We'd like to know your thoughts about this app.
        </p>
        <button className="text-green-400/80 cursor-pointer mt-2 mb-2 text-sm hover:bg-[rgb(59,59,59,255)] rounded-sm transition-all duration-200 py-1 pr-0.5">
          Contact us
        </button>{" "}
        <br />
        <button className="text-green-400/80 cursor-pointer text-sm hover:bg-[rgb(59,59,59,255)] rounded-sm transition-all duration-200 py-1 pr-0.5">
          Rate the app
        </button>
      </div>
      <div className="border-b-1 border-white/20"></div>
      <div className="flex flex-col gap-2">
        <button className="text-green-400/80 cursor-pointer w-fit text-sm hover:bg-[rgb(59,59,59,255)] rounded-sm transition-all duration-200 py-1 pr-0.5">
          Help Center
        </button>
        <button
          onClick={() => setLicenseOpen(true)}
          className="text-green-400/80 cursor-pointer w-fit text-sm hover:bg-[rgb(59,59,59,255)] rounded-sm transition-all duration-200 py-1 pr-0.5"
        >
          Licenses
        </button>
        <button className="text-green-400/80 cursor-pointer w-fit text-sm hover:bg-[rgb(59,59,59,255)] rounded-sm transition-all duration-200 py-1 pr-0.5">
          Terms and Policies
        </button>
      </div>
      <div className="border-b-1 border-white/20"></div>
      <div>2025 &copy; ArunApp inc</div>
      <License licenseOpen={licenseOpen} setLicenseOpen={setLicenseOpen} />
    </div>
  );
};

export default Help;

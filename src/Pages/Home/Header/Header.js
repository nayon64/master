import React from "react";

import { FaEnvelope, FaUser } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex  justify-between items-center mb-4">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Headphone</h1>
        <p>For the top band</p>
      </div>
      <div className="flex items-center">
        <input className="border py-1 px-2 rounded mr-3 border-slate-700" type="text" name="search" id="search" placeholder="search" />
        <div className="flex items-center">
          <FaUser className="text-3xl m-1" />
          <RiAlarmWarningFill className="text-3xl m-1" />
          <FaEnvelope className="text-3xl m-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;

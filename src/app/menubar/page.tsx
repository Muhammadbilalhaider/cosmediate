import Link from "next/link";
import React from "react";

const Menubar = () => {
  return (
    <div className="flex flex-col h-screen space-y-12 bg-[#F9F9FB] p-12 pr-3 w-1/12">
      <div className="flex w-full flex-col justify-center items-center space-y-2">
        <Link href="/pages/dashboard">
          <div className="flex flex-col justify-center items-center">
            <img src="/dashboard.svg" alt="Dashboard" />
            <p className="text-black text-xs">Dashboard</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Link href="/pages/message">
          <div className="flex flex-col justify-center items-center">
            <img src="/msg.svg" alt="Messages" />
            <p className="text-black text-xs">Messages</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Link href="/pages/schedule">
          <div className="flex flex-col justify-center items-center">
            <img src="/schedule.svg" alt="Schedule" />
            <p className="text-black text-xs">Schedule</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Link href="/pages/setting">
          <div className="flex flex-col justify-center items-center">
            <img 
            className="transition-transform duration-700 hover:rotate-180"
            src="/setting.svg" alt="Settings" />
            <p className="text-black text-xs">Settings</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;

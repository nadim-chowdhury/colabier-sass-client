"use client";

import React, { useState } from "react";
import { FaBars, FaTimes, FaUser, FaVideo, FaUpload } from "react-icons/fa"; // Replace icons
import Logo from "@/components/Shared/Logo";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`${
          collapsed ? "w-16" : "w-64"
        } bg-gray-800 text-white transition-all duration-300 ease-in-out shadow-md`}
      >
        <div
          className="logo h-16 flex items-center justify-center bg-gray-700"
          style={{ margin: "16px", borderRadius: "4px" }}
        >
          <Logo className="" />
        </div>
        <div className="mt-4">
          <ul>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FaUser className="mr-3" />
              {!collapsed && <span>User</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FaVideo className="mr-3" />
              {!collapsed && <span>Video</span>}
            </li>
            <li className="flex items-center p-4 hover:bg-gray-700">
              <FaUpload className="mr-3" />
              {!collapsed && <span>Upload</span>}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 bg-gray-100 flex items-center shadow-md">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600 text-xl p-4 focus:outline-none"
          >
            {collapsed ? <FaBars /> : <FaTimes />}
          </button>
          <div className="ml-4">
            <ol className="flex space-x-2 text-sm text-gray-600">
              <li>Home</li>
              <li>/ Dashboard</li>
            </ol>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-white rounded-lg m-4 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;

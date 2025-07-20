'use client';

import { useState } from 'react';
import {
  RiMenuLine,
  RiSearchLine,
  RiNotificationLine,
  RiChat1Line,
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiUserLine
} from 'react-icons/ri';

interface TopBarProps {
  onMenuClick?: () => void;
  userName?: string;
}

export default function TopBar({ onMenuClick, userName = 'Yasin Arafat' }: TopBarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 relative z-10">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Mobile Menu */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <RiMenuLine className="text-gray-600 w-5 h-5" />
          </button>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <RiSearchLine className="text-gray-400 w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search anything here..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
            />
          </div>

          {/* Extra Search Button (sm+) */}
          <button className="hidden sm:block p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <RiSearchLine className="text-gray-600 w-5 h-5" />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2 sm:space-x-4 relative">
          <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <RiNotificationLine className="text-gray-600 w-5 h-5" />
          </button>


          {/* User Info */}
          <div className="relative">
            <div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{getInitials(userName)}</span>
              </div>
              <div className="hidden sm:block text-sm">
                <div className="font-medium">{userName}</div>
                <div className="text-gray-500">Super Admin</div>
              </div>
              <RiArrowDownSLine className="text-gray-600 w-4 h-4" />
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-md z-50">
                <a
                  href="/profile"
                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                >
                  <RiUserLine className="mr-2" /> Profile
                </a>
                <a
                  href="/logout"
                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                >
                  <RiLogoutCircleRLine className="mr-2" /> Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

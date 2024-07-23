import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGift as GiftIcon, FiGrid as LayoutGridIcon, FiUsers as UsersIcon, FiSettings as SettingsIcon, FiCopy as CopyIcon } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch'; 
import { FiSearch } from "react-icons/fi"; // Importing icons from react-icons

import './ToggleSwitch.css'; // Importing the CSS file

const Sidebar = () => {
  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText('ABC123');
    alert('Referral code copied to clipboard!');
  };

  return (
    <aside className="hidden w-64 text-white flex-col p-6 md:flex" style={{ backgroundColor: "#282434", height: '100%' }}>
      <div className="mb-6 text-white flex items-center gap-2">
        <GiftIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold font-helvetica">Invite Rewards</h1>
      </div>
      <nav className="flex text-white flex-col gap-2">
        <Link
          to="/dashboard"
          className="flex items-center text-white gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
          style={{ textDecoration: 'none' }}
        >
          <LayoutGridIcon className="h-4 w-4" />
          Dashboard
        </Link>
        <Link
          to="/rewards"
          className="flex items-center text-white gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
          style={{ textDecoration: 'none' }}
        >
          <GiftIcon className="h-4 w-4" />
          Rewards
        </Link>
        <Link
          to="#"
          className="flex items-center gap-2 text-white rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
          style={{ textDecoration: 'none' }}
        >
          <UsersIcon className="h-4 w-4" />
          Referrals
        </Link>
        <Link
          to="#"
          className="flex text-white items-center gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
          style={{ textDecoration: 'none' }}
        >
          <SettingsIcon className="h-4 w-4" />
          Settings
        </Link>
      </nav>
      <div className="mt-auto grid gap-4 rounded-lg bg-[#282434] p-4">
        <div className="grid gap-1">
          <h3 className="text-sm font-bold font-helvetica">Your Referral Code</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium font-helvetica">ABC123</span>
            <button
              className="bg-transparent p-2 rounded-full"
              onClick={handleCopyReferralCode}
            >
              <CopyIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Component = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkModeStyles = {
    backgroundColor: '#101424',
  };

  const lightModeStyles = {
    backgroundColor: '#ffffff', // Change this to your light mode color if it's not white
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <main className='flex-1 p-8 space-y-6 ' style={isDarkMode ? darkModeStyles : lightModeStyles}>
      <div className=' flex relative px-3 mb-5' style={{ backgroundColor: isDarkMode ? "#101424" : "#282434", left: 0, padding: "10px", borderRadius: "5px" }}>

      <div className=" text-white flex items-center gap-2">
        <GiftIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold font-helvetica">Invicon</h1>
      </div>

         <div className=" absolute top-4 px-3 right-4">
         <label className="switch">
  <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
  <span className="slider round">
    <span className="icon-container">
      {isDarkMode ? <FaSun color="#fff" />  : <FaMoon color="#333" />}
    </span>
  </span>
</label>

        </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 rounded-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <div>
              <div className="font-medium">John Doe</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Invited User1</div>
            </div>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">3 invites</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 rounded-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <div>
              <div className="font-medium">Jane Doe</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Invited User2</div>
            </div>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">2 invites</div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10 rounded-full" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <div>
              <div className="font-medium">Bob Smith</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">Invited User3</div>
            </div>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">1 invite</div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Component;

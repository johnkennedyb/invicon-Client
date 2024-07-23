
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
      <Link
       to="/home"
       style={{ textDecoration: 'none' }}
       >
            <div className="mb-6 text-white items-center justify-center flex items-center gap-2" >

            <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1721763323/00f6d818-53e4-43fd-819d-1efb5932af3c-removebg-preview_jwgmzt.png" alt="" />
      <h1 className="text-xl font-bold mt-2   justify-center  font-helvetica">Invicon Rewards</h1>
        
        </div></Link>  
      
      <nav className="flex text-white flex-col gap-2">
        <Link
          to="/dashboard"
          className="flex items-center text-white gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
          style={{ textDecoration: 'none' }}
        >
          <UsersIcon className="h-4 w-4" />
Invitations        </Link>
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
      <Link
       to="/home"
       style={{ textDecoration: 'none' }}
       >
      <div className=" text-white flex items-center gap-2">
        <GiftIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold font-helvetica">Invicon</h1>
      </div>
      </Link>

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
        
        <div className="w-full  py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col items-start justify-between rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
            >
              <div className="flex-1 ">
                <img
                  src="/placeholder.svg"
                  alt={`Video ${index + 1}`}
                  width={400}
                  height={224}
                  className="aspect-video w-full rounded-lg  object-cover"
                />
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-center text-gray-500 dark:text-gray-400">
            This is just 1% of all that we have, check Instant Access to see everything!
          </p>
          <div className="flex justify-center">
            <button className="border border-gray-400 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
              How to Access
            </button>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
};

export default Component;

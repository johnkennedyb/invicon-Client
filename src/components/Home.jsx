import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGift as GiftIcon, FiGrid as LayoutGridIcon, FiUsers as UsersIcon, FiSettings as SettingsIcon, FiCopy as CopyIcon } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import ToggleSwitch from './ToggleSwitch'; 

import './ToggleSwitch.css'; // Importing the CSS file

const Sidebar = () => {
  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText('ABC123');
    alert('Referral code copied to clipboard!');
  };

  return (
    <aside className="hidden w-64 text-white flex-col p-6 md:flex" style={{ backgroundColor: "#282434" }}>
      <Link
       to="/home"
       style={{ textDecoration: 'none' }}
       >
      <div className="mb-6 text-white flex items-center gap-2">
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
          Invitations
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
    <div className="flex ">
      <Sidebar />
      
      <main className='flex-1 p-8 space-y-6 ' style={isDarkMode ? darkModeStyles : lightModeStyles}>
      <div className=' flex relative px-3 mb-5' style={{ backgroundColor: isDarkMode ? "#101424" : "#282434", left: 0, padding: "10px", borderRadius: "5px" }}>
      <Link
       to="/home"
       style={{ textDecoration: 'none' }}
       >
      <div className=" text-white flex items-center gap-2">
      <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1721763323/00f6d818-53e4-43fd-819d-1efb5932af3c-removebg-preview_jwgmzt.png" alt="" />
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
        
        <div className="max-w-3xl mx-auto mt-12">
          <h1 
            className="text-3xl font-bold"
            style={{ color: isDarkMode ? '#ffffff' : '#1a202c' }}
          >
            Invite Rewards
          </h1>
          <p
            className="text-gray-500"
            style={{ color: isDarkMode ? '#a0aec0' : '#4a5568' }}
          >
            Earn rewards by inviting your friends to join.
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Your Invite Link</h2>
              <p className="text-gray-500 dark:text-gray-400">Share this link with your friends to earn rewards.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-md px-4 py-2 text-lg font-medium text-gray-700 dark:text-white">
                https://example.com/invite/ABCD1234
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Copy
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Invites</h2>
              <p className="text-gray-500 dark:text-gray-400">You have invited a total of 15 people.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-gray-700 dark:text-white">15</div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                View Invites
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-5 md:grid-cols-4 gap-6">
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-center text-gray-700 dark:text-white">Tier 1</div>
              <div className='text-center'> 
                <p className="text-gray-500 dark:text-gray-400">Get 4 Invites or pay</p>
                <p className="text-gray-500 dark:text-gray-400">or pay</p>

                <p className="text-4xl font-bold text-gray-700 dark:text-white">$10</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 text-center p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-700 dark:text-white">Tier 2</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 10 friends</p>
                <p className="text-gray-500 dark:text-gray-400">or pay</p>

                <p className="text-4xl font-bold text-gray-700 dark:text-white">$25</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 text-center p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-700 dark:text-white">Tier 3</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 15 friends</p>
                <p className="text-gray-500 dark:text-gray-400">or pay</p>

                <p className="text-4xl font-bold text-gray-700 dark:text-white">$50</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 text-center p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-700 dark:text-white">Tier 4</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 20 friends</p>
                <p className="text-gray-500 dark:text-gray-400">or pay</p>

                <p className="text-4xl font-bold text-gray-700 dark:text-white">$100</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 text-center p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-700 dark:text-white">Tier 5</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 20 friends</p>
                <p className="text-gray-500 dark:text-gray-400">or pay</p>

                <p className="text-4xl font-bold text-gray-700 dark:text-white">$150</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Component;

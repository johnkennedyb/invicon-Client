import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGift as GiftIcon, FiUsers as UsersIcon, FiSettings as SettingsIcon, FiCopy as CopyIcon } from 'react-icons/fi';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './ToggleSwitch.css'; // Importing the CSS file

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText('ABC123');
    alert('Referral code copied to clipboard!');
  };

  return (
    <aside
      className={`w-64 bg-[#282434] text-white flex flex-col p-6 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative md:block fixed z-40 top-0 bottom-0`}
      style={{ backgroundColor: "#282434" }}
    >
      <div className="flex justify-between items-center mb-6">
        <Link to="/home" style={{ textDecoration: 'none' }}>
          <div className="text-white flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1721763323/00f6d818-53e4-43fd-819d-1efb5932af3c-removebg-preview_jwgmzt.png"
              alt="Invicon Logo"
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold mt-2 font-helvetica">Invicon Rewards</h1>
          </div>
        </Link>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FaTimes className="h-6 w-6 text-white" />
        </button>
      </div>

      <nav className="flex flex-col gap-2 mb-10">
        <Link
          to="/dashboard"
          className="flex text-white items-center gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
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
          className="flex items-center text-white gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
          style={{ textDecoration: 'none' }}
        >
          <SettingsIcon className="h-4 w-4" />
          Settings
        </Link>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 grid gap-4 rounded-lg bg-[#282434] p-4">
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const darkModeStyles = { backgroundColor: '#101424' };
  const lightModeStyles = { backgroundColor: '#ffffff' };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 flex flex-col p-8 overflow-auto" style={isDarkMode ? darkModeStyles : lightModeStyles}>
        
        <div className="flex relative px-3 mb-5 items-center" style={{ backgroundColor: isDarkMode ? '#101424' : '#282434', left: 0, padding: '10px', borderRadius: '5px' }}>
        <div className={`md:hidden fixed left-4 z-50 ${isSidebarOpen ? 'hidden' : ''}`}>
          <button onClick={toggleSidebar}>
            <FaBars className="h-6 w-6 text-white" />
          </button>
        </div>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className="text-white flex items-center gap-2">
              <img src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1721763323/00f6d818-53e4-43fd-819d-1efb5932af3c-removebg-preview_jwgmzt.png" alt="" className="w-8 h-8" />
              <h1 className="text-2xl font-bold font-helvetica">Invicon</h1>
            </div>
          </Link>
          <div className="absolute top-4 px-3 right-4">
            <label className="switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider round">
                <span className="icon-container">{isDarkMode ? <FaSun color="#fff" /> : <FaMoon color="#333" />}</span>
              </span>
            </label>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col overflow-y-auto p-6 space-y-4">
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

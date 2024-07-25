import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiGift as GiftIcon, FiUsers as UsersIcon, FiSettings as SettingsIcon, FiCopy as CopyIcon } from 'react-icons/fi';
import { FaMoon, FaSun, FaBars, FaTimes, FaPlay, FaPause } from 'react-icons/fa';
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
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]);

  const darkModeStyles = { backgroundColor: '#101424' };
  const lightModeStyles = { backgroundColor: '#ffffff' };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePlayPause = (index) => {
    if (playingIndex === index) {
      videoRefs.current[index].pause();
      setPlayingIndex(null);
    } else {
      if (playingIndex !== null) {
        videoRefs.current[playingIndex].pause();
      }
      videoRefs.current[index].play();
      setPlayingIndex(index);
    }
  };

  const videoLinks = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  ];

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className="flex-1 p-8 space-y-6 overflow-auto"
        style={isDarkMode ? darkModeStyles : lightModeStyles}
      >
        <div
          className="flex relative px-3 mb-5 items-center"
          style={{
            backgroundColor: isDarkMode ? '#101424' : '#282434',
            left: 0,
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <div className={`md:hidden fixed left-4 z-50 ${isSidebarOpen ? 'hidden' : ''}`}>
            <button onClick={toggleSidebar}>
              <FaBars className="h-6 w-6 text-white" />
            </button>
          </div>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <div className="text-white flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1721763323/00f6d818-53e4-43fd-819d-1efb5932af3c-removebg-preview_jwgmzt.png"
                alt=""
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold font-helvetica">Invicon</h1>
            </div>
          </Link>
          <div className="absolute top-4 px-3 right-4">
            <label className="switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
              <span className="slider round">
                <span className="icon-container">
                  {isDarkMode ? <FaSun color="#fff" /> : <FaMoon color="#333" />}
                </span>
              </span>
            </label>
          </div>
        </div>
        <h1 className="text-center dark:text-gray-300 text-gray-700 text-4xl" style={{ color: isDarkMode ? '#ffffff' : '#1a202c' }}>
          Preview Rewards
        </h1>
        <div className="w-full pt-4 pb-12 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {videoLinks.map((link, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-start justify-between rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
                >
                  <div className="flex-1 w-full relative">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={link}
                      className="aspect-video w-full h-64 rounded-lg object-cover"
                      controls={false}
                    />
                    <button
                      onClick={() => handlePlayPause(index)}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl"
                    >
                      {playingIndex === index ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-4">
              <p className="text-center text-xl text-gray-500" style={{ color: isDarkMode ? '#ffffff' : '#1a202c' }}>
                Get a lot more of this with higher tier 
              </p>
              <div className="flex pt-3 justify-center">
                <button className="bg-gray-300 hover:bg-blue-600 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                  Get Next Tier
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


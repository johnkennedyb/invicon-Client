import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGift as GiftIcon, FiUsers as UsersIcon, FiSettings as SettingsIcon, FiCopy as CopyIcon } from 'react-icons/fi';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

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
      className="flex items-center text-white  gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
      style={{ textDecoration: 'none' }}
    >
      <GiftIcon className="h-4 w-4" />
      Rewards
    </Link>
    <Link
      to="#"
      className="flex items-center text-white  gap-2 rounded-md px-3 py-2 text-sm font-medium font-helvetica transition-colors hover:bg-muted"
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
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1 p-8 space-y-6" style={isDarkMode ? darkModeStyles : lightModeStyles}>
       
      <div
  className="flex relative px-3 mb-5 items-center justify-between md:justify-start"
  style={{
    backgroundColor: isDarkMode ? '#101424' : '#282434',
    left: 0,
    padding: '10px',
    borderRadius: '5px',
  }}
>
  <div className={`md:hidden fixed left-12 z-50 ${isSidebarOpen ? 'hidden' : ''}`}>
    <button onClick={toggleSidebar}>
      <FaBars className="h-6 w-6 text-white" />
    </button>
  </div>
  <Link to="/home" style={{ textDecoration: 'none' }} className="flex-1 md:flex-none">
    <div className="text-white flex items-center gap-2 justify-center md:justify-start">
      <img
        src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1721763323/00f6d818-53e4-43fd-819d-1efb5932af3c-removebg-preview_jwgmzt.png"
        alt=""
        className="w-8 h-8"
      />
      <h1 className="text-2xl font-bold font-helvetica">Invicon</h1>
    </div>
  </Link>
  <div className="absolute top-4  right-4">
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
        <div className="max-w-3xl mx-auto mt-12">
          <h1 className="text-3xl font-bold" style={{ color: isDarkMode ? '#ffffff' : '#1a202c' }}>
            Invite Rewards
          </h1>
          <p className="text-gray-500" style={{ color: isDarkMode ? '#a0aec0' : '#4a5568' }}>
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
              <button className="bg-gray-300  hover:bg-blue-600 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Copy
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Invites</h2>
                <div className="text-2xl font-bold text-gray-700 dark:text-white">Current tier: 3</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">You have invited a total of 15 people.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-gray-700 dark:text-white">15</div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2  hover:bg-blue-600 rounded-md">
                View Invites
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-5 md:grid-cols-4 gap-6">
  {[
    { tier: 'Tier 1', invites: 5, price: 10 },
    { tier: 'Tier 2', invites: 10, price: 20 },
    { tier: 'Tier 3', invites: 20, price: 40 },
    { tier: 'Tier 4', invites: 40, price: 70 },
    { tier: 'Tier 5', invites: 80, price: 100 },
  ].map(({ tier, invites, price }, index) => (
    <div key={index} className=" text-center bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col">
      <h2 className="text-lg font-bold text-2xl text-gray-700 dark:text-white">{tier}</h2>
      <p className="text-gray-500 font-semibold dark:text-gray-400">{invites} invites</p>
      <p className="text-gray-500 dark:text-gray-400"> or pay</p>


      <h3 className="text-gray-700 font-bold dark:text-gray-300">${price}</h3>
      <button
        className="mt-auto bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => handlePayButton(tier, price)}
      >
        Buy Now
      </button>
    </div>
  ))}
</div>

        </div>
      </main>
    </div>
  );
};

export default Component;

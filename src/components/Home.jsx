import React, { useState } from 'react';

export default function Component() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleCollapsible1 = () => setIsOpen1(!isOpen1);
  const toggleCollapsible2 = () => setIsOpen2(!isOpen2);

  return (
    <div className="flex  h-screen">
      <nav className="bg-dark text-white  w-64 p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Invite Rewards</h3>
          <div className="space-y-2">
            <a href="#" className="flex items-center text-white gap-2  no-underline text-sm font-medium hover:bg-gray-900 rounded-md px-3 py-2">
              <LayoutGridIcon className="w-4 h-4 text-white" />
              Free Preview
            </a>
            <div className="space-y-1 mt-3 mb-3">
              <button
                onClick={toggleCollapsible1}
                className="flex items-center justify-between gap-2 no-underline text-sm font-medium hover:bg-gray-900 rounded-md px-3 py-2"
              >
                How to Access
                <ChevronRightIcon className={`w-4 h-4 transition-transform ${isOpen1 ? 'rotate-90' : ''}`} />
              </button>
              {isOpen1 && (
                <div className="pl-6">
                  <a href="#" className="flex no-underline items-center gap-2 text-base font-medium hover:bg-gray-900 rounded-md px-4 py-3">
                    <button className="bg-gray-500 text-white px-3 py-2 rounded-md">
                      How to Access
                    </button>
                  </a>
                  <a href="#" className="flex no-underline items-center gap-2 text-sm font-medium hover:bg-gray-900 rounded-md px-3 py-2">
                    <button className="bg-gray-600 text-white px-3 py-2 rounded-md">
                      Instant Access
                    </button>
                  </a>
                </div>
              )}
            </div>
            <div className="space-y-1">
              <button
                onClick={toggleCollapsible2}
                className="flex items-center justify-between gap-2 text-sm font-medium hover:bg-gray-900 rounded-md px-3 py-2"
              >
                Invites
                <ChevronRightIcon className={`w-4 h-4 transition-transform ${isOpen2 ? 'rotate-90' : ''}`} />
              </button>
              {isOpen2 && (
                <div className="pl-6">
                  <a href="#" className="flex no-underline text-white items-center gap-2 text-sm font-medium hover:bg-gray-900 rounded-md px-3 py-2">
                    Invites
                  </a>
                  <a href="#" className="flex no-underline text-white items-center gap-2 text-sm font-medium hover:bg-gray-900 rounded-md px-3 py-2">
                    How to Invite
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-gray-100 dark:bg-gray-950 p-8 space-y-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-950">Invite Rewards</h1>
          <p className="text-gray-500 dark:text-gray-400">Earn rewards by inviting your friends to join.</p>
        </div>
        <div className="max-w-3xl mx-auto grid gap-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Your Invite Link</h2>
              <p className="text-gray-500 dark:text-gray-400">Share this link with your friends to earn rewards.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="bg-gray-200 dark:bg-gray-800 rounded-md px-4 py-2 text-lg font-medium text-gray-950">
                https://example.com/invite/ABCD1234
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Copy
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Total Invites</h2>
              <p className="text-gray-500 dark:text-gray-400">You have invited a total of 15 people.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold text-gray-950">15</div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                View Invites
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 mb-5 md:grid-cols-4 gap-6">
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-950">Tier 1</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Get 4 Invites or pay</p>
                <p className="text-4xl font-bold text-gray-950">$10</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-950">Tier 2</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 10 friends</p>
                <p className="text-4xl font-bold text-gray-950">$25</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-950">Tier 3</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 15 friends</p>
                <p className="text-4xl font-bold text-gray-950">$50</p>
              </div>
              <button className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg space-y-4">
              <div className="text-lg font-bold text-gray-950">Tier 4</div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Invite 20 friends</p>
                <p className="text-4xl font-bold text-gray-950">$100</p>
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
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}


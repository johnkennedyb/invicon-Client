import React from "react";

export default function Component() {
  return (
    <div className="w-full bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <a
              key={index}
              href="#"
              className="group flex flex-col items-start justify-between rounded-lg bg-white p-4 shadow-md transition-all hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
            >
              <div className="flex-1">
                <img
                  src="/placeholder.svg"
                  alt={`Video ${index + 1}`}
                  width={400}
                  height={224}
                  className="aspect-video w-full rounded-lg object-cover"
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
  );
}

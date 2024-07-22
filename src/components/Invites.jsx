import { FiSearch } from "react-icons/fi" // Importing icons from react-icons

export default function Component() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Invites</h1>
        <div className="flex items-center gap-4">
          <button className="border border-white text-white py-1 px-3 rounded" type="button">
            Invite
          </button>
          <button className="p-2 bg-transparent text-white" aria-label="Search" type="button">
            <FiSearch className="w-5 h-5" />
          </button>
        </div>
      </header>
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
    </div>
  )
}

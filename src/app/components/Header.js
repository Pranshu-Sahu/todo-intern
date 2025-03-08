// src/app/components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow">
      {/* Left Section: Logo or Title */}
      <div className="flex items-center space-x-2">
       
      </div>
      
      {/* Right Section: Search Bar/User Info */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border border-gray-300 rounded-full py-1 px-4 focus:outline-none focus:border-blue-400" 
          />
        </div>
        <img
          src="/man.avif"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;

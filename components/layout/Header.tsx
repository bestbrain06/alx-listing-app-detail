import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">StayFinder</div>

      {/* Search Bar */}
      <div className="w-full md:w-1/2 my-3 md:my-0">
        <input
          type="text"
          placeholder="Search for destination or property..."
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-2">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
          Sign In
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;

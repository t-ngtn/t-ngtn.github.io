import React, { useState } from "react";
import Link from "next/link"; // Next.jsのプロジェクトを想定しています

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container bg-gray-30 text-black p-10 flex justify-between item-top">
      <div className="logo text-left font-bold">
        <Link
          href="/"
          className="text-2xl md:text-4xl hover:text-gray-400 transition duration-200"
        >
          t-ngtn
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
          >
            <div className="space-y-2 mr-0">
              <span
                className={`block w-8 h-0.5 bg-gray-800 transform transition duration-1000 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gray-800 transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gray-800 transform transition duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
        <div className={`nav-list ${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row justify-end text-right text-3xl text-slate-800">
            <li className="mr-6 mt-6 md:mt-0">
              <Link
                href="/about"
                className="text-2xl md:text-4xl hover:text-gray-400 transition duration-200"
              >
                about
              </Link>
            </li>
            <li className="mr-6 mt-6 md:mt-0">
              <Link
                href="/contact"
                className="text-2xl md:text-4xl hover:text-gray-400 transition duration-200"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

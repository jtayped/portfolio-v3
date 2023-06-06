// React Util
import React from "react";
import { Link } from "react-router-dom";

// Icons
import { FiMenu } from "react-icons/fi";

// Constants
import { pages } from "../constants/Header";

const Header = () => {
  return (
    <header className="sticky top-0 w-full flex justify-between bg-white border-b-[1px] border-black">
      <Link to="/" className="px-6 py-4 border-r-[1px] border-black">
        <p className="text-2xl">LOGO</p>
      </Link>

      <nav className="hidden sm:flex items-center">
        {pages.map((page, index) => (
          <a
            key={index}
            href={page.link}
            className="h-full px-6 py-4 border-l-[1px] border-black flex items-center font-primary hover:bg-black hover:text-white transition-all duration-200"
          >
            {page.title.toUpperCase()}
          </a>
        ))}
      </nav>

      <button className="p-4 border-l-[1px] border-black sm:hidden">
        <FiMenu size={30} />
      </button>
    </header>
  );
};

export default Header;

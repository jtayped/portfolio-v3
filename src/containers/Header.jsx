// React Util
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";

// Images
import Logo from "../assets/logo.svg";

// Constants
import { pages } from "../constants/Header";

// JSX Components
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setOpen] = useState(true);

  function toggleSideBar() {
    console.log("aaa");
    setOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 w-full z-10 flex justify-between bg-slate-100 border-b-[1px] border-black font-poppins">
      <Link to="/" className="px-6 py-2 border-r-[1px] border-black">
        <img className="h-10" src={Logo} alt="Logo" />
      </Link>

      <nav className="hidden sm:flex items-center">
        {pages.map((page, index) => (
          <a
            key={index}
            href={page.link}
            className="h-full px-6 py-2 border-l-[1px] border-black flex items-center hover:bg-black hover:text-white transition-all duration-200"
          >
            {page.title.toUpperCase()}
          </a>
        ))}
      </nav>

      <button
        onClick={() => toggleSideBar()}
        className="p-4 border-l-[1px] border-black sm:hidden"
      >
        <RxHamburgerMenu size={30} />
      </button>

      {isOpen ? <SideBar toggleSideBar={toggleSideBar} /> : null}
    </header>
  );
};

export default Header;

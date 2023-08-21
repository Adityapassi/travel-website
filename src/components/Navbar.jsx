import React, { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleNav = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className=" text-white flex justify-between items-center h-20 px-4 w-full z-20 absolute top-0 bg-transparent">
      <div className="brand">
        <h1 className={showMenu ? "hidden" : "uppercase"}>
          <Link to="home">Beaches.</Link>
        </h1>
      </div>
      <ul className="hidden md:flex items-center">
        <li className="nav-link">
          <Link smooth={true} duration={500} to="home">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link smooth={true} duration={500} to="destination">
            Destination
          </Link>
        </li>
        <li className="nav-link">
          <Link smooth={true} duration={500} to="travel">
            Travel
          </Link>
        </li>
        <li className="nav-link">
          <Link smooth={true} duration={500} to="view">
            Views
          </Link>
        </li>
        <li className="nav-link">
          <Link smooth={true} duration={500} to="book">
            Book
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center">
        <BsPerson className="mr-2 cursor-pointer" size={20} />
        <BsSearch className="cursor-pointer" size={20} />
      </div>
      {/*Hamburger */}
      <div className="md:hidden z-20 cursor-pointer" onClick={handleNav}>
        {showMenu ? (
          <AiOutlineClose size={24} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={24} />
        )}
      </div>
      {/*Mobile Menu */}
      <div
        className={
          showMenu
            ? "absolute border left-0 top-0 w-full bg-gray-100/90 px-4 py-7 transition-all duration-500 z-10"
            : " absolute top-[-700%]"
        }
      >
        <ul className="text-black">
          <h1 className="uppercase">Beaches.</h1>
          <li className="nav-link border-b border-b-slate-300">
            <Link smooth={true} duration={500} to="home">
              Home
            </Link>
          </li>
          <li className="nav-link border-b border-b-slate-300">
            <Link smooth={true} duration={500} to="destination">
              Destination
            </Link>
          </li>
          <li className="nav-link border-b border-b-slate-300">
            <Link smooth={true} duration={500} to="travel">
              Travel
            </Link>
          </li>
          <li className="nav-link border-b border-b-slate-300">
            <Link smooth={true} duration={500} to="view">
              Views
            </Link>
          </li>
          <li className="nav-link border-b border-b-slate-300">
            <Link smooth={true} duration={500} to="book">
              Book
            </Link>
          </li>
          <li className="flex flex-col">
            <button className="btn my-4"> Search</button>
            <button className="btn my-4"> Account</button>
          </li>
          <li className="flex justify-between my-4">
            <FaFacebook className="nav-icon" />
            <FaTwitter className="nav-icon" />
            <FaInstagram className="nav-icon" />
            <FaPinterest className="nav-icon" />
            <FaYoutube className="nav-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

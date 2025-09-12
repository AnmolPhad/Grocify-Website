import React, { useEffect, useState, useContext } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FavoriteContext } from "../../context/FavoriteContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { favorites } = useContext(FavoriteContext);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="items-center flex justify-between max-w-[1400px] mx-auto md:h-[14vh] px-4 md:px-10 h-[12vh]">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold"  data-aos="fade-down"  data-aos-duration="1500">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-12"  data-aos="fade-down"  data-aos-duration="2000">
          <li>
            <ScrollLink to="home" smooth className="font-semibold text-orange-500 cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth
              className="font-semibold text-zinc-800 hover:text-orange-500 cursor-pointer"
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="process"
              smooth
              className="font-semibold text-zinc-800 hover:text-orange-500 cursor-pointer"
            >
              Process
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth
              className="font-semibold text-zinc-800 hover:text-orange-500 cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-x-8 md:gap-x-10">
          {/* Search */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="w-10 h-10 bg-gradient-to-b from-red-600 to-orange-500 rounded-full text-white flex items-center justify-center text-xl">
              <IoIosSearch />
            </button>
          </div>

          {/* Favorites */}
          <Link to="/favorite" className="relative text-zinc-800 text-2xl">
            <GoHeartFill />
            {favorites?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative text-zinc-800 text-2xl">
            <HiShoppingBag />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-3xl text-zinc-800" onClick={() => setShowMenu((v) => !v)}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* MOBILE MENU BACKDROP */}
        {showMenu && (
          <div 
            className="md:hidden fixed inset-0 bg-black/5 z-40"
            onClick={() => setShowMenu(false)}
          />
        )}

        {/* MOBILE MENU */}
        <ul
          className={`md:hidden flex-col gap-y-12 fixed left-1/2 transform -translate-x-1/2 ${
            showMenu
              ? "top-[80px] opacity-100"
              : "top-[80px] opacity-0 pointer-events-none"
          } w-[92%] max-w-sm bg-orange-500/30 backdrop-blur-xl rounded-xl p-6 text-center transition-all duration-300 shadow-xl z-50`}
          style={{
            WebkitBackdropFilter: "blur(14px)",
            backdropFilter: "blur(14px)",
          }}
        >
          <li className="p-3">
            <ScrollLink
              to="home"
              smooth
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-orange-500 hover:text-orange-600 cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li className="p-3">
            <ScrollLink
              to="about"
              smooth
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer"
            >
              About Us
            </ScrollLink>
          </li>
          <li className="p-3">
            <ScrollLink
              to="process"
              smooth
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer"
            >
              Process
            </ScrollLink>
          </li>
          <li className="p-3">
            <ScrollLink
              to="contact"
              smooth
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer"
            >
              Contact Us
            </ScrollLink>
          </li>

          {/* Search in Mobile */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full mt-2">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="w-10 h-10 bg-gradient-to-b from-red-600 to-orange-500 rounded-full text-white flex items-center justify-center text-xl">
              <IoIosSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
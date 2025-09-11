import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["home", "about", "process", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && window.scrollY + 100 >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "font-semibold tracking-wider text-zinc-800 hover:text-orange-500 cursor-pointer";

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav className="items-center flex justify-between max-w-[1400px] mx-auto md:h-[14vh] px-10 h-[12vh]">
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-x-15 md:flex">
          {["home", "about", "process", "contact"].map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={600}
                offset={-80}
                className={
                  activeSection === section
                    ? "font-semibold tracking-wider text-orange-500 cursor-pointer"
                    : linkBase
                }
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About Us"
                  : section === "process"
                  ? "Process"
                  : "Contact Us"}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Nav Actions */}
        <div className="flex items-center gap-x-10">
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 height-[5vh] px-3 focus:outline-none ml-1"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoIosSearch />
            </button>
          </div>
          <a href="#" className="text-zinc-800 text-xl">
            <GoHeartFill />
          </a>
          <a href="#" className="text-zinc-800 text-xl">
            <HiShoppingBag />
          </a>
          <a
            href="#"
            className="text-3xl text-zinc-800 md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden flex-col gap-y-12 absolute bg-orange-500/20 backdrop-blur-xl rounded-xl p-8 text-center transition-all duration-500 ${
            showMenu
              ? "top-[80px] left-1/2 -translate-x-1/2"
              : "top-[80px] -left-full"
          } shadow-xl`}
        >
          {["home", "about", "process", "contact"].map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={600}
                offset={-80}
                onClick={() => setShowMenu(false)}
                className={
                  activeSection === section
                    ? "font-semibold tracking-wider text-orange-500 cursor-pointer"
                    : linkBase
                }
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About Us"
                  : section === "process"
                  ? "Process"
                  : "Contact Us"}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

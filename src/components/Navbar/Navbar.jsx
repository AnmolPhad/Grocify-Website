import React, { useEffect, useState } from 'react'
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu , setShowMenu]= useState(false);
    const [isScrolled , setIsScrolled] =useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    useEffect(()=>{
       const handleScroll = ()=> {
        setIsScrolled(window.scrollY > 10)
       }
       window.addEventListener("scroll" , handleScroll);
       return ()=> window.removeEventListener('scroll' , handleScroll)
    },[])
  return (
   <header className={` bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]' : ""}`}>
    <nav className='items-center flex justify-between max-w-[1400px] mx-auto md:h-[14vh] px-10 h-[12vh]'>
        {/* Logo */}
        <Link to="/" className='text-3xl font-bold'  data-aos="fade-down-right" data-aos-duration="1500">
            Gr<span className='text-orange-500 uppercase'>o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden items-center gap-x-15 md:flex'  data-aos="fade-down-right"  data-aos-duration="1500">
            <li><Link to="/"  data-aos="fade-down-right" data-aos-duration="1500" className='font-semibold tracking-wider text-orange-500 hover:text-orange-500'>Home</Link></li>
            <li><a href="" data-aos="fade-down-right" data-aos-duration="2000" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="" data-aos="fade-down-right" data-aos-duration="2500" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li><Link to="/contact" data-aos="fade-down-right" data-aos-duration="3000" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</Link></li>
        </ul>

        {/* Nav Action  */}

        <div className='flex items-center gap-x-10'>

            {/* input field */}
            <div className='hidden md:flex p-1 border-2 border-orange-500 rounded-full '  data-aos="fade-down-right"  data-aos-duration="1500">
                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 height-[5vh] px-3 focus:outline-none ml-1'/>
                <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoIosSearch /></button>
            </div>

            <a href="#" className='text-zinc-800 text-xl'  data-aos="fade-down-right"  data-aos-duration="1500">
                <GoHeartFill />
            </a>
              <a href="#" className='text-zinc-800 text-xl'  data-aos="fade-down-right"  data-aos-duration="1500">
                <HiShoppingBag />
            </a>
            {/* Hamburger */}
            <a href="#" className='text-3xl text-zinc-800 md:hidden  ' onClick={toggleMenu}>
              {showMenu ? <TbMenu3 /> : <TbMenu2 />  }
            </a>


        </div>

             {/* Mobile Menu  */}
           <ul  className={`md:hidden flex-col gap-y-12 absolute bg-orange-500/20 backdrop-blur-xl rounded-xl p-8  text-center transition-all duration-500 ${
            showMenu ? "top-[80px] left-1/2 -translate-x-1/2" : "top-[80px] -left-full"
          } shadow-xl`}  >
            <li className='p-3'><a href="#" className='font-semibold tracking-wider  text-orange-500 hover:text-orange-600 '>Home</a></li>
            <li className='p-3'><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li className='p-3'><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li className='p-3'><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500' >Contact Us</a></li>

              <li className='md:hidden flex p-1 border-2 border-orange-500 rounded-full '>
                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 height-[5vh] px-3 focus:outline-none ml-1'/>
                <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoIosSearch /></button>
            </li>


        </ul>
    </nav>
   </header>
  )
}

export default Navbar

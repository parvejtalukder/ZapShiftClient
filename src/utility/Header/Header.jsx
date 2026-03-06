import React from 'react';
import Logo from '../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const Header = () => {
    
    const Links = <>
        <li className='text-[16px] font-medium'><NavLink>Services</NavLink></li>
        <li className='text-[16px] font-medium'><NavLink>Coverage</NavLink></li>
        <li className='text-[16px] font-medium'><NavLink>About Us</NavLink></li>
        <li className='text-[16px] font-medium'><NavLink>Pricing</NavLink></li>
        <li className='text-[16px] font-medium'><NavLink>Blog</NavLink></li>
        <li className='text-[16px] font-medium'><NavLink>Contact</NavLink></li>
    </>

    return (
        <header>
          <div className="navbar bg-base-100 shadow-sm rounded-2xl px-8 py-4">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                      {Links}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl"><Logo></Logo></a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  {Links}
              </ul>
            </div>
            <div className="navbar-end flex gap-2">
              <NavLink className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-white rounded-2xl text-[20px]">Sign In</NavLink>
              <NavLink className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-primary rounded-2xl text-[20px]">Sign Up</NavLink>
              {/* <FaArrowAltCircleUp className='rotate-45 h-10 w-10 -ms-2.5' /> */}
              <div className='h-10 w-10 bg-secondary font-bold text-primary -ms-2.5 rounded-4xl flex items-center justify-center'>
                <GoArrowUpRight />
              </div>
            </div>
          </div>
        </header>
    );
};

export default Header;
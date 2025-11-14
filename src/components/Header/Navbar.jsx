import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { GrGithub } from "react-icons/gr";
import { FaAppStoreIos, FaHome } from 'react-icons/fa';
import { MdInstallMobile } from 'react-icons/md';


const Navbar = () => {
    const gitHub = () => {
        window.location.href = "https://github.com/GMRedoan"
    }
    return (
        <nav className="navbar shadow-sm bg-base-100 border-b-1 border-gray-50">
            <div className="navbar-start ml-7">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2">
                        <div className='flex items-center gap-1'>
                            <FaHome></FaHome>
                            <NavLink to='/'><li>Home</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaAppStoreIos />
                            <NavLink to='/apps'><li>Apps</li></NavLink>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdInstallMobile />
                            <NavLink to='/installation'><li>Installation</li></NavLink>
                        </div>
                    </ul>
                </div>
                <Link to='/' className='flex items-center'>
                    <img className='w-[40px] mr-2' src={logo} alt="" />
                    <p className="text-xl font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">APPs 4 U</p>
                </Link>
            </div>
            <nav className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 ">
                    <div className='flex items-center gap-1'><FaHome></FaHome>
                        <NavLink to='/'><li>Home</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaAppStoreIos />
                        <NavLink to='/apps'><li>Apps</li></NavLink>
                    </div>
                    <div className='flex items-center gap-1'>
                        <MdInstallMobile />
                        <NavLink to='/installation'><li>Installation</li></NavLink>

                    </div>
                </ul>
            </nav>
            <div className="navbar-end mr-7">
                <a onClick={gitHub} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><GrGithub />Contribute</a>
            </div>
        </nav>
    );
};

export default Navbar;
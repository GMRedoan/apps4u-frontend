import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

const Error = () => {
    return (
        <div>
            <title>Error - 404</title>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
                <div className='flex justify-center'>
                    <img src={error} alt="Error" />
                </div>
                <div className="w-fit space-y-5 text-center p-5">
                    <h2 className='font-bold text-5xl'>Oops, page not found!</h2>
                    <p className='text-[#627382]'>The page you are looking for is not available.</p>
                    <Link to='/' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-20 py-3 cursor-pointer">Go Back!</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;
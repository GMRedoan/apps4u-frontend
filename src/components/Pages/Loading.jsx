import React from 'react';
import logo from '../../assets/logo.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <p className='flex justify-center items-center text-7xl font-semibold text-gray-500'>Lo <img className='w-20 h-20 animate-spin' src={logo} alt="" />ding</p>
        </div>
    );
};

export default Loading;
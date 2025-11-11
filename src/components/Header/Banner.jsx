import React from 'react';
import playStore from '../../assets/google-play.svg'
import appStore from '../../assets/app-store.svg'
import hero from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='flex flex-col justify-center pt-10 space-y-5'>
            <h2 className='text-5xl font-semibold text-center'>We Build <br /> <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">Productive</span> Apps</h2>
            <p className='text-[#627382] text-[18px] text-center'>At APPs 4 U, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-2'>
            <button className='btn'><img className='w-6' src={playStore} alt="" /> Google Play</button>
            <button className='btn'><img className='w-6' src={appStore} alt="" /> App Store</button>
            </div>
           <div className='flex justify-center'>
             <img className='w-[60%]' src={hero} alt="" />
           </div>

           <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-14 -mt-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Trusted By Millions, Built For You
        </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div>
            <p className="text-5xl font-extrabold">29.6M</p>
            <p className="text-sm mt-2">21% More Than Last Month</p>
            <p className="mt-1 uppercase text-xs">Total Downloads</p>
          </div>
            <div>
            <p className="text-5xl font-extrabold">906K</p>
            <p className="text-sm mt-2">46% More Than Last Month</p>
            <p className="mt-1 uppercase text-xs">Total Reviews</p>
          </div>
            <div>
            <p className="text-5xl font-extrabold">132+</p>
            <p className="text-sm mt-2">31 More Will Launch</p>
            <p className="mt-1 uppercase text-xs">Active Apps</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;
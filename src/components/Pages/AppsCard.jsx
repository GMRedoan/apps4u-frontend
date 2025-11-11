 import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';
 
 const AppsCard = ({app}) => {
    return (
        <div className="card bg-base-100 w-75 shadow-sm py-5  hover:-translate-y-2 hover:scale-103
        cursor-pointer hover:shadow-xl
      transform transition-all duration-300">
  <figure >
    <img
      src={app.image}
      alt=""
      className="rounded-xl h-38 w-34 object-cover" />
  </figure>
  <div className="text-start p-5 space-y-1">
    <h2 className="font-bold text-xl"> {app.title}</h2>
    <p className='text-[#627382]'>{app.description}</p>
   </div>
   <div className='flex justify-between px-5'>
    <p className='btn border-0 text-[#00D390] bg-[#F1F5E8]'><PiDownloadSimpleBold /> {app.downloads}</p>
    <p className='btn border-0 bg-[#FFF0E1] text-[#FF8811]'><FaStar/> {app.ratingAvg}</p>
   </div>
 </div>
    );
 };
 
 export default AppsCard;
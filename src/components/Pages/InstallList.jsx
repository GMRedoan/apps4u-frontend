import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiDownloadSimpleBold } from 'react-icons/pi';

const InstallList = ({ app, handleUninstall }) => {
     return (
        <div className="flex justify-between items-center gap-4 bg-base-100 p-3 mx-8 rounded-xl">
            <div className='flex items-center gap-5'>
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 rounded-lg bg-gray-200 object-contain"
                />
                <div>
                    <h2 className="text-start
                     text-lg font-semibold text-gray-900">{app.title}</h2>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">

                        <span className="flex items-center gap-1 text-[#00D390]">
                            <PiDownloadSimpleBold className="text-lg" /> {app.downloads}
                        </span>
                        <span className="flex items-center gap-1 text-orange-500">
                            <FaStar
                                className="text-lg" /> {app.ratingAvg}
                        </span>

                        <span className="hidden md:block text-gray-500">{app.size} MB</span>
                    </div>
                </div>
             </div>

            <button
                onClick={() => handleUninstall(app.id, app.title)}
                className="btn btn-sm bg-[#00D390] hover:bg-green-600 text-white border-none px-4">Uninstall
            </button>
         </div>
     );
};

export default InstallList;
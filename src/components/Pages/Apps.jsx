import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppsCard from './AppsCard';
import { IoSearchOutline } from 'react-icons/io5';
import opps from '../../assets/App-Error.png'
import logo from '../../assets/logo.png'

const Apps = () => {
    const handleReload = () => {
        window.location.reload()
    }
    const allApps = useLoaderData() 
 
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    const filterApps = allApps.filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
    const handleLoading = (value) => {
        setLoading(true)
        setSearch(value)

        setTimeout(() => {
            setLoading(false);
        }, 300)
    }

    return (
        <div className='text-center py-8 space-y-3'>
            <h2 className='text-4xl font-bold'>Our All Applications </h2>
            <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='flex justify-between items-center mx-20 ml-25'>
                <p className='font-semibold text-xl'>({filterApps.length}) Apps Found</p>

                <label className="input border border-gray-300 outline-purple-500">
                    <IoSearchOutline />
                    <input
                        type="search"
                        required placeholder="Search"
                        value={search}
                        onChange={(e) => handleLoading(e.target.value)}
                    />
                </label>
            </div>
            {loading && (
                <div className='py-50'>
                    <p className='flex justify-center items-center text-7xl font-semibold text-gray-500'>Lo <img className='w-20 h-20 animate-spin' src={logo} alt="" />ding</p>
                 </div>
            )}
            {!loading &&
                <div className="grid grid-cols-1 ml-7 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 lg:px-20 mt-10">
                    {filterApps.length > 0 ?
                        filterApps.map(app =>
                            <AppsCard key={app.id} app={app}></AppsCard>) : <div className=" col-span-full space-y-5">
                            <div className='flex justify-center'>
                                <img src={opps} alt="" />
                            </div>
                            <p className='font-bold text-5xl'>OPPS!! APP NOT FOUND</p>
                            <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                            <p onClick={handleReload} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-20 mb-10">Go Back!</p>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Apps;
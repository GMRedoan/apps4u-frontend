import React from 'react';
import Banner from '../Header/Banner';
import { Link, useLoaderData } from 'react-router';
import AppsCard from './AppsCard';

const Home = () => {
    const homeApps = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='text-center py-8 space-y-3'>
                <h2 className='text-4xl font-bold'>Trending Apps </h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                <div className="grid grid-cols-4 gap-4 px-20 mt-10">
                    {homeApps.map(app => (
                    <AppsCard key={app.id} app={app} />
                    ))}
                </div>
            </div>
                <div className="navbar-end mr-7 pb-15">
                   <Link to='/apps' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</Link>
               </div>
         </div>
    );
};

export default Home;
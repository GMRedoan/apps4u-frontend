import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstall } from '../../utilites/Installation';
import InstallList from './InstallList';
import { IoMdArrowDropdown } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {
    const notify = (title) => toast.success(`(${title}) → Uninstalled Successfully`)

    const [sort, setSort] = useState("")
    const [appList, setAppList] = useState([])

    const data = useLoaderData()

    const handleSort = (type) => {
        setSort(type)
        if (type === 'High-Low') {
            const sortedBySize = [...appList].sort((a, b) => parseInt(b.downloads) - parseInt(a.downloads))
            setAppList(sortedBySize)
        }
        if (type === 'Low-High') {
            const sortedByRatings = [...appList].sort((a, b) => parseInt(a.downloads) - parseInt(b.downloads))
            setAppList(sortedByRatings)
        }
    }

    useEffect(() => {
        const storedInstalledData = getInstall()
        const myInstallation = data.filter((apps) => storedInstalledData.includes(apps.id))
        setAppList(myInstallation)
    }, [])

    const handleUninstall = (id, title) => {
        const uninstall = appList.filter(app => app.id !== id);
        setAppList(uninstall)

        const installed = getInstall() 
        const newStoredData = installed.filter(app => app !== id)
    
        localStorage.setItem('installed', JSON.stringify(newStoredData))
        
        notify(title)
    }

    return (
        <div className='text-center py-8 space-y-3'>
            <h2 className='text-4xl font-bold'> Your Installed Apps </h2>
            <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center mx-9'>
                <p className='md:text-xl font-semibold'>({appList.length}) Apps Found</p>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Downloads: {sort ? sort : ""}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2">
                        <li><a onClick={() => handleSort('High-Low')}>High - Low</a></li>
                        <li><a onClick={() => handleSort('Low-High')}>Low - High</a></li>
                    </ul>
                </div>
            </div>
            {
                appList.length > 0 ? appList.map(app => <InstallList key={app.id} app={app} handleUninstall={handleUninstall}></InstallList>) : <p className='md:text-3xl font-semibold text-gray-500 pb-10'>No Apps Yet Installed</p>
            }
            <ToastContainer/>
        </div>
    );
};

export default Installation;
import React, { useEffect, useState } from "react";
import { useParams, useLoaderData, Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast, ToastContainer } from "react-toastify";
 
const AppDetails = () => {

    const [installed, setInstalled] = useState(false)
    const notify = () => toast.success(`(${app.title}) → Installed Successfully`)

    const handleInstallBtn = (id) => {
        setInstalled(true)
        notify()
 
        const installed = JSON.parse(localStorage.getItem("installed")) || [];
        if (!installed.includes(id)) {
            installed.push(id)
            localStorage.setItem("installed", JSON.stringify(installed));
        }

    }

    const { id } = useParams()
    const apps = useLoaderData()
    const app = apps.find((a) => a.id === parseInt(id))

    useEffect(() => {
        const installed = JSON.parse(localStorage.getItem("installed")) || [];
        if (installed.includes(app.id)) {
            setInstalled(true)
        }
    }, [app.id])


    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 border-b border-gray-300 pb-6">
                    <title>{app.title}</title>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-300 pb-6">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-50 h-50 object-contain rounded-lg"
                />

                <div className="flex-1 text-center md:text-left space-y-2">
                    <div className="border-b border-gray-300 pb-4">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {app.title}
                        </h1>
                        <p className="text-gray-600">
                            Developed by: <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold">{app.companyName} </span><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold">.io</span></p>

                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 mt-4">
                        <div className="text-center">
                            <PiDownloadSimpleBold className="text-3xl text-green-600 mx-auto" />
                            <p className="text-sm text-gray-600">Downloads</p>
                            <h2 className="text-xl font-bold">{app.downloads}</h2>
                        </div>

                        <div className="text-center">
                            <FaStar className="text-3xl text-yellow-500 mx-auto" />
                            <p className="text-sm text-gray-600">Average Rating</p>
                            <h2 className="text-xl font-bold">{app.ratingAvg}</h2>
                        </div>

                        <div className="text-center">
                            <BiSolidMessageRoundedDots className="text-3xl text-purple-500 mx-auto" />
                            <p className="text-sm text-gray-600">Total Reviews</p>
                            <h2 className="text-xl font-bold">{app.reviews.toLocaleString()}</h2>
                        </div>
                    </div>

                    <button onClick={() => handleInstallBtn(app.id)}
                        disabled={installed}
                        className={`btn bg-green-500 hover:bg-green-600 border-none text-white font-semibold mt-4 ${installed ? "opacity-70" : ""}`}>
                        {installed ? 'Installed' : `Install Now (${app.size} MB)`}
                    </button>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Ratings</h3>

                <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={app.ratings} layout="vertical" margin={{ left: 40 }}>
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="count" fill="#f78d1e" barSize={25} radius={[4, 4, 4, 4]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="py-16">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Description</h2>
                <p className="text-gray-500">{app.description}</p>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AppDetails;

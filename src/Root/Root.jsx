import React, { useEffect, useState } from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Pages/Loading';

const Root = () => {

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false)
        }, 500)
         return () => clearTimeout(delay)
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-[1500px] mx-auto bg-base-300'>
            <Navbar></Navbar>
            {navigation.state === "loading"
                ? <Loading></Loading>
                : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;

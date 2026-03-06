import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../utility/Header/Header';
import Footer from '../../utility/Footer/Footer';

const Error = () => {
    return (
        <div className='max-w-7xl mx-auto my-7'>
            <Header></Header>
            {/* <Outlet></Outlet> */}
            <main className='flex justify-center items-center my-30'>
                <p className='text-red-700 text-3xl font-bold'>404</p>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Error;
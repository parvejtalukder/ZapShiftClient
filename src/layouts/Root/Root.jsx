import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../utility/Header/Header';
import Footer from '../../utility/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto my-7'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
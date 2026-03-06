import React from 'react';
import { NavLink } from 'react-router';
import Arrow from '../Arrow/Arrow';

const Button = ({BTN}) => {
    return (
            <div className='flex justify-between'>
                <NavLink to={`${BTN.url}`} className={`btn px-6 py-5 font text-[#0B0B0B] ${BTN.bg} rounded-2xl text-[20px]`}>{BTN.name}</NavLink> 
                {/* <Arrow></Arrow> */}
            </div>
    );
};

export default Button;
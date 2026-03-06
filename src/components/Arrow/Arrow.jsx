import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Arrow = () => {
    return (
              <div className='h-10 w-10 bg-secondary font-bold text-primary -ms-2.5 rounded-4xl flex items-center justify-center'>
                <GoArrowUpRight />
              </div>
    );
};

export default Arrow;
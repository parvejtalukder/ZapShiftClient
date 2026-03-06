import React from 'react';
import { NavLink } from 'react-router';
import Merchanta from '../../../assets/location-merchant.png'
import Button from '../../../components/Button/Button';

const Marchant = () => {

    const BeMerchant = {
        url: "became-merchant",
        name: "Became a Merchant",
        bg: "bg-primary"
    }
    const EarnWithZip = {
        url: "earn-with-zap",
        name: "Earn With ZapShift",
        bg: "bg-white"
    }

    return (
        <div className='bg-secondary p-20 rounded-4xl flex justify-between items-center'>
            <div className='w-3/5 flex flex-col gap-4'>
                <h2 className='font-bold text-3xl text-white'>Merchant and Customer Satisfaction is Our First Priority</h2>
                <p className='text-justify font-normal text-gray-200'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className='flex justify-start items-start gap-5 py-2'>
                    {/* <NavLink></NavLink> */}
                    <Button BTN={BeMerchant}></Button>
                    <Button BTN={EarnWithZip}></Button>
                </div>
            </div>
            <div>
                <img src={Merchanta} alt="" />
            </div>
        </div>
    );
};

export default Marchant;
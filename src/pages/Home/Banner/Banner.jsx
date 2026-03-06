import React from 'react';
import BannerOne from '../../../assets/banner/banner1.png'
import BannerTwo from '../../../assets/banner/banner2.png'
import BannerThree from '../../../assets/banner/banner3.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router';
import Arrow from '../../../components/Arrow/Arrow';

const Banner = () => {
    return (
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div className='relative'>
                    <img src={BannerOne} />
                    <div className='flex justify-between gap-5 align-baseline absolute bottom-15 left-70 -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex justify-between'>
                            <NavLink to={"/parcel-track"} className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-primary rounded-2xl text-[20px]">Track Your Parcel</NavLink> 
                            <Arrow></Arrow>
                        </div>
                        <NavLink to={"/be-rider"} className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-white rounded-2xl text-[20px]">Be A Rider</NavLink>
                    </div>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={BannerTwo} />
                    <div className='flex justify-between gap-5 align-baseline absolute bottom-15 left-70 -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex justify-between'>
                            <NavLink to={"/parcel-track"} className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-primary rounded-2xl text-[20px]">Track Your Parcel</NavLink> 
                            <Arrow></Arrow>
                        </div>
                        <NavLink to={"/be-rider"} className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-white rounded-2xl text-[20px]">Be A Rider</NavLink>
                    </div>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={BannerThree} />
                    <div className='flex justify-between gap-5 align-baseline absolute bottom-15 left-70 -translate-x-1/2 -translate-y-1/2'>
                        <div className='flex justify-between'>
                            <NavLink to={"/parcel-track"} className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-primary rounded-2xl text-[20px]">Track Your Parcel</NavLink> 
                            <Arrow></Arrow>
                        </div>
                        <NavLink to={"/be-rider"} className="btn px-6 py-5 font-bold text-[#0B0B0B] bg-white rounded-2xl text-[20px]">Be A Rider</NavLink>
                    </div>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>


    );
};

export default Banner;
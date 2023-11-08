import React from 'react';
import Rectangle from '../assets/Rectangle 18.svg';
import Vector2 from '../assets/Vector 2.svg';
import Vector3 from '../assets/Vector 3.svg';

const Client = () => {
    return (
        <section className="relative py-12 bg-white sm:py-32">
            <div className='absolute bottom-10'>
                <img src={Vector2} alt="" />
            </div>
            <div className='absolute top-0 right-0'>
                <img src={Vector3} alt="" />
            </div>
            <div className='flex flex-col items-center justify-around md:flex-row'>
                <div className="relative px-6 mx-auto md:w-1/2 lg:w-1/4">
                    <img src={Rectangle} alt="" className="w-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3">
                        <span className='text-6xl md:text-3xl lg:text-6xl font-bold text-[#6F47EB]'>50+</span>
                        <p className="text-base font-bold text-gray-900">Happy Client</p>
                    </div>
                </div>
                <div className="relative px-6 mx-auto md:w-1/2 lg:w-1/4">
                    <img src={Rectangle} alt="" className="w-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3">
                        <span className='text-6xl md:text-3xl lg:text-6xl font-bold text-[#6F47EB]'>500+</span>
                        <p className="text-base font-bold text-gray-900">Projects Completed</p>
                    </div>
                </div>
                <div className="relative px-6 mx-auto md:w-1/2 lg:w-1/4">
                    <img src={Rectangle} alt="" className="w-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3">
                        <span className='text-6xl md:text-3xl lg:text-6xl font-bold text-[#6F47EB]'>8</span>
                        <p className="text-base font-bold text-gray-900">Year of Experince</p>
                    </div>
                </div>
                <div className="relative px-6 mx-auto md:w-1/2 lg:w-1/4">
                    <img src={Rectangle} alt="" className="w-full" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-3">
                        <span className='text-6xl md:text-3xl lg:text-6xl font-bold text-[#6F47EB]'>95%</span>
                        <p className="text-base font-bold text-gray-900">Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Client;

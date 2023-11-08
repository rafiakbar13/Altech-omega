import React from 'react'
import Group from '../assets/Group.svg'
import Group1 from '../assets/Group-1.svg'
import Group2 from '../assets/Group-2.svg'
import Group3 from '../assets/Group-3.svg'
import Group4 from '../assets/Group-4.svg'
import Group5 from '../assets/Group-5.svg'
import Group6 from '../assets/Group-6.svg'


const Companies = () => {
    return (
        <section className='px-6 py-32 mx-auto mt-10 max-w-7xl sm:py-12 lg:px-8'>
            <div className='space-y-5 text-center'>
                <h2 className='text-4xl font-bold leading-7 text-indigo-600'>Companies</h2>
                <p className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                    Trusted by leading companies
                </p>
            </div>
            <div className='mt-16 '>
                <div className='grid justify-center grid-cols-3 mx-8 lg:grid-cols-7 md:mx-0 gap-x-10 gap-y-4'>
                    <img src={Group} alt='zeppelin' />
                    <img src={Group1} alt='oracle' />
                    <img src={Group2} alt='morpheus' />
                    <img src={Group3} alt='samsung' />
                    <img src={Group4} alt='monday' />
                    <img src={Group5} alt='segment' />
                    <img src={Group6} alt='Protonet' />
                </div>
            </div>
        </section>
    )
}

export default Companies
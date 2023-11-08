import { Link } from 'react-router-dom';
import Vector from '../assets/Vector.svg'
import Metric from '../assets/undraw_metrics_re_6g90.svg'
const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            <div className='absolute z-[-1] right-0 rotate-180 hidden lg:block'>
                <img src={Vector} className='' />
            </div>
            <div className="px-6 mx-auto max-w-7xl sm:py-12 lg:px-8">
                <div className='flex flex-col items-center justify-between w-12/12 lg:flex-row'>
                    <div className='space-y-12 lg:w-6/12'>
                        <h1 className="text-4xl font-bold tracking-wide text-gray-900 md:text-6xl">
                            Atur Bisnis Anda dengan Lebih Efisien dan Cermat dengan <span className="text-[#6F47EB] font-bold">Altech ERP</span>
                        </h1>
                        <p className="text-lg leading-7 text-gray-600">
                            Altech ERP adalah kunci keberhasilan bisnis Anda. Optimalkan operasi bisnis Anda, sehingga Anda dapat memaksimalkan efisiensi dan fokus pada pertumbuhan. Dengan alat manajemen yang canggih, kami meningkatkan produktivitas Anda dan memungkinkan pertumbuhan yang berkelanjutan. Jadi Tunggu Apalagi? Bergabunglah Bersama Kami Sekarang Juga!
                        </p>
                        <div className="flex items-center gap-x-6">
                            <Link
                                to="/login"
                                className="text-base font-semibold  bg-[#6F47EB] px-8 py-2 text-white rounded-lg hover:bg-[#5a65dc] hover:text-white transition duration-300"
                            >
                                Get started
                            </Link>
                            <a
                                href="#"
                                className="text-base font-semibold bg-[#D8DBFB] text-[#6b40ed] px-8 py-2 rounded-lg  transition duration-300"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:w-5/12 lg:block'>
                        <img
                            src={Metric}
                            alt=""
                            className="object-cover mt-10 "
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { MENU } from '../common/constant/Menu'
import Logo from '../assets/logo.svg'
const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 70) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-10 bg-white ${scrolled ? 'shadow-md' : ""}`}>
            <nav className={` flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8`}>
                <div className='flex items-center gap-x-3'>
                    <a href="/" className="">
                        <img className="w-auto h-10" src={Logo} alt="altech omega" />
                    </a>
                    <h1 className='text-xl font-semibold'>Home</h1>
                </div>

                <div className="items-center hidden lg:flex lg:gap-x-12">
                    {MENU.map((item) => (
                        <a key={item.name} href={item.path} className="text-lg font-semibold leading-7 hover:text-[#6F47EB] transition duration-300">
                            {item.name}
                        </a>
                    ))}
                    <Link to="/login" className="text-base font-semibold  px-8 py-2 text-[#7eddfa] rounded-lg transition duration-300 ring-1 ring-[#7eddfa]">
                        Log in
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center -m-10 text-gray-800"
                        onClick={() => setIsMobileOpen(true)}
                    >
                        <Bars3Icon className="w-7 h-7" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog as="div" className="lg:hidden" open={isMobileOpen} onClose={setIsMobileOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center gap-x-3'>
                            <a href="/" className="">
                                <img className="w-auto h-10" src={Logo} alt="altech omega" />
                            </a>
                            <h1 className='text-xl font-semibold'>Home</h1>
                        </div>
                        <button
                            type="button"
                            className="py-1 mx-3 text-gray-700 rounded-md"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            <XMarkIcon className="w-7 h-7" />
                        </button>
                    </div>
                    <div className="mt-6 ">
                        <div className="divide-y divide-gray-500/30">
                            <div className="py-6 space-y-2">
                                {MENU.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        className="block px-3 py-2 text-lg font-semibold leading-7 text-gray-900 rounded-lg hover:bg-[#D8DBFB] hover:text-[#6F47EB]"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className=" block text-center rounded-lg  leading-7 text-base font-semibold  bg-[#7eddfa] px-8 py-2 text-white hover:bg-[#D8DBFB] transition duration-300 hover:text-[#6F47EB]"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar;
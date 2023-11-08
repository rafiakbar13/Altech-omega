import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'


const Register = () => {
    return (
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-md shadow-xl pt-4">
                <div className='flex items-center justify-center gap-x-4'>
                    <Link to="/">
                        <img
                            className="w-auto h-10 mx-auto"
                            src={Logo}
                            alt="Altech Omega"
                        />
                    </Link>
                    <p className='text-2xl font-bold leading-9 tracking-tight text-center text-gray-900'>Altech ERP</p>
                </div>
                <h2 className="mt-10 text-lg font-semibold leading-9 tracking-tight text-center text-gray-900">
                    Daftar Akun Anda
                </h2>
                <form className="p-10 space-y-6 ">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium leading-6 text-gray-900">
                            Name your company
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6 focus:outline-none px-4"
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900">
                            Alamat Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6 focus:outline-none px-4"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-medium leading-6 text-gray-900 ">
                                Kata Sandi
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6 focus:outline-none px-4"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex justify-center w-full px-3 py-2 text-sm font-semibold leading-6 text-white bg-[#6F47EB] rounded-md shadow-sm hover:bg-indigo-500"
                        >
                            Daftar
                        </button>
                    </div>
                    <p className="mt-2 text-sm text-center text-gray-500">
                        Sudah punya akun?{' '}
                        <Link to="/login" className="font-semibold leading-6 text-[#6F47EB] hover:text-indigo-500">
                            Masuk Disini
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register

import Box from '../assets/Box.svg'
const Contact = () => {
    return (
        <div className="py-8 bg-white">
            <div className="flex flex-col justify-between mx-5 max-w-7xl w-12/12 md:flex-row gap-x-5">
                <form action="#" method="POST" className="md:w-8/12">
                    <div className="max-w-xl p-8 mx-auto bg-white border border-gray-300 rounded-lg shadow-2xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        className=" w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        className=" w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className=" w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="text-sm font-medium leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className=" w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="text-sm font-medium leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className=" w-full py-2 text-gray-900 border-none rounded-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-[#6F47EB] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <button
                                type="submit"
                                className=" flex text-center rounded-lg leading-7 text-base font-semibold  bg-[#6F47EB] px-8 py-2 text-white hover:bg-[#D8DBFB] transition duration-300 hover:text-[#6F47EB]"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
                <div className='hidden md:block'>
                    <img src={Box} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact
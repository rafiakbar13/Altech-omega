import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { TIERS } from "../common/constant/tiers";
import Vector from "../assets/Vector-1.svg";

const Pricing = () => {
    return (
        <div id="pricing" className="relative py-12 bg-white sm:py-16">
            <img src={Vector} alt="" className="absolute inset-0 z-0 w-full h-full" />
            <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold leading-7 text-indigo-600">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold leading-10 text-gray-900 sm:text-5xl">
                        Pilihan Layanan yang tepat untuk Bisnis Anda.
                    </p>
                </div>
                <div className="relative grid grid-cols-1 mx-auto mt-16 gap-y-8 sm:mt-20 lg:grid-cols-3 gap-x-6 md:w-96 lg:w-full">
                    {TIERS.map((tier) => {
                        return (
                            <div
                                key={tier.name}
                                className=" bg-white flex flex-col overflow-hidden border border-[#6F47EB] rounded-lg shadow-lg hover:shadow-xl"
                            >

                                {tier.recommended && (
                                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 text-lg font-semibold tracking-wide text-[#6F47EB] uppercase bg-[#D8DBFB] rounded-full">
                                        Recommended
                                    </span>
                                )}
                                <div className="px-6 py-12 sm:p-10 sm:pb-6">
                                    <div className="pb-4">
                                        <h3 className="text-4xl tracking-wide text-center">
                                            {tier.name}
                                        </h3>
                                    </div>
                                    <div
                                        className={`${tier.recommended === true
                                            ? "text-[#6F47EB] font-semibold"
                                            : "text-gray-900"
                                            }  flex items-baseline mt-4 text-4xl text-center`}
                                    >
                                        <span>Rp</span>
                                        <span className={` ml-1 `}>{tier.price}</span>
                                        <span className="text-lg"> /month</span>
                                    </div>
                                    <p className="max-w-2xl mt-5 text-lg text-gray-500">
                                        {tier.description}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-8 sm:p-10">
                                    <ul className="space-y-4">
                                        {tier.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-start bg-[#F6F1FD] p-3 rounded-md"
                                            >
                                                <div className="flex-shrink-0">
                                                    <CheckCircleIcon className="w-6 h-6 text-[#6F47EB]" />
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">
                                                    {feature}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-10">
                                        <button className="w-full rounded-lg shadow-md">
                                            <a
                                                href={tier.path}
                                                className="block w-full px-6 py-3 text-xl font-semibold text-center text-white bg-[#6F47EB] rounded-lg hover:bg-[#596aff]"
                                            >
                                                Get Started
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Pricing;
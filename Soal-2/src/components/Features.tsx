import { FEATURES } from '../common/constant/Features'

const Features = () => {
    return (
        <div className="py-24 bg-white sm:py-8">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="mx-auto text-center lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-[#6b40ed] sm:text-4xl">
                        Mengapa memilih Altech?
                    </h2>
                    <p className="max-w-lg mx-auto mt-6 text-xl leading-8 text-gray-600">
                        Kami menyediakan layanan dengan teknologi terdepan, dukungan profesional, dan semuanya didapat dengan harga yang terjangkau.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {FEATURES.map((feature) => (
                            <div key={feature.name} className="flex flex-col p-5 transition duration-300 rounded-xl hover:shadow-lg hover:bg-white">
                                <div className="flex items-center justify-center w-10 h-10 mb-6 bg-[#D8DBFB] rounded-lg">
                                    <feature.icon className="w-6 h-6 text-[#6b40ed]" />
                                </div>
                                <p className='text-lg font-semibold '>{feature.name}</p>
                                <div className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-700">
                                    <p className="flex-auto">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
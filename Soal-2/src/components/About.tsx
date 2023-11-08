import React from 'react'
import Team from "../assets/undraw_team_spirit_re_yl1v.svg"

const About = () => {
    return (
        <div className="py-12 bg-white sm:py-32">
            <div className="flex flex-col-reverse items-center px-6 mx-auto max-w-7xl lg:px-8 lg:flex-row gap-x-3 gap-y-5">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#6b40ed] sm:text-6xl">Altech Company</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Altech Company adalah perusahaan perangkat lunak yang berbasis di Indonesia. Kami mengkhususkan diri dalam pengembangan layanan IT dan solusi terkait bagi perusahaan yang membutuhkan sistem ERP yang canggih dan terpercaya.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Visi kami adalah menjadi penyedia terkemuka dalam solusi ERP di Indonesia dan mendukung kesuksesan operasional bisnis. Misi kami adalah memberikan solusi teknologi yang berkualitas tinggi dan membantu pelaku bisnis dalam mencapai efisiensi dan produktivitas yang lebih tinggi.</p>
                </div>
                <div className="flex items-center justify-center lg:mt-0">
                    <img src={Team} alt="Altech Company" className="object-cover w-full max-w-lg" />
                </div>
            </div>
        </div>
    )
}

export default About
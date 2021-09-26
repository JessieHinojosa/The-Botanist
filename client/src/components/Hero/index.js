import React from 'react'
import heroImg from '../../assets/hero-img.jpg'

const Hero = () => {
    return (
        <div className="grid grid-cols-3 pb-10">
            <div className="bg-gray-500 text-white font-light lg:text-4xl md:text-3xl sm:text-xl flex items-center ">
                <p className="px-4 ">Locally and ethically sourced plants, shipped straight to your home garden.</p>
            </div>
            <img src={heroImg} alt="watering indoor houseplant" className="col-span-2" />
        </div>
    )
}

export default Hero;

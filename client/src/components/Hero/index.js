import React from 'react'
import heroImg from '../../assets/hero-img.jpg'

const Hero = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 pb-10">
            <div className="bg-gray-600 text-white font-light lg:text-4xl md:text-3xl sm:text-3xl flex items-center ">
                <p className="p-4 sm:p-8">Locally and ethically sourced plants, shipped straight to your home garden.</p>
            </div>
            <img src={heroImg} alt="watering indoor houseplant" className="lg:col-span-2" />
        </div>
    )
}

export default Hero;

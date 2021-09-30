import React from 'react'
import logo from '../../assets/icons/vector-logo-img.png'

const Footer = () => {
    return (
        <footer className="footer bg-yellow-900 pt-1">
            <div className="container mx-auto px-4">

                <div className="sm:flex sm:mt-8 ">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        {/* Column Group */}
                        <div className="flex flex-col items-center">
                            <div className="flex items-center pb-6 pt-2">
                                <img src={logo} alt="name-logo" /> 
                                <h3 className="font-medium text-xl pl-2 text-white">The Botanist 2021 &copy;</h3>
                            </div>
                        </div>
                        {/* Column Group */}
                        <div className="flex flex-col items-center mb-6">
                            <h3 className="font-bold text-gray-400 uppercase">Company</h3>
                            <p className="my-2 text-white">About</p>
                            <p className="my-1 text-white">Help + FAQs</p>
                        </div>
                        {/* Column Group */}
                        <div className="flex flex-col items-center mb-6">
                            <h3 className="font-bold text-gray-400 uppercase">Contact</h3>
                            <a href="https://github.com/jayMaverick" target="_blank" rel='noreferrer' className="text-white my-2 underline">Jessie Hinojosa</a>
                            <a href="https://github.com/kdombrosky" target="_blank" rel='noreferrer' className="text-white my-1 underline">Kayla Dombrosky</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

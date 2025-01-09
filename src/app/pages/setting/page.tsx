'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
    const [showTreatments, setShowTreatment] = useState(false);
    const [showSkin, setShowSkin] = useState(false); 

    const handleMouseEnter = () => setShowTreatment(true);
    const handleMouseLeave = () => setShowTreatment(false);

    const handleSkinEnter = () => setShowSkin(true); 
    const handleSkinLeave = () => setShowSkin(false); 

    return (
        <div className="flex h-full flex-col p-8 font-montserrat">
            <h1 className="text-4xl font-montserrat font-extrabold text-slate-900 mb-8">
                Settings
            </h1>

            <div className="w-full bg-[#F3F6FF] max-w-md ">
                <ul className="w-44">
                    <li className="p-4 text-sm hover:bg-white transition duration-300 ease-in-out"
                        onMouseLeave={handleMouseLeave}>
                        <Link href="">
                            <div className="text-gray-800 hover:text-indigo-600">
                                General
                            </div>
                        </Link>
                    </li>
                    <li className="p-4 text-sm hover:bg-white transition duration-300 ease-in-out"
                        onMouseLeave={handleMouseLeave}>
                        <Link href="">
                            <div className="text-gray-800 hover:text-indigo-600">
                                Password
                            </div>
                        </Link>
                    </li>
                    <li className="p-4 text-sm hover:bg-white transition duration-300 ease-in-out"
                        onMouseLeave={handleMouseLeave}>
                        <Link href="">
                            <div className="text-gray-800 hover:text-indigo-600">
                                Price
                            </div>
                        </Link>
                    </li>

                    <li
                        className="p-4 text-sm hover:bg-white transition duration-300 ease-in-out"
                        onMouseEnter={handleMouseEnter}
                    >
                        <Link href="">
                            <div className="text-gray-800 hover:text-indigo-600">
                                Treatments
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            {showTreatments && (
                <div className="fixed p-4 rounded-xl left-80 mt-24 max-w-md "
                    onMouseEnter={handleMouseEnter}
                   >
                    <p className="text-black text-2xl font-montserrat font-semibold">Treatments</p>

                    <div className='flex flex-col'>
                        <ul>
                            <li
                                className="p-2 rounded-lg text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out"
                            >
                                <Link href=''>
                                    <div className="text-gray-800 hover:text-indigo-600">
                                        Injectable
                                    </div>
                                </Link>
                            </li>
                            <li
                                className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out"
                                onMouseEnter={handleSkinEnter} 
                             
                            >
                                <Link href=''>
                                    <div className="text-gray-800 hover:text-indigo-600"
                                      onMouseEnter={handleSkinEnter}
                                      onMouseLeave={handleSkinLeave}>
                                        Skin Improvements
                                    </div>
                                </Link>
                            </li>
                            <li
                                className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out"
                            >
                                <Link href=''>
                                    <div className="text-gray-800 hover:text-indigo-600">
                                        Hair Removal
                                    </div>
                                </Link>
                            </li>
                            <li
                                className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out"
                            >
                                <Link href=''>
                                    <div className="text-gray-800 hover:text-indigo-600">
                                        Soft Surgery
                                    </div>
                                </Link>
                            </li>
                            <li
                                className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out"
                            >
                                <Link href=''>
                                    <div className="text-gray-800 hover:text-indigo-600">
                                        Plastic Surgery
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {showSkin && (
                <div className="fixed w-72 left-1/3 mt-40 pl-14 text-black"
                   onMouseEnter={handleSkinEnter}
                   onMouseLeave={handleSkinLeave}
                >
                    <div 
                    >
                    <p className='text-base font-semibold'>Skin Improvements</p>
                    <p className=' text-xs font-semibold'>Treatments</p>
                    <ul className="mt-4">
                        <li className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out">
                            <Link href=''>
                                <div className="text-gray-800 hover:text-indigo-600">
                                    Chemical Peels
                                </div>
                            </Link>
                        </li>
                        <li className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out">
                            <Link href=''>
                                <div className="text-gray-800 hover:text-indigo-600">
                                Microdermabrasion
                                </div>
                            </Link>
                        </li>
                        <li className="p-2 text-sm hover:bg-[#F2F5FF] transition duration-300 ease-in-out">
                            <Link href=''>
                                <div className="text-gray-800 hover:text-indigo-600">
                                Laser Treatments
                                </div>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;

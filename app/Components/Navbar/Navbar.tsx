'use client'
import { useState } from "react";
import Image from "next/image";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="absolute z-30 w-full">
            <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[375px] mx-auto">
                <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[335px] mx-auto">
                    <div className="2xl:w-[964px] xl:w-[964px] lg:w-[885px] md:w-[664px] w-full
                        2xl:h-[93px] xl:h-[93px] lg:h-[82px] md:h-[62px] h-[56px]
                        2xl:mt-[44px] xl:mt-[40px] lg:mt-[20px] md:mt-[15px] mt-[10px]
                        2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[18px] md:rounded-[15px] rounded-[12px]
                        mx-auto bg-[#FFFFFF1A] backdrop-blur-[4px] px-4 flex justify-between items-center">

                        {/* Logo */}
                        <Image src="/Images/logo.png" alt="logo" width={66} height={66}
                            className="2xl:my-[13px]  xl:my-[13px] lg:my-[16px] md:my-[12px] my-[8px]
                            2xl:w-[66px] 2xl:h-[66px] xl:w-[66px] xl:h-[66px] lg:w-[50.67px] lg:h-[50.67px]
                            md:w-[38px] md:h-[38px] w-[38px] h-[38px]" />

                        {/* Desktop Menu */}
                        <ul className="text-[#FFFFFF] 2xl:flex xl:flex lg:flex md:flex 
                            2xl:w-[524px] xl:w-[524px] lg:w-[527px] md:w-[399px]
                            2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[14px]
                            leading-[100%] items-center geologica font-medium justify-between hidden">
                            <li>Home</li>
                            <li>Features</li>
                            <li>Who It's For</li>
                            <li>Integrate With Your App</li>
                        </ul>

                        {/* Get Free Trial Button */}
                        <button className="bg-[#1B1A1F] 2xl:w-[141px] 2xl:h-[56px] xl:w-[141px] xl:h-[56px]
                             lg:w-[137.33px] lg:h-[56px] md:w-[100px] md:h-[42px] hidden 2xl:block xl:block lg:block md:block
                             
                            2xl:rounded-[15px] xl:rounded-[15px] lg:rounded-[12px] md:rounded-[8px]
                             2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[13px] leading-[100%] 
                             2xl:my-[19px] xl:my-[19px] lg:my-[13.33px]  md:my-[10px]
                             geologica font-medium  text-[#FFFFFF]">
                            Get free trial</button>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-[33px] h-[33px] bg-[#ffffff] rounded-[5px] flex items-center justify-center"
                            >
                                {isOpen ? (
                                    <span className="text-black text-[20px] font-bold">X</span>
                                ) : (
                                    <Image src="/Images/menu.svg" alt="menu" width={25} height={25} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`fixed top-0 right-0 h-screen w-[80vw] bg-[#FFFFFF] shadow-lg z-40 
                    px-12 py-5 text-[#1B1A1F] text-base font-medium geologica flex flex-col 
                   transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                    transition-transform duration-300 ease-in-out`}>

                        {/* Close Button at the top right inside panel */}
                        <div className="flex justify-end">
                            <button onClick={() => setIsOpen(false)} className="text-black text-2xl font-bold">X</button>
                        </div>

                        {/* Menu Items */}
                        <div className="flex flex-col space-y-4 mt-8">
                            <span className="cursor-pointer">Home</span>
                            <span className="cursor-pointer">Features</span>
                            <span className="cursor-pointer">Who It's For</span>
                            <span className="cursor-pointer">Integrate With Your App</span>
                        </div>

                        {/* Get Free Trial Button */}
                        <button className="bg-[#1B1A1F] text-[#FFFFFF] px-4 py-2 rounded-md w-full mt-10">
                            Get free trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

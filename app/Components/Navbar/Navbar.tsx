'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle smooth scrolling to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile menu after clicking a link
    setIsOpen(false);
  };

  // Listen to scroll events and toggle isScrolled state
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain threshold (e.g., 50px)
      const scrolled = window.scrollY > 50;
      console.log("Scroll position:", window.scrollY, "isScrolled:", scrolled); // Debug log
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Trigger handleScroll on mount to set initial state
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-30 w-full top-0 left-0">
      <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] mx-auto">
        <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%] mx-auto">
          <div
            className={`2xl:w-[964px] xl:w-[964px] lg:w-[885px] md:w-[664px] w-full 2xl:h-[93px] 
                xl:h-[93px] lg:h-[82px] md:h-[62px] h-[56px] 2xl:mt-[44px] xl:mt-[40px] lg:mt-[20px]
                 md:mt-[15px] mt-[10px] 2xl:rounded-[20px] xl:rounded-[20px] lg:rounded-[18px] md:rounded-[15px] rounded-[12px] mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
              isScrolled
                ? "bg-white shadow-custom"
                : "bg-[#FFFFFF1A] backdrop-blur-[4px]"
            }`}
            style={isScrolled ? { boxShadow: "0px 4px 30px #D8D8D866" } : {}}
          >
            {/* Logo */}
            <Image
              src="/Images/logo.svg"
              alt="logo"
              width={66}
              height={66}
              className="2xl:my-[13px] xl:my-[13px] lg:my-[16px] md:my-[12px] my-[8px] 2xl:w-[66px] 
              2xl:h-[66px] xl:w-[66px] xl:h-[66px] lg:w-[50.67px] lg:h-[50.67px] md:w-[38px] md:h-[38px] w-[38px] h-[38px]"
            />

            {/* Desktop Menu */}
            <ul
              className={`2xl:flex xl:flex lg:flex md:flex 2xl:w-[524px] xl:w-[524px] lg:w-[527px] 
                md:w-[399px] 2xl:text-[15px] xl:text-[15px] lg:text-[15px] md:text-[14px] leading-[100%] items-center geologica font-medium justify-between hidden transition-colors duration-300 ${
                isScrolled ? "text-[#1B1A1F]" : "text-[#FFFFFF]"
              }`}
            >
              <li
                onClick={() => scrollToSection("home")}
                className={`cursor-pointer transition-colors ${
                  isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"
                }`}
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection("what-makes")}
                className={`cursor-pointer transition-colors ${
                  isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"
                }`}
              >
                Features
              </li>
              <li
                onClick={() => scrollToSection("scan")}
                className={`cursor-pointer transition-colors ${
                  isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"
                }`}
              >
                Who It's For
              </li>
              <li
                onClick={() => scrollToSection("integrate")}
                className={`cursor-pointer transition-colors ${
                  isScrolled ? "hover:text-[#1DD673]" : "hover:text-[#1DD673]"
                }`}
              >
                Integrate With Your App
              </li>
            </ul>

            {/* Get Free Trial Button */}
            <button
              className={`bg-[#1B1A1F] 2xl:w-[141px] 2xl:h-[56px] xl:w-[141px] xl:h-[56px] lg:w-[137.33px] 
                lg:h-[56px] md:w-[100px] md:h-[42px] hidden 2xl:block xl:block lg:block md:block 2xl:rounded-[15px] 
                xl:rounded-[15px] lg:rounded-[12px] md:rounded-[8px] 2xl:text-[15px] xl:text-[15px] 
                lg:text-[15px] md:text-[13px] leading-[100%] 2xl:my-[19px] xl:my-[19px] lg:my-[13.33px]
                 md:my-[10px] geologica font-medium transition-colors duration-300 ${
                isScrolled ? "text-white" : "text-[#FFFFFF]"
              }`}
            >
              Get free trial
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[33px] h-[33px] bg-[#ffffff] rounded-[5px] flex items-center justify-center"
              >
                {isOpen ? (
                  <span className="text-[#1B1A1F] text-[20px] font-bold">X</span>
                ) : (
                  <Image src="/Images/menu.svg" alt="menu" width={25} height={25} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`fixed top-0 right-0 h-screen w-[80vw]  bg-[#FFFFFF] 
              shadow-lg z-40  py-8 text-[#1B1A1F] text-base font-medium geologica flex flex-col transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            {/* Close Button at the top right inside panel */}
            <div className=" w-[270px] flex justify-end ">
              
              <Image src="/Images/close-icon.svg" alt="close-icon" 
              width={30} height={30} onClick={() => setIsOpen(false)}/>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col space-y-4 mt-8 px-12">
              <span
                onClick={() => scrollToSection("home")}
                className="cursor-pointer hover:text-[#1DD673] transition-colors"
              >
                Home
              </span>
              <span
                onClick={() => scrollToSection("what-makes")}
                className="cursor-pointer hover:text-[#1DD673] transition-colors"
              >
                Features
              </span>
              <span
                onClick={() => scrollToSection("scan")}
                className="cursor-pointer hover:text-[#1DD673] transition-colors"
              >
                Who It's For
              </span>
              <span
                onClick={() => scrollToSection("integrate")}
                className="cursor-pointer hover:text-[#1DD673] transition-colors"
              >
                Integrate With Your App
              </span>
            </div>

            {/* Get Free Trial Button */}
            <button className="bg-[#1B1A1F] text-[#FFFFFF] px-4 py-2 rounded-md w-[200px] mx-auto mt-10">
              Get free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
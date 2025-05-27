'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io'; 
import Image from 'next/image';

type FAQItem = {
  id: string;
  title: string;
  description: string;
};

const filteredFAQs: FAQItem[] = [
  {
    id: '1',
    title: 'How do I integrate this solution into my app?',
    description: 'Most orders are processed and sent out within 24–48 hours after inventory arrives.',
  },
  {
    id: '2',
    title: 'Is technical knowledge required for integration?',
    description: 'Yes, we offer careful packaging and handling for delicate or special care products.',
  },
  {
    id: '3',
    title: 'Can I customize the features to match my apps design?',
    description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.',
  },
  {
    id: '4',
    title: 'What platforms are supported?',
    description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.',
  },
  {
    id: '5',
    title: 'How long does it take to integrate?',
    description: 'Absolutely, we provide tracking and inventory updates so you’re always in the loop.',
  },
];

type CardProps = {
  item: FAQItem;
  isActive: boolean;
  onClick: () => void;
};

const Card = ({ item, isActive, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className="cursor-pointer w-full h-auto bg-white px-[35px] py-[22px] rounded-[15px] transition-all duration-300"
  >
    <div className="flex justify-between items-center">
      <h3 className="2xl:text-[20px] xl:text-[18px] lg:text-[17px] md:text-[17px] text-[16px] font-semibold text-[#1B1A1F]">
        {item.title}
      </h3>

      <motion.span
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.15 }} // Reduced duration for faster arrow rotation
        className="text-xl text-[#1B1A1F]"
      >
        <IoIosArrowDown />
      </motion.span>
    </div>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.15 }} // Reduced duration for faster open/close
          className="overflow-hidden 2xl:mt-[10px] xl:mt-[15px] lg:mt-[15px] md:mt-[15px] mt-[15px]
           2xl:text-[18px] xl:text-[17px]
          lg:text-[16px] md:text-[16px] text-[14px] text-[#1B1A1F]"
        >
          {item.description}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function Frequently() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="bg-[#F7F7F7] w-full">
        <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[375px] h-[800px] md:h-[720px]  2xl:h-[800px] xl:h-[800px] lg:h-[800px]
          2xl:py-[75px] xl:py-[95px] lg:py-[100px] md:py-[50px] py-[40px] mx-auto">
          <div className='2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[335px] mx-auto '>

          <div className="2xl:w-[308px] 2xl:h-[54px] xl:w-[308px] xl:h-[54px] w-[265px] h-[46px]
          lg:w-[276px] lg:h-[54px] md:w-[276px] md:h-[54px] bg-[#ffffff] 
          2xl:rounded-[50px] xl:rounded-[50px] lg:rounded-[50px] md:rounded-[50px] rounded-[50px]
          flex 2xl:gap-[11px] xl:gap-[11px] lg:gap-[11px] md:gap-[11px] gap-[8.21px] mx-auto">

            <div className="2xl:w-[39px] 2xl:h-[39px] xl:w-[39px] xl:h-[39px]
            lg:w-[39px] lg:h-[39px]  md:w-[39px] md:h-[39px] w-[30px] h-[30px]
             bg-[#C7FFE1] rounded-full
             2xl:ml-[8px] xl:ml-[8px] 2xl:my-[8px] xl:my-[8px] md:my-[8px] my-[8px]
             lg:my-[8px] lg:ml-[8px] md:ml-[8px] ml-[8px]">

              <Image src="/Images/Frequently-icon.svg" alt="icon" width={20.53} height={20.53} 
              className="2xl:w-[26px]  xl:w-[26px]  lg:w-[26px] md:w-[26px] md:h-[26px]
              2xl:my-[6px] xl:my-[6px] 2xl:mx-[6px] xl:mx-[6px] md:mx-[7px] md:my-[6px] lg:mx-[7px] lg:my-[6px]
              mx-[5.53px] my-[4.74px]" />
            </div>

            <h1 className=" 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[16px] text-[16px]
             2xl:my-[18px] xl:my-[18px] lg:my-[16px] md:my-[17px] my-[13px]
            text-[#1B1A1F] font-normal geologica leading-[100%]">
              Frequently asked question
            </h1>
          </div>

          <h1 className="2xl:text-[40px] xl:text-[36px] lg:text-[36px] md:text-[34px] text-[20px]
          2xl:mt-[40px] xl:mt-[30px] lg:mt-[30px] md:mt-[30px] mt-[20px]
          text-[#1B1A1F] geologica font-bold w-[190px] lg:w-full md:w-full 2xl:w-full xl:w-full mx-auto
           leading-[130%] text-center ">
            Quick Help for Easy Integration
          </h1>

          <div className="2xl:w-[866px] xl:w-[866px] lg:w-[668px] md:w-[668px] w-[335px] mx-auto
           2xl:mt-[65px] xl:mt-[70px] lg:mt-[53px] md:mt-[55px] mt-[30px]">
            <div className="flex flex-col 2xl:gap-[15px] xl:gap-[15px] lg:gap-[15px] md:gap-[15px] gap-[15px]">
              {filteredFAQs.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  isActive={activeId === item.id}
                  onClick={() => handleClick(item.id)}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
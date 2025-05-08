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
    className="cursor-pointer w-[866px] h-auto bg-white px-[35px] py-[22px] rounded-[15px] transition-all duration-300"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-[20px] font-semibold text-[#1B1A1F]">
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
          className="overflow-hidden mt-[10px] text-[18px] text-[#1B1A1F]"
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
      <div className="bg-[#F7F7F7]">
        <div className="w-[1440px] mx-auto h-full py-[75px]">
          <div className="w-[308px] h-[54px] bg-[#ffffff] rounded-[50px] flex gap-[11px] mx-[566px]">
            <div className="w-[39px] h-[39px] bg-[#C7FFE1] rounded-full ml-[8px] my-[8px]">
              <Image src="/Images/Frequently-icon.svg" alt="icon" width={26} height={26} className="py-[6px] mx-[6px]" />
            </div>
            <h1 className="text-[#1B1A1F] font-normal geologica text-[18px] leading-[100%] my-[18px]">
              Frequently asked question
            </h1>
          </div>
          <h1 className="text-[#1B1A1F] geologica font-bold text-[40px] leading-[130%] text-center mt-[40px]">
            Quick Help for Easy Integration
          </h1>
          <div className="w-[866px] mx-auto mt-[65px]">
            <div className="flex flex-col gap-[15px]">
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
    </>
  );
}
'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
 
const chips = [
  "Vegan & Keto Food Stores",
  "Yoga Instructors",
  "Organic Food Brands",
  "Fitness Centers",
  "Dietitians",
  "Gluten free brands",
  "Gyms",
  "TeleNutrition",
  "Modern Paleo Brands",
  "Sports Clubs",
  "Health Coaches",
];
 
const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 400 - 200), // spread on x-axis
  y: Math.floor(Math.random() * 150 + 150), // fall to somewhere between 150–300px
  rotate: Math.floor(Math.random() * 40 - 20), // random rotation
});
 
export default function FallingChips() {
  const [positions, setPositions] = useState([]);
 
  useEffect(() => {
    const newPositions = chips.map(() => getRandomPosition());
    setPositions(newPositions);
  }, []);
 
  return (
<div className="relative w-full h-[400px] flex justify-center items-start mt-10 overflow-hidden">
      {chips.map((chip, index) => (
<motion.div
          key={index}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: positions[index]?.y || 0,
            x: positions[index]?.x || 0,
            rotate: positions[index]?.rotate || 0,
            opacity: 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 10,
            delay: index * 0.15,
          }}
          className="absolute px-4 py-2 bg-black text-white rounded-full text-sm font-semibold shadow-md"
>
          {chip}
</motion.div>
      ))}
</div>
  );
}
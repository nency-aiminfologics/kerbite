'use client';
import Image from "next/image";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function OurTechnology() {
  // Define a type for the valid screen sizes
  type ScreenSize = '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'mobile';

  // Create separate animation controls for each chip
  const controls = Array.from({ length: 11 }, () => useAnimation());

  // Reference to the section to observe
  const ref = useRef(null);

  // Detect if the section is in view
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  // State to store the current screen size, typed as ScreenSize
  const [screenSize, setScreenSize] = useState<ScreenSize>('mobile');

  // State to store the sorted order of chips based on top positions
  const [sortedOrder, setSortedOrder] = useState<number[]>([]);

  // Detect screen size on mount and on resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1440) {
        setScreenSize('2xl');
      } else if (width >= 1280) {
        setScreenSize('xl');
      } else if (width >= 1024) {
        setScreenSize('lg');
      } else if (width >= 768) {
        setScreenSize('md');
      } else if (width >= 640) {
        setScreenSize('sm');
      } else {
        setScreenSize('mobile');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define final top positions for each chip based on screen size
  const finalTopPositions: Record<ScreenSize, string[]> = {
    '2xl': [
      '62.44%', '68.78%', '84.65%', '79.36%', '87.29%', '71.43%', '76.72%', '58.22%', '82.53%', '58.22%', '83.06%',
    ],
    xl: [
      '68.94%', '71.90%', '86.69%', '78.24%', '87.53%', '58.38%', '71.90%', '85.00%', '59.22%', '65.56%', '82.46%',
    ],
    lg: [
      '88.17%', '83.46%', '57.00%', '78.70%', '80.67%', '68.84%', '73.97%', '63.71%', '58.97%', '60.94%', '72.78%',
    ],
    md: [
      '87.48%', '87.48%', '59.33%', '78.82%', '76.65%', '89.65%', '76.65%', '65.83%', '61.50%', '61.50%', '76.65%',
    ],
    sm: [
      '90.48%', '86.48%', '65.33%', '78.82%', '76.65%', '89.65%', '74.65%', '65.83%', '61.50%', '61.50%', '76.65%',
    ],
    mobile: [
      '90.77%', '62.56%', '40.64%', '81.18%', '56.92%', '65.38%', '71.03%', '54.10%', '49.02%', '45.64%', '81.74%',
    ],
  };

  // Define final rotation values for each chip based on screen size
  const finalRotations: Record<ScreenSize, number[]> = {
    '2xl': [-25, -7, -3, -15, 0, 0, -22, 20, -16, 30, -17],
    xl: [-25, -12, 0, -23, 0, 14, -16, 18, 9, 16, 21],
    lg: [0, -9, -9, 17, -20, 5, -36, 0, -27, 13, 9],
    md: [0, -9, -20, -22, -16, -15, -36, 0, -28, 14, 9],
    sm: [0, -30, -20, -22, -16, -15, -36, 0, -28, 14, 9],
    mobile: [0, -13, -8, -19, -14, 0, 5, -23, -15, 9, -22],
  };

  // Sort chips by final top position (highest to lowest) when screen size changes
  useEffect(() => {
    const indices = Array.from({ length: 11 }, (_, i) => i); // [0, 1, 2, ..., 10]
    const sorted = indices.sort((a, b) => {
      const topA = parseFloat(finalTopPositions[screenSize][a]); // Convert percentage to number
      const topB = parseFloat(finalTopPositions[screenSize][b]);
      return topB - topA; // Sort in descending order (highest first)
    });
    setSortedOrder(sorted);
  }, [screenSize]);

  // Trigger animations sequentially in sorted order when the section comes into view
  useEffect(() => {
    if (isInView && sortedOrder.length > 0) {
      controls.forEach((control, index) => {
        const delay = sortedOrder.indexOf(index) * 0.15; // Stagger based on sorted order
        control.start({
          translateY: 0,
          opacity: 1,
          top: ['0%', finalTopPositions[screenSize][index]], // Fall from top (0%) to final position
          rotate: [0, finalRotations[screenSize][index]], // Animate rotation from 0 to final value
          transition: {
            top: {
              duration: 0.8,
              ease: 'easeOut',
              delay: delay, // Delay based on sorted order
            },
            rotate: {
              duration: 0.8,
              ease: 'easeOut',
              delay: delay,
            },
            translateY: {
              type: 'spring',
              stiffness: 80,
              damping: 10,
              delay: delay,
            },
            opacity: {
              duration: 0.5,
              delay: delay,
            },
          },
        });
      });
    }
  }, [isInView, controls, screenSize, sortedOrder]);

  return (
    <>
      <div className="w-full">
        <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[310px] sm:w-[620px] 2xl:py-[103px] xl:py-[100px] lg:py-[60px] md:py-[60px] py-[65px] mx-auto">
          <div
            ref={ref}
            className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] 2xl:h-[468px] 
             xl:h-[536px] lg-healing-[479px] md:h-[564px] h-[702px] 2xl:rounded-[40px] xl:rounded-[40px] lg:rounded-[30px] md:rounded-[20px] rounded-[20px]
              bg-[#1B1A1F] relative mx-auto overflow-hidden"
          >
            <div className="2xl:w-[604px] xl:w-[475px] lg:w-[420px] md:w-[420px] sm:w-[400px] w-[300px] 2xl:pt-[62px] xl:pt-[50px] 
            lg:pt-[50px] md:pt-[50px] pt-[60px] mx-auto">
              <h1 className="text-[#1DD673] geologica text-center font-normal 2xl:text-[24px] xl:text-[20px] lg:text-[18px] 
              md:text-[18px] sm:text-[18px] text-[16px] leading-[130%] tracking-[-2%]">
                Ready to integrate?
              </h1>
              <h1 className="geologica text-center font-bold text-[#FFFFFF] 2xl:text-[40px] xl:text-[36px] 
              lg:text-[34px] md:text-[34px] sm:text-[34px] text-[24px] leading-[130%] tracking-[-2%] 2xl:mt-[10px] xl:mt-[15px] lg:mt-[26px] md:mt-[26px] mt-[20px]">
                Supercharge Your App with Our Technology
              </h1>
              <div className="flex justify-center">
                <button className="2xl:w-[249px] 2xl:h-[61px] xl:w-[183px] xl:h-[55px] w-[141px] h-[47px]
                 lg:w-[160px] lg:h-[54px] md:w-[160px] md:h-[54px] sm:w-[160px] sm:h-[54px]
                  2xl:mt-[25px] xl:mt-[20px] lg:mt-[29px] md:mt-[29px] mt-[30px] 
                  2xl:rounded-[15px] xl:rounded-[12px] lg:rounded-[10px] md:rounded-[10px] rounded-[10px] sm:rounded-[10px]
                   2xl:text-[15px] xl:text-[15px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[15px]
                    bg-[#FFFFFF] text-[#1B1A1F] leading-[100%] font-medium geologica">
                  Get free trial
                </button>
              </div>
            </div>

            {/* Card Container */}
            <div
              className="2xl:w-[1117.82px] xl:w-[1070.58px] lg:w-[814px] md:w-[644.83px] sm:w-[600px] w-[304px] h-full 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-[50%] absolute right-0 flex z-10"
            >
              {/* Card 1: Vegan */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[0]}
                className="absolute 2xl:top-[33%] xl:top-[33%] lg:top-[79%] md:top-[75%] sm:top-[75%] top-[90%] 
                2xl:left-0 xl:left-0 lg:left-[33%] md:left-[34%] sm:left-[33%] left-[15%] transform"
              >
                <Image
                  src="/Images/Vegan.svg"
                  alt="Vegan"
                  width={209}
                  height={54}
                  className="2xl:w-[276.74px] xl:w-[276.74px] lg:w-[233.03px] md:w-[233px] sm:w-[233px] w-[209px]"
                />
              </motion.div>

              {/* Card 2: Yoga */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[1]}
                className="absolute 2xl:top-[45%] xl:top-[40%] lg:top-[67%] md:top-[75%] sm:top-[75%] top-[40%] 
                2xl:left-[15%] xl:left-[20%] lg:left-[9%] md:left-[8%] sm:left-[8%] left-0 transform"
              >
                <Image
                  src="/Images/yoga.svg"
                  alt="yoga"
                  width={198.5}
                  height={54}
                  className="2xl:w-[198.5px] xl:w-[198.5px] lg:w-[162.9px] md:w-[163px] sm:w-[163px] w-[147px]"
                />
              </motion.div>

              {/* Card 3: Sports */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[2]}
                className="absolute 2xl:top-[75%] xl:top-[75%] lg:top-0 md:top-[10%] 
                2xl:left-[5%] xl:left-[7%] lg:left-[5%] md:left-[5%] sm:left-[1%] left-[2%] transform"
              >
                <Image
                  src="/Images/sports.svg"
                  alt="sports"
                  width={182}
                  height={54}
                  className="2xl:w-[182px] xl:w-[182px] lg:w-[141.95px] md:w-[142px] sm:w-[142px] w-[127px]"
                />
              </motion.div>

              {/* Card 4: Organic */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[3]}
                className="absolute 2xl:top-[65%] xl:top-[55%] lg:top-[55%] md:top-[55%] top-[73%] 
                2xl:left-[23%] xl:left-[29%] lg:left-[50%] md:left-[70%] sm:left-[70%] left-[43%] transform"
              >
                <Image
                  src="/Images/organic.svg"
                  alt="organic"
                  width={246.11}
                  height={54}
                  className="2xl:w-[246.11px] xl:w-[246.11px] lg:w-[196px] md:w-[196px] sm:w-[196px] w-[175px]"
                />
              </motion.div>

              {/* Card 5: Fitness */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[4]}
                className="absolute 2xl:top-[80%] xl:top-[77%] lg:top-[60%] md:top-[50%] top-[30%] 
                2xl:left-[39%] xl:left-[43%] lg:left-[78%] md:left-[55%] sm:left-[55%] left-[50%]"
              >
                <Image
                  src="/Images/fitnes.svg"
                  alt="fitnes"
                  width={200}
                  height={0}
                  className="2xl:w-[200px] xl:w-[200px] lg:w-[145px] md:w-[145px] sm:w-[145px] w-[140px]"
                />
              </motion.div>

              {/* Card 6: Dietitians */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[5]}
                className="absolute 2xl:top-[50%] xl:top-[8%] lg:top-[30%] md:top-[80%] top-[45%] 
                2xl:left-[47%] xl:left-[30%] lg:left-[66%] md:left-[78%] sm:left-[78%] left-[60%]"
              >
                <Image
                  src="/Images/Dietitians.svg"
                  alt="Dietitians"
                  width={151.56}
                  height={0}
                  className="2xl:w-[151.56px] xl:w-[151.56px] lg:w-[121px] md:w-[121px] sm:w-[121px] w-[117px]"
                />
              </motion.div>

              {/* Card 7: Gluten Free Brands */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[6]}
                className="absolute 2xl:top-[60%] xl:top-[40%] lg:top-[43%] md:top-[50%] top-[55%] 
                2xl:left-[57%] xl:left-[52%] lg:left-0 md:left-0 sm:left-0 left-[15%] transform"
              >
                <Image
                  src="/Images/Gluten free brands.svg"
                  alt="Gluten free brands"
                  width={225.42}
                  height={54}
                  className="2xl:w-[224.42px] xl:w-[224.42px] lg:w-[179px] md:w-[179px] sm:w-[179px] w-[179px]"
                />
              </motion.div>

              {/* Card 8: TeleNutrition */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[7]}
                className="absolute 2xl:top-[25%] xl:top-[71%] lg:top-[17%] md:top-[25%] top-[25%] 
                2xl:left-[70%] xl:left-[65%] md:left-[40%] sm:left-[40%] lg:left-[45%] left-[8%] transform"
              >
                <Image
                  src="/Images/TeleNutrition .svg"
                  alt="TeleNutrition"
                  width={192.95}
                  height={54}
                  className="2xl:w-[192.95px] xl:w-[192.95px] lg:w-[145px] md:w-[145px] sm:w-[145px] w-[132px]"
                />
              </motion.div>

              {/* Card 9: Gyms */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[8]}
                className="absolute 2xl:top-[71%] xl:top-[10%] lg:top-[5%] md:top-[15%] top-[16%] 
                2xl:left-[70%] xl:left-[48%] lg:left-[23%] md:left-[27%] sm:left-[27%] left-0 transform"
              >
                <Image
                  src="/Images/gyms.svg"
                  alt="gym"
                  width={139}
                  height={54}
                  className="2xl:w-[139px] xl:w-[139px] lg:w-[101px] md:w-[101px] sm:w-[101px] w-[95px]"
                />
              </motion.div>

              {/* Card 10: Modern Paleo Brands */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[9]}
                className="absolute 2xl:top-[25%] xl:top-[25%] lg:top-[10%] md:top-[15%] top-[10%] 
                2xl:left-[81%] xl:left-[75%] lg:left-[75%] md:left-[65%] sm:left-[65%] left-[40%] transform"
              >
                <Image
                  src="/Images/Modern Paleo Brands.svg"
                  alt="Modern Paleo Brands"
                  width={239}
                  height={54}
                  className="2xl:w-[239px] xl:w-[239px] lg:w-[202px] md:w-[202px] sm:w-[202px] w-[179px]"
                />
              </motion.div>

              {/* Card 11: Health Coaches */}
              <motion.div
                initial={{ translateY: -100, opacity: 0, top: '0%', rotate: 0 }}
                animate={controls[10]}
                className="absolute 2xl:top-[72%] xl:top-[65%] lg:top-[40%] md:top-[50%] top-[74%] 
                2xl:left-[82%] xl:left-[81%] lg:left-[27%] md:left-[28%] sm:left-[28%] left-0 transform"
              >
                <Image
                  src="/Images/Health Coaches.svg"
                  alt="gym owners icon"
                  width={200}
                  height={54}
                  className="2xl:w-[200px] xl:w-[200px] lg:w-[161.97px] md:w-[162px] sm:w-[162px] w-[142px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
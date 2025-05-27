'use client';
import Image from "next/image";
import { motion } from 'framer-motion';

export default function OurTechnology() {
  return (
    <>
      <div className="w-full">
        <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[375px] 2xl:py-[103px] xl:py-[100px] lg:py-[60px] md:py-[60px] py-[65px] mx-auto">
          <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[335px] 2xl:h-[468px]
           xl:h-[536px] lg:h-[479px] md:h-[564px] h-[702px] 2xl:rounded-[40px] xl:rounded-[40px] lg:rounded-[30px] md:rounded-[20px]
            rounded-[20px] bg-[#1B1A1F] relative mx-auto overflow-hidden">
            <div className="2xl:w-[604px] xl:w-[475px] lg:w-[420px] md:w-[420px] w-[262px] 2xl:pt-[62px] xl:pt-[50px] lg:pt-[50px] md:pt-[50px] pt-[60px] mx-auto">
              <h1 className="text-[#1DD673] geologica text-center font-normal 2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[18px] text-[16px] leading-[130%] tracking-[-2%]">
                Ready to integrate?
              </h1>
              <h1 className="geologica text-center font-bold text-[#FFFFFF] 2xl:text-[40px] xl:text-[36px] lg:text-[34px] md:text-[34px] text-[24px] leading-[130%] tracking-[-2%] 2xl:mt-[10px] xl:mt-[15px] lg:mt-[26px] md:mt-[26px] mt-[20px]">
                Supercharge Your App with Our Technology
              </h1>
              <div className="flex justify-center">
                <button className="2xl:w-[249px] 2xl:h-[61px] xl:w-[183px] xl:h-[55px] w-[141px] h-[47px] lg:w-[160px] lg:h-[54px] md:w-[160px] md:h-[54px] 2xl:mt-[25px] xl:mt-[20px] lg:mt-[29px] md:mt-[29px] mt-[30px] 2xl:rounded-[15px] xl:rounded-[12px] lg:rounded-[10px] md:rounded-[10px] rounded-[10px] 2xl:text-[15px] xl:text-[15px] lg:text-[18px] md:text-[18px] text-[15px] bg-[#FFFFFF] text-[#1B1A1F] leading-[100%] font-medium geologica">
                  Get free trial
                </button>
              </div>
            </div>

            {/* Card Container with Animation */}
            <div className="2xl:w-[1117.82px]  2xl:h-[247.4px] xl:w-[1070.58px] xl:h-[226.45px] lg:w-[814px] lg:h-[189px]
            md:w-[644.83px] md:h-[244.25px]
             2xl:left-[8%] xl:left-[3.5%] lg:left-[5%] md:left-[2%]
              2xl:top-[45%] xl:top-[55%] lg:top-[57%] md:top-[55%]
            absolute  right-0 flex z-10 border border-white">
              {/* Card 1: Vegan */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 0 * 0.15 }}
                className="absolute 2xl:top-[33%] xl:top-[33%] lg:top-[79%] md:top-[75%]
                 2xl:left-0 xl:left-0 lg:left-[33%] md:left-[34%]
                transform 2xl:-rotate-25 xl:-rotate-25 lg:rotate-0"
              >
                <Image
                  src="/Images/Vegan.svg"
                  alt="Vegan"
                  width={276.74}
                  height={54}
                  className="2xl:w-[276.74px] xl:w-[276.74px] lg:w-[233.03px] md:w-[233px]"
                />
              </motion.div>

              {/* Card 2: Yoga */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 1 * 0.15 }}
                className="absolute 2xl:top-[45%] xl:top-[40%] lg:top-[65%] md:top-[75%]
                2xl:left-[15%] xl:left-[20%] lg:left-[15%] md:left-[8%]
                 transform 2xl:-rotate-7 xl:-rotate-12 lg:-rotate-26 md:-rotate-9"
              >
                <Image
                  src="/Images/yoga.svg"
                  alt="yoga"
                  width={198.5}
                  height={54}
                  className="2xl:w-[198.5px] xl:w-[198.5px] lg:w-[162.9px] md:w-[163px]"
                />
              </motion.div>

              {/* Card 3: Sports */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 2 * 0.15 }}
                className="absolute 2xl:top-[75%] xl:top-[75%] lg:top-[38%] md:top-[10%] 
                2xl:left-[5%] xl:left-[7%] lg:left-[35%] md:left-[5%]
                transform 2xl:-rotate-3 xl:rotate-0 lg:-rotate-32 md:-rotate-20"
              >
                <Image
                  src="/Images/sports.svg"
                  alt="sports"
                  width={182}
                  height={54}
                  className="2xl:w-[182px] xl:w-[182px] lg:w-[141.95px] md:w-[142px]"
                />
              </motion.div>

              {/* Card 4: Organic */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 3 * 0.15 }}
                className="absolute 2xl:top-[65%] xl:top-[55%] lg:top-[55%] md:top-[55%]
                 2xl:left-[23%] xl:left-[29%] lg:left-[50%] md:left-[70%]
                  transform 2xl:-rotate-15 xl:-rotate-23 lg:rotate-17 md:-rotate-22"
              >
                <Image
                  src="/Images/organic.svg"
                  alt="organic"
                  width={246.11}
                  height={54}
                  className="2xl:w-[246.11px] xl:w-[246.11px] lg:w-[196px] md:w-[196px]"
                />
              </motion.div>

              {/* Card 5: Fitness */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 4 * 0.15 }}
                className="absolute 2xl:top-[80%] xl:top-[77%] lg:top-[60%] md:top-[50%]
                2xl:left-[39%] xl:left-[43%] lg:left-[78%] md:left-[55%]
                 2xl:rotate-0 xl:rotate-0 lg:-rotate-20 md:-rotate-16"
              >
                <Image
                  src="/Images/fitnes.svg"
                  alt="fitnes"
                  width={200}
                  height={0}
                  className="2xl:w-[200px] xl:w-[200px] lg:w-[145px] md:w-[145px]"
                />
              </motion.div>

              {/* Card 6: Dietitians */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 5 * 0.15 }}
                className="absolute 2xl:top-[50%] xl:top-[8%] lg:top-[38%] md:top-[80%] 
                2xl:left-[47%] xl:left-[30%] lg:left-[66%] md:left-[78%]
                 2xl:rotate-0 xl:rotate-14 lg:rotate-5 md:-rotate-15"
              >
                <Image
                  src="/Images/Dietitians.svg"
                  alt="Dietitians"
                  width={151.56}
                  height={0}
                  className="2xl:w-[151.56px] xl:w-[151.56px] lg:w-[121px] md:w-[121px]"
                />
              </motion.div>

              {/* Card 7: Gluten Free Brands */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 6 * 0.15 }}
                className="absolute 2xl:top-[60%] xl:top-[40%] lg:top-[25%]  md:top-[50%]
                2xl:left-[57%] xl:left-[52%]  lg:left-[20%] md:left-0
                transform 2xl:-rotate-22 xl:-rotate-16 lg:-rotate-10 md:-rotate-36"
              >
                <Image
                  src="/Images/Gluten free brands.svg"
                  alt="Gluten free brands"
                  width={225.42}
                  height={54}
                  className="2xl:w-[224.42px] xl:w-[224.42px] lg:w-[179px] md:w-[179px]"
                />
              </motion.div>

              {/* Card 8: TeleNutrition */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 7 * 0.15 }}
                className="absolute 2xl:top-[25%] xl:top-[71%] lg:top-[60%] md:top-[25%]
                2xl:left-[70%] xl:left-[65%] md:left-[40%]
                 transform 2xl:rotate-20 xl:rotate-18 lg:-rotate-9 md:rotate-0"
               
              >
                <Image
                  src="/Images/TeleNutrition .svg"
                  alt="TeleNutrition"
                  width={192.95}
                  height={54}
                  className="2xl:w-[192.95px] xl:w-[192.95px] lg:w-[145px] md:w-[145px]"
                />
              </motion.div>

              {/* Card 9: Gyms */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 8 * 0.15 }}
                className="absolute 2xl:top-[71%] xl:top-[10%] lg:top-[20%] md:top-[15%] 
                2xl:left-[70%] xl:left-[48%] lg:left-[53%] md:left-[27%]
                transform 2xl:-rotate-16 xl:rotate-9 lg:rotate-5 md:-rotate-28"
              >
                <Image
                  src="/Images/gyms.svg"
                  alt="gym"
                  width={139}
                  height={54}
                  className="2xl:w-[139px] xl:w-[139px] lg:w-[101px] md:w-[101px]"
                />
              </motion.div>

              {/* Card 10: Modern Paleo Brands */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 9 * 0.15 }}
                className="absolute 2xl:top-[25%] xl:top-[25%] lg:top-[10%] md:top-[15%] 
                2xl:left-[81%] xl:left-[75%]  lg:left-[75%] md:left-[65%]
                transform 2xl:rotate-30 xl:rotate-16 lg:rotate-13 md:rotate-14"
                style={{ transform: "rotate(32.6deg)" }}
              >
                <Image
                  src="/Images/Modern Paleo Brands.svg"
                  alt="Modern Paleo Brands"
                  width={239}
                  height={54}
                  className="2xl:w-[239px] xl:w-[239px] lg:w-[202px] md:w-[202px]"
                />
              </motion.div>

              {/* Card 11: Health Coaches */}
              <motion.div
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 80, damping: 10, delay: 10 * 0.15 }}
                className="absolute 2xl:top-[72%] xl:top-[65%] lg:top-[20%] md:top-[50%]
                2xl:left-[82%] xl:left-[81%] lg:left-[4%] md:left-[28%]
                 transform 2xl:-rotate-17 xl:rotate-21 lg:-rotate-25 md:rotate-9"
               
              >
                <Image
                  src="/Images/Health Coaches.svg"
                  alt="gym owners icon"
                  width={200}
                  height={54}
                  className="2xl:w-[200px] xl:w-[200px] lg:w-[161.97px] md:w-[162px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
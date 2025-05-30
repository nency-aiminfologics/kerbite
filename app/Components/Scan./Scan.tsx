'use client';
import Image from 'next/image';

export default function Scan() {
  return (
    <>
      <div className="w-full bg-[#ffffff] overflow-hidden ">
        <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px]  w-[100%] mx-auto overflow-hidden  ">
          <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px]  w-[90%] mx-auto  ">
            <div className="2xl:w-[1068px] xl:w-[950.65px] lg:w-[806.67px] md:w-[605px] sm:w-[500px]  w-[273px]  py-[50px] lg:py-[90px] md:py-[70px] 2xl:py-0 xl:py-0 mx-auto relative">
              {/* Header Section */}
              <div className="lg:w-[646px]  md:w-[484px] sm:w-[400px] w-[273px] md:mt-[70px] mx-auto 2xl:hidden xl:hidden lg:block md:block ">
                <div className="lg:w-[448px] md:w-[434px] sm:w-[380px]  w-[266px] sm:text-[32px] text-[20px] lg:text-[36px] md:text-[34px] text-[#000000] leading-[100%] font-semibold geologica flex justify-between mx-auto">
                  <h1>Analyze.</h1>
                  <h1>Scan.</h1>
                  <h1>Results.</h1>
                </div>
                <p className="lg:text-[20px] md:text-[16px] sm:text-[16px] text-[14px] lg:mt-[20px] md:mt-[24px] sm:mt-[22px]  mt-[15px] text-[#7D7C81] leading-[100%] geologica text-center">
                  Helping health professionals guide clients to better nutrition is challenging. Endless food options, misleading labels, and confusing choices.
                </p>
              </div>

              {/* Background and Circular Motion Container */}
              <div
                className="bg-cover bg-center bg-no-repeat w-[273px] h-[273px] sm:w-[500px] sm:h-[500px] sm:mt-[40px]  2xl:mt-0 xl:mt-0 2xl:w-[1068px] 2xl:h-[1069px] xl:w-[950.65px] xl:h-[951.54px] md:w-[605px] md:h-[605px] md:mt-[50px] mt-[50px] lg:w-[806.67px] lg:h-[806.67px] lg:mt-[80px]"
                style={{ backgroundImage: "url('/Images/animation-bg.png')" }}
              >
                {/* Logo */}
                <div className="w-[64px] h-[64px] my-[110px] mx-[107px] sm:mx-[200px] sm:my-[200px]  lg:w-[210px] lg:h-[210px]  sm:w-[100px] sm:h-[100px] sm:rounded-[70px] md:w-[157px] md:h-[157px] lg:rounded-[106.67px] rounded-[32px] md:rounded-[80px]  p-[13.44px] lg:p-[44.14px] md:p-[33px] lg:my-[299.67px] md:my-[225px] lg:mx-[297px] md:mx-[223px] absolute bg-[#1B1A1F] 2xl:hidden xl:hidden lg:block md:block">
                  <Image
                    src="/Images/logo.svg"
                    alt="Green circular icon with a checkmark"
                    width={37.12}
                    height={37.12}
                    className="lg:w-[121.72px] lg:h-[121.72px] md:w-[91px] md:h-[91px] sm:h-[75px] sm:w-[75px]  mx-auto"
                  />
                </div>

                {/* Larger Screen Content (unchanged) */}
                <div className="2xl:w-[592px] xl:w-[527px] 2xl:mx-[238px] xl:mx-[211px] xl:my-[330px] 2xl:my-[351px] absolute hidden lg:hidden md:hidden 2xl:block xl:block">
                  <h1 className="2xl:text-[40px] xl:text-[36px] font-semibold text-center leading-[100%] text-[#000000]">
                    Scan.
                  </h1>
                  <div className="flex 2xl:w-[454px] xl:w-[405.48px] justify-between 2xl:mt-[13px] xl:mt-[10.7px] mx-auto">
                    <h1 className="2xl:text-[40px] xl:text-[36px] 2xl:mt-[25px] xl:mt-[22px] font-semibold text-center text-[#000000] leading-[100%]">
                      Analyze.
                    </h1>
                    <div className="2xl:w-[100px] 2xl:h-[100px] xl:w-[89px] xl:h-[89px] 2xl:rounded-[50px] xl:rounded-[44.51px] bg-[#1B1A1F]">
                      <Image
                        src="/Images/logo.svg"
                        alt="Green circular icon with a checkmark"
                        width={58}
                        height={58}
                        className="2xl:w-[58px] 2xl:h-[58px] xl:w-[52px] xl:h-[52px] 2xl:my-[21px] xl:my-[19px] mx-auto"
                        priority
                      />
                    </div>
                    <h1 className="text-[#000000] 2xl:text-[40px] xl:text-[36px] font-semibold text-center leading-[100%] 2xl:mt-[25px] xl:mt-[22px]">
                      Results.
                    </h1>
                  </div>
                  <p className="text-[#7D7C81] 2xl:w-[592px] xl:w-[527px] 2xl:text-[20px] xl:text-[20px] leading-[100%] 2xl:mt-[30px] xl:mt-[27.3px] text-center">
                    Helping health professionals guide clients to better nutrition is challenging. Endless food options,
                    misleading labels, and confusing choices.
                  </p>
                  <div className="flex justify-center">
                    <button
                      className={[
                        "2xl:w-[249px] 2xl:h-[61px] xl:w-[239px] xl:h-[51px]",
                        "2xl:text-[17px] xl:text-[16px] 2xl:rounded-[15px] xl:rounded-[14px]",
                        "flex items-center justify-center",
                        "2xl:mt-[64px] xl:mt-[57px] bg-[#1B1A1F] text-[#ffffff]",
                      ].join(" ")}
                    >
                      Get free trial
                    </button>
                  </div>
                </div>

                {/* Circular Motion for Chips */}
                <div className="circular-motion flex justify-center items-center">
                  {/* Card 1: Gym Owners */}
                  <div className="card absolute">
                    <Image
                      src="/Images/gym owners.svg"
                      alt="gym owners"
                      width={182}
                      height={0}
                      className="2xl:w-[300px] xl:w-[250px] lg:w-[162px] md:w-[162px] hidden  lg:block md:block 2xl:block xl:block sm:block"
                    />
                    <Image
                      src="/Images/gym owners-iscon.svg"
                      alt="gym owners-iscon"
                      width={150}
                      height={40}
                      className="lg:hidden md:hidden sm:hidden block"
                    />
                  </div>

                  {/* Card 2: Sports Coaches */}
                  <div className="card absolute">
                    <Image
                      src="/Images/sport coaches.svg"
                      alt="sport coaches"
                      width={182}
                      height={0}
                      className="2xl:w-[300px] xl:w-[250px] lg:w-[189px] md:w-[189px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                    />
                    <Image
                      src="/Images/sport coaches-icons.svg"
                      alt="sport coaches-iscon"
                      width={150}
                      height={40}
                      className=" lg:hidden md:hidden sm:hidden block"
                    />
                  </div>

                  {/* Card 3: Nutritions */}
                  <div className="card absolute">
                    <Image
                      src="/Images/nutritions.svg"
                      alt="nutritions"
                      width={182}
                      height={0}
                      className="2xl:w-[300px] xl:w-[250px]  lg:w-[162px] md:w-[162px] hidden  lg:block md:block 2xl:block xl:block sm:block"
                    />
                    <Image
                      src="/Images/nutritions-icons.svg"
                      alt="nutritions-iscon"
                      width={150}
                      height={40}
                      className="lg:hidden sm:hidden md:hidden block"
                    />
                  </div>

                  {/* Card 4: Health-Care */}
                  <div className="card absolute">
                    <Image
                      src="/Images/health-care.svg"
                      alt="health-care"
                      width={182}
                      height={0}
                      className="2xl:w-[300px] xl:w-[250px] lg:w-[178px] md:w-[178px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                    />
                    <Image
                      src="/Images/health-care-icons.svg"
                      alt="health-care-iscon"
                      width={150}
                      height={40}
                      className="lg:hidden md:hidden sm:hidden block"
                    />
                  </div>

                  {/* Card 5: Wellness & Fitness */}
                  <div className="card absolute">
                    <Image
                      src="/Images/Wellness & Fitness.svg"
                      alt="wellness & fitness"
                      width={182}
                      height={0}
                      className="2xl:w-[300px] xl:w-[250px] lg:w-[211px] md:w-[211px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                    />
                    <Image
                      src="/Images/Wellness & Fitness-icons.svg"
                      alt="wellness & fitness-iscon"
                      width={150}
                      height={40}
                      className=" block md:hidden lg:hidden sm:hidden"
                    />
                  </div>

                  {/* Card 6: Yoga Instructors */}
                  <div className="card absolute">
                    <Image
                      src="/Images/Yoga instructors.svg"
                      alt="yoga instructors"
                      width={182}
                      height={0}
                      className="2xl:w-[300px] xl:w-[250px] lg:w-[194px] md:w-[194px]  hidden  lg:block md:block 2xl:block xl:block sm:block"
                    />
                    <Image
                      src="/Images/Yoga instructors-icons.svg"
                      alt="yoga instructors-iscon"
                      width={150}
                      height={40}
                      className=" block md:hidden lg:hidden sm:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .circular-motion {
          position: relative;
          width: 1068px;
          height: 1068px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          position: absolute;
          animation: spin 25s linear infinite, fadeAndHide 25s linear infinite;
          transform-origin: 548px 548px;
        }

        .card:nth-child(1) {
          animation-delay: 0s;
          transform: rotate(0deg) translateX(548px) rotate(0deg);
        }
        .card:nth-child(2) {
          animation-delay: -4.17s;
          transform: rotate(60deg) translateX(548px) rotate(-60deg);
        }
        .card:nth-child(3) {
          animation-delay: -8.34s;
          transform: rotate(120deg) translateX(548px) rotate(-120deg);
        }
        .card:nth-child(4) {
          animation-delay: -12.5s;
          transform: rotate(180deg) translateX(548px) rotate(-180deg);
        }
        .card:nth-child(5) {
          animation-delay: -16.67s;
          transform: rotate(240deg) translateX(548px) rotate(-240deg);
        }
        .card:nth-child(6) {
          animation-delay: -20.84s;
          transform: rotate(300deg) translateX(548px) rotate(-300deg);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg) translateX(548px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(548px) rotate(-360deg);
          }
        }
          @keyframes fadeAndHide {
          0% {
            opacity: 1;
            visibility: visible;
          }
          24% {
            opacity: 0.1;
            visibility: visible;
          }
          25% {
            opacity: 0;
            visibility: hidden;
          }
          26% {
            opacity: 0.1;
            visibility: visible;
          }
          50% {
            opacity: 1;
            visibility: visible;
          }
          74% {
            opacity: 0.1;
            visibility: visible;
          }
          75% {
            opacity: 0;
            visibility: hidden;
          }
          76% {
            opacity: 0.1;
            visibility: visible;
          }
          100% {
            opacity: 1;
            visibility: visible;
          }
        }
           @media (max-width: 1537px) {
          .circular-motion {
            width: 950.65px;
            height: 951.54px;
          }
          .card {
            transform-origin: 488px 488px;
            border-radius: 28px;
            animation: spin 25s linear infinite, fadeAndHide 25s linear infinite;
          }
          .card:nth-child(1) {
            transform: rotate(0deg) translateX(488px) rotate(0deg);
          }
          .card:nth-child(2) {
            transform: rotate(60deg) translateX(488px) rotate(-60deg);
          }
          .card:nth-child(3) {
            transform: rotate(120deg) translateX(488px) rotate(-120deg);
          }
          .card:nth-child(4) {
            transform: rotate(180deg) translateX(488px) rotate(-180deg);
          }
          .card:nth-child(5) {
            transform: rotate(240deg) translateX(488px) rotate(-240deg);
          }
          .card:nth-child(6) {
            transform: rotate(300deg) translateX(488px) rotate(-300deg);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg) translateX(488px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(488px) rotate(-360deg);
            }

          }
            @keyframes fadeAndHide {
          0% {
            opacity: 1;
            visibility: visible;
          }
          24% {
            opacity: 0.1;
            visibility: visible;
          }
          25% {
            opacity: 0;
            visibility: hidden;
          }
          26% {
            opacity: 0.1;
            visibility: visible;
          }
          50% {
            opacity: 1;
            visibility: visible;
          }
          74% {
            opacity: 0.1;
            visibility: visible;
          }
          75% {
            opacity: 0;
            visibility: hidden;
          }
          76% {
            opacity: 0.1;
            visibility: visible;
          }
          100% {
            opacity: 1;
            visibility: visible;
          }
        }
        }
        
        @media (max-width: 1439px) {
          .circular-motion {
            width: 950.65px;
            height: 951.54px;
          }
          .card {
            transform-origin: 488px 488px;
            border-radius: 28px;
            animation: spin 25s linear infinite, fadeAndHide 25s linear infinite;
          }
          .card:nth-child(1) {
            transform: rotate(0deg) translateX(488px) rotate(0deg);
          }
          .card:nth-child(2) {
            transform: rotate(60deg) translateX(488px) rotate(-60deg);
          }
          .card:nth-child(3) {
            transform: rotate(120deg) translateX(488px) rotate(-120deg);
          }
          .card:nth-child(4) {
            transform: rotate(180deg) translateX(488px) rotate(-180deg);
          }
          .card:nth-child(5) {
            transform: rotate(240deg) translateX(488px) rotate(-240deg);
          }
          .card:nth-child(6) {
            transform: rotate(300deg) translateX(488px) rotate(-300deg);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg) translateX(488px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(488px) rotate(-360deg);
            }

          }
            @keyframes fadeAndHide {
          0% {
            opacity: 1;
            visibility: visible;
          }
          24% {
            opacity: 0.1;
            visibility: visible;
          }
          25% {
            opacity: 0;
            visibility: hidden;
          }
          26% {
            opacity: 0.1;
            visibility: visible;
          }
          50% {
            opacity: 1;
            visibility: visible;
          }
          74% {
            opacity: 0.1;
            visibility: visible;
          }
          75% {
            opacity: 0;
            visibility: hidden;
          }
          76% {
            opacity: 0.1;
            visibility: visible;
          }
          100% {
            opacity: 1;
            visibility: visible;
          }
        }
        }

          

        @media (max-width: 1279px) {
          .circular-motion {
            width: 806.67px;
            height: 806.67px;
          }
          .card {
            transform-origin: 414px 414px;
            border-radius: 28px;
            animation: spin 25s linear infinite;
          }
          .card:nth-child(1) {
            transform: rotate(0deg) translateX(414px) rotate(0deg);
          }
          .card:nth-child(2) {
            transform: rotate(60deg) translateX(414px) rotate(-60deg);
          }
          .card:nth-child(3) {
            transform: rotate(120deg) translateX(414px) rotate(-120deg);
          }
          .card:nth-child(4) {
            transform: rotate(180deg) translateX(414px) rotate(-180deg);
          }
          .card:nth-child(5) {
            transform: rotate(240deg) translateX(414px) rotate(-240deg);
          }
          .card:nth-child(6) {
            transform: rotate(300deg) translateX(414px) rotate(-300deg);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg) translateX(414px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(414px) rotate(-360deg);
            }
          }
        }
          

        @media (max-width: 1023px) {
          .circular-motion {
            width: 605px;
            height: 650px;
          }
          .card {
            transform-origin: 310px 310px;
            border-radius: 21px;
            animation: spin 25s linear infinite;
          }
          .card:nth-child(1) {
            transform: rotate(0deg) translateX(310px) rotate(0deg);
          }
          .card:nth-child(2) {
            transform: rotate(60deg) translateX(310px) rotate(-60deg);
          }
          .card:nth-child(3) {
            transform: rotate(120deg) translateX(310px) rotate(-120deg);
          }
          .card:nth-child(4) {
            transform: rotate(180deg) translateX(310px) rotate(-180deg);
          }
          .card:nth-child(5) {
            transform: rotate(240deg) translateX(310px) rotate(-240deg);
          }
          .card:nth-child(6) {
            transform: rotate(300deg) translateX(310px) rotate(-300deg);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg) translateX(310px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(310px) rotate(-360deg);
            }
          }
        }

        @media (max-width: 767px)  {
          .circular-motion {
             width: 500px;
            height: 550px;
          }
          .card {
            transform-origin: 250px 250px;
            border-radius: 9px;
            animation: spin 25s linear infinite
          }
          .card:nth-child(1) {
            animation-delay: 0s;
            transform: rotate(0deg) translateX(250px) rotate(0deg);
          }
          .card:nth-child(2) {
            animation-delay: -4.17s;
            transform: rotate(60deg) translateX(250px) rotate(-60deg);
          }
          .card:nth-child(3) {
            animation-delay: -8.34s;
            transform: rotate(120deg) translateX(250px) rotate(-120deg);
          }
          .card:nth-child(4) {
            animation-delay: -12.5s;
            transform: rotate(180deg) translateX(250px) rotate(-180deg);
          }
          .card:nth-child(5) {
            animation-delay: -16.67s;
            transform: rotate(240deg) translateX(250px) rotate(-240deg);
          }
          .card:nth-child(6) {
            animation-delay: -20.84s;
            transform: rotate(300deg) translateX(250px) rotate(-300deg);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg) translateX(250px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(250px) rotate(-360deg);
            }
          }
          @keyframes fadeAndHide {
            0% {
              opacity: 1;
              visibility: visible;
            }
            24% {
              opacity: 0.1;
              visibility: visible;
            }
            25% {
              opacity: 0;
              visibility: hidden;
            }
            26% {
              opacity: 0.1;
              visibility: visible;
            }
            50% {
              opacity: 1;
              visibility: visible;
            }
            74% {
              opacity: 0.1;
              visibility: visible;
            }
            75% {
              opacity: 0;
              visibility: hidden;
            }
            76% {
              opacity: 0.1;
              visibility: visible;
            }
            100% {
              opacity: 1;
              visibility: visible;
            }
          }
        }
          
           
          

        

        @media (max-width: 639px) {
          .circular-motion {
            width: 273px;
            height: 330px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .card {
            border-radius: 9px;
            transform-origin: 140px 140px;
            animation: spin 25s linear infinite;
          }

          .card:nth-child(1) {
            animation-delay: 0s;
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          .card:nth-child(2) {
            animation-delay: -4.17s;
            transform: rotate(60deg) translateX(140px) rotate(-60deg);
          }
          .card:nth-child(3) {
            animation-delay: -8.34s;
            transform: rotate(120deg) translateX(140px) rotate(-120deg);
          }
          .card:nth-child(4) {
            animation-delay: -12.5s;
            transform: rotate(180deg) translateX(140px) rotate(-180deg);
          }
          .card:nth-child(5) {
            animation-delay: -16.67s;
            transform: rotate(240deg) translateX(140px) rotate(-240deg);
          }
          .card:nth-child(6) {
            animation-delay: -20.84s;
            transform: rotate(300deg) translateX(140px) rotate(-300deg);
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg) translateX(140px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(140px) rotate(-360deg);
            }
          }
        }
          
          
      `}</style>
    </>
  );
}
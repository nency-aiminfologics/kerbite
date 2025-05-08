'use client';
import Image from 'next/image';

export default function Scan() {
  return (
    <>
      <div className="w-full mx-auto bg-[#ffffff] overflow-hidden">
        <div className="w-[1440px] mx-auto overflow-hidden">
          <div className="mx-[150px] relative">
            <div
              className="bg-cover bg-center bg-no-repeat w-[1068px]"
              style={{ backgroundImage: `url("/Images/animation-bg.png")` }}
            >
              <div className="w-[528px] h-[253px] top-[356px] left-[275px] absolute">
                <h1 className="text-[#000000] text-[40px] font-semibold text-center leading-[100%]">Scan.</h1>
                <div className="flex h-[100px] w-[454px] justify-between mt-[13px] ml-[33px]">
                  <h1 className="text-[#000000] text-[40px] font-semibold text-center leading-[100%] mt-[25px]">
                    Analyze.
                  </h1>
                  <div className="w-[100px] h-[100px] bg-[#1B1A1F] rounded-[50px]">
                    <Image
                      src="/Images/Group 1410126173.png"
                      alt="green icon"
                      width={37.79}
                      height={36.91}
                      className="h-[36.91px] my-[31px] mx-[31px]"
                    />
                  </div>
                  <h1 className="text-[#000000] text-[40px] font-semibold text-center leading-[100%] mt-[25px]">
                    Results.
                  </h1>
                </div>
                <p className="text-[#7D7C81] w-[528px] text-center text-[20px] leading-[100%] mt-[30px]">
                  Helping health professionals guide clients to better nutrition is challenging. Endless food options,
                  misleading labels, and confusing choices.
                </p>
                <button
                  className="w-[249px] h-[61px] text-[17px] rounded-[15px] flex items-center justify-center mt-[64px] mx-[150px] bg-[#1B1A1F] text-[#ffffff]"
                >
                  Get free trial
                </button>
              </div>

              <div className="w-[1068px] h-[1068px] relative">
                <div className="circular-motion flex justify-center items-center">
                  {/* Card 1: Gym Owners */}
                  <div className="card w-[182px] h-[54px] bg-[#F1F1F1] rounded-[18px] absolute">
                    <Image
                      src="/Images/gym owners icon.svg"
                      alt="gym owners icon"
                      width={42}
                      height={42}
                      className="absolute ml-[6px] my-[6px]"
                    />
                    <h1 className="text-[#1B1A1F] text-[16px] font-medium leading-[15.12px] tracking-[-2%] absolute left-[63.52px] top-[20px]">
                      Gym Owners
                    </h1>
                    <Image
                      src="/Images/gym curve.svg"
                      alt="gym curve"
                      width={16}
                      height={16}
                      className="h-[16px] absolute top-[6px] left-[160px]"
                    />
                  </div>

                  {/* Card 2: Sports Coaches */}
                  <div className="card w-[211px] h-[54px] bg-[#F1F1F1] rounded-[18px] absolute">
                    <Image
                      src="/Images/sport icon.svg"
                      alt="sports coaches icon"
                      width={42}
                      height={42}
                      className="absolute ml-[6px] my-[6px]"
                    />
                    <h1 className="text-[#1B1A1F] text-[16px] font-medium leading-[15.12px] tracking-[-2%] absolute left-[63.52px] top-[20px]">
                      Sports Coaches
                    </h1>
                    <Image
                      src="/Images/sport curve.svg"
                      alt="sport curve"
                      width={16}
                      height={16}
                      className="h-[16px] absolute top-[6px] left-[190px]"
                    />
                  </div>

                  {/* Card 3: Nutritions */}
                  <div className="card w-[182px] h-[54px] bg-[#F1F1F1] rounded-[18px] absolute">
                    <Image
                      src="/Images/nutrition icon.svg"
                      alt="nutrition icon"
                      width={42}
                      height={42}
                      className="absolute ml-[6px] my-[6px]"
                    />
                    <h1 className="text-[#1B1A1F] text-[16px] font-medium leading-[15.12px] tracking-[-2%] absolute left-[63.52px] top-[20px]">
                      Nutritions
                    </h1>
                    <Image
                      src="/Images/nutrition curve.svg"
                      alt="nutrition curve"
                      width={16}
                      height={16}
                      className="h-[16px] absolute top-[6px] left-[160px]"
                    />
                  </div>

                  {/* Card 4: Health-Care */}
                  <div className="card w-[200px] h-[54px] bg-[#F1F1F1] rounded-[18px] absolute">
                    <Image
                      src="/Images/health icon.svg"
                      alt="health icon"
                      width={42}
                      height={42}
                      className="absolute ml-[6px] my-[6px]"
                    />
                    <h1 className="text-[#1B1A1F] text-[16px] font-medium leading-[15.12px] tracking-[-2%] absolute left-[63.52px] top-[20px]">
                      Health-Care
                    </h1>
                    <Image
                      src="/Images/health curve.svg"
                      alt="health curve"
                      width={16}
                      height={16}
                      className="h-[16px] absolute top-[6px] left-[180px]"
                    />
                  </div>

                  {/* Card 5: Wellness & Fitness */}
                  <div className="card w-[215px] h-[54px] bg-[#F1F1F1] rounded-[18px] absolute">
                    <Image
                      src="/Images/wellness icon.svg"
                      alt="wellness icon"
                      width={42}
                      height={42}
                      className="absolute ml-[6px] my-[6px]"
                    />
                    <h1 className="text-[#1B1A1F] text-[16px] font-medium leading-[15.12px] tracking-[-2%] absolute left-[63.52px] top-[20px]">
                      Wellness & Fitness
                    </h1>
                    <Image
                      src="/Images/wellness curve.svg"
                      alt="wellness curve"
                      width={16}
                      height={16}
                      className="h-[16px] absolute top-[6px] left-[195px]"
                    />
                  </div>

                  {/* Card 6: Yoga Instructors */}
                  <div className="card w-[200px] h-[54px] bg-[#F1F1F1] rounded-[18px] absolute">
                    <Image
                      src="/Images/yoga icon.svg"
                      alt="yoga icon"
                      width={42}
                      height={42}
                      className="absolute ml-[6px] my-[6px]"
                    />
                    <h1 className="text-[#1B1A1F] text-[16px] font-medium leading-[15.12px] tracking-[-2%] absolute left-[63.52px] top-[20px]">
                      Yoga Instructors
                    </h1>
                    <Image
                      src="/Images/yoga curve.svg"
                      alt="yoga curve"
                      width={16}
                      height={16}
                      className="h-[16px] absolute top-[6px] left-[180px]"
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
          transform-origin: 534px 534px; /* Center of the 1068x1068px container */
        }

        /* Adjusted positions with equal angular gaps for 6 cards */
        .card:nth-child(1) {
          animation-delay: 0s, 0s;
          transform: rotate(0deg) translateX(560px) rotate(0deg);
        }
        .card:nth-child(2) {
          animation-delay: -4.17s, -4.17s;
          transform: rotate(60deg) translateX(560px) rotate(-60deg);
        }
        .card:nth-child(3) {
          animation-delay: -8.34s, -8.34s;
          transform: rotate(120deg) translateX(560px) rotate(-120deg);
        }
        .card:nth-child(4) {
          animation-delay: -12.5s, -12.5s;
          transform: rotate(180deg) translateX(560px) rotate(-180deg);
        }
        .card:nth-child(5) {
          animation-delay: -16.67s, -16.67s;
          transform: rotate(240deg) translateX(560px) rotate(-240deg);
        }
        .card:nth-child(6) {
          animation-delay: -20.84s, -20.84s;
          transform: rotate(300deg) translateX(560px) rotate(-300deg);
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg) translateX(560px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(560px) rotate(-360deg);
          }
        }

        /* Updated opacity and visibility animation to hide at 90 and 270 degrees */
        @keyframes fadeAndHide {
          0% {
            opacity: 1; /* Fully visible at 0 degrees (top) */
            visibility: visible;
          }
          24% {
            opacity: 0.1; /* Start fading out just before 90 degrees */
            visibility: visible;
          }
          25% {
            opacity: 0; /* Hidden at 90 degrees (right) */
            visibility: hidden;
          }
          26% {
            opacity: 0.1; /* Start fading in just after 90 degrees */
            visibility: visible;
          }
          50% {
            opacity: 1; /* Fully visible at 180 degrees (bottom) */
            visibility: visible;
          }
          74% {
            opacity: 0.1; /* Start fading out just before 270 degrees */
            visibility: visible;
          }
          75% {
            opacity: 0; /* Hidden at 270 degrees (left) */
            visibility: hidden;
          }
          76% {
            opacity: 0.1; /* Start fading in just after 270 degrees */
            visibility: visible;
          }
          100% {
            opacity: 1; /* Fully visible again at 360/0 degrees (top) */
            visibility: visible;
          }
        }
      `}</style>
    </>
  );
}
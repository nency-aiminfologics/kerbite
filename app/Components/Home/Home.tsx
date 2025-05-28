import Image from "next/image";


export default function Home(){
    return(
        <>
       
       <div className="relative   2xl:h-[940px] xl:h-[858px] lg:h-[732px] md:h-[549px] h-[424px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full  h-full object-cover -z-10"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      
      </video>
      {/* Overlay div with semi-transparent color */}
      <div className="absolute inset-0 bg-[#0000004D] z-0"></div>
      <div className="relative z-10">
        <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[375px]
        mx-auto   2xl:pt-[196px] xl:pt-[173px] lg:pt-[165px] md:pt-[124px] pt-[169px] ">
            <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] w-[335px]  
            md:w-[668px]  mx-auto    flex justify-between">

                <div className="2xl:mt-[201px] xl:mt-[150px] lg:mt-[127px] md:mt-[95px]">

                    <h1 className="text-[#3FF795] 2xl:text-[64px] xl:text-[56px] lg:text-[36px]
                    md:text-[28px] text-[24px]
                    font-bold tracking-[-2%] leading-[112.00000000000001%]">One Solution. </h1>

                    <h1 className="2xl:w-[631px] xl:w-[631px] lg:w-[343px] md:w-[282px] w-[241px]
                     2xl:text-[64px] xl:text-[56px] lg:text-[36px] md:text-[28px] text-[24px] text-[#FFFFFF]  
                    rubik font-bold leading-[112.00000000000001%] tracking-[-2px]
                     2xl:mt-[10px] xl:mt-[10px] lg:mt-[9px] md:mt-[6px] mt-[4px]">
                      Smarter Food Choices Through AI</h1>

                    <div className="2xl:w-[240px] 2xl:h-[55px] xl:w-[240.04px] xl:h-[55px] lg:w-[204px] lg:h-[51px] md:w-[181px] md:h-[39px] w-[154.02px] h-[30px]
                     2xl:rounded-[8px] xl:rounded-[8px] lg:rounded-[6.67px] md:rounded-[5px] rounded-[5px]
                     2xl:text-[22px] xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px]
                    2xl:py-[15px] xl:py-[15px] lg:py-[19px] md:py-[14px] py-[8px]
                     2xl:mt-[35px] xl:mt-[40px] lg:mt-[30.33px] md:mt-[20px] mt-[20px]
                       text-center text-[#1B1A1F] bg-[#C7FFE1] geologica font-normal leading-[100%]">
                      Analyze fresh meals</div>

                     <div className="2xl:w-[335px] 2xl:h-[55px] xl:w-[335px] xl:h-[55px] lg:w-[281px] lg:h-[51px] md:w-[242px] md:h-[40px] w-[214.02px] h-[30px]
                     2xl:rounded-[8px] xl:rounded-[8px] lg:rounded-[6.67px] md:rounded-[5px] rounded-[5px]
                     2xl:text-[22px] xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px]
                    2xl:py-[15px] xl:py-[15px] lg:py-[19px] md:py-[14px] py-[8px]
                    2xl:mt-[18px] xl:mt-[18px] lg:mt-[14.33px] md:mt-[10px] mt-[10px]
                   text-center  text-[#1B1A1F] bg-[#FFF1EC] geologica font-normal leading-[100%]">
                      Get nutrition & health scores</div> 

                     <div className="2xl:w-[299px] 2xl:h-[55px] xl:w-[299px] xl:h-[55px] lg:w-[252px] lg:h-[53px] md:w-[216px] md:h-[40px] w-[191.02px] h-[30px]
                      2xl:rounded-[8px] xl:rounded-[8px] lg:rounded-[6.67px] md:rounded-[5px] rounded-[5px]
                     2xl:text-[22px] xl:text-[22px] lg:text-[18px] md:text-[16px] text-[14px]
                    2xl:py-[15px] xl:py-[15px] lg:py-[19px] md:py-[14px] py-[8px]
                    2xl:mt-[18px] xl:mt-[18px] lg:mt-[14.33px] md:mt-[10px] mt-[10px]
                    text-center text-[#1B1A1F] bg-[#F1E7FF] geologica font-normal leading-[100%]">
                      Make better food choices</div>
                </div>

                <Image src="/Images/scan phone.png" alt="scan phone" width={325.29} height={0} 
                className=" 2xl:w-[325.29px] 
                xl:w-[288px]  lg:w-[243px]  md:w-[182px] hidden 2xl:block xl:block lg:block md:block"/>

            </div>

        </div>
      </div>
    </div>
        </>
    )
}

'use client'

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




export default function Howitsworks() {

    var settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    autoplay: true,            
  autoplaySpeed: 3000, 
  responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
   
  };
    return (
        <>
            <div className="w-full">
                <div className="2xl:w-[1440px] xl:w-[1280px]  2xl:py-[115px]  xl:py-[103px] lg:py-[80px] md:py-[60px]   mx-auto hidden md:hidden 2xl:block xl:block lg:block">
                    <div className="2xl:w-[1350px] xl:w-[1150px] mx-auto ">
                        <h1 className="text-[#1B1A1F] font-bold geologica 
                2xl:text-[40px] xl:text-[36px] md:text-[34px] leading-[130%] text-center">How its works</h1>



                        <div className="flex   2xl:gap-[30px] xl:gap-[26px] 2xl:mt-[35px] xl:mt-[30px] 2xl:w-[1226px] xl:w-[1089px] mx-auto">

                            {/* first card */}


                            <div className="2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] bg-[url('/Images/how-bg-1.png')] bg-cover bg-center ">

                                <div className="bg-[#1DD673] 2xl:w-[245px] 2xl:h-[406px] 
                       xl:w-[217.78px] xl:h-[360.89px]
                       2xl:rounded-[18px] xl:rounded-[16px] 2xl:mx-[72px] 
                       xl:mx-[63.11px] 2xl:mt-[35px] xl:mt-[31.11px] absolute"></div>

                                <Image src="/Images/how-1.png" alt="how-1" width={271} height={551}
                                    className="2xl:w-[271px] xl:w-[240.89px] absolute 2xl:mx-[59px] xl:mx-[52.44px] 2xl:mt-[45px] xl:mt-[41px]" />

                                <div className=" 2xl:w-[388px] 2xl:h-[148px] xl:w-[345px] xl:h-[131px]  2xl:mt-[507px] xl:mt-[451.78px]
                       absolute rounded-b-[20px] bg-[#FFFFFF] border-[1px] border-[#7D7C814D] ">
                                    <div className="2xl:w-[300px] xl:w-[267px]   2xl:ml-[25px] xl:ml-[24px] 2xl:my-[15px] xl:my-[13px]">

                                        <h1 className="text-[#1DD673] geologica font-normal 2xl:text-[14px] xl:text-[14px] leading-[100%]">Step 1</h1>
                                        <h1 className="text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] leading-[100%] 
                            2xl:mt-[15px] xl:mt-[11px]">Scan</h1>

                                        <p className="text-[#7D7C81] geologica font-light 2xl:text-[18px] xl:text-[16px] leading-[125%] 2xl:mt-[15px] xl:mt-[12px]">
                                            Use the app to scan food products with a barcode or live camera.</p>

                                    </div>
                                </div>

                            </div>
                            {/* secound card */}
                            <div className="bg-[url('/Images/how-bg-2.png')] 2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] 
                    bg-cover bg-center 2xl:mt-[80px] xl:mt-[70px]">

                                <div className="  2xl:w-[388px] 2xl:h-[148px] xl:w-[345px] xl:h-[131px]">
                                    <div className="2xl:w-[300px] xl:w-[267px]   2xl:ml-[25px] xl:ml-[24px] 2xl:mt-[35px] xl:my-[26px]">

                                        <h1 className="text-[#FF733D] geologica font-normal 2xl:text-[14px] xl:text-[14px] leading-[100%]">Step 2</h1>

                                        <h1 className="text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px]
                             leading-[100%] 2xl:mt-[15px] xl:mt-[12px]">Analyse</h1>

                                        <p className="text-[#7D7C81] geologica font-light 2xl:text-[18px] xl:text-[16px]
                             leading-[125%] 2xl:mt-[15px] xl:mt-[14px]">
                                            Our AI processes the data and delivers a complete health analysis.</p>

                                    </div>
                                </div>



                                <div className="bg-[#FF733D] 2xl:w-[245px] 2xl:h-[406px] xl:w-[217.78px] xl:h-[360.89px]
                        2xl:rounded-[18px] xl:rounded-[16px] 2xl:mx-[72px] xl:mx-[64px] 2xl:mt-[32px] xl:mt-[27.67px] absolute"></div>


                                <Image src="/Images/how-2.png" alt="how-1" width={271} height={271}
                                    className="2xl:w-[271px] 2xl:h-[430px] xl:w-[240.89px]  xl:h-[388px]
                        absolute 2xl:mx-[59px] xl:mx-[52.44px] 2xl:mt-[42px] xl:mt-[36.56px] "/>

                                <div className="2xl:w-[284px] 2xl:h-[76px] xl:w-[252.44px] xl:h-[70.22px] bg-[#FFFFFF] 2xl:rounded-[9px] xl:rounded-[8px] flex 
                       2xl:gap-[26px] xl:gap-[22.22px] 2xl:ml-[26px] xl:ml-[24px] 2xl:mt-[390px] xl:mt-[346px] 
                       absolute 2xl:px-[21px] xl:px-[16px] 2xl:py-[8px] xl:py-[5.33px]"
                                    style={{ boxShadow: "0px 0px 50px #0000001F" }}>

                                    <div className="2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px]">
                                        <Image src="/Images/carbs.svg" alt="carbs" width={42} height={42}
                                            className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal
                         leading-[150%] 2xl:text-[12px] xl:text-[10.67px] 2xl:mt-[4px] xl:mt-[5.7px]">Carbs</h1>
                                    </div>

                                    <div className="w-[41.25px] h-[58.79px]">
                                        <Image src="/Images/Protein.svg" alt="carbs" width={42} height={42}
                                            className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] 
                        2xl:text-[12px] xl:text-[10.67px] 2xl:mt-[4px] xl:mt-[5.7px]">Protein</h1>
                                    </div>

                                    <div className="w-[41.25px] h-[58.79px]">
                                        <Image src="/Images/Sodium.svg" alt="carbs" width={42} height={42}
                                            className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] 
                        2xl:text-[12px] xl:text-[10.67px] 2xl:mt-[4px] xl:mt-[5.7px]">Sodium</h1>
                                    </div>

                                    <div className="w-[41.25px] h-[58.79px]">
                                        <Image src="/Images/Fat.svg" alt="carbs" width={42} height={42}
                                            className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] 
                        2xl:text-[12px] xl:text-[10.67px] 2xl:mt-[4px] xl:mt-[5.7px]">Fat</h1>
                                    </div>

                                </div>


                            </div>

                            {/* third card */}
                            <div className="2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] bg-[url('/Images/how-bg-3.png')] bg-cover bg-center ">

                                <div className=" 2xl:w-[273px] 2xl:h-[58px] xl:w-[242.67px] xl:h-[51.56px]
                     2xl:rounded-[9px] xl:rounded-[8px]  2xl:mt-[295px] xl:mt-[276px] 2xl:ml-[29px] xl:ml-[25.78px] absolute z-10 bg-[#FFFFFF]"
                                    style={{ boxShadow: "0px 4px 50px #0000001F" }}>

                                    <Image src="/Images/how-processing.svg" alt="how-processing"
                                        width={237} height={50}
                                        className="2xl:w-[237px] 2xl:h-[50px] xl:w-[210.89px] xl:h-[43.89px] 2xl:mx-[18px] xl:mx-[16px] 2xl:2xl:my-[3px] xl:my-[3.56px]" />
                                </div>
                                <div className="bg-[#FDCB26] 2xl:w-[243px] 2xl:h-[380px] xl:w-[216px] xl:h-[400px]
                        2xl:rounded-[18px] xl:rounded-[16px] 2xl:mx-[72px] xl:mx-[64px] 2xl:mt-[60px] xl:mt-[12px] absolute"></div>

                                <Image src="/Images/how-3.png" alt="how-1" width={271} height={551}
                                    className=" 2xl:w-[271px] 2xl:h-[430px] xl:w-[240.89px] xl:h-[400px] absolute 2xl:mx-[59px] xl:mx-[52.44px]" />

                                <div className="bg-[#FFFFFF] border-[1px] border-[#7D7C814D] 
                       2xl:w-[388px] 2xl:h-[148px] xl:w-[345px] xl:h-[131px] 2xl:mt-[507px] xl:mt-[452px] absolute rounded-b-[20px]">

                                    <div className="2xl:w-[300px] xl:w-[269px]   2xl:ml-[25px] xl:ml-[24px] 2xl:my-[15px] xl:my-[13px]">

                                        <h1 className="text-[#FDCB26] geologica font-normal 2xl:text-[14px] xl:text-[14px] leading-[100%]">Step 3</h1>
                                        <h1 className="text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] leading-[100%] 2xl:mt-[15px] xl:mt-[12px]">Instant Results</h1>
                                        <p className="text-[#7D7C81] geologica font-light 2xl:text-[18px] xl:text-[16px] leading-[125%] 
                            2xl:mt-[15px] xl:mt-[12px]">Instantly see a health report with nutrient and processing details.</p>

                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>

                </div>


                        {/* mobile md screen carosel card */}
                        


                        <div className=" md:w-full w-[335px] mx-auto md:py-[60px] gap-[20px] py-[40px] 2xl:hidden xl:hidden lg:hidden">
                            <div className="md:w-[240px] w-[140px] mx-auto">
                             <h1 className="text-[#1B1A1F] font-bold geologica 
                md:text-[34px] text-[20px] leading-[130%] ">How its works</h1>


                        </div>
                        <div className="mt-[40px]">
                            {/* first card */}
                 <Slider {...settings}>
                 <div className="px-5">
                             <div className="md:w-[345px] md:h-[582px] w-[307px] h-[518px]  bg-[url('/Images/how-bg-1.png')] bg-cover">

                                <div className="bg-[#1DD673] md:w-[217.78px] md:h-[360.89px] w-[190px] h-[315px]
                      
                       md:rounded-[16px] rounded-[14px]  md:mx-[63.11px] mx-[60px]
                       md:mt-[31.11px] mt-[45px] absolute"></div>

                                <Image src="/Images/how-1.png" alt="how-1" width={211} height={0}
                                    className="md:w-[240.89px]  absolute md:mx-[51.56px] mx-[50px] mt-[54px]  md:mt-[40px]" />

                                <div className="md:w-[345px] md:h-[131px] w-[307px] h-[107px] mt-[414px]  md:mt-[452px] 
                                  absolute rounded-b-[20px] bg-[#FFFFFF] border-[1px] border-[#7D7C814D] ">
                                    <div className="md:w-[267px] w-[280px]  mx-auto md:my-[24px] my-[15px] ">

                                        <h1 className="text-[#1DD673] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]">Step 1</h1>
                                        <h1 className="text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%] 
                                        md:mt-[12px] mt-[11px]">Scan</h1>

                                        <p className="text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px]">
                                            Use the app to scan food products with a barcode or live camera.</p>

                                    </div>
                                </div>

                            </div>
                            </div>


                            {/* secound card */}



                             <div className="px-5">

                            <div className="md:w-[345px] md:h-[582px] w-[307px] h-[518px]  bg-[url('/Images/how-bg-2.png')] bg-cover bg-center ">
                             <div className="md:w-[267px] w-[279px] md:pt-[26px] pt-[25px]  mx-auto  ">

                                        <h1 className="text-[#FF733D] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]">Step 2</h1>
                                        <h1 className="text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px]  leading-[100%] 
                                        md:mt-[12px] mt-[11px]">Analyse</h1>

                                        <p className="text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px]  mt-[4px]">
                                            Our AI processes the data and delivers a complete health analysis.</p>

                                    </div>

                                <div className="bg-[#FF733D] md:w-[217.78px] md:h-[360.89px]  w-[190px] h-[315px]
                      
                       md:rounded-[16px] rounded-[14px]  md:mx-[63.11px] mx-[60px]
                      md:mt-[38px] mt-[40px] absolute"></div>

                                <Image src="/Images/how-2.png" alt="how-1" width={211} height={0}
                                    className="md:w-[240.89px] md:mt-[49px] mt-[50px] absolute md:mx-[51.56px] mx-[50px] " />
                                    
                                    <div className="md::w-[252.44px] md:h-[70.22px] w-[217px] h-[60.36px] bg-[#FFFFFF] md:rounded-[8px] rounded-[6.68px] flex 
                       md:gap-[22.22px] gap-[19.1px]  2xl:ml-[26px] md:ml-[20px] ml-[30px] md:mt-[385px] mt-[343px] 
                       absolute md:px-[16px] px-[13.75px] md:py-[5.33px] py-[8px]"
                                    style={{ boxShadow: "0px 0px 50px #0000001F" }}>

                                    <div className="md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]">
                                        <Image src="/Images/carbs.svg" alt="carbs" width={32.09} height={0}
                                            className="md:w-[37.33px] md:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal
                                          leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]">Carbs</h1>
                                    </div>

                                    <div className="md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]">
                                        <Image src="/Images/Protein.svg" alt="carbs" width={32.09} height={0}
                                             className="md:w-[37.33px] md:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal
                                          leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]">Protein</h1>
                                    </div>

                                    <div className="md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]">
                                        <Image src="/Images/Sodium.svg" alt="carbs" width={32.09} height={0}
                                            className="md:w-[37.33px] md:h-[37.33px]"/>
                                        <h1 className="text-[#111827] geologica text-center font-normal
                                          leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]">Sodium</h1>
                                    </div>

                                    <div className="md:w-[36.67px] md:h-[59.03px] w-[31.52px] h-[50.99px]">
                                        <Image src="/Images/Fat.svg" alt="carbs" width={32.09} height={0}
                                            className="md:w-[37.33px] md:h-[37.33px]" />
                                        <h1 className="text-[#111827] geologica text-center font-normal
                                          leading-[150%] md:text-[10.67px] text-[9.17px]  md:mt-[5.7px] mt-[4.9px]">Fat</h1>
                                    </div>

                                </div>

                                

                            </div>
                            </div>







                            {/* third card */}
                            <div className="px-5">

                           <div className=" md:w-[345px] md:h-[582px]  w-[307px] h-[518px] bg-[url('/Images/how-bg-3.png')] bg-cover bg-center ">

                                <div className=" md:w-[242.67px] md:h-[51.56px] w-[205.03px]
                    md:rounded-[8px] rounded-[6.67px] mt-[215px]  md:mt-[246px] md:ml-[25.78px] ml-[33px] absolute z-10 bg-[#FFFFFF]"
                                    style={{ boxShadow: "0px 4px 50px #0000001F" }}>

                                    <Image src="/Images/how-processing.svg" alt="how-processing"
                                        width={178.21} height={0}
                                        className="md:w-[210.89px]   md:mx-[16px] md:my-[3.56px] mx-[13.52px] my-[3px]" />
                                </div>
                                <div className="bg-[#FDCB26] md:w-[216px] md:h-[370px] w-[190px] h-[325px]
                       md:rounded-[16px] rounded-[14px] mx-[60px] md:mx-[64px]  absolute"></div>

                                <Image src="/Images/how-3.png" alt="how-1" width={211} height={0}
                                    className=" md:w-[240.89px]  absolute md:mx-[52.44px] mx-[50px]" />

                                <div className="md:w-[345px] w-[307px] h-[107px] md:h-[131px] mt-[414px]  md:mt-[452px] 
                       absolute rounded-b-[20px] bg-[#FFFFFF] border-[1px] border-[#7D7C814D] ">
                                    <div className="md:w-[267px] w-[280px]  mx-auto md:my-[24px]  my-[15px]">

                                        <h1 className="text-[#FDCB26] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]">Step 3</h1>
                                        <h1 className="text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%] 
                                        md:mt-[12px] mt-[11px]">Instant Results</h1>

                                        <p className="text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] mt-[4px] leading-[125%] md:mt-[3px]">
                                           Instantly see a health report with nutrient and processing details.</p>

                                    </div>
                                </div>

                            </div>
                            </div>
                            



</Slider>
</div>
                        </div>
            </div>
        </>
    )
}
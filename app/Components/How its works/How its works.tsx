'use client'

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




export default function Howitsworks() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2.1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

    };
    return (
        <>
            <div className="w-full">

                <div className="2xl:w-[1440px] xl:w-[1280px]  2xl:py-[115px]  xl:py-[103px] lg:py-[80px] md:py-[60px]   py-[80px]
                      mx-auto hidden md:hidden sm:hidden 2xl:block xl:block lg:block">
                    <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] mx-auto ">
                        <h1 className="text-[#1B1A1F] font-bold geologica 
                2xl:text-[40px] xl:text-[36px] md:text-[34px] lg:text-[45.33px] leading-[130%] text-center">How its works</h1>



                        <div className="flex 2xl:gap-[30px] xl:gap-[26px] lg:gap-[20px]
                        2xl:mt-[35px] xl:mt-[30px]  lg:mt-[50px]
                        2xl:w-[1226px] xl:w-[1089px] lg:w-[904px] mx-auto">

                            {/* first card */}

                            <div className="">
                                <div className="relative">
                                    <Image src="/Images/how-bg-1.png" alt="/Images/how-bg-1.png" width={279} height={518}
                                        className="2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] lg:w-[298px] lg:h-[548px]" />
                                    <div className="absolute top-0 left-0 z-10">

                                        <div className="bg-[#1DD673] 2xl:w-[245px] 2xl:h-[406px] xl:w-[217.78px] xl:h-[360.89px]
                                    lg:w-[188px] lg:h-[311px]
                                   2xl:rounded-[18px] xl:rounded-[16px] lg:rounded-[14px]  
                                    2xl:mx-[72px] xl:mx-[63.11px] lg:mx-[54px]
                                  2xl:mt-[35px] xl:mt-[31.11px] lg:mt-[53px]">
                                            <Image src="/Images/how-1.png" alt="how-1" width={211} height={0}
                                                className="2xl:w-[271px] xl:w-[241.89px] lg:w-[213px]
                                              absolute z-10 2xl:top-[10%] xl:top-[10%] lg:top-[17%]  2xl:left-[15%] xl:left-[15%] lg:left-[14%]" />

                                        </div>




                                    </div>
                                    <div className="2xl:w-[388px] 2xl:h-[148px] 
                                xl:w-[345px] xl:h-[131px] lg:w-[288px] lg:h-[122px]
                                 border border-[#7D7C814D] absolute 2xl:top-[77.2%] xl:top-[77.3%] lg:top-[77.7%]
                                   z-20 rounded-b-[15px] bg-[#ffffff]   ">
                                        <div className="xl:w-[267px] 2xl:w-[300px] lg:w-[250px] 2xl:mx-4 xl:mx-4 lg:mx-3 lg:my-3 2xl:my-6 xl:my-6 ">

                                            <h1 className="text-[#1DD673] geologica font-normal 2xl:text-[14px] xl:text-[14px] lg:text-[13px]
                                        leading-[100%]">Step 1</h1>
                                            <h1 className="text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] lg:text-[24px] leading-[100%] 
                                         2xl:mt-[15px] xl:mt-[11px] lg:mt-[10px]">Scan</h1>

                                            <p className="text-[#7D7C81] geologica font-light 2xl:w-[300px] xl:w-[266px] lg:w-[250px]
                                        2xl:text-[18px] xl:text-[16px] lg:text-[15px] leading-[125%] 
                                        2xl:mt-[10px] xl:mt-[5px] lg:mt-[10px]">
                                                Use the app to scan food products with a barcode or live camera.</p>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* secound card */}


                            <div className="relative 2xl:mt-[80px] xl:mt-[70px] lg:mt-[60px]">
                                <Image src="/Images/how-bg-2.png" alt="/Images/how-bg-2.png" width={279} height={518}
                                    className=" 2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px]  lg:w-[298px] lg:h-[548px]" />

                                <div className="absolute top-0  z-20  2xl:w-[388px] 2xl:h-[148px] xl:w-[345px] xl:h-[131px] lg:w-[288px] lg:h-[122px]
                                    border border-[#7D7C814D] 2xl:rounded-t-[20px] xl:rounded-t-[20px] lg:rounded-t-[16px] bg-[#ffffff] border-b-0">
                                    <div className="xl:w-[267px] 2xl:w-[300px] lg:w-[250px] 2xl:mx-4 xl:mx-4 lg:mx-3 lg:my-3 2xl:my-6 xl:my-6">

                                        <h1 className="text-[#FF733D] geologica font-normal 2xl:text-[14px] xl:text-[14px] lg:text-[13px]
                                        leading-[100%]">Step 2</h1>
                                        <h1 className="text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] lg:text-[24px] leading-[100%] 
                                         2xl:mt-[15px] xl:mt-[11px] lg:mt-[10px]">Analyse</h1>

                                        <p className="text-[#7D7C81] geologica font-light 2xl:w-[300px] xl:w-[266px] lg:w-[250px]
                                        2xl:text-[18px] xl:text-[16px] lg:text-[15px] leading-[125%] 
                                        2xl:mt-[10px] xl:mt-[5px] lg:mt-[10px]">
                                            Our AI processes the data and delivers a complete health analysis.</p>

                                    </div>

                                </div>

                                <div className="absolute z-10 top-[25%]  left-0">
                                    <div className="bg-[#FF733D] 2xl:w-[245px] 2xl:h-[406px] xl:w-[217.78px] xl:h-[360.89px] lg:w-[187px] lg:h-[376px]
                                   2xl:rounded-[18px] xl:rounded-[16px] lg:rounded-[14px] lg:mx-[54.79px]  2xl:mx-[72px] xl:mx-[64px]
                                    2xl:mt-[32px] xl:mt-[27.67px] lg:mt-[30px]">
                                        <div>

                                            <Image src="/Images/how-2.png" alt="how-1" width={211} height={0}
                                                className="2xl:w-[271px] 2xl:h-[445px] xl:w-[240.89px]  xl:h-[397px] lg:w-[217px]  
                                          absolute z-10 top-[10%]   2xl:left-[15%] xl:left-[15%] lg:left-[14%] " />

                                            <div className="2xl:w-[284px] 2xl:h-[76px] xl:w-[252.44px] xl:h-[70.22px] lg:w-[218px] lg:h-[56px]
                                         bg-[#FFFFFF] 2xl:rounded-[9px] xl:rounded-[8px] lg:rounded-[7px] flex 
                                     2xl:gap-[26px] xl:gap-[22.22px] lg:gap-[19px]  2xl:top-[93%] xl:top-[93%] lg:top-[86%]
                                      2xl:left-[7%] xl:left-[7%] lg:left-[9%]
                                         absolute z-20 2xl:px-[21px] xl:px-[16px] lg:px-[15px] 2xl:py-[8px] xl:py-[5.33px] lg:py-[4.94px]"
                                                style={{ boxShadow: "0px 0px 50px #0000001F" }}>

                                                <div className="2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]">
                                                    <Image src="/Images/carbs.svg" alt="carbs" width={42} height={42}
                                                        className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]" />
                                                    <h1 className="text-[#111827] geologica text-center font-normal
                                       leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]">Carbs</h1>
                                                </div>

                                                <div className="2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]">
                                                    <Image src="/Images/Protein.svg" alt="Protein" width={42} height={42}
                                                        className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]" />
                                                    <h1 className="text-[#111827] geologica text-center font-normal
                                       leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]">Protein</h1>
                                                </div>

                                                <div className="2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]">
                                                    <Image src="/Images/Sodium.svg" alt="Sodium" width={42} height={42}
                                                        className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]" />
                                                    <h1 className="text-[#111827] geologica text-center font-normal
                                       leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]">Sodium</h1>
                                                </div>

                                                <div className="2xl:w-[41.25px] 2xl:h-[58.79px] xl:w-[36.67px] xl:h-[59.03px] lg:w-[31.63px] lg:h-[52.11px]">
                                                    <Image src="/Images/Fat.svg" alt="Fat" width={42} height={42}
                                                        className="2xl:w-[42px] 2xl:h-[42px] xl:w-[37.33px] xl:h-[37.33px] lg:w-[32.2px] lg:h-[32.2px]" />
                                                    <h1 className="text-[#111827] geologica text-center font-normal
                                       leading-3eading-[150%] 2xl:text-[12px] xl:text-[10.67px]  lg:text-[10px]">Fat</h1>
                                                </div>

                                            </div>


                                        </div>

                                    </div>


                                </div>
                            </div>



                            {/* third card */}

                            <div className="">
                                <div className="relative">
                                    <Image src="/Images/how-bg-3.png" alt="/Images/how-bg-3.png" width={279} height={518}
                                        className="2xl:w-[388px] 2xl:h-[655px] xl:w-[345px] xl:h-[582px] lg:w-[298px] lg:h-[548px]" />
                                    <div className="absolute top-0 left-0 z-10">

                                        <div className="bg-[#FDCB26]  2xl:w-[243px] 2xl:h-[380px] xl:w-[216px] xl:h-[400px] lg:w-[187px] lg:h-[290px]
                                       2xl:rounded-[18px] xl:rounded-[16px] lg:rounded-[14px]
                                        2xl:mx-[72px] xl:mx-[64px] lg:mx-[55px] 2xl:mt-[60px] xl:mt-[12px] lg:mt-[35px]">
                                            <div>
                                                <Image src="/Images/how-3.png" alt="how-3" width={211} height={0}
                                                    className=" 2xl:w-[271px] 2xl:h-[430px] xl:w-[240.89px] xl:h-[400px]  lg:w-[209px]
                                                 absolute z-10 top-0  left-[15%] " />

                                                <div className="2xl:w-[273px] 2xl:h-[58px] xl:w-[242.67px] xl:h-[51.56px] lg:w-[218px] lg:h-[46px]
                                            2xl:rounded-[9px] xl:rounded-[8px] lg:rounded-[8px]  absolute z-20 left-[7%]  top-[66%]  bg-[#FFFFFF]"
                                                    style={{ boxShadow: "0px 4px 50px #0000001F" }}>

                                                    <Image src="/Images/how-processing.svg" alt="how-processing"
                                                        width={178.21} height={0}
                                                        className="2xl:w-[237px] 2xl:h-[50px] xl:w-[210.89px] xl:h-[43.89px]  lg:w-[200px] lg:h-[41px]
                                                    2xl:mx-[18px] xl:mx-[16px] lg:mx-[12px] 2xl:2xl:my-[3px] xl:my-[3.56px] lg:my-[3px]" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>



                                    <div className="2xl:w-[388px] 2xl:h-[148px] 
                                xl:w-[345px] xl:h-[131px] lg:w-[288px] lg:h-[122px]
                                 border border-[#7D7C814D] absolute 2xl:top-[77.2%] xl:top-[77.3%] lg:top-[77.7%]
                                   z-20 rounded-b-[15px] bg-[#ffffff]   ">
                                        <div className="xl:w-[267px] 2xl:w-[300px] lg:w-[250px] 2xl:mx-4 xl:mx-4 lg:mx-3 lg:my-3 2xl:my-6 xl:my-6 ">

                                            <h1 className="text-[#1DD673] geologica font-normal 2xl:text-[14px] xl:text-[14px] lg:text-[13px]
                                        leading-[100%]">Step 1</h1>
                                            <h1 className="text-[#1B1A1F] geologica font-bold 2xl:text-[28px] xl:text-[24px] lg:text-[24px] leading-[100%] 
                                         2xl:mt-[15px] xl:mt-[11px] lg:mt-[10px]">Scan</h1>

                                            <p className="text-[#7D7C81] geologica font-light 2xl:w-[300px] xl:w-[266px] lg:w-[250px]
                                        2xl:text-[18px] xl:text-[16px] lg:text-[15px] leading-[125%] 
                                        2xl:mt-[10px] xl:mt-[5px] lg:mt-[10px]">
                                                Use the app to scan food products with a barcode or live camera.</p>

                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>



                    </div>

                </div>


                {/* mobile md screen carosel card */}
                <div className="w-full md:py-[60px]  py-[40px] 2xl:hidden xl:hidden lg:hidden overflow-hidden">



                    <div className=" md:w-full sm:w-full w-[335px] mx-auto ">
                        <div className="">
                            <h1 className="text-[#1B1A1F] font-bold geologica 
                md:text-[34px] text-[20px] leading-[130%] text-center ">How its works</h1>


                        </div>
                        <div className="mt-[40px]">
                        <div className=" md:w-full sm:w-full  w-[279px] mx-auto md:mx-0">
                            {/* first card */}
                            <Slider {...settings}>
                                <div className="md:w-[345px]  w-[279px] ">
                                    <div className="relative">
                                        <Image src="/Images/how-bg-1.png" alt="/Images/how-bg-1.png" width={279} height={518}
                                            className="md:w-[345px] md:h-[582px] h-[518px]" />
                                        <div className="absolute top-0 left-0 z-10">

                                            <div className="bg-[#1DD673] md:w-[217.78px] md:h-[360.89px] w-[190px] h-[315px]
                      
                       md:rounded-[16px] rounded-[14px]  md:mx-[63.11px] mx-[43px]
                       md:mt-[31.11px] mt-[45px]">
                                                <Image src="/Images/how-1.png" alt="how-1" width={211} height={0}
                                                    className="md:w-[70.5%]   absolute z-10 md:top-[10%] top-[15%]  md:left-[15%] left-[13%]" />

                                            </div>




                                        </div>
                                        <div className="md:mt-[414px] mt-[47vh]  md:w-[345px] w-[279px] border border-[#7D7C814D] 
                                  absolute top-[5%]  z-20 rounded-b-[20px] bg-[#ffffff]   ">
                                            <div className="md:w-[267px] w-[280px] mx-4  md:my-[24px] my-[15px] ">

                                                <h1 className="text-[#1DD673] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]">Step 1</h1>
                                                <h1 className="text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%] 
                                        md:mt-[12px] mt-[11px]">Scan</h1>

                                                <p className="text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px]
                                        w-[234px] md:w-[268px]">
                                                    Use the app to scan food products with a barcode or live camera.</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                


                                {/* secound card */}
                                <div className="relative">
                                    <Image src="/Images/how-bg-2.png" alt="/Images/how-bg-2.png" width={279} height={518}
                                        className="md:w-[345px] md:h-[582px] h-[518px]" />

                                    <div className=" 
                                  absolute top-[1px] left-[5%] z-20 rounded-t-[20px] md:w-[300px] w-[260px] bg-[#ffffff] ">
                                        <div className="md:w-[267px] w-[280px]   md:my-[24px] my-[15px] ">

                                            <h1 className="text-[#FF733D] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]">Step 2</h1>
                                            <h1 className="text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%] 
                                        md:mt-[12px] mt-[11px]">Analyse</h1>

                                            <p className="text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px]
                                     w-[234px] md:w-[268px]">
                                                Our AI processes the data and delivers a complete health analysis.</p>

                                        </div>

                                    </div>


                                    <div className="absolute z-10 md:top-[25%] top-[25%] left-0">
                                        <div className="bg-[#FF733D] md:w-[217.78px] md:h-[360.89px]  w-[190px] h-[315px]
                      
                       md:rounded-[16px] rounded-[14px] mt-[7%] md:mt-[4%] md:mx-[63.11px] mx-[43px]">
                                            <div>

                                                <Image src="/Images/how-2.png" alt="how-1" width={211} height={0}
                                                    className="md:w-[70.5%]   absolute z-10 md:top-[6%] top-[8%]  md:left-[15%] left-[13%]" />

                                                <div className="md:w-[252.44px] md:h-[70.22px] w-[217px] h-[60.36px] bg-[#FFFFFF] md:rounded-[8px] rounded-[6.68px] flex 
                                         md:gap-[22.22px] gap-[19.1px]  top-[96%] left-[8%]
                                         absolute z-20 md:px-[16px] px-[13.75px] md:py-[5.33px] py-[8px]"
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
                                                            className="md:w-[37.33px] md:h-[37.33px]" />
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


                                    </div>
                                </div>










                                {/* third card */}
                                <div className="md:w-[345px] md:h-[582px] w-[279px] h-[518px]">
                                    <div className="relative">
                                        <Image src="/Images/how-bg-3.png" alt="/Images/how-bg-3.png" width={279} height={518}
                                            className="md:w-[345px] md:h-[582px] h-[518px] " />
                                        <div className="absolute top-0 left-0 z-10">

                                            <div className="bg-[#FDCB26] md:w-[217.78px] w-[190px] h-[315px]
                      
                                     md:rounded-[16px] rounded-[14px]  md:mx-[63.11px] mx-[44px]
                                      md:mt-[6.5vh] mt-[1vh]">
                                                <div>
                                                    <Image src="/Images/how-3.png" alt="how-3" width={211} height={0}
                                                        className="md:w-[70.5%]   absolute z-10 top-0  md:left-[15%] left-[13%]" />

                                                    <div className=" md:w-[242.67px] md:h-[51.56px] w-[205.03px]
                                          md:rounded-[8px] rounded-[6.67px]  absolute z-20 left-[7%]  md:top-[65%] top-[67%] bg-[#FFFFFF]"
                                                        style={{ boxShadow: "0px 4px 50px #0000001F" }}>

                                                        <Image src="/Images/how-processing.svg" alt="how-processing"
                                                            width={178.21} height={0}
                                                            className="md:w-[210.89px]   md:mx-[16px] md:my-[3.56px] mx-[13.52px] my-[3px]" />
                                                    </div>

                                                </div>

                                            </div>
                                        </div>



                                        <div className=" md:mt-[414px] mt-[47vh]  md:w-[345px] w-[279px] border border-[#7D7C814D] 
                                  absolute top-[5%]  z-20 rounded-b-[20px] bg-[#ffffff]  ">
                                            <div className="md:w-[267px] w-[280px] mx-4  md:my-[24px] my-[15px] ">

                                                <h1 className="text-[#FDCB26] geologica font-normal md:text-[14px] text-[12px]  leading-[100%]">Step 3</h1>
                                                <h1 className="text-[#1B1A1F] geologica font-bold md:text-[24px] text-[20px] leading-[100%] 
                                        md:mt-[12px] mt-[11px]">Instant Results</h1>

                                                <p className="text-[#7D7C81] geologica font-light md:text-[16px] text-[14px] leading-[125%] md:mt-[3px] mt-[4px]
                                        w-[234px] md:w-[268px]">
                                                    Instantly see a health report with nutrient and processing details.</p>

                                            </div>
                                        </div>

                                    </div>
                                </div>







                            </Slider>
                        </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
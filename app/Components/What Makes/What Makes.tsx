import Image from "next/image";



export default function WhatMakes() {
    return (
        <>
            <div className="h-[1156px] bg-[#F7F7F7]">
                <div className="w-[1440px] h-full mx-auto ">

                    <div className="pt-[100px]">
                        <h1 className="text-[#000000] text-[40px] font-bold geologica leading-[130%] text-center">What Makes This Powerful solution</h1>
                        <p className="text-[24px] font-normal text-[#7D7C81] w-[893px] text-center mt-[40px] mx-[274px] leading-[130%]">Advanced technology meets simplicity.
                            This solution is built to help you
                            make smarter choices—faster, easier, and with more confidence.</p>
                    </div>

                    <div className="mt-[90px] mx-[110px]">
                        <div className="flex flex-row gap-[25px]">

                            {/* first card */}
                            <div className="w-[390px] h-[360px] bg-[#FFFFFF] rounded-[30px] border-[1px] border-[#E2E2E2] relative overflow-visible">
                                <div className="overflow-visible flex gap-[15px]">
                                    <div className="w-[130px] h-[136px] bg-[#F3F3F3]  mt-[52px] rounded-tr-[10px] rounded-br-[10px]"></div>
                                    <div className="w-[233px] h-[174px] bg-[#FFFFFF] border-[1px] border-[#F3F3F3] mt-[33px] rounded-[10px]" style={{ boxShadow: "0px 6px 80px #00000014" }}>
                                        <div className="w-[143px] h-[140px]  mx-[45px] my-[12px]">
                                            <h1 className="text-[#1B1A1F] text-[15px] font-normal geologica leading-[100%] text-center">Instant Product Health Insights</h1>
                                            <Image src="/Images/barcode scan.svg" alt="barcode scan" width={98} height={98} className="mx-[24px] mt-[16px]" />

                                        </div>
                                    </div>

                                    <div className="w-[130px] h-[136px] bg-[#F3F3F3]  mt-[52px] rounded-tl-[10px] rounded-bl-[10px]"></div>
                                </div>
                                <div className="ml-[30px] mt-[27px]">
                                    <h1 className="text-[#1B1A1F] text-[24px] font-medium geologica leading-[100%] ">Barcode Scan</h1>
                                    <p className="w-[323px] text-[18px] text-[#7D7C81] leading-[125%] font-light geologica mt-[12px]">Scan any meal or product to get instant, AI-powered insights about its health impact.</p>
                                </div>
                            </div>

                            {/* secound card */}

                            <div className="w-[390px] h-[360px] bg-[#FFFFFF] rounded-[30px] border-[1px] border-[#E2E2E2]">

                                <div className="absolute mx-[65px] mt-[4px]">
                                    <Image src="/Images/what card2-bg.png" alt="circle" width={258} height={258} />
                                </div>
                                <div className="absolute z-10 mt-[75px] mx-[43px]">
                                    <div className="w-[235px] h-[50px] mx-[35px]  bg-[#FFFFFF] border-[1px] border-[#F3F3F3] rounded-[15px] flex gap-[14px] absolute z-10 mt-[63px]"
                                        style={{ boxShadow: "0px 7px 20px #0000000D" }}>
                                        <Image src="/Images/green-icon.svg" alt="orange" width={47} height={47} className="my-[11px] ml-[11px]" />

                                    </div>
                                    <div className="w-[271px] h-[50px] mx-[17px] bg-[#FFFFFF] border-[1px] border-[#F3F3F3] rounded-[15px] flex gap-[14px] absolute z-10 mt-[42px]"
                                        style={{ boxShadow: "0px 4px 20px #0000000D" }}>
                                        <Image src="/Images/yellow-icon.svg" alt="orange" width={47} height={47} className="my-[11px] ml-[11px] " />

                                    </div>

                                    <div className="w-[305px] h-[69px] bg-[#FFFFFF] border-[1px] border-[#F3F3F3] rounded-[15px] flex gap-[14px] absolute z-10 "
                                        style={{ boxShadow: "0px 4px 20px #0000000D" }}>
                                        <Image src="/Images/orange-icon.svg" alt="orange" width={47} height={47} className="my-[11px] ml-[11px]" />
                                        <h1 className="text-[#1B1A1F] text-[15px] geologica leading-[100%] font-normal my-[28px]">Live Food Analysis Using AI</h1>
                                    </div>
                                </div>
                                <div className="mt-[234px] ml-[34px]">
                                    <h1 className=" text-[#1B1A1F] geologica text-[24px] leading-[100%] font-medium">AI Food Scan</h1>
                                    <p className="text-[#7D7C81] text-[18px] mt-[12px] font-light geologica leading-[125%] w-[323px]">Point your camera at any meal—like
                                        a salad or a burger—and get a real-time assessment powered by AI.</p>
                                </div>

                            </div>
                            <div className="w-[390px] h-[360px] bg-[#FFFFFF] rounded-[30px] border-[1px] border-[#E2E2E2] relative">
                                <div className="my-[33px] mx-[36px]   w-[324px]">
                                    <Image src="/Images/card3-bg.png" alt="background" width={324} height={288} className=" absolute" />
                                    <Image src="/Images/k-logo.svg" alt="k-logo" width={47} height={47} className="mt-[4px] mx-[138px]" />
                                    <Image src="/Images/Vector 2.svg" alt="vector" width={274} height={66} className="  mx-[25px]" />
                                    <div className="flex justify-between">
                                        <div className="w-[53px] h-[53px] bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#F3F3F3]" style={{ boxShadow: "0px 4px 20px #0000000F" }}>
                                            <Image src="/Images/build-green-icon.svg" alt="build-green-icon" width={40} height={40} className="mx-[7px] my-[6px]" />
                                        </div>
                                        <div className="w-[53px] h-[53px] bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#F3F3F3]" style={{ boxShadow: "0px 4px 20px #0000000F" }}>
                                            <Image src="/Images/build-orange-icon.svg" alt="build-green-icon" width={40} height={40} className="mx-[7px] my-[6px]" />
                                        </div>
                                        <div className="w-[53px] h-[53px] bg-[#FFFFFF] rounded-[8px] border-[1px] border-[#F3F3F3]" style={{ boxShadow: "0px 4px 20px #0000000F" }}>
                                            <Image src="/Images/build-blue-icon.png" alt="build-green-icon" width={40} height={40} className="mx-[7px] my-[6px]" />
                                        </div>
                                    </div>
                                    <div className="mt-[36px]">
                                        <h1 className=" text-[#1B1A1F] geologica text-[24px] leading-[100%] font-medium">Built for Experts</h1>
                                        <p className="text-[#7D7C81] text-[18px] mt-[12px] font-light geologica leading-[125%] w-[308px]">Perfect for nutritionists, trainers, and coaches to simplify food analysis, improve client outcomes.</p>
                                    </div>
                                </div>

                            </div>
                        </div>



                        {/* bottom part */}

                        <div className="mt-[30px] flex gap-[25px]">
                            <div className="w-[805px] h-[360px] bg-[#FFFFFF] rounded-[30px] border-[1px] border-[#E2E2E2]">
                                <div className="my-[36px] mx-[27px]   flex ">
                                    {/* leff part */}
                                    <div>
                                        <div className="w-[68px] h-[68px] bg-[#FFFFFF] border-[1px] border-[#F3F3F3] rounded-[12px]">
                                            <Image src="/Images/insights-green.svg" alt="insights-green" width={46} height={46} className="mx-[11px] my-[11px]" />
                                        </div>
                                        <h1 className="text-[#1B1A1F] text-[24px] w-[137px] geologica font-medium leading-[100%] mt-[26px]">Insights & Reports</h1>
                                        <p className="w-[358px] text-[#7D7C81] text-[18px] leading-[125%] geologica font-light mt-[100px]">Get insights into food quality, calories, and health ratings to make data-backed decisions for your clients.</p>
                                    </div>


                                    {/* right part */}
                                    <div className="flex gap-[11.79px] ml-[65px]">
                                        <div className="w-[162px] h-[305px] rounded-[17px] bg-[#FFFFFF] border-[1.15px] border-[#F3F3F3]">
                                            <div className="w-[55px] h-[55px] border-[1px] border-[#F3F3F3] rounded-[8px]   bg-[#FFFFFF] mt-[35px] mx-[53px]">
                                                <Image src="/Images/dairy 1.svg" alt="dairy 1" width={46} height={42} className="mx-[4px] my-[6px]" />
                                            </div>
                                            <h1 className="text-[15px] font-normal leading-[100%] mt-[30px] mx-[32px] w-[99px] geologica text-[#1B1A1F]">Dairy Product</h1>
                                            <div className="w-[132.36px] h-[11.51px] bg-[#1B1A1F1A] rounded-[23.02px] mt-[19.77px] mx-[14.96px]">
                                                <Image src="/Images/mapping dairy.png" alt="mapping dairy.png" width={123.15} height={8.06} className="pt-[0.77px] mx-[4.6px]" />
                                                <div className="flex justify-between text-[#7D7C81] text-[13px] geologica font-normal leading-[120%] mt-[5.57px]">
                                                    <h1>0</h1>
                                                    <h1>120</h1>
                                                    <h1>240</h1>
                                                </div>
                                            </div>
                                            <div className="mt-[74.96px] mx-[16px] flex justify-between">
                                                <h1 className="text-[#1B1A1F] geologica leading-[100%] w-[88px] text-[15px] font-normal ">Product report</h1>
                                                <Image src="/Images/dairy-curve.svg" alt="dairy-curve" width={35} height={35} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="w-[149.62px] h-[142.72px] rounded-[11.51px] bg-[#FFFFFF] border-[1.15px] border-[#F3F3F3]">
                                                <div className="w-[117.4px]  mx-[16px] my-[35px] ">
                                                    <h1 className="text-[#1B1A1FCC] geologica font-normal text-[13px] leading-[120%] w-[117.4px] text-center ">Recommended daily intake</h1>
                                                    <h1 className=" geologica font-medium text-[#1B1A1F] leading-[100%] mt-[19px] mx-[18px]  w-[81px] text-[24px]">23.9 % </h1>
                                                </div>
                                            </div>
                                            <div className="w-[149.62px] h-[142.72px] rounded-[11.51px] bg-[#FFFFFF] border-[1.15px] border-[#F3F3F3] mt-[19.57px]">
                                                <div className="w-[89px]  mx-[31px] my-[20px]">
                                                    <div className="w-[50px] h-[50px] rounded-[25px] bg-[#FFD2C050] mx-[18px]">
                                                        <Image src="/images/total-sugar.svg" alt="total-sugar" width={32} height={32} className="py-[9px] mx-[9px]" />
                                                    </div>
                                                    <h1 className="text-[#1B1A1F] font-normal geologica w-[89px] leading-[100%] mt-[13.72px] text-[15px] ">Total Sugars</h1>
                                                    <h1 className="text-[#FF733D] font-normal geologica leading-100%] mt-[11.17px] text-center text-[14.96px] ">15.0 g</h1>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="w-[390px] h-[360px] bg-[#FFFFFF] rounded-[30px] border-[1px] border-[#E2E2E2] relative">

                                <Image
                                    src="/Images/fruits.png"
                                    alt="fruits"
                                    width={83}
                                    height={83}
                                    className=" mt-[30px] mx-[154px] absolute"
                                />
                                <div className="flex gap-[21.37px] absolute mx-[44px] mt-[104px] ">
                                    <Image src="/Images/health-1.svg" alt="health-1" width={56.04} height={56.04} className="w-[56.04px] h-[56.04px]"/>
                                    <Image src="/Images/health-2.svg" alt="health-1" width={56.04} height={56.04} className="mt-[32.39px] w-[56.04px] h-[56.04px]"/>
                                    <Image src="/Images/health-3.svg" alt="health-1" width={56.04} height={56.04} className="mt-[32.39px] w-[56.04px] h-[56.04px]"/>
                                    <Image src="/Images/health-4.svg" alt="health-1" width={56.04} height={56.04} className="w-[56.04px] h-[56.04px]"/>
                                </div>
                                <div className="mt-[234px] ml-[30px]">
                                <h1 className="text-[#1B1A1F] font-medium geologica text-[24px] leading-[100%]">Instant Health Score</h1>
                                <p className="text-[#7D7C81] geologica font-light text-[18px] leading-[125%] w-[325px] mt-[12px] ">Each scanned item is rated
                                     with a simple health score so you can quickly decide what’s right for your body.</p>
                                     </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
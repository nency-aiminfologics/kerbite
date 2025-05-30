import Image from "next/image";


export default function WhatYouGet() {
    return (
        <>
            <div className="bg-[#C7FFE14D] w-full">
                <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%] mx-auto    
                2xl:py-[94.37px] xl:py-[84px] lg:py-[80px] md:py-[70px] py-[50px]">
                    <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%]  mx-auto ">
 
                         {/* 1440 1280 screen */}

                        <div className=" justify-between 2xl:flex xl:flex lg:hidden md:hidden hidden">



                            <div>
                                <div className="2xl:w-[364px] xl:w-[358px] 2xl:mt-[55.63px] xl:mt-[49px]">
                                    <h1 className="text-[#1B1A1F] font-bold geologica
                                     2xl:text-[40px] xl:text-[36px] leading-[100%] ">What You Get</h1>

                                    <ul className="list-disc ml-5 text-[#1B1A1F] geologica font-normal 2xl:text-[18px] xl:text-[18px] 
                                    leading-[100%] flex flex-col 2xl:gap-[40px] xl:gap-[33px] 2xl:mt-[50px] xl:mt-[44px]">
                                        <li>API & SDK Access – Easy integration with your mobile or web app</li>
                                        <li>White-labeled Solution – Keep your brand, power it with our intelligence</li>
                                        <li>Custom UI Support – Match your app’s look and feel</li>
                                        <li>Developer Support – We assist you through the integration process</li>
                                    </ul>
                                </div>
                                <div className="2xl:w-[391px] 2xl:h-[381.63px] xl:w-[347.6px] xl:h-[339.22px] 2xl:mt-[60px] xl:mt-[45.67px] relative">
                                    <div className="bg-[#FFF3CEB2] 2xl:w-[391px] 2xl:h-[211.03px] xl:w-[381.63px] xl:h-[187.58px]
                                    2xl:rounded-[18.21px] xl:rounded-[16.19px] 2xl:mt-[170.59px] xl:mt-[151.64px] absolute">

                                    </div>
                                    <Image src="/Images/what-1.png" alt="" width={218} height={442.69} 
                                    className=" 2xl:w-[218px]  xl:w-[194px] 2xl:mx-[87px] xl:mx-[87px] 2xl:mt-[22px] xl:mt-[20.33px] absolute " />


                                </div>
                            </div>

                            <div className="2xl:mt-[55.63px] xl:mt-[49px]">
                                <Image src="/Images/what-scan.png" alt="what-scan" width={334} height={692} 
                                className="2xl:w-[334px] 2xl:h-[692px] xl:w-[297px] xl:h-[615px]"/>
                            </div>

                            <div>
                                <div className="2xl:w-[391px] 2xl:h-[381.63px] xl:w-[347.6px] xl:h-[339.22px] relative">
                                    <div className="bg-[#FFD2C0B2] 2xl:w-[391px] 2xl:h-[211.03px] xl:w-[357.53px] xl:h-[187.46px]
                                    2xl:rounded-[18.21px] xl:rounded-[16.19px] 2xl:mt-[170.59px] xl:mt-[151.64px] absolute">

                                    </div>
                                    <Image src="/Images/what-2.png" alt="" width={218} height={442.69} 
                                    className=" 2xl:w-[218px]  xl:w-[194px] 2xl:mx-[87px] xl:mx-[87px] 2xl:mt-[22px] xl:mt-[20.33px] absolute " />


                                </div>
                                <div className="2xl:w-[364px] xl:w-[358px] 2xl:mt-[55.63px] xl:mt-[49px]">
                                    <h1 className="text-[#1B1A1F] font-bold geologica
                                     2xl:text-[40px] xl:text-[36px] leading-[100%] ">Use Cases</h1>
                                   <ul className="list-disc ml-5 text-[#1B1A1F] geologica font-normal 2xl:text-[18px] xl:text-[18px] 
                                    leading-[100%] flex flex-col 2xl:gap-[40px] xl:gap-[33px] 2xl:mt-[50px] xl:mt-[44px]">
                                        <li>Enable clients to scan their meals in your own branded app</li>
                                        <li>Offer instant health feedback without building from scratch</li>
                                        <li>Add smart nutrition tracking as a feature inside your platform</li>

                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* end */}

                         {/* 1024 768 screen */}

                         <div className="lg:block md:block 2xl:hidden xl:hidden">

                            {/* top */}

                            <div className="flex lg:flex-row md:flex-row flex-col justify-between">
                                {/* left side */}
                               <div className="lg:w-[420px] md:w-[435px]">

                                <div className="lg:w-[420px] md:w-[422px] ">
                                    <h1 className=" lg:text-[36px] md:text-[34px] text-[20px]
                                    text-[#1B1A1F] font-bold geologica leading-[100%] ">What You Get</h1>

                                    <ul className=" lg:text-[18px] md:text-[16px] text-[16px] lg:gap-[30px] md:gap-[30px] gap-[28px] mt-[30px] lg:mt-[35px] md:mt-[28px]
                                     leading-[100%] list-disc ml-5 text-[#1B1A1F] geologica font-normal flex flex-col ">
                                        <li>API & SDK Access – Easy integration with your mobile or web app</li>
                                        <li>White-labeled Solution – Keep your brand, power it with our intelligence</li>
                                        <li>Custom UI Support – Match your app’s look and feel</li>
                                        <li>Developer Support – We assist you through the integration process</li>
                                    </ul>
                                </div>
                                <div className="block lg:hidden md:hidden">
                                <Image src="/Images/what-scan.png" alt="what-scan" width={163} height={0} 
                                className=" mx-auto mt-[35px] w-[40%]"/>
                            </div>

                                <div className="lg:w-[418px] md:w-[435px]  lg:mt-[45px] md:mt-[37px] mt-[35px]">

                                    <h1 className=" lg:text-[36px]  md:text-[34px] text-[20px]
                                    text-[#1B1A1F] font-bold geologica leading-[100%]">Use Cases</h1>

                                   <ul className="lg:text-[18px] md:text-[16px]   text-[16px] lg:gap-[30px] md:gap-[30px] gap-[28px] mt-[30px] lg:mt-[35px] md:mt-[28px]
                                     leading-[100%] list-disc ml-5 text-[#1B1A1F] geologica font-normal flex flex-col">
                                        <li>Enable clients to scan their meals in your own branded app</li>
                                        <li>Offer instant health feedback without building from scratch</li>
                                        <li>Add smart nutrition tracking as a feature inside your platform</li>

                                    </ul>
                                </div>



                               </div>

                             {/* right side */}

                               <div className="hidden  lg:block md:block">
                                <Image src="/Images/what-scan.png" alt="what-scan" width={293} height={0} 
                                className="lg:w-[293px]  md:w-[183px]"/>
                            </div>
                            </div>



                            {/* bottom part */}

                            <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:mt-[48px] md:mt-[52px] mt-[35px]">

                                 <div className="lg:w-[420px] lg:h-[407px] md:w-[279px] md:h-[271px] w-[90%] h-[319px]  mx-auto">
                                    <div className="bg-[#FFF3CEB2] lg:w-[416.99px] lg:h-[223.77px] md:w-[277px] md:h-[149px] w-[100%] h-[176.4px]
                                   lg:rounded-[19.49px] md:rounded-[13px] rounded-[15.21px] mt-[142.6px] lg:mt-[183.23px] md:mt-[122px] relative">

                                    <Image src="/Images/what-1.png" alt="" width={233.33} height={0} 
                                    className="lg:w-[233.33px] md:w-[155px] w-[182px]  bottom-[0px]  z-10 
                                    h-auto absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                                    </div>
                                    


                                </div>

                               
                                <div className="lg:w-[420px] lg:h-[407px] md:w-[279px] md:h-[271px]  w-[90%] h-[319px]  mt-[35px] mx-auto lg:mt-0 md:mt-0">
                                    <div className="bg-[#FFD2C0B2] lg:w-[416.99px] lg:h-[223.77px] md:w-[277px] md:h-[149px] w-[100%] h-[176.4px]
                                   lg:rounded-[19.49px] md:rounded-[13px] rounded-[15.21px] mt-[142.6px] lg:mt-[183.23px] md:mt-[122px] relative">

                                      <Image src="/Images/what-2.png" alt="" width={233.33} height={0} 
                                     className="lg:w-[233.33px] md:w-[155px] w-[182px]   z-10
                                      h-auto absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                                    </div>
                                  


                                </div>

                            </div>

                         </div>



                    </div>
                </div>

            </div>


           
        </>
    )
}
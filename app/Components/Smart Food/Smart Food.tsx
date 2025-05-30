import Image from "next/image";




export default function SmartFood() {
    return (
        <>

            <div
                className="bg-cover bg-center bg-no-repeat w-full"
                style={{ backgroundImage: `url("/Images/smart-bg.png")` }}
            >
                <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[100%]  mx-auto
                2xl:py-[69px] xl:py-[90px] lg:py-[45px] md:py-[34px] py-[50px]">
                    <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[90%]  mx-auto">
                        <div className=" lg:flex hidden md:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col justify-between">
                            {/* left side section */}
                            <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-row
                            2xl:gap-[30px] xl:gap-[27px] lg:gap-[14px] md:gap-[10px] gap-[9.82px]  
                            w-[321px] mx-auto 2xl:w-fit xl:w-fit lg:w-fit md:w-fit md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 ">
                                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col flex-row md:flex-col 
                                2xl:gap-[215px] xl:gap-[191px] lg:gap-[14px] md:gap-[10px]  gap-[9.82px]">

                                    <Image src="/Images/smart1.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />

                                    <Image src="/Images/smart2.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />
                                </div>
                                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-row 
                                2xl:gap-[30px] xl:gap-[27px] lg:gap-[14px]
                                 2xl:mt-[92px] xl:mt-[82px] md:gap-[10px]  gap-[9.82px]">
                                    <Image src="/Images/smart3.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />

                                    <Image src="/Images/smart4.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />
                                </div>

                            </div>


                            {/* center section */}


                            <div className="2xl:w-[512px] xl:w-[456px] lg:w-[433px] md:w-[386px] w-[242px]
                             2xl:my-[83px] xl:my-[74px] lg:my-[159px] md:my-[110px] my-[37px] mx-auto">

                                <div className="2xl:w-[100px] 2xl:h-[100px] xl:w-[88.89px] xl:h-[88.89px]
                                 lg:w-[96px] lg:h-[96px] md:w-[72px] md:h-[72px] w-[59px] h-[59px]
                                   2xl:rounded-[20px] xl:rounded-[17.78px] lg:rounded-[20px] md:rounded-[15px] rounded-[10px]
                                  mx-auto 2xl:py-[15px] xl:py-[13.33px] lg:py-[14.67px] md:py-[11px] py-[7px]
                                  2xl:px-[15px] xl:px-[12.44px] lg:px-[14.67px] md:px-[11px] px-[7px]
                                 bg-[#FFFFFF]  border-[#EDEDED]"
                                    style={{ boxShadow: "0px 5px 50px #0000000D" }}>

                                    <Image src="/Images/Ai logo.svg" alt="ai" height={71} width={71}
                                        className="2xl:w-[71px] 2xl:h-[71px] xl:w-[63.11px] xl:h-[63.11px]
                                lg:w-[66.67px] lg:h-[66.67px] md:w-[50px] md:h-[50px] w-[44px] h-[44px]"/>
                                </div>

                                <h1 className="2xl:w-[366px] xl:w-[340px] lg:w-[331px] md:w-[313px] w-[188px]
                                 2xl:text-[40px] xl:text-[36px] lg:text-[36px] md:text-[34px] text-[20px]
                                  2xl:mt-[47px] xl:mt-[42.11px] lg:mt-[41px] md:mt-[30px] mt-[14px]
                                  geologica font-bold leading-[130%] text-center text-[#000000]
                                   mx-auto">Smart Food Scanning Solution</h1>

                                <p className="2xl:w-[512px] xl:w-[456px]  lg:w-[433px] md:w-[386px] w-[242px]
                                2xl:mt-[40px] xl:mt-[24px]  lg:mt-[24px] md:mt-[20px] mt-[10px]
                                2xl:text-[24px] xl:text-[20px]  lg:text-[20px] md:text-[18px] text-[14px]
                                  leading-[130%] text-center text-[#7D7C81] geologica">
                                    Instantly analyze food
                                    using AI and barcode technology—all in one easy-to-use platform.</p>

                                <div className="flex justify-center">
                                    <button className="2xl:w-[249px] 2xl:h-[61px] xl:w-[269px] xl:h-[67px] 
                                    lg:w-[269px] lg:h-[67px] md:w-[249px] md:h-[51px] w-[149px] h-[40px]
                                    2xl:rounded-[15px] xl:rounded-[15px] lg:rounded-[15px] md:rounded-[10px] rounded-[8px]
                                    2xl:text-[15px] xl:text-[17px] lg:text-[17px] md:text-[15px] text-[13px]
                                     2xl:mt-[50px] xl:mt-[45px] lg:mt-[45px] md:mt-[30px] mt-[25px]
                                    geologica font-medium leading-[100%]  bg-[#1B1A1F] text-[#FFFFFF] 
                                     ">
                                 Explore the Solution</button>
                                </div>
                            </div>

                            {/* right section */}
                            <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-row
                            2xl:gap-[30px] xl:gap-[27px] lg:gap-[14px] md:gap-[10px] gap-[9.82px]
                             w-[321px] mx-auto 2xl:w-fit xl:w-fit lg:w-fit md:w-fit md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0">

                                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-row 
                                2xl:gap-[30px] xl:gap-[27px] lg:gap-[14px] md:gap-[10px] gap-[9.82px]
                                 2xl:mt-[92px] xl:mt-[82px]">
                                    <Image src="/Images/smart5.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />

                                    <Image src="/Images/smart6.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />
                                </div>
                                <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col flex-row 
                                2xl:gap-[215px] xl:gap-[191px] lg:gap-[14px] md:gap-[10px] gap-[9.82px]">
                                    <Image src="/Images/smart7.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />

                                    <Image src="/Images/smart8.png" alt="smart" width={147} height={0}
                                        className="2xl:w-[147px]  xl:w-[131px]  lg:w-[131px] md:w-[98px]" />

                                </div>

                            </div>
                        </div>


                        <div className="lg:hidden md:hidden block">

                            <div className="grid grid-cols-4 gap-[10px]">
                                  <Image src="/Images/smart1.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />
                                    <Image src="/Images/smart2.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />
                                <Image src="/Images/smart3.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />
                                 <Image src="/Images/smart4.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />

                            </div>

                            <div className=" w-[80%] my-[37px] mx-auto ">

                                <div className="
                                  w-[59px] h-[59px] rounded-[10px] mx-auto  py-[7px] px-[7px]
                                 bg-[#FFFFFF]  border-[#EDEDED]"
                                    style={{ boxShadow: "0px 5px 50px #0000000D" }}>

                                    <Image src="/Images/Ai logo.svg" alt="ai" height={71} width={71}
                                        className=" w-[44px] h-[44px]"/>
                                </div>

                                <h1 className=" w-[80%] text-[20px] mt-[14px] geologica font-bold leading-[130%] text-center text-[#000000] mx-auto">
                                    Smart Food Scanning Solution</h1>

                                <p className=" w-[90%] mx-auto mt-[10px] text-[14px] leading-[130%] text-center text-[#7D7C81] geologica">
                           
                                    Instantly analyze food
                                    using AI and barcode technology—all in one easy-to-use platform.</p>

                                <div className="flex justify-center">
                                    <button className=" w-[149px] h-[40px] rounded-[8px] text-[13px] mt-[25px]
                                    geologica font-medium leading-[100%]  bg-[#1B1A1F] text-[#FFFFFF] 
                                     ">
                                 Explore the Solution</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-[10px]">
                                  <Image src="/Images/smart5.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />
                                    <Image src="/Images/smart6.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />
                                <Image src="/Images/smart7.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />
                                 <Image src="/Images/smart8.png" alt="smart" width={72.64} height={0}
                                        className="w-full" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
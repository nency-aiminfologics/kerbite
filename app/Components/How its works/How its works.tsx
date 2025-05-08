import Image from "next/image";
import { isBoxedPrimitive } from "util/types";


export default function Howitsworks(){
    return(
        <>
        <div>
            <div className="w-[1440px] mx-auto  py-[115px]">
                <h1 className="text-[#1B1A1F] font-bold geologica text-[40px] leading-[130%] text-center">How its works</h1>



                <div className=" flex mx-[108px] gap-[30px] mt-[35px]">
                    <div className="w-[388px] h-[655px] bg-[url('/Images/how-bg-1.png')] bg-cover bg-center ">
                       <div className="bg-[#1DD673] w-[245px] h-[406px] rounded-[18px] mx-[72px] mt-[35px] absolute"></div>
                       <Image src="/Images/how-1.png" alt="how-1" width={271} height={551} className="absolute mx-[59px] mt-[45px]"/>
                       <div className="bg-[#FFFFFF] border-[1px] border-[#7D7C814D] w-[388px] h-[148px] mt-[507px] absolute rounded-b-[20px]">
                        <div className="w-[300px]   ml-[25px] my-[15px]">
                            <h1 className="text-[#1DD673] geologica font-normal text-[14px] leading-[100%]">Step 1</h1>
                            <h1 className="text-[#1B1A1F] geologica font-bold text-[28px] leading-[100%] mt-[15px]">Scan</h1>
                            <p className="text-[#7D7C81] geologica font-light text-[18px] leading-[125%] mt-[15px]">Use the app to scan food products with a barcode or live camera.</p>

                        </div>
                       </div>

                    </div>
                    <div className="bg-[url('/Images/how-bg-2.png')] w-[388px] h-[655px] bg-cover bg-center mt-[80px]">
                    
                    <div className="  w-[388px] h-[148px]  absolute rounded-b-[20px]">
                        <div className="w-[300px]   ml-[25px] mt-[35px]">
                            <h1 className="text-[#FF733D] geologica font-normal text-[14px] leading-[100%]">Step 2</h1>
                            <h1 className="text-[#1B1A1F] geologica font-bold text-[28px] leading-[100%] mt-[15px]">Analyse</h1>
                            <p className="text-[#7D7C81] geologica font-light text-[18px] leading-[125%] mt-[15px]">Our AI processes the data and delivers a complete health analysis.</p>

                        </div>
                       </div>

                       <div className="bg-[#FF733D] w-[245px] h-[406px] rounded-[18px] mx-[72px] mt-[183px] absolute"></div>
                       <Image src="/Images/how-2.png" alt="how-1" width={271} height={551} className="absolute mx-[59px] mt-[193px]"/>
                       <div className="w-[284px] h-[76px] bg-[#FFFFFF] rounded-[9px] flex gap-[26px] ml-[26px] mt-[570px] absolute px-[21px] py-[8px]" style={{boxShadow:"0px 0px 50px #0000001F"}}>
                        <div className="w-[41.25px] h-[58.79px]">
                        <Image src="/Images/carbs.svg" alt="carbs" width={42} height={42} />
                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] text-[12px] mt-[4px]">Carbs</h1>
                        </div>
                        <div className="w-[41.25px] h-[58.79px]">
                        <Image src="/Images/Protein.svg" alt="carbs" width={42} height={42} />
                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] text-[12px] mt-[4px]">Protein</h1>
                        </div>
                        <div className="w-[41.25px] h-[58.79px]">
                        <Image src="/Images/Sodium.svg" alt="carbs" width={42} height={42} />
                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] text-[12px] mt-[4px]">Sodium</h1>
                        </div>
                        <div className="w-[41.25px] h-[58.79px]">
                        <Image src="/Images/Fat.svg" alt="carbs" width={42} height={42} />
                        <h1 className="text-[#111827] geologica text-center font-normal leading-[150%] text-[12px] mt-[4px]">Fat</h1>
                        </div>

                       </div>
                       

                    </div>
                    <div className="w-[388px] h-[655px] bg-[url('/Images/how-bg-3.png')] bg-cover bg-center ">
                    <div className=" w-[273px] h-[58px] rounded-[9px] absolute z-10 bg-[#FFFFFF] mt-[278px] ml-[29px]" style={{boxShadow:"0px 4px 50px #0000001F"}}>
                        <Image src="/Images/how-processing.svg" alt="how-processing" width={237} height={50} className="mx-[18px] my-[3px]"/>
                    </div>
                       <div className="bg-[#FDCB26] w-[243px] h-[380px] rounded-[18px] mx-[72px] mt-[35px] absolute"></div>
                       <Image src="/Images/how-3.png" alt="how-1" width={271} height={551} className="absolute mx-[59px] "/>
                       <div className="bg-[#FFFFFF] border-[1px] border-[#7D7C814D] w-[388px] h-[148px] mt-[507px] absolute rounded-b-[20px]">
                        <div className="w-[300px]   ml-[25px] my-[15px]">
                            <h1 className="text-[#FDCB26] geologica font-normal text-[14px] leading-[100%]">Step 3</h1>
                            <h1 className="text-[#1B1A1F] geologica font-bold text-[28px] leading-[100%] mt-[15px]">Instant Results</h1>
                            <p className="text-[#7D7C81] geologica font-light text-[18px] leading-[125%] mt-[15px]">Instantly see a health report with nutrient and processing details.</p>

                        </div>
                       </div>

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}
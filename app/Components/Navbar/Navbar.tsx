import Image from "next/image";

export default function Navbar(){
    return(
        <>
        <div className="absolute z-10">
            <div className="w-[1440px] mx-[238px] ">
               
                <div className="w-[964px] h-[93px] mt-[44px] rounded-[20px] mx-auto bg-[#FFFFFF1A] backdrop-blur-[4px] flex justify-between">

                    <Image src="/Images/logo.png" alt="logo" width={66} height={66}  className="py-[13px] ml-[22px]"/>
                    <ul className="text-[#FFFFFF] flex w-[524px] justify-between text-[15px] leading-[100%] items-center geologica font-medium">
                        <li className="text-center">Home</li>
                        <li>Features</li>
                        <li>Who It's For</li>
                        <li>Integrate With Your App</li>
                    </ul>
                    <button className="bg-[#1B1A1F] w-[141px] h-[56px] text-[#FFFFFF] rounded-[15px] text-[15px] leading-[100%] my-[19px] mr-[24px] geologica font-medium">
                        Get free trial</button>

                
                </div>
            </div>
        </div>
        </>
    )
}
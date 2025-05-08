import Image from "next/image";


export default function WhatYouGet (){
    return(
        <>
        <div className="bg-[#C7FFE14D] ">
            <div className="w-[1440px] mx-auto  h-full py-[94.37px] flex justify-between">

                <div>
                    <div className="w-[364px]">
                        <h1 className="text-[#1B1A1F] font-bold geologica text-[40px] leading-[100%] mt-[55.63px]">What You Get</h1>
                        <ul className="list-disc ml-5 text-[#1B1A1F] geologica font-normal text-[18px] leading-[100%] flex flex-col gap-[40px] mt-[50px]">
                            <li>API & SDK Access – Easy integration with your mobile or web app</li>
                            <li>White-labeled Solution – Keep your brand, power it with our intelligence</li>
                            <li>Custom UI Support – Match your app’s look and feel</li>
                            <li>Developer Support – We assist you through the integration process</li>
                        </ul>
                    </div>
                    <div className="w-[391px]  h-[381.63px] mt-[60px] relative">
                        <div className="bg-[#FFF3CEB2] w-[391px] h-[211.03px] rounded-[18.21px] mt-[170.59px] absolute">
                        
                        </div>
                        <Image src="/Images/what-1.png" alt="" width={218} height={442.69} className="absolute mx-[87px] mt-[22px] "/>
                        

                    </div>
                </div>
                <div className="mt-[55.63px]">
                    <Image src="/Images/what-scan.png" alt="what-scan" width={334} height={692}/>
                </div>
                <div>
                <div className="w-[391px]  h-[381.63px] mt-[60px] relative">
                        <div className="bg-[#FFF3CEB2] w-[391px] h-[211.03px] rounded-[18.21px] mt-[170.59px] absolute">
                        
                        </div>
                        <Image src="/Images/what-2.png" alt="" width={218} height={442.69} className="absolute mx-[87px] mt-[22px] "/>
                        

                    </div>
                 <div className="w-[364px]">
                        <h1 className="text-[#1B1A1F] font-bold geologica text-[40px] leading-[100%] mt-[55.63px]">Use Cases</h1>
                        <ul className="list-disc ml-5 text-[#1B1A1F] geologica font-normal text-[18px] leading-[100%] flex flex-col gap-[40px] mt-[50px]">
                            <li>Enable clients to scan their meals in your own branded app</li>
                            <li>Offer instant health feedback without building from scratch</li>
                            <li>Add smart nutrition tracking as a feature inside your platform</li>
                            
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}
import Image from "next/image";


export default function Unlock() {
    return (
        <>
            <div className="bg-[url('/Images/Unlock-bg.png')] bg-cover bg-center w-full ">
                <div className=" mx-auto h-full ">
                    <div className="w-[692px]  mx-auto mt-[50px]">
                        <Image src="/Images/logo.png" alt="logo" width={101} height={101} className="mx-[296px]"/>
                        <ul className="text-[#1B1A1F] text-[17px] geologica font-normal leading-[100%] flex justify-between mt-[40px]">
                            <li>Home</li>
                            <li>Features</li>
                            <li>Who It's For</li>
                            <li>Integrate With Your App</li>
                            <li>How its work</li>
                        </ul>
                        <h1 className="text-[#1B1A1F] text-[36px] mt-[50px] geologica font-bold leading-[130%] tracking-[-2%] text-center">Unlock the Power of Smart Scanning</h1>
                        <div className="w-[170.4px] mt-[40px] mx-auto flex justify-between ">
                            <Image src="/Images/Small-components/Icons/linkedin.svg" alt="likedin" width={48} height={48}/>
                            <Image src="/Images/Small-components/Icons/insta.svg" alt="insta" width={48} height={48}/>
                            <Image src="/Images/Small-components/Icons/facebook.svg" alt="facebook" width={48} height={48}/>
                        </div>
                </div>

             <div className=" mt-[31px] flex ">
                <div>
                    <Image src="/Images/un-1.png" alt="un-1" width={290} height={300} className="" />
                </div>
                <div className="">
                    <ul className="text-[#1B1A1F] geologica font-light leading-[130%] tracking-[-2%] text-[18px] flex gap-[14px]  mt-[42px] ml-[38px]">
                        <li>Terms of service</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <Image src="/Images/un-2.png" alt="un-2" width={480} height={144} className="mt-[335px]"/>
                </div>
                <div  className="w-[382.07px]">
                    <h1 className="text-[#1B1A1F] geologica font-light leading-[130%] tracking-[-2%] text-[18px] text-center  mt-[42px] ">
                    © 2025 Scanveri. All rights reserved.
                    </h1>
                    <Image src="/Images/un-3.png" alt="un-2" width={382.07} height={145.57} className="mt-[140px]"/>
                </div>
                <div className="w-[460] ">
                    <h1 className="text-[#1B1A1F] geologica font-light leading-[130%] tracking-[-2%] text-[18px] flex gap-[14px]  mt-[42px]  ml-[250px]">Built for Innovators.</h1>
                    <Image src="/Images/un-4.png" alt="un-2" width={460} height={144} className="mt-[335px]"/>

                </div>
                <div>
                <Image src="/Images/un-5.png" alt="un-1" width={290} height={300} className="" />
                </div>


                </div>
                </div>

            </div>
        </>
    )
}
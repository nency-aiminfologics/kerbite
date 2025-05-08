import Image from "next/image";



export default function Integrate(){
    return(
        <>

        <div className="bg-[#1B1A1F] ">
            <div className="w-[1440px] mx-auto  py-[116px] ">

                <div className="flex justify-between ">
                    <Image src="/Images/integrate.svg" alt="integrate" width={588} height={300}/>
                    <div className="my-[46px]">
                        <h1 className="text-[#1DD673] font-medium geologica text-[28px] leading-[100%]">Integrate Into Your Own App</h1>
                        <h1 className="text-[#FFFFFF] font-semibold geologica w-[573px] text-[38px] leading-[125%] mt-[28px]">Already have your own 
                            fitness, wellness, or nutrition app?</h1>
                            <h1 className="text-[#FFFFFFCC] geologica w-[509px] text-[28px] font-light mt-[30px] leading-[125%]">Supercharge it with our food scanning technology!</h1>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
import Image from "next/image";


export default function Home(){
    return(
        <>
       
       <div className="relative w-screen h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay div with semi-transparent color */}
      <div className="absolute inset-0 bg-[#0000004D] z-0"></div>
      <div className="relative z-10">
        <div>
            <div className="w-[1440px] mx-auto  h-[703.08px] pt-[196px] flex gap-[300px]">

                <div className="mt-[201px]">
                    <h1 className="text-[#3FF795] text-[64px] font-bold tracking-[-2px] leading-[112.00000000000001%]">One Solution. </h1>
                    <h1 className="w-[631px] text-[64px] text-[#FFFFFF] rubik font-bold leading-[112.00000000000001%] tracking-[-2px] mt-[1px]">Smarter Food Choices Through AI</h1>
                    <div className="w-[240px] h-[55px] rounded-[8px] text-center text-[#1B1A1F] bg-[#C7FFE1] geologica font-normal leading-[100%] text-[22px]
                    py-[15px] mt-[35px]">Analyze fresh meals</div>
                     <div className="w-[335px] h-[55px] rounded-[8px] text-center text-[#1B1A1F] bg-[#FFF1EC] geologica font-normal leading-[100%] text-[22px]
                    py-[15px] mt-[18px]">Get nutrition & health scores</div>
                     <div className="w-[299px] h-[55px] rounded-[8px] text-center text-[#1B1A1F] bg-[#F1E7FF] geologica font-normal leading-[100%] text-[22px]
                    py-[15px] mt-[18px]">Make better food choices</div>
                </div>

                <Image src="/Images/scan phone.png" alt="scan phone" width={325.29} height={703.08} className="h-[703.08px]"/>

            </div>

        </div>
      </div>
    </div>
        </>
    )
}

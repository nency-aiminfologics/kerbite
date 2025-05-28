import Image from "next/image";



export default function Integrate(){
    return(
        <>

        <div className="bg-[#1B1A1F] w-full">
            <div className="2xl:w-[1440px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] w-[375px]
            mx-auto  2xl:py-[116px] xl:py-[122px] lg:py-[70px] md:py-[60px] py-[45px]">
                <div className="2xl:w-[1350px] xl:w-[1150px] lg:w-[904px] md:w-[668px] w-[335px]  mx-auto ">

                <div className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col justify-between ">

                    <Image src="/Images/integrate.svg" alt="integrate" width={588} height={300}
                     className="2xl:w-[588px] 2xl:h-[300px] xl:w-[562px] xl:h-[288px] lg:hidden hidden md:hidden 2xl:block xl:block"/>

                    <div className="2xl:my-[46px] xl:my-[54px] my-[45px]">
                        <h1 className="  2xl:text-[28px] xl:text-[28px] lg:text-[30px] md:text-[24px] text-[18px]
                        text-[#1DD673] font-medium geologica
                         leading-[100%]">Integrate Into Your Own App</h1>

                        <h1 className="2xl:w-[573px] xl:w-[459px] lg:w-[570px] md:w-[431px] w-[299px]
                        2xl:text-[38px] xl:text-[30px] lg:text-[36px] md:text-[28px] text-[24px]
                        2xl:mt-[28px] xl:mt-[30px] lg:mt-[25px] md:mt-[24px] mt-[20px] 
                        leading-[125%] lg:leading-[47px]  text-[#FFFFFF] font-semibold geologica ">Already have your own 
                            fitness, wellness, or nutrition app?</h1>

                            <h1 className=" 2xl:w-[509px] xl:w-[459px]  lg:w-[477px] md:w-[250px] w-[213px]
                            2xl:text-[28px] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px]
                            2xl:mt-[30px] xl:mt-[24px] lg:mt-[25px] md:mt-[24px] mt-[24px]
                            leading-[125%] text-[#FFFFFFCC] geologica font-light ">
                                Supercharge it with our food scanning technology!</h1>
                    </div>

                    <Image src="/Images/integrate.svg" alt="integrate" width={331} height={169}
                     className="lg:w-[867px] lg:h-[443px] md:w-[656px] md:h-[335px]
                     lg:mt-[60px] md:mt-[41px]
                      mx-auto lg:block md:block 2xl:hidden xl:hidden"/>

                </div>
                </div>

            </div>

        </div>
        </>
    )
}
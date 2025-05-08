import Image from "next/image";




export default function SmartFood (){
    return(
        <>

<div
      className="bg-cover bg-center bg-no-repeat w-full h-[795px] mx-auto"
      style={{ backgroundImage: `url("/Images/smart-bg.png")` }}
    >
       <div className="pt-[69px] mx-[50px] flex justify-between">
{/* left side section */}
<div className="flex gap-[30px] ">
    <div className="flex flex-col gap-[215px]">
        <Image src="/Images/smart1.png" alt="smart" width={147} height={189} />
        <Image src="/Images/smart2.png" alt="smart" width={147} height={189}/>
    </div>
    <div className="flex flex-col gap-[30px] mt-[92px]">
    <Image src="/Images/smart3.png" alt="smart" width={147} height={189}/>
    <Image src="/Images/smart4.png" alt="smart" width={147} height={189}/>
    </div>

</div>


{/* center section */}


<div className="w-[512px]  my-[83px]">
    <div className="w-[100px] h-[100px] rounded-[20px] bg-[#FFFFFF] border-[1px] border-[#EDEDED] mx-[202px]" style={{boxShadow:"0px 5px 50px #0000000D"}}>
        <Image src="/Images/Ai logo.svg" alt="ai" height={71} width={71} className="my-[14px] mx-[13px] h-[71px]"/>
    </div>
    <h1 className="w-[366px] text-[#000000] text-[40px] geologica font-bold leading-[130%] text-center mx-[69px] mt-[47px]">Smart Food Scanning Solution</h1>
    <p className="w-[512px] mx-[4px] mt-[40px] text-[#7D7C81] geologica text-[24px] leading-[130%]">Instantly analyze food 
        using AI and barcode technology—all in one easy-to-use platform.</p>
        <button className="w-[249px] h-[61px] bg-[#1B1A1F] rounded-[15px] text-[#FFFFFF] 
        text-[15px] geologica font-medium leading-[100%] mx-[128px] mt-[50px]">Explore the Solution</button>

</div>
{/* right section */}
<div className="flex gap-[30px] ">
    
    <div className="flex flex-col gap-[30px] mt-[92px]">
    <Image src="/Images/smart5.png" alt="smart" width={147} height={189}/>
    <Image src="/Images/smart6.png" alt="smart" width={147} height={189}/>
    </div>
    <div className="flex flex-col gap-[215px]">
        <Image src="/Images/smart7.png" alt="smart" width={147} height={189} />
        <Image src="/Images/smart8.png" alt="smart" width={147} height={189}/>
    </div>

</div>
        </div>
        </div>
        </>
    )
}
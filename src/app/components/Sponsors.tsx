import React from "react";
import Image from 'next/image';
import Apple from "@/app/assets/Apple.png";
import Google from "@/app/assets/Google.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack from "@/app/assets/Slack.png";

export default function Sponsers () {
    return (
        <>
            <div className='w-[1922px] h-[538px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] bg-[#FFFF] grid  gap-[100px]'>
                
                <h2 className='w-[1482px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] text-center'>
                Our sponsors
                    </h2>
                    
                    <div className='w-[1482px] h-[71px] flex  justify-between '>

                    <div className='w-[55.47px] h-[68px] gap-1'>
                    <Image src={Apple} alt="Apple"/>
                    </div>

                    <div className='w-[287px] h-[62px]'>
                    <Image src={Microsoft} alt="Microsoft"/>
                    </div>

                    <div className='w-[280px] h-[71px]'>
                    <Image src={Slack} alt="Slack"/>
                    </div>

                    <div className='w-[211px] h-[69.81px]'>
                    <Image src={Google} alt="Google"/>
                    </div>

                    </div>

            </div>
        </>
    );
}

import React from "react";
import Image from 'next/image';
import Work from "@/app/assets/Work.png";

export default function Worktogether() {
    return (
        <>
            <div className='w-[1920px] h-[794px] pt-[140px] pl-[220px] pr-[220px] pb-[140px] flex items-center justify-between gap-[100px]'>

                {/* Left Side - Image */}
                <div className='w-[710px] h-[661px]'>
                    <Image src={Work} alt="Work" />
                </div>
                
                {/* Right Side - Content */}
                <div className='w-[670px] h-[294px] flex flex-col gap-[20px]'>
                    <h1 className='font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529]'>
                        Work together
                    </h1>
                    
                    <p className="w-[670px] h-[60px] font-inter text-[18px] font-normal leading-[30px] tracking-[0.02em] text-left text-[#212529] pt-[20px] pb-[90px]">
                        With whitespace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                    </p>
                    
                    <button className='w-[186px] h-[63px] rounded-md bg-[#4F9CF9] text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-0.02em] font-inter'>
                        Try it now
                    </button>
                </div>
            </div>
        </>
    );
}

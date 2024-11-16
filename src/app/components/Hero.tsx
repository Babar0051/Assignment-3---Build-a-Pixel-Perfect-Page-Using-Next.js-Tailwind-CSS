import React from "react";

export default function Hero () {
    return(
        <>
        <div className='w-[1920px] h-[829px] pt-[92px] py-[140px] px-[220px] bg-[#043873] flex items-center justify-center'>
            <div className='w-[656px] h-[361px] flex flex-col'>
                <h2 className='w-[656px] h-[238px] mb-[16px] font-inter font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] text-[#FFFFFF]'> Get More Done with whitepace
                </h2>
                <p className="w-[656px] h-[60px] mb-[50px] font-inter text-lg font-normal leading-[30px] tracking-[0.02em] text-left text-[#FFFFFF]">
                Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks
                </p>

                <button className='w-[219px] h-[63px] gap-[10px] p-5 rounded-lg bg-[#4F9CF9] text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-0.02em] font-inter'>
                Try Whitepace free
                </button>
            </div>

            <div className='w-[824px] h-[549px] gap-1 bg-[#C4DEFD]'>

            </div>

        </div>
        </>
    )
}
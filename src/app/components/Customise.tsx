import React from "react";

export default function Customise() {
    return (
        <>
            <div className='w-[1921px] h-[812.09px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] bg-[#FFFF] flex items-center justify-between'>
                
                {/* Left Side - Placeholder Box */}
                <div className='w-[714px] h-[532px] bg-[#C4DEFD] gap-1'>
                    {/* Placeholder for an image or additional content */}
                </div>
                
                {/* Right Side - Text Content and Button */}
                <div className='w-[669px] h-[411px] flex flex-col gap-[60px]'>
                    <h2 className='w-[660px] h-[174px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529]'>
                        Customise it to your needs
                    </h2>
                    <p className="w-[669px] h-[90px] font-inter text-lg font-normal leading-[30px] tracking-[0.02em] text-left text-[#212529]">
                        Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                    </p>
                    <button className='w-[171px] h-[63px] gap-[10px] pt-5 pr-10 pb-5 pl-10 rounded-lg bg-[#4F9CF9] text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-0.02em] font-inter'>
                        Let’s Go 
                    </button>
                </div>

            </div>
        </>
    );
}

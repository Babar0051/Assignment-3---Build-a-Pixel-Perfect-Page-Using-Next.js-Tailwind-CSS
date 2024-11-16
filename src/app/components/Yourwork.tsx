import React from "react";

export default function Yourwork() {
    return (
        <>
            <div className='w-[1921px] h-[574px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] bg-[#043873] flex items-center justify-center'>
                
                {/* Main Content Wrapper */}
                <div className='w-[1481px] h-[294px] flex flex-col items-center justify-center gap-[60px]'>
                    
                    {/* Text Section */}
                    <div className='w-[1064px] h-[171px] flex flex-col items-center gap-[24px]'>
                        <h2 className='w-[1064px] h-[87px] font-inter font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#FFFFFF] text-center'>
                            Your work, everywhere you are
                        </h2>
                        <p className="w-[1064px] h-[60px] font-inter text-lg font-normal leading-[30px] tracking-[0.02em] text-center text-[#FFFFFF]">
                            Access your notes from your computer, phone, or tablet by synchronizing with various services, including whitepace, Dropbox, and OneDrive. The app is available on Windows, macOS, Linux, Android, and iOS. A terminal app is also available!
                        </p>
                    </div>

                    {/* Centered Button */}
                    <button className='w-[195px] h-[63px] gap-[10px] rounded-lg bg-[#4F9CF9] text-[#FFFFFF] font-medium text-[18px] leading-[23px] tracking-[-0.02em] font-inter'>
                        Let’s Go
                    </button>

                </div>

            </div>
        </>
    );
}

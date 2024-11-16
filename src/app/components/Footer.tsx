import React from "react";
import Image from "next/image";
import logo from "@/app/assets/Logo.png";

export default function Footer() {
  return (
    <>
      <div className="w-[1920px] h-[461px] pt-[140px] pr-[220px] pb-[32px] pl-[220px] bg-[#043873] gap-[200px]">
        <div className="w-[1480px] h-[289px] gap-[100px] flex justify-between">
          <div className="w-[1480px] h-[169px] gap-[100px] grid grid-cols-4">
            {/* Section: Company Description */}
            <div className="w-[295px] h-[169px] gap-[15px]">
              {/* Logo */}
              <div className="w-[191px] h-[34px]">
                <Image src={logo} alt="logo" />
              </div>
              {/* Description */}
              <p className="w-[240px] h-[120px] pt-[15px] font-inter font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#F7F7EE]">
                whitespace was created for the new ways we live and work. We make a better workspace around the world.
              </p>
            </div>

            {/* Section: Product */}
            <div className="w-[295px] h-[127px] gap-[15px]">
              <p className="w-[68px] h-[22px] pb-5 font-inter font-bold text-[18px] leading-[22px] tracking-[-0.02em] text-[#FFFFFF]">
                Product
              </p>
              <ul>
                <li className="w-[70px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFE492]">
                  Overview
                </li>
                <li className="w-[50px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Pricing
                </li>
                <li className="w-[177px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Customer stories
                </li>
              </ul>
            </div>

            {/* Section: Resources */}
            <div className="w-[295px] h-[130px] gap-[16px]">
              <p className="w-[91px] h-[22px] pb-5 font-inter font-bold text-[18px] leading-[22px] tracking-[-0.02em] text-[#FFFFFF]">
                Resources
              </p>
              <ul>
                <li className="w-[33px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Blog
                </li>
                <li className="w-[128px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Guides & tutorials
                </li>
                <li className="w-[130px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Help center
                </li>
              </ul>
            </div>

            {/* Section: Company */}
            <div className="w-[295px] h-[130px] gap-[16px]">
              <p className="w-[83px] h-[22px]  pb-5 font-inter font-bold text-[18px] leading-[22px] tracking-[-0.02em] text-[#FFFFFF]">
                Company
              </p>
              <ul>
                <li className="w-[66px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  About us
                </li>
                <li className="w-[62px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Careers
                </li>
                <li className="w-[99px] h-[20px] mt-[15px] font-inter font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
                  Media kit
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="w-full h-5 flex justify-center items-center">
  <div className="font-inter font-normal text-[16px] text-center leading-[20px] tracking-[-0.02em] text-[#FFFFFF]">
    ©2021 Whitepace LLC.
  </div>
</div>

      </div>
    </>
  );
}

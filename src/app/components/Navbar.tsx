import Link from 'next/link';
import Image from 'next/image';
import logo from "@/app/assets/Logo.png";

export default function Navbar() {
  return (
    <div className='w-[1920px] h-[92px] pt-4 pr-[220px] pb-4 pl-[220px] bg-[#043873] flex justify-between items-center'>
      {/* Logo Section */}
      <div className='w-[191px] h-[34px]'>
        <Image src={logo} alt="logo" />
      </div>

      {/* Menu and Button Section */}
      <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
        {/* Navbar Menu Container with specified width and height */}
        <div className='w-[549px] h-[23px]'>
          <ul className='flex flex-row text-white gap-8'>
            <li className="text-[18px] leading-[23px] font-medium">Products</li>
            <li className="text-[18px] leading-[23px] font-medium">Solutions</li>
            <li className="text-[18px] leading-[23px] font-medium">Resources</li>
            <li className="text-[18px] leading-[23px] font-medium">Pricing</li>
          </ul>
        </div>

        {/* Login Button */}
        <button className='w-[126px] h-[60px] rounded-lg pt-4 pr-10 pb-4 pl-10 bg-[#FFE492] text-[#043873] font-medium'>
          Login
        </button>
      </div>
    </div>
  );
}

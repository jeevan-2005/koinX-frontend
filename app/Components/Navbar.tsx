import React from 'react';
import logo from '../../public/assests/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../../public/assests/3LineIcon.png';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-5 lg:px-20 py-4 drop-shadow-sm border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full bg-white h-[74px]'>
      <Link href={'/'} className=''>
        <Image src={logo} alt='logo' />
      </Link>
      <div className='flex items-center justify-around gap-10'>
        <div className='hidden lg:flex ml-auto text-black gap-8 text-base font-semibold'>
          <Link href={'/taxes'} className='font-Poppins font-semibold'>
            Crypto Taxes
          </Link>
          <Link href={'/tools'} className='font-Poppins font-semibold'>
            Free Tools
          </Link>
          <Link href={'/resources'} className='font-Poppins font-semibold'>
            Resource Center
          </Link>
        </div>
        <div>
          <button className='hidden lg:block border-none cursor-pointer rounded-lg text-white px-6 py-2 bg-[#1b4aef] font-Poppins font-medium hover:bg-[#163dc8] transtion-all duration-100'>
            Get Started
          </button>
          <Image src={icon} className='ml-auto block lg:hidden cursor-pointer' alt='icon' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

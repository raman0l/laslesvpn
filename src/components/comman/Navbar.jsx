import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
       <div className='max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto'>
        <div className='flex items-center justify-between lg:mt-[45px] md:mt-[30px] mt-[20px]'>
            <Link href={"/"} className='lg:max-w-[149px] md:max-w-[120px] max-w-[100px]'> <Image width={149} src={"/assets/svg/laslesvpn.svg"} height={36} alt='logo' />
               </Link>
            <ul className='flex lg:gap-[40px] md:gap-[20px] gap-[15px] max-[600px]:hidden'>
                <li className='text-[#4F5665] lg:text-base md:text-sm text-xs font-normal hover:text-[#0B132A] hover:underline duration-500 ease-in-out'><Link href={"/"}>About </Link></li>
                <li className='text-[#4F5665] lg:text-base md:text-sm text-xs font-normal hover:text-[#0B132A] hover:underline duration-500 ease-in-out'><Link href={"/"}>Features</Link></li>
                <li className='text-[#4F5665] lg:text-base md:text-sm text-xs font-normal hover:text-[#0B132A] hover:underline duration-500 ease-in-out'><Link href={"/"}>Pricing</Link></li>
                <li className='text-[#4F5665] lg:text-base md:text-sm text-xs font-normal hover:text-[#0B132A] hover:underline duration-500 ease-in-out'><Link href={"/"}>Testimonials</Link></li>
                <li className='text-[#4F5665] lg:text-base md:text-sm text-xs font-normal hover:text-[#0B132A] hover:underline duration-500 ease-in-out'><Link href={"/"}>Help</Link></li>
            </ul>
            <div className='flex gap-1 max-[600px]:hidden'>
                <button className='text-[#0B132A] lg:text-base md:text-sm text-xs font-medium lg:p-[13px_25px] md:p-[10px_20px] p-[8px_15px] rounded-[25px] hover:text-white hover:bg-[#F53855] duration-500 ease-in-out'>Sign In</button>
                 <button className='text-[#F53855] lg:text-base md:text-sm text-xs font-medium lg:p-[13px_45px] md:p-[10px_30px] p-[8px_15px] border-1 border-[#F53855] rounded-[50px] hover:bg-[#F53855] hover:text-white duration-500 ease-in-out'>Sign In</button>
            </div>
            <div className='min-[600px]:hidden'>
            <Image src={"assets/svg/menu.svg"} alt='menu' width={30} height={30}/>
                </div>

        </div>
    </div>
    </div>
  )
}

export default Navbar
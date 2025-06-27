import Image from 'next/image'
import React from 'react'

function Hero() {
  return <div>
        <div className='max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto'>   
            <div className='flex gap-[15px] xl:py-[88px_103px] lg:py-[60px_80px] md:py-[40px_60px] py-[35px] items-center max-[600px]:flex-col-reverse'>
                <div className='flex flex-col xl:gap-[44px] lg:gap-[35px] md:gap-[25px] gap-[15px]'>
                    <div className='flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]'>
                     <h1 className='text-[#0B132A] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] font-medium leading-[140%] max-w-[560px] w-full'>Want anything to be easy with <span className='font-bold'>LaslesVPN.</span></h1>
                     <p className='text-[#4F5665] lg:text-base md:text-sm text-xs font-light leading-[187%] min-[600px]:max-w-[500px] w-full'>Provide a network for all your needs with ease and fun using LaslesVPN d=iscover interesting features from us.</p>
                    </div>
                    <div>
                    <button className='lg:text-base md:text-sm text-xs leading-[156%] font-bold text-white bg-[#F53838] rounded-[10px] lg:p-[17px_77px] md:p-[13px_50px] p-[10px_30px] border-1 hover:border-[#F53838] hover:bg-transparent hover:text-[#F53838] shadow-[0px_18px_30px_-20px_#f53838c5] duration-500 ease-in-out'>
                        Get Started
                    </button>
                    </div>
                </div>
                <div>
                     <Image className='max-w-[611px] max-[600px]:max-w-[300px]  w-full' src={"/assets/png/leptop-boy.png"} alt='leptop-boy' width={611} height={382}/>
                </div>

            </div>
        </div>
    </div>
}
export default Hero
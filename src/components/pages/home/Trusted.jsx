import { DotIcon, StarIcon } from "@/components/helper/Icon";
import Image from "next/image";
import React from "react";

function Trusted() {
  return (
    <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
      <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px] xl:mt-[124px] lg:mt-[100px] ms:mt-[70px] mt-[45px]">
        <h1 className="xl:text-[35px] lg:text-[30px] md:text-[25px] text-[20px] font-medium leading-[142%] text-[#0B132A] text-center max-w-[400px] mx-auto">
          Trusted by Thousands of Happy Customer{" "}
        </h1>
        <p className="lg:text-base md:text-sm text-xs text-[#4F5665] font-normal  leading-[187%] max-w-[530px] mx-auto text-center">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <div className="overflow-x-scroll [scrollbar-width:none] lg:py-[60px] md:py-[40px] py-[25px]">
        <div className="flex xl:gap-[20px] lg:gap-[25px] md:gap-[20px] gap-[15px] justify-between w-full max-[840px]:min-w-[840px] mt--[-110px]">
          <div className="border-2 border-[#DDDDDD] max-w-[400px] rounded-[10px] xl:p-[30px] lg:p-[25px] md:p-[17px] p-[10px] flex flex-col lg:gap-[20px] md:gap-[17px] gap-[13px] w-[33%] hover:border-[#F53838] duration-500 ease-in-out">
            <div className="flex items-center gap-[10px] justify-between">
              <div className="flex lg:gap-[20px] md:gap-[15px] gap-[10px]">
                <div>
                  <Image
                    className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px] w-full"
                    src={"/assets/svg/viezh-robert.svg"}
                    alt="viezh-robert"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col md:gap-1">
                  <p className="lg:text-lg md:text-base text-sm text-[#0B132A] font-medium leading-[166%]">
                    Viezh Robert
                  </p>
                  <p className="lg:text-[14px] md:text-[13px] text-[12px] font-normal leading-[114%] text-[#4F5665]">
                    Warsaw, Poland
                  </p>
                </div>
              </div>
              <div className="flex md:gap-[8px] lg:gap-[10px] gap-[6px] items-center">
                <p className="lg:text-base md:text-sm text-xs text-[#0B132A] font-normal leading-[100%]">
                  4.5
                </p>
                <StarIcon />
              </div>
            </div>
            <p className="lg:text-base md:text-sm text-xs font-normal leading-[160%]">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
          <div className="border-2 border-[#DDDDDD] max-w-[400px] rounded-[10px] xl:p-[30px] lg:p-[25px] md:p-[17px] p-[10px] flex flex-col lg:gap-2 gap-1 w-[33%] hover:border-[#F53838] duration-500 ease-in-out">
            <div className="flex items-center gap-[10px] justify-between">
              <div className="flex lg:gap-[20px] md:gap-[15px] gap-[10px]">
                <div>
                  <Image
                    className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px] w-full"
                    src={"/assets/svg/yessica.svg"}
                    alt="yessica-christy"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col md:gap-1">
                  <p className="lg:text-lg md:text-base text-sm text-[#0B132A] font-medium leading-[166%]">
                    Yessica Christy
                  </p>
                  <p className="lg:text-[14px] md:text-[13px] text-[12px] font-normal leading-[114%] text-[#4F5665]">
                    Shanxi, China
                  </p>
                </div>
              </div>
              <div className="flex md:gap-[8px] lg:gap-[10px] gap-[6px] items-center">
                <p className="lg:text-base md:text-sm text-xs text-[#0B132A] font-normal leading-[100%]">
                  4.5
                </p>
                <StarIcon />
              </div>
            </div>
            <p className="lg:text-base md:text-sm text-xs font-normal leading-[160%]">
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>
          <div className="border-2 border-[#DDDDDD] max-w-[400px] rounded-[10px] xl:p-[30px] lg:p-[25px] md:p-[17px] p-[10px] flex flex-col gap-[3px] w-[33%] hover:border-[#F53838] duration-500 ease-in-out">
            <div className="flex items-center gap-[10px] justify-between">
              <div className="flex lg:gap-[20px] md:gap-[15px] gap-[10px]">
                <div>
                  <Image
                    className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px] w-full"
                    src={"/assets/svg/kim-young-jou.svg"}
                    alt="Kim Young Jou"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex flex-col md:gap-1">
                  <p className="lg:text-lg md:text-base text-sm text-[#0B132A] font-medium leading-[166%]">
                    Kim Young Jou
                  </p>
                  <p className="lg:text-[14px] md:text-[13px] text-[12px] font-normal leading-[114%] text-[#4F5665]">
                    Seoul, South Korea
                  </p>
                </div>
              </div>
              <div className="flex md:gap-[8px] lg:gap-[10px] gap-[6px] items-center">
                <p className="lg:text-base md:text-sm text-xs text-[#0B132A] font-normal leading-[100%]">
                  4.5
                </p>
                <StarIcon />
              </div>
            </div>
            <p className="lg:text-base md:text-sm text-xs font-normal leading-[160%]">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-[180px]">
        <div>
          <DotIcon />
        </div>
        <div className="flex lg:gap-[20px] md:gap-[15px] gap-[10px]">
          <Image
            className="lg:max-w-[60px] md:max-w-[40px] max-w-[25px] w-full"
            src={"/assets/svg/left-button.svg"}
            alt="left-button"
            width={60}
            height={60}
          />
          <Image
            className="lg:max-w-[60px] md:max-w-[40px] max-w-[25px] w-full"
            src={"/assets/svg/right-button.svg"}
            alt="right-button"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}

export default Trusted;

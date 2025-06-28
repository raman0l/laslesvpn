import Heading from "@/components/comman/Heading";
import Paragraph from "@/components/comman/Paragraph";
import {
  DotIcon,
  LeftbtnIcon,
  RightbtnIcon,
  StarIcon,
} from "@/components/helper/Icon";
import Image from "next/image";
import React from "react";

function Trusted() {
  return (
    <>
      <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
        <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px] xl:mt-[124px] lg:mt-[100px] ms:mt-[70px] mt-[45px]">
          <Heading
            title={"We Provide Many Features You Can Use"}
            className={"text-center max-w-[400px] mx-auto"}
          />
          <Paragraph
            paragraph={
              "These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
            }
            className={"max-w-[530px] mx-auto text-center"}
          />
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
              <Paragraph
                paragraph={
                  "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been noproblems. LaslesVPN always the best”."
                }
                className={""}
              />
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
              <Paragraph
                paragraph={
                  "“I like it because I like to travel far and still can connect with high speed.”."
                }
                className={""}
              />
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
              <Paragraph
                paragraph={
                  "“This is very unusual for my business that currently requires a virtual private network that has high security.”."
                }
                className={""}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-[180px]">
          <div>
            <DotIcon />
          </div>
          <div className="flex lg:gap-[20px] md:gap-[15px] gap-[10px]">
            <div className="group">
              <button className="flex items-center justify-center p-[15px] rounded-[50px] border-2 border-[#F53838] group-hover:bg-[#F53838] duration-500 ease-in-out">
                <LeftbtnIcon />
              </button>
            </div>
            <div className="group">
              <button className="flex items-center justify-center p-[15px] rounded-[50px] bg-[#F53838] border-2 border-[#F53838] group-hover:bg-white duration-500 ease-in-out">
                <RightbtnIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trusted;

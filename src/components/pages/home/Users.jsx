import Paragraph from "@/components/comman/Paragraph";
import Image from "next/image";
import React from "react";

function Users() {
  return (
    <>
      <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
        <div className="xl:p-[37px_90px] lg:p-[27px_70px] md:p-[20px_50px] p-[15px_30px] bg-[#FFFFFF] rounded-[10px] flex justify-between shadow-[0px_35px_89px_-43px_rgba(13,16,37,0.5)] gap-[10px] max-[420px]:flex-col max-[420px]:justify-center max-[420px]:items-center">
          <div className="flex xl:gap-[36px] lg:gap-[25px] md:gap-[15px] gap-[10px] items-center xl:py-[35px] lg:py-[25px] md:py-[17px] py-[10px]">
            <div>
              <Image
                className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px]"
                src={"assets/svg/users.svg"}
                width={55}
                height={55}
                alt="users"
              />
            </div>
            <div className="flex flex-col lg:gap-[5px] md:gap-[3px] gap-[1px]">
              <Paragraph
                className={
                  "!text-[#0B132A] !text-[16px] md:!text-[20px]  lg:!text-[25px] leading-[130%] !font-bold"
                }
                paragraph={" 90+"}
              />
              <Paragraph
                className={
                  "!text-[#4F5665] !text-xs md:!text-base  lg:!text-xl leading-[150%] !font-normal"
                }
                paragraph={"Users"}
              />
            </div>
          </div>
          <div className="flex xl:gap-[36px] lg:gap-[25px] md:gap-[15px] gap-[10px] items-center border-l-2 border-[#EEEFF2] xl:pl-[75px] lg:pl-[55px] md:pl-[35px] pl-[20px] max-[420px]:border-hidden max-[420px]:p-[0] max-[420px]:ml-[18px]">
            <div>
              <Image
                className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px]"
                src={"assets/svg/loctions.svg"}
                width={55}
                height={55}
                alt="loctions"
              />
            </div>
            <div className="flex flex-col lg:gap-[5px] md:gap-[3px] gap-[1px]">
              <Paragraph
                className={
                  "!text-[#0B132A] !text-[16px] md:!text-[20px]  lg:!text-[25px] leading-[130%] !font-bold"
                }
                paragraph={" 30+"}
              />
              <Paragraph
                className={
                  "!text-[#4F5665] !text-xs md:!text-base  lg:!text-xl leading-[150%] !font-normal"
                }
                paragraph={"Locations"}
              />
            </div>
          </div>
          <div className="flex xl:gap-[36px] lg:gap-[25px] md:gap-[15px] gap-[10px] items-center border-l-2 border-[#EEEFF2] xl:pl-[91px] lg:pl-[70px] md:pl-[50px] pl-[20px] max-[420px]:border-hidden max-[420px]:p-[0] max-[420px]:ml-[5px]">
            <div>
              <Image
                className="lg:max-w-[50px] md:max-w-[40px] max-w-[30px]"
                src={"assets/svg/servers.svg"}
                width={55}
                height={55}
                alt="servers"
              />
            </div>
            <div className="flex flex-col lg:gap-[5px] md:gap-[3px] gap-[1px]">
              <Paragraph
                className={
                  "!text-[#0B132A] !text-[16px] md:!text-[20px]  lg:!text-[25px] leading-[130%] !font-bold"
                }
                paragraph={"50+"}
              />
              <Paragraph
                className={
                  "!text-[#4F5665] !text-xs md:!text-base  lg:!text-xl leading-[150%] !font-normal"
                }
                paragraph={"Servers"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;

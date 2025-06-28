import Heading from "@/components/comman/Heading";
import Paragraph from "@/components/comman/Paragraph";
import { TickIcon } from "@/components/helper/Icon";
import Image from "next/image";
import React from "react";

function Provide() {
  return (
    <>
      <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
        <div className="flex gap-[20px] justify-between max-[600px]:flex-col min-[600px]:items-center xl:py-[83px_126px] lg:py-[70px_100px] md:py-[50px_70px] py-[40px]">
          <div>
            <Image
              className="lg:max-w-[508px] md:max-w-[400px] max-w-[300px] mx-auto w-full"
              src={"/assets/png/leptop-boy-1.png"}
              alt="leptop-boy-1"
              width={508}
              height={414}
            />
          </div>
          <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px] justify-end min-[600px]:mt-[20px] min-[800px]:mt-[30px] min-[1100px]:mt-[50px]">
            <div className="flex flex-col lg:gap-[31px] md:gap-[21px] gap-[15px]">
              <Heading
                title={"We Provide Many Features You Can Use"}
                className={"max-w-[383px] "}
              />
              <Paragraph
                paragraph={
                  "You can explore the features that we provide with fun and have their own functions each feature."
                }
                className={"min-[600px]:max-w-[427px]"}
              />
              <p className="lg:text-base md:text-sm text-xs text-[#4F5665] font-normal  leading-[187%] min-[600px]:max-w-[427px]"></p>
            </div>
            <ul className="flex flex-col lg:gap-[15px] md:gap-[11px] gap-[8px]">
              <li className="flex lg:gap-[10px] md:gap-[8px] gap-[6px]">
                <TickIcon />
                <Paragraph
                  paragraph={"Powerfull online protection."}
                  className={
                    "text-[12px] md:!text-[13px] lg:!text-[14px] text-[#4F5665] leading-[214%] font-normal"
                  }
                />
              </li>
              <li className="flex gap-[10px]">
                <TickIcon />
                <Paragraph
                  paragraph={"Internet without borders."}
                  className={
                    "text-[12px] md:!text-[13px] lg:!text-[14px] text-[#4F5665] leading-[214%] font-normal"
                  }
                />
              </li>{" "}
              <li className="flex gap-[10px]">
                <TickIcon />
                <Paragraph
                  paragraph={"Supercharged VPN"}
                  className={
                    "text-[12px] md:!text-[13px] lg:!text-[14px] text-[#4F5665] leading-[214%] font-normal"
                  }
                />
              </li>{" "}
              <li className="flex gap-[10px]">
                <TickIcon />
                <Paragraph
                  paragraph={" No specific time limits."}
                  className={
                    "text-[12px] md:!text-[13px] lg:!text-[14px] text-[#4F5665] leading-[214%] font-normal"
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Provide;

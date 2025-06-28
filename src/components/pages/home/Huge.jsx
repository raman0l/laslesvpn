import Heading from "@/components/comman/Heading";
import Paragraph from "@/components/comman/Paragraph";
import Image from "next/image";
import React from "react";

function Huge() {
  return (
    <>
      <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
        <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]">
          <Heading
            title={"Huge Global Network of Fast VPN"}
            className={"text-center max-w-[370px] mx-auto"}
          />
          <Paragraph
            paragraph={
              "See LaslesVPN everywhere to make it easier for you when you move locations."
            }
            className={"max-w-[555px] mx-auto text-center"}
          />
        </div>
        <div className="xl:py-[155px_109px] lg:py-[100px_80px] md:py-[60px] py-[40px_30px] lg:px-[15px] md:px-[10px] px-[7px]">
          <Image
            className="w-full"
            src={"/assets/svg/word-map.svg"}
            alt="word-map"
            width={1060}
            height={537}
          />
        </div>
        <div className="flex lg:gap-[40px] md:gap-[20px] gap-[10px] justify-between">
          <div>
            <Image
              className="xl:max-w-[190px] lg:max-w-[150px] md:max-w-[120px] max-w-[90px] w-full"
              src={"/assets/svg/reddit.svg"}
              alt="reddit"
              width={190}
              height={60}
            />
          </div>
          <div>
            <Image
              className="xl:max-w-[190px] lg:max-w-[150px] md:max-w-[120px] max-w-[90px] w-full"
              src={"/assets/svg/reddit.svg"}
              alt="reddit"
              width={190}
              height={60}
            />
          </div>
          <div>
            <Image
              className="xl:max-w-[190px] lg:max-w-[150px] md:max-w-[120px] max-w-[90px] w-full"
              src={"/assets/svg/amazon.svg"}
              alt="amazon"
              width={190}
              height={60}
            />
          </div>
          <div>
            <Image
              className="xl:max-w-[190px] lg:max-w-[150px] md:max-w-[120px] max-w-[90px] w-full"
              src={"/assets/svg/discord.svg"}
              alt="discord"
              width={190}
              height={60}
            />
          </div>
          <div>
            <Image
              className="xl:max-w-[190px] lg:max-w-[150px] md:max-w-[120px] max-w-[90px] w-full"
              src={"/assets/svg/spotify.svg"}
              alt="spotify"
              width={190}
              height={60}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Huge;

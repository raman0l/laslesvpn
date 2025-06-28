import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, TwtterIcon } from "../helper/Icon";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function Footer() {
  return (
    <>
      <div className=" bg-[#F8F8F8] pt-[100px]">
        <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
          <div className="bg-[#FFFFFF] rounded-[10px] xl:px-[70px] lg:px-[50px] md:px-[30px] px-[15px] xl:py-[50px_61px] lg:py-[30px_45px] md:py-[20px_30px] py-[20px] flex justify-between gap-[10px] items-center mt-[-200px] max-[500px]:flex-col shadow-[-5px_18px_40px_-50px_black]">
            <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]">
              <Heading
                title={"Subscribe Now for Get Special Features!"}
                className={
                  "max-w-[350px] max-[500px]:text-center max-[500px]:max-w-none"
                }
              />
              <Paragraph
                paragraph={"Let's subscribe with us and find the fun."}
                className={"max-[500px]:text-center"}
              />
            </div>
            <div>
              <button className="lg:text-base md:text-sm text-xs text-white font-bold  leading-[156%] rounded-[10px] xl:p-[17px_65px] lg:p-[14px_45px] md:p-[10px_30px] p-[8px_20px] border-2 border-[#f53838af] bg-[#F53838] hover:bg-white hover:text-[#F53838] shadow-[0px_18px_30px_-20px_#f53838af] duration-500 ease-in-out text-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="flex gap-[20px] justify-between max-[600px]:flex-col lg:py-[50px_80px] xl:py-[63px_80px] md:py-[40px_60px] py-[30px_40px]">
            <div className="flex flex-col lg:gap-[20px] md:gap-[17px] gap-[13px]">
              <div>
                <Link
                  href={"/"}
                  className="lg:max-w-[149px] md:max-w-[120px] max-w-[100px] w-full"
                >
                  <Image
                    src={"/assets/svg/laslesvpn.svg"}
                    alt="laslesvpn"
                    width={149}
                    height={36}
                  />
                </Link>
              </div>
              <div className="flex flex-col lg:gap-[30px] md:gap-[20px] gap-[15px]">
                <Paragraph
                  paragraph={""}
                  spantitle={"LaslesVPN"}
                  para={
                    " is a private virtual network that has unique features and has high security."
                  }
                  className={"min-[600px]:max-w-[330px]"}
                />
                <div className="flex lg:gap-[20px] md:gap-[15px] gap-[10px]">
                  <Link
                    href={"https://www.facebook.com/"}
                    className="hover:-translate-y-3 duration-600 ease-in-out"
                  >
                    <FacebookIcon />
                  </Link>
                  <Link
                    href={"https://x.com/?lang=en"}
                    className="hover:-translate-y-3 duration-600 ease-in-out"
                  >
                    <InstagramIcon />
                  </Link>{" "}
                  <Link
                    href={"https://www.instagram.com/accounts/login/?hl=en"}
                    className="hover:-translate-y-3 duration-600 ease-in-out"
                  >
                    <TwtterIcon />
                  </Link>
                </div>
                <p className="lg:text-base md:text-sm text-xs text-[#AFB5C0] font-normal  leading-[187%]">
                  ©2020Lasles<span className="font-medium">VPN</span>
                </p>
              </div>
            </div>
            <div className="flex xl:gap-[129px] lg:gap-[100px] md:gap-[80px] gap-[25px] justify-between max-[600px]:flex-wrap">
              <ul className="flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
                <li className="text-[#0B132A] lg:text-lg md:text-base text-sm font-semibold leading-[166%] lg:pb-[10px] md:pb-[7px] pb-[4px]">
                  Product
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Download </Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Pricing</Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Locations</Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Server</Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Countries</Link>
                </li>{" "}
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Blog</Link>
                </li>
              </ul>
              <ul className="flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
                <li className="text-[#0B132A] lg:text-lg md:text-base text-sm font-semibold leading-[166%] lg:pb-[10px] md:pb-[7px] pb-[4px]">
                  Engage
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>LaslesVPN ? </Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>FAQ</Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Tutorials</Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>About Us</Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Privacy Policy</Link>
                </li>{" "}
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Terms of Service</Link>
                </li>
              </ul>
              <ul className="flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
                <li className="text-[#0B132A] lg:text-lg md:text-base text-sm font-semibold leading-[166%] lg:pb-[10px] md:pb-[7px] pb-[4px] text-nowrap">
                  Earn Money
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Affiliate </Link>
                </li>
                <li className="text-[#4F5665] lg:text-lg md:text-base text-sm font-medium leading-[166%] hover:text-[#0B132A] hover:underline duration-500 ease-in-out">
                  <Link href={"/"}>Become Partner</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

import Image from "next/image";
import React from "react";

function Choose() {
  return (
    <div className="bg-[linear-gradient(#F4F4F5,#FFFFFF)] xl:py-[80px_150px] lg:py-[60px_100px] md:py-[40px_60px] py-[35px]">
      <div className="max-w-[1220px] xl:px-[40px] lg:px-[30px] md:px-[20px] px-[16px] mx-auto">
        <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]">
          <h1 className="xl:text-[35px] lg:text-[30px] md:text-[25px] text-[20px] font-medium leading-[142%] text-[#0B132A] text-center">
            Choose Your Plan
          </h1>
          <p className="lg:text-base md:text-sm text-xs text-[#4F5665] font-normal  leading-[187%] max-w-[555px] mx-auto text-center">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="flex xl:gap-[50px] lg:gap-[30px] md:gap-[20px] gap-[15px] md:justify-between  md:flex-nowrap flex-wrap justify-center lg:mt-[60px] md:mt-[40px] mt-[25px]">
          <div className="md:max-w-[330px] max-w-[250px] w-full border-2 bg-[#FFFFFF] border-[#DDDDDD] rounded-[10px] xl:py-[79px_50px] lg:py-[60px_40px] md:py-[40px_30px] py-[25px] flex flex-col justify-between lg:gap-[35px] md:gap-[25px] gap-[20px] group hover:border-[#F53838] duration-500 ease-in-out">
            <div className="flex flex-col lg:gap-[30px] md:gap-[20px] gap-[15px]">
              <div className="mx-auto">
                <Image
                  className="lg:max-w-[144px] md:max-w-[100px] max-w-[80px] mx-auto"
                  src={"/assets/svg/gift.svg"}
                  alt="gift"
                  width={144}
                  height={165}
                />
              </div>
              <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]">
                <p className="lg:text-lg md:text-base text-sm text-[#0B132A] font-medium leading-[166%] text-center">
                  Free Plan
                </p>
                <ul className="max-w-[300px] mx-auto flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Unlimited Bandwitch
                    </p>
                  </li>
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Encrypted Connection
                    </p>
                  </li>{" "}
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      No Traffic Logs
                    </p>
                  </li>{" "}
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Works on All Devices
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="lg:text-[25px] md:text-[20px] text-[18px] font-medium leading-[120%] text-center">
                Free
              </p>
              <div className="max-w-[200px] mx-auto">
                <button className="rounded-[50px] border-2 border-[#F53838] text-[#F53838] xl:p-[13px_63px] lg:p-[11px_45px] md:p-[8px_30px] p-[5px_20px] group-hover:bg-[#F53838] group-hover:text-white duration-500 ease-in-out font-bold shadow-lg group-hover:shadow-[rgba(245,56,56,0.35)]">
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="md:max-w-[330px] max-w-[250px] w-full border-2 bg-[#FFFFFF] border-[#DDDDDD] rounded-[10px] xl:py-[79px_50px] lg:py-[60px_40px] md:py-[40px_30px] py-[25px] flex flex-col justify-between lg:gap-[35px] md:gap-[25px] gap-[20px] group hover:border-[#F53838] duration-500 ease-in-out">
            <div className="flex flex-col lg:gap-[30px] md:gap-[20px] gap-[15px]">
              <div className="mx-auto">
                <Image
                  className="lg:max-w-[144px] md:max-w-[100px] max-w-[80px] mx-auto"
                  src={"/assets/svg/gift.svg"}
                  alt="gift"
                  width={144}
                  height={165}
                />
              </div>
              <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]">
                <p className="lg:text-lg md:text-base text-sm text-[#0B132A] font-medium leading-[166%] text-center">
                  Free Plan
                </p>
                <ul className="max-w-[300px] mx-auto flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Unlimited Bandwitch
                    </p>
                  </li>
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Encrypted Connection
                    </p>
                  </li>{" "}
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Yes Traffic Logs
                    </p>
                  </li>{" "}
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Works on All Devices
                    </p>
                  </li>
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Connect Anyware
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="lg:text-[25px] md:text-[20px] text-[18px] font-medium leading-[120%] text-center">
                $9 <span className="font-normal text-[#4F5665]">/ mo</span>
              </p>
              <div className="max-w-[200px] mx-auto">
                <button className="rounded-[50px] border-2 border-[#F53838] text-[#F53838] xl:p-[13px_63px] lg:p-[11px_45px] md:p-[8px_30px] p-[5px_20px] group-hover:bg-[#F53838] group-hover:text-white duration-500 ease-in-out font-bold shadow-lg group-hover:shadow-[rgba(245,56,56,0.35)]">
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="md:max-w-[330px] max-w-[250px] w-full border-2 bg-[#FFFFFF] border-[#DDDDDD] rounded-[10px] xl:py-[79px_50px] lg:py-[60px_40px] md:py-[40px_30px] py-[25px] flex flex-col justify-between xl:gap-[50px] lg:gap-[35px] md:gap-[25px] gap-[20px] group hover:border-[#F53838] duration-500 ease-in-out">
            <div className="flex flex-col lg:gap-[30px] md:gap-[20px] gap-[15px]">
              <div className="mx-auto">
                <Image
                  className="lg:max-w-[144px] md:max-w-[100px] max-w-[80px] mx-auto"
                  src={"/assets/svg/gift.svg"}
                  alt="gift"
                  width={144}
                  height={165}
                />
              </div>
              <div className="flex flex-col lg:gap-[20px] md:gap-[15px] gap-[10px]">
                <p className="lg:text-lg md:text-base text-sm text-[#0B132A] font-medium leading-[166%] text-center">
                  Free Plan
                </p>
                <ul className="max-w-[300px] mx-auto flex flex-col lg:gap-[10px] md:gap-[7px] gap-[5px]">
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Unlimited Bandwitch
                    </p>
                  </li>
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Encrypted Connection
                    </p>
                  </li>{" "}
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Yes Traffic Logs
                    </p>
                  </li>{" "}
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Works on All Devices
                    </p>
                  </li>
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Connect Anyware
                    </p>
                  </li>
                  <li className="flex lg:gap-[20px] md:gap-[15px] gap-[10px] items-center">
                    <Image
                      src={"/assets/svg/right-arrow-1.svg"}
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                    <p className="lg:text-sm text-xs text-[#4F5665] font-normal leading-[214%]">
                      Get New Features
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="lg:text-[25px] md:text-[20px] text-[18px] font-medium leading-[120%] text-center">
                $12 <span className="font-normal text-[#4F5665]">/ mo</span>
              </p>
              <div className="max-w-[200px] mx-auto">
                <button className="rounded-[50px] border-2 border-[#F53838] text-[#F53838]  xl:p-[13px_63px] lg:p-[11px_45px] md:p-[8px_30px] p-[5px_20px] group-hover:bg-[#F53838] group-hover:text-white duration-500 ease-in-out font-bold shadow-lg group-hover:shadow-[rgba(245,56,56,0.35)] ">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;

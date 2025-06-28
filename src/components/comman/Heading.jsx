import { headers } from "next/headers";
import React from "react";

function Heading({ title, className }) {
  return (
    <h2
      className={`text-[#0B132A] font-medium leading-[142%] text-[20px] md:text-[25px] lg:text-[30px] xl:text-[35px]   ${className}`}
    >
      {title}
    </h2>
  );
}

export default Heading;

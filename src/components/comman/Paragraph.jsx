import React from "react";

function Paragraph({ paragraph, className, spantitle, para }) {
  return (
    <p
      className={`text-[#4F5665] lg:text-base md:text-sm text-xs font-light leading-[187%] ${className}`}
    >
      {paragraph}
      <span className="font-semibold">{spantitle}</span>
      {para}
    </p>
  );
}
export default Paragraph;

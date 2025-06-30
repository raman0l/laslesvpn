import Navbar from "@/components/comman/Navbar";
import Users from "@/components/pages/home/Users";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="mt-[150px]">
        <Users />
      </div>
    </>
  );
}

export default page;

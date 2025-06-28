import Navbar from "@/components/comman/Navbar";

import Hero from "@/components/pages/home/Hero";
import Huge from "@/components/pages/home/Huge";
import Provide from "@/components/pages/home/Provide";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Provide />
      <Huge />
    </>
  );
}

export default page;

import Footer from "@/components/comman/Footer";
import Navbar from "@/components/comman/Navbar";
import Hero from "@/components/pages/home/Hero";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div className="mb-[120px]">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default page;

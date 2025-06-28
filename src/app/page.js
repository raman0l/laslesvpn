import Footer from "@/components/comman/Footer";
import Navbar from "@/components/comman/Navbar";
import Choose from "@/components/pages/home/Choose";
import Hero from "@/components/pages/home/Hero";
import Huge from "@/components/pages/home/Huge";
import Provide from "@/components/pages/home/Provide";
import Trusted from "@/components/pages/home/Trusted";
import Users from "@/components/pages/home/Users";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Users />
      <Provide />
      <Choose />
      <Huge />
      <Trusted />
      <Footer />
    </>
  );
}

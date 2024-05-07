import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-orange-300 ">
      <div className="h-8 bg-orange-300">

      </div>
      <Header />


      <Feed />

      <Footer />
      <div className="h-8 bg-orange-300">

      </div>
    </div>

  );
}

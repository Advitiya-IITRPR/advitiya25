import React from "react";
import Image from "next/image";
import logo from "../../../public/assests/images/logoMain.png";
import arrow from "../../../public/assests/images/aboutusLogo.png";
import Menu from '../menu/page'
import Link from "next/link";
export default function page() {
  
  return (
    // <div className="sticky top-0">
    <div>
      <section className="bg-[#12181E] flex justify-between items-center px-[4%] py-[1.4%]">
      <div className="w-[17%]">
  <div className="aspect-[895/127]">
    <Image
      src={logo}
      alt="../"
      className="object-contain w-full h-full"
    />
  </div>
</div>
         <div className="flex">
          <Link href="/signin"><button className="text-white py-[2%] px-8  text-lg rounded-full bg-gradient-to-b from-[#43F27F] to-[#0A772F] mr-5" >
            SIGN IN</button>
 </Link>
         
          <div>
             <Menu />
          </div>
        </div>
      </section>
    </div>
  );
}

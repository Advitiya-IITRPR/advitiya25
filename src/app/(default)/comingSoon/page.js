import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <section className="h-screen w-screen flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{backgroundImage: "url('/signin/bg1.png')"}}
      >
    
        <div className=" leading-[100px] text-[#43F27F] 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[40px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px] font-normal font-[Impact] leading-[231.75px]">
          COMING SOON
        </div>
        <Link
          href="/"
          className="text-white px-8 py-2 text-xl rounded-full bg-gradient-to-b from-[#43F27F] to-[#0A772F] mr-5"
        >
          Go to Home Page
        </Link>
      </section>
    </div>
  );
}

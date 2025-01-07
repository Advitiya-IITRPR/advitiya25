"use client";
import React, { useState, useEffect, useRef } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import DecorativeFrame from "@/components/signin/frame";
import { User, Mail, Phone, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandInstagramFilled, TbBrandTiktokFilled, TbBrandYoutubeFilled } from "react-icons/tb";
const App = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="relative">
      <div style={{ transform: `translateY(${scrollY * 0.5}px` }} className="h-[85vh] relative  w-full bg-[#10171D]">
        <div
          className="h-full w-full absolute shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/signin/bg1.png')" }}>
          <img src="/signin/bg1r.png" alt="background image" className="h-full pointer-events-none absolute bg-no-repeat right-0" />
          <img src="/signin/bg1l.png" alt="background image" className="h-full pointer-events-none absolute bg-no-repeat left-0" />
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div
              className="text-white  text-[1.5rem] max-w-[15rem] font-sans tracking-wider -mt-16 mb-8 bg-gradient-to-r from-green-500 to-transparent text-center rounded-full"
              style={{ padding: "10px 15px" }}
            >
              SIGN IN
            </div>
           {/* <div className="text-white text-8xl font-bold font-sans">SIGN IN</div> */}
          </div>
        </div>
      </div>
      <div style={{ transform: scrollY > 700 ? `translateY(${(scrollY - 700) * 0.4}px` : '' }} className="h-[100vh]  relative w-full bg-[#10171D]">
        <div
          className="h-full w-full absolute shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/signin/fbg2.png')" }}>





          <div className="flex h-full w-full">

            <div className="h-full w-1/2 flex flex-col items-center justify-center font-sans gap-4">
            {/*  <section className="w-3/4 pl-1 mx-auto flex justify-start text-lg text-[#3BE174]">
                FILL THE GOOGLE FORM FOR MORE INFO
              </section>*/}
              <section className="w-3/4 mx-auto flex justify-start text-6xl text-white font-bold">
                HACKATHONS
              </section>
              <section className="w-3/4 mx-auto flex justify-start text-lg text-white">
                Fill the form for more info 
              </section>
              <section className="w-3/4 mx-auto flex justify-start">
                <button
                  className="h-14 w-44 rounded-full text-lg font-bold bg-gradient-to-b from-[#43F27F] to-[#0A772F] text-white"
                >
                  CLICK TO OPEN
                </button>
              </section>
            </div>

            {/* Right Section */}
            <div className="h-full w-1/2 flex items-center justify-center relative">
              <img src="/signin/bgdots.png" alt="background image" className="z-10 pointer-events-none absolute bg-no-repeat bottom-1/5" />
              <DecorativeFrame />
            </div>
          </div>
        </div>
      </div>
      <div style={{ transform: scrollY > 900 ? `translateY(${(scrollY - 900) * 0.2}px` : '' }} className="h-[100vh] relative  w-full bg-[#10171D]">
        <div
          className="h-full w-full absolute shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/signin/bg3.png')" }}>






          <div className="flex h-full w-full">

            {/* Left Section */}
            <div className="h-full w-1/2 relative flex items-center justify-center">
              <DecorativeFrame />
              <img src="/signin/bgdots.png" alt="background image" className="z-10 pointer-events-none absolute bg-no-repeat bottom-1/5" />
            </div>
            {/* Right Section */}
            <div className="h-full w-1/2 flex flex-col items-center justify-center font-sans gap-4">
             {/* <section className="w-3/4 pr-1 mx-auto flex justify-end text-lg text-[#3BE174]">
                ACCOMODATION
              </section> */}
              <section className="w-3/4 mx-auto flex justify-end text-6xl text-white font-bold">
              ACCOMODATION
              </section>
              <section className="w-3/4 mx-auto px-12 flex justify-start text-lg text-white">
              Fill the form to book accomadations
              </section>
              <section className="w-3/4 mx-auto flex justify-end">
                <button
                  className="h-14 w-44 rounded-full text-lg font-bold bg-gradient-to-b from-[#43F27F] to-[#0A772F] text-white"
                >
                  CLICK TO OPEN
                </button>
              </section>
            </div>


          </div>
        </div>
        <img src="/signin/bg3b.png" alt="background image" className={`w-full z-10 pointer-events-none absolute bg-no-repeat bottom-[0]`} />
        <img src="/signin/bg2b.png" alt="background image" className={`w-full z-10 pointer-events-none absolute bg-no-repeat bottom-[calc(100vh-120px)]`} />
      </div>


      {/* <div className="-mt-8">
      <div className="w-full h-12 bg-gradient-to-b from-[#10171de9] to-[#10171d] backdrop-filter radial-blur-asf">
      </div>
      <div className="h-8 bg-blend-hard-light w-full bg-gradient-to-r from-[#10171dfe] via-[#10171d] to-[#10171dfe]"> 
      </div>
      <div className="w-full h-12 bg-gradient-to-t from-[#10171de9] to-[#10171D]">
      </div>
      </div>
       */}
      {/* <div className="-mt-8 h-32 w-full bg-[#10171D] backdrop-blur-[111px]"></div> */}

      {/* <section
        className="h-32 w-full -mt-6 z-10 shadow-2xl shadow-[#10171D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/signin/blurdiv.png')" }}
      >
      </section> */}
      {/*  */}





    </div>

  );
};

export default App;
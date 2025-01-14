'use client';
// pages/index.js
import React from "react";
import Image from "next/image";
import Frame1 from "./frame1";
import Frame2 from "./frame2";
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
import NavigationPointer from "./NavigationPointer"; // Import the navigation pointer
import styles from "./campusambassador.module.css";
import FAQ from "@/components/FAQ/FAQ";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import Link from "next/link";
import arrow from "@/../public/assests/images/aboutusLogo.png";

export default function FullScreenImageWithCenteredFrame() {
  const [s, setS] = useState(null);
  return (
    <div>
      {/* Navigation Pointer */}
      {/* <NavigationPointer /> */}

      <div id="section1" className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame1 />
        </div>

        <Image
          src="/campusambassador/style1/frame1.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div id="section2" className={`${styles["image-frame-container2"]} flex flex-col items-center justify-center text-white py-10 px-20 font-kodchasan`}>
        <h3 className="text-4xl leading-10 font-bold mb-4">REGISTER</h3>
        <Image src={arrow} alt="..." />
        <p className="my-9 text-xl text-center">
          Being our Campus Ambassador is just one step away. Register now to be a part of the ADVITIYA family and get a chance to represent your college at the national level.
        </p>
        <Link className="bg-green-500 hover:bg-green-700 px-8 py-3 rounded-full mt-4 text-2xl" href="https://forms.gle/aQGo73M3WVXzzNBQ9" target="_blank">
          Register Now
        </Link>
      </div>

      {/* <div
        id="section3"
        className={`${styles["image-frame-container"]} ${styles["margin-bottom"]} ${styles["black_background"]} `}
      >
        <div className={styles.frame}>
          <Frame2 />
        </div>

        <Image
          src="/campusambassador/style1/frame2.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      <div id="section4" className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame3 />
        </div>
      </div>

      {/* <div id="section5" className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame4 />
        </div>

        <Image
          src="/campusambassador/style1/frame4.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      
      <section className="min-h-screen flex flex-col items-center justify-start font-kodchasan relative p-8 md:p-20 overflow-visible text-gray-100">
        <div className="flex flex-col w-full h-full items-center justify-start">
            <h3 className="text-4xl leading-10 font-bold mb-4">PERKS</h3>
            <Image src={arrow} alt="..." />
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Item 1 */}
              <div className="bg-green-400 relative rounded-[2.5rem] border-white shadow-md p-2 md:p-4 flex-1">
                <div className="absolute w-[110%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 rounded-[3rem] -z-10"></div>
                <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
                  <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4 text-center">
                    <h3 className="text-xl leading-10 font-bold text-green-500">
                      Certificates of Appreciation 
                    </h3>
                    <p>
                      Recognizing your efforts and contributions.
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="bg-green-400 relative rounded-[2.5rem] border-white shadow-md p-2 md:p-4 flex-1">
                <div className="absolute w-[110%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 rounded-[3rem] -z-10"></div>
                <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
                  <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4 text-center">
                    <h3 className="text-xl leading-10 font-bold text-green-500">
                      Exclusive ADVITIYA Merchandise 
                    </h3>
                    <p>
                      Hoodies, T-shirts, and goodies to flaunt your association.   
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="bg-green-400 relative rounded-[2.5rem] border-white shadow-md p-2 md:p-4 flex-1">
                <div className="absolute w-[110%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 rounded-[3rem] -z-10"></div>
                <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
                  <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4 text-center">
                    <h3 className="text-xl leading-10 font-bold text-green-500">
                      Free Passes 
                    </h3>
                    <p>
                      Get complimentary access to workshops, sessions, and events. 
                    </p>
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="bg-green-400 relative rounded-[2.5rem] border-white shadow-md p-2 md:p-4 flex-1">
                <div className="absolute w-[110%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 rounded-[3rem] -z-10"></div>
                <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
                  <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4 text-center">
                    <h3 className="text-xl leading-10 font-bold text-green-500">
                      Exciting Rewards 
                    </h3>
                    <p>
                      Win prizes and incentives based on milestone achievements.
                    </p>
                  </div>
                </div>
              </div>
              {/* Items End */}
            </div>
        </div>
        <div className={styles.perksBG}></div>
      </section>

      {/* <div id="section6" className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame5 />
        </div>

        <Image
          src="/campusambassador/style1/frame5.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div> */}

      
      {/* <section className="min-h-[150vh] flex flex-col items-center font-kodchasan relative p-8 md:p-20 text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className=" w-80 relative h-20">
          <Image
            src={"/assests/events/titleUnderline.svg"}
            fill={true}
            alt="Decoration"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-[2]">
            <FAQ
              title={"What is the registration fee for ISC-MUN?"}
              description={
                "The registration fee is ₹600 per delegate, reducible to ₹450 for schools registering 5 or more delegates."
              }
            />
            <FAQ
              title={"What are the agenda topics for the MUN?"}
              description={`The two agenda topics are: 1. Achieving Sustainable Development Goals in the Post-COVID Era, 2. Ethical Use of Digital Technology and Artificial Intelligence, focusing on Data Privacy.`}
            />
            <FAQ
              title={"What is the dress code for the event?"}
              description={
                "Formal wear is mandatory. For AIPPM sessions, Hindi is allowed for oral statements, but English remains the official language."
              }
            />
            <FAQ
              title={"When is the last date for registration?"}
              description={
                "The last date for MUN registration is 31st January 2025."
              }
            />
            <FAQ
              title={"What is included in the registration fee?"}
              description={
                "The fee covers conference materials and meals for the duration of the event."
              }
            />
          </div>
          <div className="flex-1"></div>
        </div>
        <div className={styles.mountBG}></div>
      </section> */}
    </div>
  );
}

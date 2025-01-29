"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import EventSlide from "@/components/EventSlide/EventSlide";

export default function Page() {
  const [s, setS] = useState(null);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20 bg-[var(--background)]">
      <Image
        fill={true}
        src={"/assests/events/bg2.png"}
        className="absolute top-0 left-0 z-0"
        alt="BG"
      />

      <Swiper
        spaceBetween={50}
        breakpoints={{
          1100: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setS(swiper)}
        className="w-full flex-1"
      >
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Flight Fury"}
            desc={
              "A drone racing event where pilots guide their drones through a challenging arena."
            }
            tmin={3}
            tmax={4}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/competitions/flight-fury-advitiya25-indian-institute-of-technology-iit-ropar-1355781"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Full Throttle"}
            desc={"RC ATV Racing Event"}
            tmin={3}
            tmax={4}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/competitions/full-throttle-advitiya25-indian-institute-of-technology-iit-ropar-1355796"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Investors arena"}
            desc={
              "Fantastic opportunity to pitch your innovative ideas to a panel of esteemed investors and industry experts."
            }
            tmin={3}
            tmax={4}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/competitions/investors-arena-where-innovation-meets-excellence-advitiya25-indian-institute-of-technology-iit-ropar-1368832"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Cyber Forge"}
            desc={
              "An online event in which a PS related to CAD and CAE is released on online platforms like unstop."
            }
            tmin={1}
            tmax={2}
            dmin={""}
            dmax={""}
            regURL={
              "https://unstop.com/competitions/cyberforge-advitiya25-iit-ropar-1355799"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Code Hunt"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={2}
            tmax={3}
            dmin={150}
            dmax={""}
            regURL={
              "https://unstop.com/competitions/codehunt-advitiya25-indian-institute-of-technology-iit-ropar-1357827"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Algo Unlock"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={1}
            tmax={1}
            dmin={90}
            dmax={210}
            regURL={
              "https://unstop.com/competitions/algo-unlock-advitiya25-indian-institute-of-technology-iit-ropar-1357820"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Clash Royale"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={1}
            tmax={1}
            dmin={""}
            dmax={""}
            regURL={
              "https://unstop.com/competitions/clash-royale-tournament-advitiya25-indian-institute-of-technology-iit-ropar-1357837"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"BGMI Tournament"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={4}
            tmax={4}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/competitions/bgmi-tournament-advitiya25-indian-institute-of-technology-iit-ropar-1357525"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Traders Arena"}
            desc={"Trade Stocks, the techie way"}
            tmin={2}
            tmax={4}
            dmin={120}
            dmax={150}
            regURL={
              "https://unstop.com/competitions/traders-arena-advitiya25-indian-institute-of-technology-iit-ropar-1355801"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Cover Page"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={1}
            tmax={2}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/events/cover-page-advitiya25-indian-institute-of-technology-iit-ropar-1355788"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Capture The Flag"}
            desc={"Solve Cybersecurity Challenges to advance."}
            tmin={1}
            tmax={3}
            dmin={180}
            dmax={210}
            regURL={
              "https://unstop.com/hackathons/capture-the-flag-ctf-advitiya25-indian-institute-of-technology-ropar-1355814"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Game Jam"}
            desc={"Build Games and Win"}
            tmin={1}
            tmax={4}
            dmin={180}
            dmax={210}
            regURL={
              "https://unstop.com/hackathons/gamejam-advitiya25-indian-institute-of-technology-iit-ropar-1355786"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Beyond Zenith"}
            desc={"Rocket Launching event"}
            tmin={4}
            tmax={6}
            dmin={120}
            dmax={180}
            regURL={
              "https://unstop.com/competitions/beyond-zenith-class-e-rocket-launching-competition-advitiya25-indian-institute-of-technology-iit-ropar-1360248"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Catalyzing Concepts"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={1}
            tmax={3}
            dmin={240}
            dmax={300}
            regURL={
              "https://unstop.com/competitions/catalyzing-concepts-advitiya25-indian-institute-of-technology-iit-ropar-1355784"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Blueprint Battle"}
            desc={"Map Making using Civil Engineering Principles"}
            tmin={4}
            tmax={5}
            dmin={180}
            dmax={210}
            regURL={
              "https://unstop.com/competitions/blueprint-battle-advitiya25-indian-institute-of-technology-iit-ropar-1355776"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"The Bridge Off"}
            desc={"Make bridges using Ice Cream Sticks"}
            tmin={2}
            tmax={3}
            dmin={180}
            dmax={210}
            regURL={
              "https://unstop.com/competitions/the-bridge-off-advitiya25-indian-institute-of-technology-ropar-1357538"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Circuit Chase"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={1}
            tmax={2}
            dmin={200}
            dmax={250}
            regURL={
              "https://unstop.com/events/circuit-chase-advitiya25-indian-institute-of-technology-iit-ropar-1355789"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Laser Shot"}
            desc={"make path for the Laser."}
            tmin={2}
            tmax={3}
            dmin={240}
            dmax={300}
            regURL={
              "https://unstop.com/competitions/laser-shot-20-advitiya25-indian-institute-of-technology-iit-ropar-1355782"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Maths Arena"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={2}
            tmax={3}
            dmin={200}
            dmax={300}
            regURL={
              "https://unstop.com/competitions/maths-arena-advitiya25-indian-institute-of-technology-iit-ropar-1355787"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"AI Fusion"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={3}
            tmax={4}
            dmin={180}
            dmax={200}
            regURL={
              "https://unstop.com/competitions/ai-fusion-advitiya25-indian-institute-of-technology-iit-ropar-1355755"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"CoasterX"}
            desc={"Marble Roller Coaster Tracks"}
            tmin={3}
            tmax={4}
            dmin={180}
            dmax={200}
            regURL={
              "https://unstop.com/competitions/coasterx-advitiya25-indian-institute-of-technology-iit-ropar-1355783"
            }
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"Case Study"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            tmin={2}
            tmax={3}
            dmin={180}
            dmax={360}
            regURL={
              "https://unstop.com/events/circuit-chase-advitiya25-indian-institute-of-technology-iit-ropar-1355789"
            }
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"RoboWar"}
            desc={"Robot Battle"}
            tmin={3}
            tmax={5}
            dmin={180}
            dmax={360}
            regURL={
              "https://unstop.com/competitions/robowars-advitiya25-indian-institute-of-technology-ropar-1355785"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"CODCOM"}
            desc={
              "a coding adventure that blends brainpower and teamwork in a contest style inspired by ICPC"
            }
            tmin={2}
            tmax={3}
            dmin={120}
            dmax={240}
            regURL={
              "https://unstop.com/competitions/cod-com-advitiya25-indian-institute-of-technology-ropar-1357819"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/event2.png"}
            title={"MATERIALIZE "}
            desc={"Exciting Quiz on Metallurgical Documentaries"}
            tmin={1}
            tmax={1}
            dmin={120}
            dmax={150}
            regURL={
              "https://unstop.com/quiz/materialize-advitiya25-indian-institute-of-technology-iit-ropar-1355780"
            }
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center gap-12 justify-self-end z-10">
        <button
          className="rounded-l-full bg-gradient-to-r from-green-500 to-green-700 p-4 pr-2 cursor-pointer hover:bg-green-700"
          onClick={(e) => s.slidePrev()}
        >
          &lt;
        </button>
        <button
          className="rounded-r-full bg-gradient-to-l from-green-500 to-green-700 p-4 pl-2 cursor-pointer hover:bg-green-700"
          onClick={(e) => s.slideNext()}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

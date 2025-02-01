"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import EventSlide from "@/components/EventSlide/EventSlide";

export default function Page() {
  const [s, setS] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState("All Competitions");
  const teams = [
    "All Competitions",
    "Aeris",
    "Voltaris",
    "Terrranova",
    "Infernix",
  ];

  // console.log(selectedTeam);
  // console.log(teams);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-6 bg-[var(--background)]">
      <Image
        fill={true}
        src={"/assests/events/bg2.png"}
        className="absolute top-0 left-0 z-0"
        alt="BG"
      />

      <div className="block px-4 mb-4 relative">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full p-4 bg-[#141c23] text-white border border-[#40ec7b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40ec7b] font-[Kodchasan]"
        >
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
        {/* <div className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none">
          ▼
        </div> */}
      </div>

      <Swiper
        spaceBetween={50}
        breakpoints={{
          1100: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setS(swiper)}
        className="w-full flex-1"
      >
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/flight-fury.png"}
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
            img={"/assests/events/full-throttle.png"}
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
            img={"/assests/events/infernix/Cyber forge.png"}
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
            img={"/assests/events/voltaris/code hunt.png"}
            title={"Code Hunt"}
            desc={
              "Get ready for an awesome adventure with our coding club! The challenge? Our treasure's been swiped by the tricky Deadbug, and we need your help to get it back in the CODEHUNT."
            }
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
            img={"/assests/events/voltaris/Algo un;lock.png"}
            title={"Algo Unlock"}
            desc={
              "Dive into the coding challenge at 'AlgoUnlock: Code for a Cure' in advitiya! Your mission: crack the alien-coded passcode. Be the hero in this digital quest, mastering the language of input and output. Join us for a thrilling race against the clock, where a simple code changes the course of destiny. Ready to unlock the cure? Let's code together!"
            }
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
            img={"/assests/events/infernix/Clash Royale .png"}
            title={"Clash Royale"}
            desc={
              "The tournament will consist of three stages: group stage, qualifiers, and finals. In the group stage, matches will be knockouts (one match win or defeat). The qualifiers will be conducted in best of three (bo3) format, and the finals will be conducted in best of five (bo5) format."
            }
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
            img={"/assests/events/infernix/BGMI.png"}
            title={"BGMI Tournament"}
            desc={
              "A team should consist of exactly four members. Students from different educational institutions can form a team. More than one team can participate from the same institution."
            }
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
            img={"/assests/events/infernix/Trader's Arena .png"}
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
            img={"/assests/events/terranova/cover page (1).png"}
            title={"Cover Page"}
            desc={
              "Participants must design a captivating event poster by combining two randomly chosen elements – one from the Genre Wheel and the other from the Age Group Wheel."
            }
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
            img={"/assests/events/voltaris/capture the flag.png"}
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
            img={"/assests/events/voltaris/game jam.png"}
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
            img={"/assests/events/terranova/BEYOND ZENITH.png"}
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
            img={"/assests/events/terranova/catelizing concepts.png"}
            title={"Catalyzing Concepts"}
            desc={
              "Unveiling the Infinite Potential at the Molecular Scale. This event is designed to inspire innovation and creative thinking among participants. The specific topic of the event will be unveiled at the time of the event, adding an element of anticipation and excitement. Embrace the challenge, adaptability, and creative thinking that this thrilling and intellectually stimulating experience is set to offer."
            }
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
            img={"/assests/events/terranova/blue print battle.png"}
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
            img={"/assests/events/terranova/the bridge off.png"}
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
            img={"/assests/events/terranova/circcuit chase.png"}
            title={"Circuit Chase"}
            desc={
              "The event will consist of three rounds. Round 1 and Round 2 will be a 'Treasure Hunt' where teams solve questions based on 12th-grade and JEE syllabus concepts. Round 3 will test practical knowledge as participants build circuits according to given specifications."
            }
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
            img={"/assests/events/terranova/Laser Shot 2.0.png"}
            title={"Laser Shot"}
            desc={"Make path for the Laser."}
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
            img={"/assests/events/voltaris/Maths Arena.png"}
            title={"Maths Arena"}
            desc={
              "Compete in a thrilling 3-round challenge: Round 1: Solve puzzles amidst loud music, testing teamwork under pressure. Round 2: Navigate rooms of increasing difficulty, solving problems to earn points and flags. Round 3: Place strategic bets on answers, risking points to secure victory."
            }
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
            img={"/assests/events/voltaris/ai fusion.png"}
            title={"AI Fusion"}
            desc={
              "To test the participant’s knowledge about existing AI tools, their usage, and efficiency."
            }
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
            img={"/assests/events/terranova/Cooasterx.png"}
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
            img={"/assests/events/aeris/ROBOWAR.png"}
            title={"RoboWar"}
            desc={
              "Ultimate test of engineering excellence, teamwork, strategy, and creativity— ROBO-WARS"
            }
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
            img={"/assests/events/voltaris/Codcom.png"}
            title={"CODCOM"}
            desc={"Contest style inspired by ICPC"}
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
            img={"/assests/events/aeris/ROBOSOCCER.png"}
            title={"RoboSoccer "}
            desc={" A robotics competition where  robots utilize  sensors and control systems to play soccer."}
            tmin={2}
            tmax={4}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/competitions/robosoccer-advitiya25-indian-institute-of-technology-ropar-1357338"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/infernix/Cadvergence .png"}
            title={"Cadvergence "}
            desc={"Creativity and CAD"}
            tmin={1}
            tmax={2}
            dmin={120}
            dmax={180}
            regURL={
              "https://unstop.com/competitions/cadvergence-advitiya25-iit-ropar-1357789"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/infernix/Pitch or Ditch.png"}
            title={"Pitch or Ditch"}
            desc={"Exciting Quiz on Metallurgical Documentaries"}
            tmin={4}
            tmax={5}
            dmin={180}
            dmax={240}
            regURL={
              "https://unstop.com/quiz/materialize-advitiya25-indian-institute-of-technology-iit-ropar-1355780"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/terranova/astro quest.png"}
            title={"Astroquest"}
            desc={"Quiz based on Outer Space"}
            tmin={2}
            tmax={4}
            dmin={90}
            dmax={150}
            regURL={
              "https://unstop.com/quiz/astroquest-indian-institute-of-technology-iit-ropar-1362748"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/terranova/color pallete.png"}
            title={"Colour Pallete"}
            desc={"Designing and so much more"}
            tmin={1}
            tmax={1}
            dmin={120}
            dmax={150}
            regURL={
              "https://unstop.com/events/color-palette-advitiya25-indian-institute-of-technology-iit-ropar-1355827"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/voltaris/cc ratedd.png"}
            title={"CC Rated"}
            desc={"Coding Contest"}
            tmin={1}
            tmax={1}
            dmin={120}
            dmax={150}
            regURL={
              "https://unstop.com/quiz/materialize-advitiya25-indian-institute-of-technology-iit-ropar-1355780"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/voltaris/predictathon.png"}
            title={"Predictathon"}
            desc={"ML Hackaton"}
            tmin={1}
            tmax={4}
            dmin={120}
            dmax={150}
            regURL={
              "https://unstop.com/hackathons/predictathon-ml-challenge-sponsored-by-coding-blocks-advitiya25-indian-institute-of-technology-ropar-1360255"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <EventSlide
            img={"/assests/events/terranova/Materialize.png"}
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

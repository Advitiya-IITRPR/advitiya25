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
    "Terranova",
    "Infernix",
  ];

  const competitions = [
    {
      img: "/assests/events/flight-fury.png",
      title: "Flight Fury",
      desc: "A drone racing event where pilots guide their drones through a challenging arena.",
      tmin: 3,
      tmax: 4,
      dmin: 180,
      dmax: 240,
      regURL:
        "https://unstop.com/competitions/flight-fury-advitiya25-indian-institute-of-technology-iit-ropar-1355781",
      team: "Aeris",
    },
    {
      img: "/assests/events/full-throttle.png",
      title: "Full Throttle",
      desc: "RC ATV Racing Event",
      tmin: 3,
      tmax: 4,
      dmin: 180,
      dmax: 240,
      regURL:
        "https://unstop.com/competitions/full-throttle-advitiya25-indian-institute-of-technology-iit-ropar-1355796",
      team: "Aeris",
    },
    {
      img: "/assests/events/infernix/Cyber forge.png",
      title: "Cyber Forge",
      desc: "An online event in which a PS related to CAD and CAE is released on online platforms like unstop.",
      tmin: 1,
      tmax: 2,
      dmin: "",
      dmax: "",
      regURL:
        "https://unstop.com/competitions/cyberforge-advitiya25-iit-ropar-1355799",
      team: "Infernix",
    },
    {
      img: "/assests/events/voltaris/code hunt.png",
      title: "Code Hunt",
      desc: "The challenge? Our treasure's been swiped by the tricky Deadbug, and we need your help to get it back in the CODEHUNT.",
      tmin: 2,
      tmax: 3,
      dmin: 150,
      dmax: "",
      regURL:
        "https://unstop.com/competitions/codehunt-advitiya25-indian-institute-of-technology-iit-ropar-1357827",
      team: "Voltaris",
    },
    {
      img: "/assests/events/voltaris/Algo un;lock.png",
      title: "Algo Unlock",
      desc: "Dive into the coding challenge at 'AlgoUnlock: Code for a Cure' in Advitiya! Your mission: crack the alien-coded passcode.",
      tmin: 1,
      tmax: 1,
      dmin: 90,
      dmax: 210,
      regURL:
        "https://unstop.com/competitions/algo-unlock-advitiya25-indian-institute-of-technology-iit-ropar-1357820",
      team: "Voltaris",
    },
    {
      img: "/assests/events/infernix/Clash Royale .png",
      title: "Clash Royale",
      desc: "Group stage, qualifiers, and finals: knockout matches leading to best-of-three and best-of-five final rounds.",
      tmin: 1,
      tmax: 1,
      dmin: "",
      dmax: "",
      regURL:
        "https://unstop.com/competitions/clash-royale-tournament-advitiya25-indian-institute-of-technology-iit-ropar-1357837",
      team: "Infernix",
    },
    {
      img: "/assests/events/infernix/BGMI.png",
      title: "BGMI Tournament",
      desc: "A team should consist of exactly four members. Students from different educational institutions can form a team.",
      tmin: 4,
      tmax: 4,
      dmin: 180,
      dmax: 240,
      regURL:
        "https://unstop.com/competitions/bgmi-tournament-advitiya25-indian-institute-of-technology-iit-ropar-1357525",
      team: "Infernix",
    },
    {
      img: "/assests/events/terranova/cover page (1).png",
      title: "Cover Page",
      desc: "Participants must design a captivating event poster by combining two randomly chosen elements.",
      tmin: 1,
      tmax: 2,
      dmin: 180,
      dmax: 240,
      regURL:
        "https://unstop.com/events/cover-page-advitiya25-indian-institute-of-technology-iit-ropar-1355788",
      team: "Terranova",
    },
    {
      img: "/assests/events/terranova/BEYOND ZENITH.png",
      title: "Beyond Zenith",
      desc: "Rocket Launching event.",
      tmin: 4,
      tmax: 6,
      dmin: 120,
      dmax: 180,
      regURL:
        "https://unstop.com/competitions/beyond-zenith-class-e-rocket-launching-competition-advitiya25-indian-institute-of-technology-iit-ropar-1360248",
      team: "Terranova",
    },
    {
      img: "/assests/events/terranova/circcuit chase.png",
      title: "Circuit Chase",
      desc: "Solve questions based on JEE syllabus concepts and build circuits according to given specifications.",
      tmin: 1,
      tmax: 2,
      dmin: 200,
      dmax: 250,
      regURL:
        "https://unstop.com/events/circuit-chase-advitiya25-indian-institute-of-technology-iit-ropar-1355789",
      team: "Terranova",
    },
    {
      img: "/assests/events/aeris/ROBOWAR.png",
      title: "RoboWar",
      desc: "Ultimate test of engineering excellence, teamwork, strategy, and creativity— ROBO-WARS.",
      tmin: 3,
      tmax: 5,
      dmin: 180,
      dmax: 360,
      regURL:
        "https://unstop.com/competitions/robowars-advitiya25-indian-institute-of-technology-ropar-1355785",
      team: "Aeris",
    },
    {
      img: "/assests/events/aeris/ROBOSOCCER.png",
      title: "RoboSoccer",
      desc: "A robotics competition where robots utilize sensors and control systems to play soccer.",
      tmin: 2,
      tmax: 4,
      dmin: 180,
      dmax: 240,
      regURL:
        "https://unstop.com/competitions/robosoccer-advitiya25-indian-institute-of-technology-ropar-1357338",
      team: "Aeris",
    },
    {
      img: "/assests/events/terranova/astro quest.png",
      title: "Astroquest",
      desc: "Quiz based on Outer Space.",
      tmin: 2,
      tmax: 4,
      dmin: 90,
      dmax: 150,
      regURL:
        "https://unstop.com/quiz/astroquest-indian-institute-of-technology-iit-ropar-1362748",
      team: "Terranova",
    },
    {
      img: "/assests/events/voltaris/cc ratedd.png",
      title: "CC Rated",
      desc: "Coding Contest.",
      tmin: 1,
      tmax: 1,
      dmin: 120,
      dmax: 150,
      regURL:
        "https://unstop.com/quiz/materialize-advitiya25-indian-institute-of-technology-iit-ropar-1355780",
      team: "Voltaris",
    },
    {
      img: "/assests/events/terranova/Materialize.png",
      title: "Materialize",
      desc: "Exciting Quiz on Metallurgical Documentaries.",
      tmin: 1,
      tmax: 1,
      dmin: 120,
      dmax: 150,
      regURL:
        "https://unstop.com/quiz/materialize-advitiya25-indian-institute-of-technology-iit-ropar-1355780",
      team: "Terranova",
    },
    {
      img: "/assests/events/investors-arena.jpg",
      title: "Investors Arena",
      desc: "Pitch your innovative ideas to a panel of esteemed investors and industry experts.",
      tmin: 3,
      tmax: 4,
      dmin: 180,
      dmax: 240,
      regURL:
        "https://unstop.com/competitions/investors-arena-where-innovation-meets-excellence-advitiya25-indian-institute-of-technology-iit-ropar-1368832",
      team: "Aeris",
    },
  ];

  const filteredCompetitions =
    selectedTeam === "All Competitions"
      ? competitions
      : competitions.filter((comp) => comp.team === selectedTeam);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-6 bg-[var(--background)]">
      <Image
        fill={true}
        src={"/assests/events/bg2.png"}
        className="absolute top-0 left-0 z-0"
        alt="BG"
      />

      {/* This is to compile all classes skipped by postcss */}
      <div className="hidden bg-green-500 via-green-200 via-green-500 text-green-500 from-green-500 bg-blue-500 via-blue-200 via-blue-500 text-blue-500 from-blue-500 bg-yellow-500 via-yellow-200 via-yellow-500 text-yellow-500 from-yellow-500 bg-red-500 via-red-200 via-red-500 text-red-500 from-red-500"></div>
      {/* Dropdown */}
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
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={50}
        breakpoints={{
          1100: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
        onSwiper={(swiper) => setS(swiper)}
        className="w-full flex-1"
      >
        {filteredCompetitions.map((competition, index) => (
          <SwiperSlide key={index}>
            <EventSlide {...competition} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-12 justify-self-end z-10">
        <button
          className="rounded-l-full bg-gradient-to-r from-green-500 to-green-700 p-4 pr-2 cursor-pointer hover:bg-green-700"
          onClick={() => s?.slidePrev()}
        >
          &lt;
        </button>
        <button
          className="rounded-r-full bg-gradient-to-l from-green-500 to-green-700 p-4 pl-2 cursor-pointer hover:bg-green-700"
          onClick={() => s?.slideNext()}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

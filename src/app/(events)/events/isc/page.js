"use client";
import Image from "next/image";
import Link from "next/link";
import { Kodchasan } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import ContactUs from "@/components/contactus/page";

import "swiper/css";
import "swiper/css/navigation";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: "700",
});

const kodchasanLight = Kodchasan({
  subsets: ["latin"],
  weight: "400",
});

function FAQ({ title, description }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq group">
      <div className={`title text-xl ${open ? "text-green-500" : ""}`}>
        {title}
      </div>
      <div className={`description mt-2 ${open ? "flex" : "hidden"}`}>
        {description}
      </div>
      <button
        onClick={(e) => setOpen(!open)}
        className={open ? "rotate-180" : ""}
      >
        ^
      </button>
    </div>
  );
}

export default function Page() {
  const [s, setS] = useState(null);
  return (
    <div
      className={`${kodchasan.className} ${kodchasanLight.className} relative`}
    >
      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20">
        <div className="cloudBG"></div>
        <span className="text-xl text-green-500">ABOUT US</span>
        <h2 className="text-4xl md:text-5xl font-bold">ADVITIYA &apos;24</h2>
        <div className="w-72 relative h-20">
          <Image
            src={"/assests/events/titleUnderline.svg"}
            fill={true}
            alt="Decoration"
          />
        </div>
        <p className="text-lg md:text-xl text-center leading-10 font-normal">
          Advitiya 2025, IIT Ropar&apos;s annual tech fest, themed &quot;The
          Crucible of Tomorrow,&quot; is set to be a landmark event showcasing
          the best of technological innovation and intellectual prowess. The
          fest will feature a wide range of competitions, including coding
          marathons, AI challenges, and cybersecurity battles; robotics
          showcases and aerospace contests; creative design and mathematical
          problem-solving events; as well as gaming and financial strategy
          tournaments. Complementing these high-energy contests are captivating
          talks and panel discussions by renowned technologists, industry
          leaders, and entrepreneurs, offering fresh insights into cutting-edge
          advancements and the future of technology. Advitiya 2025 is a stage
          where talent, ideas, and collaboration converge to shape a brighter
          tomorrow.
        </p>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20">
        <h2 className="text-4xl md:text-5xl font-bold">CONDUCTION</h2>
        <div className="w-72 relative h-20">
          <Image
            src={"/assests/events/titleUnderline.svg"}
            fill={true}
            alt="Decoration"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[2]">
            <h3 className="text-3xl leading-10 font-bold">
              PHASE-1: Registration and Participation{" "}
            </h3>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              REGISTRATION THROUGH SCHOOL
            </h4>
            <p className="text-md font-normal">
              Schools can register their students collectively, ensuring
              streamlined participation. A concession is offered for schools
              registering 5 or more delegates, reducing the registration fee to
              ₹450 per delegate.
            </p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              DIRECT REGISTRATION OF PARTICIPANTS
            </h4>
            <p className="text-md font-normal">
              Individual students can register directly using the official
              Google Form link. The registration fee is ₹600 per delegate, which
              includes conference materials and meals.
            </p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              PARTICIPATION in MUN
            </h4>
            <p className="text-md font-normal">
              Delegates will represent various countries or political figures in
              committees such as the All India Political Parties Meet (AIPPM).
              Participants will debate on pressing global issues, such as
              Sustainable Development Goals in the Post-COVID Era and the
              Ethical Use of Digital Technology and AI.
            </p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              SCIENCE EXHIBITION
            </h4>
            <p className="text-md font-normal">
              Themed “The Four Pillars of Technora”, the exhibition invites
              participants to showcase their innovative projects under four
              categories: #Voltaris: Masters of Code and Machine, #Aeris:
              Guardians of Engineering and Flight, #Terranova: Architects of
              Design and Innovation, #Infernix: Strategists of Gaming and
              Finance.
            </p>
            <p className="text-md font-normal mt-6">
              The Intra-School Olympiad tests aptitude, general knowledge, and
              subject-specific skills. The top 3–5 students from each category
              will qualify for the Inter-School Olympiad, a quiz competition
              featuring questions on current affairs, technology, and teamwork.
            </p>
            <p className="text-md font-normal">
              Categories: Junior Olympiad (Classes 6–8), Senior
              Olympiad (Classes 9–12).
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="mascotX"></div>
          </div>
        </div>
      </section>

      <div className="flex relative h-10 w-full justify-start items-start">
        <Image
          src={"/assests/events/sectionborder.png"}
          fill={true}
          alt="Decoration"
        />
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20 overflow-visible">
        <div className="flex flex-col md:flex-row mb-28 md:mb-96">
          <div className="flex-[2]"></div>
          <div className="flex-[3]">
            <h3 className="text-3xl leading-10 font-bold mb-4">
              PHASE-2: Lab Visits and Exhibitions
            </h3>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              LAB VISITS
            </h4>
            <p className="text-md font-normal">
              Participants will explore cutting-edge laboratories at IIT Ropar,
              gaining insights into advanced research and innovations. These
              visits provide a hands-on experience of the latest technological
              developments in engineering, robotics, and AI.
            </p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              ILLUMINATED HERITAGE GALLERY
            </h4>
            <p className="text-md font-normal">
              A captivating display celebrating India&apos;s rich scientific and
              cultural heritage. This gallery highlights groundbreaking
              inventions and innovations that have shaped the modern world,
              creating a perfect blend of history and science.
            </p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">
              ADVITIYA&apos;25 EXHIBITIONS
            </h4>
          </div>
        </div>
        <div className="moonBG"></div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20 overflow-visible">
        <div className="flex flex-col lg:flex-row w-full h-full md:items-center">
          <div className="flex-[2] flex flex-col justify-between h-full self-start lg:self-auto">
            <h3 className="text-4xl leading-10 font-bold mb-4">REGISTRATION</h3>
            {/* <div className="flex items-center justify-start gap-12 mb-9 md:mb-0">
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
            </div> */}

            {/* uncomment this if there is individual registration */}
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => setS(swiper)}
            className="w-full flex-[3]"
          >
            <SwiperSlide>
              <h4 className="text-xl leading-10 font-bold text-green-500 mt-4">
                THROUGH SCHOOL
              </h4>
              <ul className="regBullets">
                <li>
                  Schools will provide us the details of the students and the
                  competitions in which the students will be participating.
                </li>
                <li>
                  Registration Fee: ₹600 per delegate (₹450 per delegate for
                  schools with 5+ participants).
                </li>
                <li>
                  Schools are requested to collect the registration fee from the
                  students and register them through the google form.
                </li>
              </ul>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSdol1NKqw9Q2GljXKKGCMNxMRB9_q865SN5W3izWo-VGMZsLA/viewform"
                className="underline"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Prevents security vulnerabilities
              >
                Link
              </Link>

              <div className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-transparent w-min text-nowrap mt-2">
                Deadline: 31st January 2025
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className="text-xl leading-10 font-bold text-green-500 mt-4">
                INDIVIDUALLY
              </h4>
              <ul className="regBullets">
                <li>
                  Students can register in Groups of 3-5 for ISC from the
                  registration link given below.
                </li>
                <li>
                  Entry Pass will be provided on- spot at the registration desk
                  after successful verification. Please carry your entry pass
                  and one ID along with you throughout the fest activities.
                </li>
                <li>A total Fee of Rs.150 will be charged per student</li>
              </ul>
              <Link href={"#"} className="underline">
                Link
              </Link>
              <div className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-transparent w-min text-nowrap mt-2">
                Deadline: 3rd Feb &apos;24
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="regBG"></div>
      </section>

      <section className="min-h-[170vh] flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20 overflow-visible">
        <div className="px-12 py-6 relative w-[320px] h-[90px] md:w-[425px] md:h-[125px] flex text-center items-center justify-center">
          <div className="plankBG"></div>
          <h2 className="text-3xl md:text-5xl">OUR PRIZES</h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-12 w-full justify-evenly items-center gap-y-10">
          <div className="bg-green-400 relative w-72 md:w-96 rounded-[2.5rem] border-white shadow-md p-2 md:p-4">
            <div className="absolute w-[110%] md:w-[120%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 -z-[1] rounded-[3rem]"></div>
            <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
              <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4">
                <h3 className="text-xl leading-10 font-bold text-green-500 mt-4 text-center">
                  Inter School Competiton
                </h3>
                <h3 className="text-xl leading-10 font-bold text-green-500 mt-2 text-center">
                  OPEN OLYMPIAD
                </h3>
                <ul className="regBullets">
                  <li>
                    Prizes worth INR 25,000 distributed amongst the winners of
                    both categories.
                  </li>
                  <li>
                    All the grand finalists will be awarded certifiates of
                    excellence and goodies.
                  </li>
                  <li>
                    For schools with participation of 50+ students per category,
                    a school winner shall be declared and awarded with goodies
                    and participation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-400 relative  w-72 md:w-96 rounded-[2.5rem] border-white shadow-md p-2 md:p-4">
            <div className="absolute w-[110%] md:w-[120%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 -z-[1] rounded-[3rem]"></div>
            <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
              <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4">
                <h3 className="text-xl leading-10 font-bold text-green-500 mt-4 text-center">
                  JUNIOR SCIENTIST OLYMPIAD
                </h3>
                <ul className="regBullets">
                  <li>
                    The junior scientist competition holds prizes worth INR
                    25000.
                  </li>
                  <li>
                    All the participants of the junior scientist competition
                    shall be awarded a certificate of participation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-400 relative  w-72 md:w-96 rounded-[2.5rem] border-white shadow-md p-2 md:p-4">
            <div className="absolute w-[110%] md:w-[120%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 -z-[1] rounded-[3rem]"></div>
            <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
              <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4">
                <h3 className="text-xl leading-10 font-bold text-green-500 mt-4 text-center">
                  MUN Prizes
                </h3>
                <ul className="regBullets">
                  <li>Best Delegate: ₹2,500</li>
                  <li>High Commendation: ₹1,500</li>
                  <li>Special Mentions: ₹500 (x2)</li>
                  <li>Verbal Mentions: Medal</li>
                  <li>Certificates of participation for all participants.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="caveBG"></div>
      </section>

      <section className="h-[170vh] flex flex-col items-center font-kodchasan relative p-8 md:p-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="w-72 relative h-20">
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
        <div className="mountBG"></div>
      </section>

      <ContactUs />
    </div>
  );
}

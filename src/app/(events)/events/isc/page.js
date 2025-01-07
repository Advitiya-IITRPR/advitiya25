'use client';
import Image from "next/image";
import Link from "next/link";
import { Kodchasan } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import ContactUs from "@/components/contactus/page";



import 'swiper/css';
import 'swiper/css/navigation';

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: '700'
});

const kodchasanLight = Kodchasan({ 
  subsets: ["latin"],
  weight: '400'
});

function FAQ({title, description}){
  const [open, setOpen] = useState(false);
  return (
    <div className="faq group">
      <div className={`title text-xl ${open ? 'text-green-500' : ''}`}>{title}</div>
      <div className={`description mt-2 ${open ? 'flex' : 'hidden'}`}>{description}</div>
      <button onClick={(e) => setOpen(!open)} className={open ? 'rotate-180' : ''}>^</button>
    </div>
  )
}


export default function Page() {
  const [s, setS] = useState(null);
  return (
    <div className={`${kodchasan.className} ${kodchasanLight.className} relative`}>
      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20">
        <div className="cloudBG"></div>
        <span className="text-xl text-green-500">ABOUT US</span>
        <h2 className="text-4xl md:text-5xl font-bold">ADVITIYA &apos;24</h2>
        <div className="w-72 relative h-20">
          <Image src={'/assests/events/titleUnderline.svg'} fill={true} alt="Decoration" />
        </div>
        <p className="text-lg md:text-xl text-center leading-10 font-normal">
        Welcome to Zeitgeist, the most anticipated and biggest techno-cultural fest in North India that showcases myriad events, workshops and talk series and is ornamented by the presence of various big names from different industries such as - Diljit Dosanjh, Anubhav Singh Bassi, The Local Train, Vishal-Shekhar, Zakir Khan, Sonam Bajwa etc.
        </p>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20">
        <h2 className="text-4xl md:text-5xl font-bold">CONDUCTION</h2>
        <div className="w-72 relative h-20">
          <Image src={'/assests/events/titleUnderline.svg'} fill={true} alt="Decoration" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[2]">
            <h3 className="text-3xl leading-10 font-bold">PHASE-1</h3>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">REGISTRATION THROUGH SCHOOL</h4>
            <p className="text-md font-normal">It will be conducted on the school level and it can be either online or offline as per the preference of the school. The pattern of the exam will be objective type consisting of three sections with a time limit of 90 mins For detailed syllabus look into the attachment. The top 5% of participants from each school will qualify for Phase 2. All the participants who participate in stage-1 will also get an opportunity for Techwalk.</p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">DIRECT REGISTRATION OF PARTICIPANTS</h4>
            <p className="text-md font-normal">It will be conducted in online mode on 16th march from 6.00 pm to 7.30 pm. The pattern of will be objective type consisting of three sections with a time limit of 90 mins For detailed syllabus look into the attachment. Top 10% of participants will qualify for Phase-2 and they will be eligible for Techwalk</p>
          </div>
          <div className="flex-1 relative">
            <div className="mascotX"></div>
          </div>
        </div>
      </section>
        
      <div className="flex relative h-10 w-full justify-start items-start">
        <Image src={'/assests/events/sectionborder.png'} fill={true} alt="Decoration" />
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20 overflow-visible">
        <div className="flex flex-col md:flex-row mb-28 md:mb-96">
          <div className="flex-[2]"></div>
          <div className="flex-[3]">
            <h3 className="text-3xl leading-10 font-bold mb-4">PHASE-2</h3>
            <p className="text-md font-normal">This phase will be conducted in IIT Ropar during Zeitgeist&apos;23. The pattern of the exam will be objective type consisting of three sections with a time limit of 90 mins syllabus will be the same as Phase-1. Phase 2 will be conducted during Zeitgeist&apos;23 on 23rd March The winners will be awarded.</p>
            <h4 className="text-xl leading-10 font-normal text-green-500 mt-4">JUNIOR SCIENTIST COMPETITION</h4>
            <p className="text-md font-normal">In this competition, a maximum of three projects are allowed for display by individual schools in each category. The projects will be presented at IIT Ropar during Zeitgeist&apos;23. Project should be working based on any scientific technology. Exciting prizes for winners and certificates of participation for all the participants. All the participants will also get an opportunity for Techwalk.</p>
          </div>
        </div>
        <div className="moonBG"></div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20 overflow-visible">
        <div className="flex flex-col lg:flex-row w-full h-full md:items-center">
          <div className="flex-[2] flex flex-col justify-between h-full self-start lg:self-auto">
            <h3 className="text-4xl leading-10 font-bold mb-4">REGISTRATION</h3>
            <div className="flex items-center justify-start gap-12 mb-9 md:mb-0">
              <button 
                className="rounded-l-full bg-gradient-to-r from-green-500 to-green-700 p-4 pr-2 cursor-pointer hover:bg-green-700"
                onClick={(e) => s.slidePrev()}>
                &lt;
              </button>
              <button 
                className="rounded-r-full bg-gradient-to-l from-green-500 to-green-700 p-4 pl-2 cursor-pointer hover:bg-green-700"
                onClick={(e) => s.slideNext()}>
                &gt;
              </button>
            </div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => setS(swiper)}
            className="w-full flex-[3]"
          >
            <SwiperSlide>
              <h4 className="text-xl leading-10 font-bold text-green-500 mt-4">THROUGH SCHOOL</h4>
              <ul className="regBullets">
                <li>Schools will provide us the details of the students and the competitions in which the students will be participating.</li>
                <li>Schools are requested to collect the registration fee from the students and register them through the google form.</li>
                <li>A total fee of Rs.150 will be charged per student.</li>
              </ul>
              <Link href={'#'} className="underline">Link</Link>
              <div className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-transparent w-min text-nowrap mt-2">
                Deadline: 3rd Feb &apos;24
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h4 className="text-xl leading-10 font-bold text-green-500 mt-4">INDIVIDUALLY</h4>
              <ul className="regBullets">
                <li>Students can register in Groups of 3-5 for ISC from the registration link given below.</li>
                <li>Entry Pass will be provided on- spot at the registration desk after successful verification. Please carry your entry pass and one ID along with you throughout the fest activities.</li>
                <li>A total Fee of Rs.150 will be charged per student</li>
              </ul>
              <Link href={'#'} className="underline">Link</Link>
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
                <h3 className="text-xl leading-10 font-bold text-green-500 mt-4 text-center">OPEN OLYMPIAD</h3>
                <ul className="regBullets">
                  <li>Prizes worth INR 25,000 distributed amongst the winners of both categories.</li>
                  <li>All the grand finalists will be awarded certifiates of excellence and goodies.</li>
                  <li>For schools with participation of 50+ students per category, a school winner shall be declared and awarded with goodies and participation.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-green-400 relative  w-72 md:w-96 rounded-[2.5rem] border-white shadow-md p-2 md:p-4">
            <div className="absolute w-[110%] md:w-[120%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-green-700 to-green-400 -z-[1] rounded-[3rem]"></div>
            <div className="bg-[var(--background)] rounded-[2rem] md:rounded-[1.5rem] h-full p-2">
              <div className="rounded-[1.7rem] md:rounded-[1rem] border border-white h-full p-4">
                <h3 className="text-xl leading-10 font-bold text-green-500 mt-4 text-center">JUNIOR SCIENTIST OLYMPIAD</h3>
                <ul className="regBullets">
                  <li>The junior scientist competition holds prizes worth INR 25000.</li>
                  <li>All the participants of the junior scientist competition shall be awarded a certificate of participation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="caveBG"></div>
      </section>

      <section className="h-[170vh] flex flex-col items-center font-kodchasan relative p-8 md:p-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="w-72 relative h-20">
          <Image src={'/assests/events/titleUnderline.svg'} fill={true} alt="Decoration" />
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-[2]">
            <FAQ 
              title={'When will we receive our admit card for Phase 2?'} 
              description={'As soon as you clear the Phase 1.'} 
            />
            <FAQ 
              title={'What is the Syllabus for TSP Open Olympiad?'} 
              description={'The exam is filled with fascinating and intriguing questions that will test your logical reasoning and thinking skills. For detailed information please look into the attachment.'} 
            />
            <FAQ 
              title={'What are the prerequisites to appear in TSP?'} 
              description={'// TBD'} 
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

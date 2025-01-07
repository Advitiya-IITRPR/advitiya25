"use client";
import React, { useState } from "react";
import Image from "next/image";
import mascot from "../../../../public/assests/images/mascot1.png";
import Navbar from "../../../components/navbar/page.js";
import Slider from "../../../components/menu/page.js";
import arrow from "../../../../public/assests/images/aboutusLogo.png";
import Lvideo from "../../../../public/assests/images/Lvideo.png";
import sec3bg from "../../../../public/assests/images/sec3bg.png";
import fullThrottle from "../../../../public/assests/events/full-throttle.png";
import bikeShow from "../../../../public/assests/events/bike-show.png";
import innovateX from "../../../../public/assests/events/innovatex.png";
import robowar from "../../../../public/assests/events/robowar.png";
import { Kodchasan } from "next/font/google";
const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: '700'
});

const kodchasanLight = Kodchasan({ 
  subsets: ["latin"],
  weight: '400'
});
export default function Page() {

  const cards = [
    {
      id: 1,
      title: "Full Throttle",
      content: "The ultimate racing competition",
      image: fullThrottle,
    },
    {
      id: 2,
      title: "Bike Show",
      content: "Showcase your bike and win exciting prizes",
      image: bikeShow,
    },
    {
      id: 3,
      title: "InnovateX",
      content: "Showcase your innovation and win exciting prizes",
      image: innovateX,
    },
    {
      id: 4,
      title: "Robowar",
      content: "The ultimate battle of robots",
      image: robowar,
    },
  ];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show next 2 cards
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % cards.length);
  };

  // Show previous 2 cards
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 2 + cards.length) % cards.length
    );
  };

  return (
    <div>
      <section
        className={`${kodchasan.className} bg-cover bg-center h-[120vh] w-full bg-no-repeat`}
        style={{ backgroundImage: "url('/assests/images/Homepage.png')" }}
      >
        <div className="flex justify-between px-[5%] 2xl:pt-[0%] xl:pt-[5%] lg:pt-[8%] md:pt-[7%]">
          <div className="flex flex-col mt-[9%] w-[50%] ">
            <div className=" leading-[100px] text-white 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[40px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px]  font-normal font-[Impact] leading-[231.75px]">
              ADVITIYA'25
            </div>
            <div className="text-white bg-gradient-to-r from-green-500 to-green-500/0 text-xl w-[290px] xl:[200px] py-[2%] m rounded-full text-center">
              TECHFEST, IIT ROPAR
            </div>
          </div>
          <div className="2xl:w-[460px] xl:w-[400px] lg:w-[350px] md:w-[300px] sg:w-[250px] mr-[12%]">
            <div className="aspect-[420/590]">
              <Image
                src={mascot}
                alt="../"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="h-[10px]  bg-gradient-to-b from-[#1e2614] to-[#10151b]" ></div> */}
      <section
        className={` ${kodchasan.className} bg-[#121720] px-[13%] py-[10%]`}
        style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-5">
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            ADVITIYA'25
          </span>
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            ABOUT US
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className={ `${kodchasanLight.className} text-xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-white font-medium leading-loose text-center`}>
        Advitiya 2025, IIT Ropar's annual tech fest, themed "The Crucible of Tomorrow," is set to be a landmark event showcasing the best of technological innovation and intellectual prowess. The fest will feature a wide range of competitions, including coding marathons, AI challenges, and cybersecurity battles; robotics showcases and aerospace contests; creative design and mathematical problem-solving events; as well as gaming and financial strategy tournaments. Complementing these high-energy contests are captivating talks and panel discussions by renowned technologists, industry leaders, and entrepreneurs, offering fresh insights into cutting-edge advancements and the future of technology. Advitiya 2025 is a stage where talent, ideas, and collaboration converge to shape a brighter tomorrow.
        </div>
      </section>

      <section
        className={`${kodchasanLight.className} bg-[#121720] px-[13%] py-[5%]`}
        // style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-1 pb-10">
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            FEST TRAILER
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white bg-green-500 h-20 w-12 rounded-l-full"></div>
          <Image src={Lvideo} alt="..." className="mx-4" />
          <div className="text-white bg-green-500 h-20 w-12 rounded-r-full"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="py-7 text-[#3BE174] font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-base">
            THEME
          </span>
          <div className=" px-5 text-xl 2xl:text-2xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-white font-medium leading-loose text-center">
          This year, Advitiya unveils The Crucible of Tomorrow, an extraordinary narrative of innovation and ambition where the brightest minds converge to redefine the future. In a spectacular reveal, four legendary factions emerge—Voltaris, masters of code and machine; Aeris, pioneers of engineering and flight; Terranova, architects of design and innovation; and Infernix, strategists of gaming and finance. Each faction represents a cornerstone of human ingenuity, championing disciplines that shape the world. As these forces clash in an epic contest, their collaboration and rivalry will determine the next chapter of technological evolution. This is not just a competition—this is the crucible where brilliance is forged, and the future is created.
          </div>
        </div>
      </section>

      <section className={`  ${kodchasan.className} bg-[#121720]`}>
      <div className="flex justify-center py-5">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=6bMT_FfLTWpbRmFC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
      </section>
      <section className={`  ${kodchasanLight.className} h-[100vh] bg-[#091418]`}>
        <div className="flex justify-center items-center h-[100vh]">
          <div className="flex flex-col w-[30%]">
            <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
              ADVITYA'25
            </span>
            <span className="pb-8  text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            FLAGSHIP EVENTS
            </span>
            <div className="flex">
              <div
                className="text-white bg-green-500 h-20 w-12 rounded-l-full"
                onClick={prevSlide}
              ></div>
              <div
                className="text-white bg-green-500 h-20 w-12 rounded-r-full ml-20 "
                onClick={nextSlide}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex overflow-hidden">
              {cards
                .slice(currentIndex, currentIndex + 2) // Display 2 cards at a time
                .map((card) => (
                  <div
                    key={card.id}
                    className="flex flex-col justify-center items-center w-[330px] px-4 py-4 mx-10 bg-[#131b23] rounded-2xl border-white"
                  >
                    {/* #36362f */}
                    <div className="bg-gradient-radial from-[3131b23] to-[#36362f]">
                      <Image src={card.image} width = {240} height = {240} className="w-[240px]" alt="Decoration" />
                    </div>
                    <h3 className="text-3xl font-semibold text-white  ">
                      {card.title}
                    </h3>
                    <div className="h-[0.1] w-[100%] bg-white my-2"></div>
                    <p className="text-xl text-white text-center my-3 w-full">
                      {card.content}
                    </p>
                    <div className="bg-[#40EC7B] h-2 w-[70%] rounded">
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className={`${kodchasanLight.className} bg-[#030d14] px-[13%]  pb-[10%]`}>
        <div className="flex flex-col justify-center items-center py-10">
          <span className="text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            Our Highlights
          </span>
          <span className="text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            Highlights
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className={`  ${kodchasanLight.className} text-xl 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-white font-medium leading-loose text-center`}>
        Advitiya 2024, IIT Ropar's flagship technical fest, showcased an impressive lineup of events and activities that attracted thousands of participants. Highlights included thrilling competitions like Drone Racing, RC Car Racing, and Hackathons, alongside intellectually stimulating challenges such as Coding Competitions, Fin-Tech Challenges, and the Maths Arena. Workshops on cutting-edge technologies like Artificial Intelligence, Machine Learning, and Rocket Building provided hands-on learning opportunities. Esteemed professionals shared their insights during panel discussions, while the Inter-School Conclave fostered creativity among young minds with quizzes, exhibitions, and robotic showcases. The festival was inaugurated by Director Prof. Rajiv Ahuja and graced by Mr. Soarabh Pathak, VP of Maruti Suzuki, emphasizing its scale and significance.
        </div>
      </section>
    </div>
  );
}

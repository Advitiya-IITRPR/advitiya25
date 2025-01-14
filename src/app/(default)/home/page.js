import React, { useState, useRef } from "react";
import Image from "next/image";
import mascot from "../../../../public/assests/images/mascot1.png";
import arrow from "../../../../public/assests/images/aboutusLogo.png";
import Lvideo from "../../../../public/assests/images/Lvideo.png";
import sec3bg from "../../../../public/assests/images/sec3bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Kodchasan } from "next/font/google";
import fullThrottle from "../../../../public/assests/events/full-throttle.png";
import flightFury from "../../../../public/assests/events/flight-fury.png";
import beyondZenith from "../../../../public/assests/events/beyond-zenith.png";
import robowar from "../../../../public/assests/events/robowar.png";
import EventSlide from "@/components/EventSlide/EventSlide";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: "700",
});

const kodchasanLight = Kodchasan({
  subsets: ["latin"],
  weight: "400",
});
export default function Page() {
  // const kodchasanLight = Kodchasan({
  //   subsets: ["latin"],
  //   weight: '400'
  // });

  const cards = [
    {
      id: 1,
      title: "Full Throttle",
      content: "The ultimate racing competition",
      image: fullThrottle,
    },
    {
      id: 2,
      title: "Flight Fury",
      content: "Showcase your bike and win exciting prizes",
      image: flightFury,
    },
    {
      id: 3,
      title: "Beyond Zenith",
      content: "Showcase your innovation and win exciting prizes",
      image: beyondZenith,
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

  const swiperRef = useRef(null);

  // Move to the next slide
  const goNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  // Move to the previous slide
  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };
  return (
    <div>
      <section
        className="bg-cover bg-center h-[50vh] sm:h-[100vh] lg:h-[100vh] xl:h-[120vh] w-full font-kodchasan bg-no-repeat overflow-x-hidden pointer-events-none"
        style={{ backgroundImage: "url('/assests/images/Homepage.png')" }}
      >
        <div className="flex justify-between px-[5%] 2xl:pt-[0%] xl:pt-[15vh] lg:pt-[15vh] md:pt-[20vh] sm:pt-[20vh] pt-[10vh]">
          <div className="flex flex-col mt-[9%] w-[20%] sm:w-[50%] ">
            <div className="leading-[60px] sm:leading-[100px] text-white 2xl:text-[190px] xl:text-[140px] lg:text-[130px]  md:text-[100px] sm:text-[100px] text-[45px] 2xl:leading-[190px] xl:leading-[150px] lg:leading-[130px] md:leading-[100px] font-normal font-[Impact] leading-[231.75px]">
              ADVITIYA&apos;25
            </div>
            <div className="text-white font-bold bg-gradient-to-r from-green-500 to-green-500/0 text-base sm:text-xl sm:w-[290px] w-[220px] xl:[200px] py-[2%] m rounded-full text-center">
              TECHFEST IIT ROPAR
            </div>
          </div>
          <div className="2xl:w-[460px] xl:w-[400px] lg:w-[350px] md:w-[300px] sm:w-[250px] w-[150px] sm:mr-[12%] lg:mr-[1%] xl:mr-[12%] -mr-[3%]  ">
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
      <section
        className="bg-[#121720] px-[13%] py-[10%] font-kodchasan"
        style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-5">
          <span className="text-[#3BE174] font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            ABOUT US
          </span>
          <span className="text-white font-bold py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            ADVITIYA&apos;25
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="font-kodchasanLight text-base 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-white font-medium leading-loose text-center">
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
        </div>
      </section>

      <section
        className="bg-[#121720] px-[13%] py-[5%] font-kodchasan"
        // style={{ backgroundImage: "url('/assests/images/aboutUsbg.png')" }}
      >
        <div className="flex flex-col justify-center items-center py-1 pb-10">
          <span className="font-bold text-[#3BE174] 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base">
            OUR VIDEOS
          </span>
          <span className="font-bold text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            PREVIOUS FESTS
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-white bg-green-500 h-20 w-12 rounded-l-full"></div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Fwn-ZAxCq4g?si=6bMT_FfLTWpbRmFC"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="text-white bg-green-500 h-20 w-12 rounded-r-full"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="py-7 text-[#3BE174] font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-base">
            THEME
          </span>
          <div className=" w-[80vw] sm:w-[90vw] sm:px-5 font-kodchasanLight text-base 2xl:text-2xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-white font-medium leading-loose text-center">
            This year, Advitiya unveils The Crucible of Tomorrow, an
            extraordinary narrative of innovation and ambition where the
            brightest minds converge to redefine the future. In a spectacular
            reveal, four legendary factions emerge—Voltaris, masters of code and
            machine; Aeris, pioneers of engineering and flight; Terranova,
            architects of design and innovation; and Infernix, strategists of
            gaming and finance. Each faction represents a cornerstone of human
            ingenuity, championing disciplines that shape the world. As these
            forces clash in an epic contest, their collaboration and rivalry
            will determine the next chapter of technological evolution. This is
            not just a competition—this is the crucible where brilliance is
            forged, and the future is created.
          </div>
        </div>
      </section>

      <section className="bg-[#121720] pointer-events-none">
        <Image src={sec3bg} className="pt-10" alt="Decoration" />
      </section>

      <section className="bg-[#091418] p-[10%] font-kodchasan overflow-hidden">
        <div className="flex flex-col md:flex-row md:justify-between items-center ">
          <div className="flex flex-col w-[50%] items-center sm:items-start  sm:w-[50%]  pt-[10%] sm:p-[5%]">
            <span className="text-[#3BE174] font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base text-base">
              ADVITYA&apos;25
            </span>
            <span className="pb-8 font-bold text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-sm tracking-tighter">
              FLAGSHIP EVENTS
            </span>
            <div className="sm:flex hidden">
              <div
                className=" text-white bg-green-500 p-5 pb-6 pr-2 font-bold text-center rounded-l-full hover:cursor-pointer"
                onClick={goPrev}
              >
                &lt;
              </div>
              <div
                className="text-white bg-green-500  p-5 pl-2 font-bold text-center rounded-r-full ml-20 hover:cursor-pointer"
                onClick={goNext}
              >
                {" "}
                &gt;
              </div>
            </div>
          </div>
          <div></div>
          <div className="md:w-auto w-[100vw] ml-8 md:ml-0 flex-col items-end justify-center max-w-4xl mx-auto p-4 hover:cursor-pointer overflow-hidden z-50 min-w-[600px] min-[300px]:-ml-10 min-[325px]:-ml-3 min-[350px]:-ml-2 min-[420px]:ml-[12%] min-w-[620px]:-ml-0">
            {/* Swiper Component */}
            <Swiper
              ref={swiperRef} // Attach ref to Swiper
              spaceBetween={15}
              slidesPerView={1}
              pagination={{ clickable: true }} // Enable pagination
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1150: { slidesPerView: 2 },
              }}
              className="mySwiper"
            >
              {cards &&
                cards.map((card) => {
                  return (
                    <SwiperSlide key={card.id}>
                      <EventSlide
                                  img={card.image}
                                  title={card.title}
                                  desc={card.content}
                                  tmin={6}
                                  tmax={8}
                                  dmin={180}
                                  dmax={240}
                                  regURL={""}
                                />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className=" sm:hidden sm:h-0 sm:w-0 flex flex-col w-[100%] items-center sm:items-start  pt-[10%] sm:p-[5%]">
            {/* <span className="text-[#3BE174] font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-base sm:text-base text-base">
            ADVITYA&apos;25
            </span>
             */}
            {/* <span className="block sm:hidden pb-8 font-bold text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl">
            FLAGSHIP EVENTS
            </span> */}
            <div className="flex justify-center items-center sm:hidden ">
              <div
                className="text-white bg-green-500 p-5 pb-6 pr-2 font-bold text-center rounded-l-full hover:cursor-pointer"
                onClick={goPrev}
              >
                &lt;
              </div>
              <div
                className="text-white bg-green-500  p-5 pl-2 font-bold text-center rounded-r-full ml-20 hover:cursor-pointer"
                onClick={goNext}
              >
                {" "}
                &gt;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#091418] px-[13%] font-kodchasan pb-[10%]">
        <div className="flex flex-col justify-center items-center py-10">
          <span className="font-bold text-white py-2 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
            Highlights
          </span>
          <Image src={arrow} alt="..." />
        </div>
        <div className="font-kodchasanLight text-lg 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-2xl text-white font-medium leading-loose text-center">
          Advitiya 2024, IIT Ropar&apos;s flagship technical fest, showcased an
          impressive lineup of events and activities that attracted thousands of
          participants. Highlights included thrilling competitions like Drone
          Racing, RC Car Racing, and Hackathons, alongside intellectually
          stimulating challenges such as Coding Competitions, Fin-Tech
          Challenges, and the Maths Arena. Workshops on cutting-edge
          technologies like Artificial Intelligence, Machine Learning, and
          Rocket Building provided hands-on learning opportunities. Esteemed
          professionals shared their insights during panel discussions, while
          the Inter-School Conclave fostered creativity among young minds with
          quizzes, exhibitions, and robotic showcases. The festival was
          inaugurated by Director Prof. Rajiv Ahuja and graced by Mr. Soarabh
          Pathak, VP of Maruti Suzuki, emphasizing its scale and significance.
        </div>
      </section>
    </div>
  );
}

 

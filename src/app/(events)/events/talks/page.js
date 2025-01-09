'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";

import 'swiper/css';
import 'swiper/css/navigation';

import EventSlide from "@/components/EventSlide";

export default function Page() {
  const [s, setS] = useState(null);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center font-kodchasan relative p-8 md:p-20">
      <Image fill={true} src={'/assests/events/bg2.png'} className="absolute top-0 left-0 -z-10" alt="BG" />
      
      <Swiper
        spaceBetween={50}
        breakpoints={{
          1100: {slidesPerView: 3},
          640: {slidesPerView: 2},
          320: {slidesPerView: 1},
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => setS(swiper)}
        className="w-full flex-1"
      >
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
        <SwiperSlide><EventSlide img={'/assests/events/event.jpeg'} title={'Event tit le'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} /></SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center gap-12 justify-self-end">
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
    </section>
  );
}

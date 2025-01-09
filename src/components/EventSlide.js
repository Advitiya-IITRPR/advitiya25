import Image from "next/image"
import { Kodchasan } from "next/font/google"

const kodchasan = Kodchasan({
  weight: '700',
});

export default function EventSlide({img, title, desc}){
  return (
    <div className="m-4 rounded-3xl bg-gradient-to-b from-yellow-500 via-transparent to-transparent p-[2px] event-tile h-full max-w-[300px] mx-auto">
      <div className="rounded-3xl p-4 h-full">
        <div className="w-full h-1/2 relative mb-2 image">
          <Image src={img} fill={true} className="rounded-xl" alt="Decoration" />
        </div>
        <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          <span className="w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-yellow-500 my-1"></span>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}
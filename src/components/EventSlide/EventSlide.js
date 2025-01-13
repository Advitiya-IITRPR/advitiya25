import Image from "next/image";
import Link from "next/link";
import { Kodchasan } from "next/font/google";
import "./EventSlide.css";

const kodchasan = Kodchasan({
  weight: "700",
});

export default function EventSlide({
  img,
  title,
  desc,
  tmin,
  tmax,
  dmin,
  dmax,
  regURL,
}) {
  return (
    <div className="flip-card m-4 p-[2px] mx-auto">
      <div className="flip-card-inner rounded-3xl bg-gradient-to-b from-green-500 via-transparent p-[2px] to-transparent h-full w-full">
        <div className="flip-card-front rounded-3xl p-4 h-full">
          <div className="w-full h-1/2 relative mb-2 image">
            <Image
              src={img}
              fill={true}
              className="rounded-xl object-cover"
              alt="Decoration"
            />
          </div>
          <div className="w-full h-1/2 flex flex-col justify-center items-center text-center">
            <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            <span className="w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-green-500 my-1"></span>
            <p>{desc}</p>
          </div>
        </div>
        <div className="flip-card-back rounded-3xl p-4 h-full flex flex-col justify-evenly">
          <span className="flex items-center justify-center">
            <span className="bg-green-500 h-4 w-4 inline-block rounded-full mx-2"></span>{" "}
            ONLINE
          </span>
          <span className="w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent to-transparent via-green-200 my-1"></span>
          <span>Team Size:</span>
          <div className="flex justify-center items-center">
            <span className="text-green-500">Min: {tmin}</span>
            <span className="h-full w-[1px] bg-gradient-to-t from-transparent to-transparent via-green-200 mx-4"></span>
            <span className="text-green-500">Max: {tmax}</span>
          </div>
          <span className="w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent to-transparent via-green-200 my-1"></span>
          <span>Tentative Duration</span>
          <span className="text-green-500">
            {dmin}-{dmax} mins
          </span>
          <Link href={regURL || ""} className="underline">
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Kodchasan } from "next/font/google";
import "./EventSlide.css";

const kodchasan = Kodchasan({
  weight: "700",
  subsets: ["latin"],
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
  team,
}) {
  const teamColors = {
    Aeris: "green",
    Voltaris: "blue",
    Infernix: "yellow",
    Terranova: "red",
  };

  const color = teamColors[team] || "green";

  return (
    <div className="flip-card m-4 p-[2px] mx-auto">
      <div
        className={`flip-card-inner ${team} rounded-3xl bg-gradient-to-b from-${color}-500 via-transparent p-[2px] to-transparent h-full w-full`}
      >
        <div className="flip-card-front rounded-3xl p-4 h-full">
          <div className="mx-auto aspect-square relative image">
            <Image
              src={img}
              fill={true}
              className="rounded-xl object-contain"
              alt="Decoration"
            />
          </div>
          <div className="w-full mt-4 flex flex-col justify-center items-center text-center">
            <h2 className="text-xl md:text-2xl font-bold mt-0">{title}</h2>
            <span
              className={`w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-${color}-500 my-1`}
            ></span>
            <p className="line-clamp-2">{desc}</p>
          </div>
        </div>
        <div className="flip-card-back rounded-3xl p-4 h-full flex flex-col justify-evenly">
          <span className="flex items-center justify-center">
            <span
              className={`bg-${color}-500 h-4 w-4 inline-block rounded-full mx-2`}
            ></span>{" "}
            ONLINE
          </span>
          <span
            className={`w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent to-transparent via-${color}-200 my-1`}
          ></span>
          <span>Team Size:</span>
          <div className="flex justify-center items-center">
            <span className={`text-${color}-500`}>Min: {tmin}</span>
            <span
              className={`h-full w-[1px] bg-gradient-to-t from-transparent to-transparent via-${color}-200 mx-4`}
            ></span>
            <span className={`text-${color}-500`}>Max: {tmax}</span>
          </div>
          <span
            className={`w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent to-transparent via-${color}-200 my-1`}
          ></span>
          <span>Tentative Duration</span>
          <span className={`text-${color}-500`}>
            {dmin}-{dmax} mins
          </span>
          <Link href={regURL || ""} className="underline" target="_blank">
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}

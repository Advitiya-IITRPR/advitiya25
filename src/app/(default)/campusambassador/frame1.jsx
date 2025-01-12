import Image from 'next/image';

export default function Frame1() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 px-4">
      <div className="px-6 py-4 bg-gradient-to-r from-[#38db70] to-transparent rounded-[39px] flex justify-center items-center gap-4">
        <div className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold font-['Kodchasan']">HOME</div>
        <div className="w-2 h-2 bg-white rounded-full" />
        <div className="text-center text-white text-xl sm:text-2xl md:text-3xl font-bold font-['Kodchasan'] uppercase">
          Campus Ambassador
        </div>
      </div>
      <div className="text-center text-white text-5xl sm:text-6xl md:text-7xl font-normal font-['Impact'] uppercase tracking-wide">
        Campus Ambassador
      </div>
    </div>
  );
}

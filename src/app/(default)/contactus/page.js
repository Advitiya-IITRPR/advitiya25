import CardComponent from "@/components/contactus/card";
import { MoveLeft, MoveRight } from "lucide-react";
export default function ContactUs(){
    return(
        <>
        <div className="h-screen bg-[#10171D] relative">
                <img src="/contactus/bgb.png" alt="background image" className="w-full absolute bottom-0 object-cover"/>

                <div className="w-full h-full flex flex-col items-center justify-center font-sans gap-4">
                <section className="text-[#3BE174]">CONTACT US</section>
                <section className="text-white text-6xl">CONTACT US</section>
                <section>
                    <img src="/contactus/line.png" className="h-12" />
                </section>
                <section className="w-full h-1/2 flex justify-evenly items-center">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                </section>
                <section>
                <div className="flex">
              <div
                className="text-white relative bg-green-500 h-20 w-12 rounded-l-full"
              >
                <div className="absolute top-1/2 -right-10 transform -translate-x-1/2 -translate-y-1/2">
                <MoveLeft size={40}/>
                </div>
              </div>
              <div
                className="text-white relative bg-green-500 h-20 w-12 rounded-r-full ml-20 "
              >
                <div className="absolute top-1/2 left-1 transform -translate-x-1/2 -translate-y-1/2">
                <MoveRight size={40}/>
                </div>
              </div>
            </div>
                </section>
                <section className="w-full h-1/5"></section>
                </div>
            </div>
        </>
    );
}
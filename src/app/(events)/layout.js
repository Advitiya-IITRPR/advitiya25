import Image from "next/image";
import { Kodchasan } from "next/font/google";
import "./globals.css";
// import Navbar from '../../components/navbar/page.js'
import Footer from "../../components/Footer";
import EventsNav from "@/components/EventsNav";
import Header from "@/components/header/header";
const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: "700",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Header />
        <main>
          <section className="min-h-screen flex flex-col justify-center items-center text-center relative">
            <div
              className={`text-xl font-bold text-white bg-gradient-to-r from-green-500 to-transparent px-6 py-2 my-2 rounded-full ${kodchasan.className}`}
            >
              HOME • EVENTS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl">Events & ISC</h1>
            <Image
              src={"/assests/events/bg.png"}
              fill={true}
              className="absolute top-0 left-0 w-full h-full mainBG -z-10"
              alt="Background"
            />
          </section>
          <EventsNav />
          {children}
        </main>

        <Footer />
        {/* Once the footer has been made responsive, uncomment this */}
      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Kodchasan } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactUser } from "@/components/contactus/page";

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: '700'
});

const kodchasanLight = Kodchasan({ 
  subsets: ["latin"],
  weight: '400'
});

export default function ContactUs() {
  return (
    <section className={`${kodchasan.className} ${kodchasanLight.className} contactus text-white relative min-h-screen flex flex-col items-center justify-center p-20`}>
      <div className="groundBG"></div>
      <h2 className="text-5xl font-bold text-center">CONTACT US</h2>
      <div className="w-72 relative h-20">
        <Image src={'/assests/events/titleUnderline.svg'} fill={true} alt="Decoration" />
      </div>
      <div className="flex justify-evenly items-center flex-wrap">
      <ContactUser
          post={'Overall Coordinator'}
          name={'Mihir Kasare'}
          phone={'+91 91367 24826'}
          email={'2022chb1052@iitrpr.ac.in'} />
        <ContactUser
          post={'Overall Coordinator'}
          name={'Krish Soliya'}
          phone={'+91 95121 19212'}
          email={'2022eeb1183@iitrpr.ac.in'} />
      </div>
    </section>
  );
}
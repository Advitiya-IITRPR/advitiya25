import Image from "next/image";
import Link from "next/link";
import { Kodchasan } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import './component.css'

const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: '700'
});

const kodchasanLight = Kodchasan({ 
  subsets: ["latin"],
  weight: '400'
});

function ContactUser({post, name, phone, email}){
  return (
    <div className="m-4 rounded-3xl bg-gradient-to-b from-green-500 via-transparent to-transparent p-[2px] contact-user h-full">
      <div className="rounded-3xl p-4 h-full">
        <div className="w-full h-full p-2 flex flex-col justify-evenly items-center text-center">
          <div className="p-2 rounded-full border border-green-500">{post}</div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex flex-col items-center">
            <Link href={`tel:${phone}`} className="flex flex-row items-center gap-2"><FontAwesomeIcon icon={faPhone} className="fas h-4 fa-phone text-green-500"></FontAwesomeIcon> {phone}</Link>
            <Link href={`mailto:${email}`} className="flex flex-row items-center gap-2"><FontAwesomeIcon icon={faEnvelope} className="fas h-4 fa-envelope text-green-500"></FontAwesomeIcon> {email}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactUs() {
  return (
    <section className={`${kodchasan.className} ${kodchasanLight.className} contactus text-white relative min-h-screen flex flex-col items-center justify-center p-20`}>
      <div className="groundBG"></div>
      <h2 className="text-5xl font-bold">CONTACT US</h2>
      <div className="w-72 relative h-20">
        <Image src={'/assests/events/titleUnderline.svg'} fill={true} alt="Decoration" />
      </div>
      <div className="flex justify-evenly items-center">
        <ContactUser
          post={'ISC Head'}
          name={'Jay Goel'}
          phone={'+91 9650353407'}
          email={'2022eeb1178@iitrpr.ac.in'} />
        <ContactUser
          post={'ISC Head'}
          name={'Garvit Bhalla'}
          phone={'+91 9463495860'}
          email={'2022eeb1310@iitrpr.ac.in'} />
        <ContactUser
          post={'ISC Head'}
          name={'A.B. Vrushank'}
          phone={'+91 7822855909'}
          email={'2022csb1002@iitrpr.ac.in'} />
          <ContactUser
          post={'ISC Head'}
          name={'Tanmay Goyal'}
          phone={'+91 8146294608'}
          email={'2022eeb1219@iitrpr.ac.in'} />
      </div>
    </section>
  );
}
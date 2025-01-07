import { User, Mail, Phone, X } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandInstagramFilled, TbBrandTiktokFilled, TbBrandYoutubeFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="h-[185vh] relative w-full z-0">
      <div
        className="h-full w-full absolute bottom-0 shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/signin/bg4.png')" }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full gap-4 font-serif">
          <section className="w-full h-2/5"></section>
          <section className="text-white text-4xl font-bold font-sans">Contact The Organizing Committee</section>
          <section className="text-white max-w-3xl text-center text-xl font-sans mt-8">In case of any doubts, feel free to contact the undersigned</section>
          <div className="w-2/5 h-[1px] bg-gradient-to-r from-[#40EC7B00] via-[#FFFFFF] to-[#40EC7B00]"></div>

          <section className="text-white h-16 justify-center items-center text-sm flex font-normal"><User strokeWidth={1.75} color="white" className="text-sm" /> <pre>  Krish Soliya  </pre> <pre className="text-white/50 text-sm">|  </pre> <Mail color="white" strokeWidth={1.75} /> <pre>  2022eeb1183@iitrpr.ac.in  </pre>
            <pre className="text-white/50 text-sm">|  </pre> <Phone color="white" strokeWidth={1.75} /> <pre>  ‪+91 95121 19212‬  </pre>
          </section>
          <section className="text-white justify-center items-center text-sm flex font-normal"><User strokeWidth={1.75} color="white" className="text-sm" /> <pre>  Mihir Kasare  </pre> <pre className="text-white/50 text-sm">|  </pre> <Mail color="white" strokeWidth={1.75} /> <pre>  2022chb1052@iitrpr.ac.in   </pre>
            <pre className="text-white/50 text-sm">|  </pre> <Phone color="white" strokeWidth={1.75} /> <pre>  ‪+91 91367 24826‬  </pre>
          </section>

          <section className="max-w-6xl h-16 flex gap-6 mt-12">
      <a href="https://www.facebook.com/advitiya.iitrpr/" target="_blank" rel="noopener noreferrer">
        <button className="h-16 w-16 p-5 text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center">
          <FaFacebookF color="white" fill="white" />
        </button>
      </a>
      <a href="https://www.instagram.com/advitiya_iitrpr?igsh=MWlhenRwdmY4dHZtZQ==" target="_blank" rel="noopener noreferrer">
        <button className="h-16 w-16 p-5 text-2xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center">
          <TbBrandInstagramFilled className="text-2xl" color="white" fill="white" />
        </button>
      </a>
      <a href="https://www.youtube.com/@advitiyaiitropar9771" target="_blank" rel="noopener noreferrer">
        <button className="h-16 w-16 p-5 rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center">
          <TbBrandYoutubeFilled className="text-2xl" color="white" fill="white" />
        </button>
      </a>
      <a href="https://www.linkedin.com/company/advitiya-iit-ropar" target="_blank" rel="noopener noreferrer">
      <button className="h-16 w-16 p-5 text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center">
        <FaLinkedin color="white" fill="white" />
      </button>
    </a>
        </section>

        </div>
      </div>

      <img src="/signin/bg4br.png" alt="background image" className="pointer-events-none absolute bottom-0 right-0" />
      <img src="/signin/bg4bl.png" alt="background image" className="pointer-events-none absolute bottom-0 left-0" />
      <img src="/signin/bg4line.png" alt="background image" className="pointer-events-none absolute bottom-3/4 right-0 w-1/2" />
    </div>
  )
}
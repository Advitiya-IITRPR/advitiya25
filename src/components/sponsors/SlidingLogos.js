"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SlidingLogos.module.css";
import Link from "next/link";
const SlidingLogos = ({ logoCount = 18, direction = "normal" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sponsors = [
    {
      src: "/sponsors/companylogos2/13.png",
      alt: "aerosocietyindia_logo",
      link: "https://www.aerosocietyindia.co.in/",
    },
    {
      src: "/sponsors/companylogos2/8.png",
      alt: "finlatics_logo",
      link: "https://www.finlatics.com/",
    },
    {
      src: "/sponsors/companylogos2/6.png",
      alt: "samaro_logo",
      link: "https://www.samaro.ai/",
    },
    {
      src: "/sponsors/companylogos2/1.png",
      alt: "swiftrut_logo",
      link: "https://swiftrut.com/",
    },
    {
      src: "/sponsors/companylogos2/2.png",
      alt: "truscholar_logo",
      link: "https://www.truscholar.io/",
    },
    {
      src: "/sponsors/companylogos2/5.png",
      alt: "icicibank_logo",
      link: "https://www.icicibank.com/",
    },
    {
      src: "/sponsors/companylogos2/7.png",
      alt: "edufabrica_logo",
      link: "https://edufabrica.net/",
    },
    // {
    //   src: "/sponsors/companylogos2/3.png",
    //   alt: "ixigo_logo",
    //   link: "https://www.ixigo.com/",
    // },
    {
      src: "/sponsors/companylogos2/4.png",
      alt: "jpdhub_logo",
      link: "https://jpdhub.com/",
    },
    {
      src: "/sponsors/companylogos2/9.png",
      alt: "thomascrick_logo",
      link: "https://www.thomascrick.in/",
    },
    {
      src: "/sponsors/companylogos2/10.png",
      alt: "dt_logo",
      link: "https://digitalterminal.in/",
    },
    {
<<<<<<< HEAD
      src: "/sponsors/companylogos2/11.png",
      alt: "theeducationtree_logo",
      link: "https://www.theeducationtree.com/",
    },
    {
      src: "/sponsors/companylogos2/12.png",
      alt: "2IIM_logo",
      link: "https://2iim.com/",
    },
    {
      src: "/sponsors/companylogos2/14.png",
      alt: "GFG_logo",
      link: "https://geeksforgeeks.org/",
    },
    {
      src: "/sponsors/companylogos2/16.png",
      alt: "codingblocks_logo",
      link: "https://codingblocks.com/",
    },
    {
      src: "/sponsors/companylogos2/17.png",
      alt: "medinos_logo",
      link: "https://medinos.in/",
    },
    {
      src: "/sponsors/companylogos2/18.png",
      alt: "aieevents_logo",
      link: "https://www.instagram.com/aiecreations/",
    },
    {
      src: "/sponsors/companylogos/logo_10.jpg",
      alt: "wayspire_logo",
      link: "https://wayspire.in/",
    },
  ];

  // console.log(sponsors.length);
=======
      src: '/sponsors/companylogos/logo_001.jpeg',
      alt: 'logo9',
      link: "https://www.advitiya25.in/sponsors/"
    },
    {
      src: '/sponsors/companylogos/logo_10.jpg',
      alt: 'logo10',
      link: "https://wayspire.in/"
    }
  ]
>>>>>>> a239bf442084eb619fa7b001ea251947122fa47b

  // Duplicate logos for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors]; // Always display all logos

  // console.log(duplicatedSponsors);

  return (
    <div className={styles.marqueeContainer}>
      <div
        className={`${styles.marquee} ${isHovered ? styles.paused : ""}`}
        style={{
          animationDirection: direction,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.logoWrapper}>
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={index} className={`${styles.logoItem} rounded-xl`}>
              <Link href={sponsor.link}>
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={300}
                  height={200}
                  className={`${styles.logoImage} rounded-xl`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingLogos;

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './SlidingLogos.module.css'
import Link from 'next/link'
const SlidingLogos = ({ logoCount = 16, direction = 'normal' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const sponsors = [
    {
      src: '/sponsors/companylogos/logo_1.png',
      alt: 'logo1',
      link: "https://www.aerosocietyindia.co.in/"
    },
    {
      src: '/sponsors/companylogos/finlatics.png',
      alt: 'logo2',
      link: "https://www.finlatics.com/"
    },
    {
      src: '/sponsors/companylogos/logo_3.png',
      alt: 'logo3',
      link: "https://www.samaro.ai/"
    },
    {
      src: '/sponsors/companylogos/logo_4.png',
      alt: 'logo4',
      link: "https://swiftrut.com/"
    },
    {
      src: '/sponsors/companylogos/logo_5.png',
      alt: 'logo5',
      link: "https://www.truscholar.io/"
    },
    {
      src: '/sponsors/companylogos/logo_6.png',
      alt: 'logo6',
      link: "https://www.icicibank.com/"
    },
    {
      src: '/sponsors/companylogos/logo_7.jpg',
      alt: 'logo7',
      link: "https://edufabrica.net/"
    },
    {
      src: '/sponsors/companylogos/ixigo.png',
      alt: 'logo8',
      link: "https://www.ixigo.com/"
    },
    {
      src: '/sponsors/companylogos/logo_9.jpg',
      alt: 'logo9',
      link: "https://jpdhub.com/"
    },
    {
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

  // Duplicate logos for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <div className={styles.marqueeContainer}>
      <div
        className={`${styles.marquee} ${isHovered ? styles.paused : ''}`}
        style={{
          animationDirection: direction,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.logoWrapper}>
          {duplicatedSponsors.map((sponsor, index) => (
            <div key={index} className={`${styles.logoItem} ${sponsor.alt == 'logo2' ? 'bg-white p-6' : ''} rounded-xl`}>
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
  )
}

export default SlidingLogos


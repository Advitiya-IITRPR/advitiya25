'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './SlidingLogos.module.css'
import Link from 'next/link'
const SlidingLogos = ({ logoCount = 16, direction = 'normal' }) => {
  const [isHovered, setIsHovered] = useState(false)

  const logos = Array.from({ length: logoCount }, (_, index) => ({
    src: `/sponsors/companylogos/logo${index + 1}.png`,
    alt: `Logo ${index + 1}`,
    href: `/events`,
  }))

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

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
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className={`${styles.logoItem}`}>
              <Link href={logo.href}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={200}
                className={`${styles.logoImage}`}
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


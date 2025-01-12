// pages/index.js
import React from "react";
import Image from "next/image";
import Frame1 from "./frame1";
import Frame2 from "./frame2";
import Frame3 from "./frame3";
import Frame4 from "./frame4";
import Frame5 from "./frame5";
import styles from "./campusambassador.module.css";

export default function FullScreenImageWithCenteredFrame() {
  return (
    <div>
      <div className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame1 />
        </div>

        <Image
          src="/campusambassador/style1/frame1.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles["image-frame-container2"]}>
        <Image
          src="/campusambassador/style1/frame_extra.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${styles["image-frame-container"]} ${styles["margin-bottom"]} ${styles["black_background"]} `}>
        <div className={styles.frame}>
          <Frame2 />
        </div>

        <Image
          src="/campusambassador/style1/frame2.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame3 />
        </div>
      </div>

      <div className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame4 />
        </div>

        <Image
          src="/campusambassador/style1/frame4.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={styles["image-frame-container"]}>
        <div className={styles.frame}>
          <Frame5 />
        </div>

        <Image
          src="/campusambassador/style1/frame5.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

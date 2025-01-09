"use client"
import Image from "next/image";
import Homee from './home/page.js'
import Loader from "@/components/loader/page.js";
import { useState, useEffect } from 'react';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200); // Simulate a loading time of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {loading ? <Loader /> : <Homee />}
    </div>
  );
}
// export default function Home() {
//   return (
//     <div>
//        <Homee />
//     </div>
//   );
// }


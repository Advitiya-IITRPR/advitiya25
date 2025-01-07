"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'
import { enableBodyScroll,disableBodyScroll } from "body-scroll-lock";

export default function Loader(){
    useEffect(() => {
        disableBodyScroll(document.body);
        return () => enableBodyScroll(document.body);
    }, []);
    const [progress, setProgress] = useState(0)
  
    useEffect(() => {
        const startTimer = setTimeout(() => {
            setProgress(1)
        }, 1200)

        return () => clearTimeout(startTimer)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress < 100 && progress > 0) {
                setProgress(prev => Math.min(prev + 1, 100))
            }
        }, 23)

        return () => clearTimeout(timer)
    }, [progress])


    return(
        <>
        <div className="w-screen h-screen bg-[#12181E] fixed inset-0 z-50">
        <div className="w-screen h-screen inset-0 z-50 bg-cover bg-no-repeat bg-center overflow-hidden flex flex-col justify-center items-center relative"
        style={{backgroundImage:"url('/loader/image.png"}}
        >
            <img src="/loader/logo.png" alt="logo" className="md:h-16 xl:h-24 h-12 sm:h-14 absolute top-[calc(25vh+2rem)]" />
            <motion.section 
            initial={{y:0}}
            animate={{y:-250}}
            transition={{duration:2,repeat:0,delay:1.5}}
            className="flex justify-center items-center animate-pulse">
            <svg width="1920" height="38" viewBox="0 0 1920 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_1)">
<path d="M1913.9 33C1913.9 34.1596 1914.84 35.0997 1916 35.0997C1917.16 35.0997 1918.1 34.1596 1918.1 33C1918.1 31.8404 1917.16 30.9003 1916 30.9003C1914.84 30.9003 1913.9 31.8404 1913.9 33ZM-4.09972 33C-4.09972 34.1596 -3.15964 35.0997 -2 35.0997C-0.840359 35.0997 0.0997152 34.1596 0.0997152 33C0.0997152 31.8404 -0.840359 30.9003 -2 30.9003C-3.15964 30.9003 -4.09972 31.8404 -4.09972 33ZM1044.91 25.9177L1044.64 26.2042L1044.91 25.9177ZM1035.53 17.0823L1035.8 16.7958L1035.53 17.0823ZM864.109 25.9177L863.839 25.6311L864.109 25.9177ZM864.379 26.2042L873.759 17.3689L873.219 16.7958L863.839 25.6311L864.379 26.2042ZM891.337 10.3937H1017.68V9.6063H891.337V10.3937ZM1035.26 17.3689L1044.64 26.2042L1045.18 25.6311L1035.8 16.7958L1035.26 17.3689ZM1062.76 33.3937H1916V32.6063H1062.76V33.3937ZM846.261 32.6063H-2V33.3937H846.261V32.6063ZM1044.64 26.2042C1049.54 30.8221 1056.02 33.3937 1062.76 33.3937V32.6063C1056.22 32.6063 1049.93 30.1113 1045.18 25.6311L1044.64 26.2042ZM1017.68 10.3937C1024.21 10.3937 1030.5 12.8887 1035.26 17.3689L1035.8 16.7958C1030.9 12.1779 1024.42 9.6063 1017.68 9.6063V10.3937ZM873.759 17.3689C878.515 12.8887 884.803 10.3937 891.337 10.3937V9.6063C884.602 9.6063 878.121 12.1779 873.219 16.7958L873.759 17.3689ZM863.839 25.6311C859.083 30.1113 852.795 32.6063 846.261 32.6063V33.3937C852.996 33.3937 859.477 30.8221 864.379 26.2042L863.839 25.6311Z" fill="#2CFE75"/>
</g>
<g filter="url(#filter1_d_0_1)">
<path d="M1026.1 5C1026.1 6.15964 1025.16 7.09972 1024 7.09972C1022.84 7.09972 1021.9 6.15964 1021.9 5C1021.9 3.84036 1022.84 2.90028 1024 2.90028C1025.16 2.90028 1026.1 3.84036 1026.1 5ZM-6.90027 27C-6.90027 28.1596 -7.84033 29.0997 -9 29.0997C-10.1597 29.0997 -11.0997 28.1596 -11.0997 27C-11.0997 25.8404 -10.1597 24.9003 -9 24.9003C-7.84033 24.9003 -6.90027 25.8404 -6.90027 27ZM860.342 20.2916L860.078 19.9994L860.342 20.2916ZM869.85 11.7084L870.114 12.0006L869.85 11.7084ZM1024 5.3937H887.292V4.6063H1024V5.3937ZM870.114 12.0006L860.606 20.5838L860.078 19.9994L869.586 11.4162L870.114 12.0006ZM842.9 27.3937H-9V26.6063H842.9V27.3937ZM860.606 20.5838C855.75 24.9672 849.441 27.3937 842.9 27.3937V26.6063C849.246 26.6063 855.367 24.2521 860.078 19.9994L860.606 20.5838ZM887.292 5.3937C880.946 5.3937 874.825 7.74786 870.114 12.0006L869.586 11.4162C874.442 7.03277 880.751 4.6063 887.292 4.6063V5.3937Z" fill="#2CFE75"/>
</g>
<defs>
<filter id="filter0_d_0_1" x="-6.98672" y="6.71909" width="1927.97" height="31.2676" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.44355"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.40276 0 0 0 0 0.870833 0 0 0 0 0.563951 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_d_0_1" x="-13.9867" y="0.0132818" width="1042.97" height="31.9734" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.44355"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.40276 0 0 0 0 0.870833 0 0 0 0 0.563951 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>

            </motion.section>
            <section className="text-white text-2xl -my-4">LOADING</section>
            <motion.section 
            initial={{y:0, rotate:180}}
            animate={{y:200, rotate:180}}
            transition={{duration:2,repeat:0, delay:1.5}}
            className="flex justify-center items-center rotate-180 animate-pulse">
            <svg width="1920" height="38" viewBox="0 0 1920 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_1)">
<path d="M1913.9 33C1913.9 34.1596 1914.84 35.0997 1916 35.0997C1917.16 35.0997 1918.1 34.1596 1918.1 33C1918.1 31.8404 1917.16 30.9003 1916 30.9003C1914.84 30.9003 1913.9 31.8404 1913.9 33ZM-4.09972 33C-4.09972 34.1596 -3.15964 35.0997 -2 35.0997C-0.840359 35.0997 0.0997152 34.1596 0.0997152 33C0.0997152 31.8404 -0.840359 30.9003 -2 30.9003C-3.15964 30.9003 -4.09972 31.8404 -4.09972 33ZM1044.91 25.9177L1044.64 26.2042L1044.91 25.9177ZM1035.53 17.0823L1035.8 16.7958L1035.53 17.0823ZM864.109 25.9177L863.839 25.6311L864.109 25.9177ZM864.379 26.2042L873.759 17.3689L873.219 16.7958L863.839 25.6311L864.379 26.2042ZM891.337 10.3937H1017.68V9.6063H891.337V10.3937ZM1035.26 17.3689L1044.64 26.2042L1045.18 25.6311L1035.8 16.7958L1035.26 17.3689ZM1062.76 33.3937H1916V32.6063H1062.76V33.3937ZM846.261 32.6063H-2V33.3937H846.261V32.6063ZM1044.64 26.2042C1049.54 30.8221 1056.02 33.3937 1062.76 33.3937V32.6063C1056.22 32.6063 1049.93 30.1113 1045.18 25.6311L1044.64 26.2042ZM1017.68 10.3937C1024.21 10.3937 1030.5 12.8887 1035.26 17.3689L1035.8 16.7958C1030.9 12.1779 1024.42 9.6063 1017.68 9.6063V10.3937ZM873.759 17.3689C878.515 12.8887 884.803 10.3937 891.337 10.3937V9.6063C884.602 9.6063 878.121 12.1779 873.219 16.7958L873.759 17.3689ZM863.839 25.6311C859.083 30.1113 852.795 32.6063 846.261 32.6063V33.3937C852.996 33.3937 859.477 30.8221 864.379 26.2042L863.839 25.6311Z" fill="#2CFE75"/>
</g>
<g filter="url(#filter1_d_0_1)">
<path d="M1026.1 5C1026.1 6.15964 1025.16 7.09972 1024 7.09972C1022.84 7.09972 1021.9 6.15964 1021.9 5C1021.9 3.84036 1022.84 2.90028 1024 2.90028C1025.16 2.90028 1026.1 3.84036 1026.1 5ZM-6.90027 27C-6.90027 28.1596 -7.84033 29.0997 -9 29.0997C-10.1597 29.0997 -11.0997 28.1596 -11.0997 27C-11.0997 25.8404 -10.1597 24.9003 -9 24.9003C-7.84033 24.9003 -6.90027 25.8404 -6.90027 27ZM860.342 20.2916L860.078 19.9994L860.342 20.2916ZM869.85 11.7084L870.114 12.0006L869.85 11.7084ZM1024 5.3937H887.292V4.6063H1024V5.3937ZM870.114 12.0006L860.606 20.5838L860.078 19.9994L869.586 11.4162L870.114 12.0006ZM842.9 27.3937H-9V26.6063H842.9V27.3937ZM860.606 20.5838C855.75 24.9672 849.441 27.3937 842.9 27.3937V26.6063C849.246 26.6063 855.367 24.2521 860.078 19.9994L860.606 20.5838ZM887.292 5.3937C880.946 5.3937 874.825 7.74786 870.114 12.0006L869.586 11.4162C874.442 7.03277 880.751 4.6063 887.292 4.6063V5.3937Z" fill="#2CFE75"/>
</g>
<defs>
<filter id="filter0_d_0_1" x="-6.98672" y="6.71909" width="1927.97" height="31.2676" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.44355"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.40276 0 0 0 0 0.870833 0 0 0 0 0.563951 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
<filter id="filter1_d_0_1" x="-13.9867" y="0.0132818" width="1042.97" height="31.9734" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.44355"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.40276 0 0 0 0 0.870833 0 0 0 0 0.563951 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
</filter>
</defs>
</svg>

            </motion.section>

        <section className="absolute h-96 w-96 bottom-0 right-0 flex justify-end items-end mb-4 mr-4">
            <span className="text-white text-8xl">{progress}%</span>
        </section>
        </div>
        </div>
        </>
    );
}
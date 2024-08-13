"use client";

/* eslint-disable @next/next/no-img-element */
import acmeLogo from "@/assets/logo/ps4-logo.png";
import apexLogo from "@/assets/logo/ps5-logo.jpg";
import celestialLogo from "@/assets/logo/pc-logo.png";
import quantumLogo from "@/assets/logo/xbox-logo.png";
import pulseLogo from "@/assets/logo/discord-logo.png";
import echoLogo from "@/assets/logo/YouTube-logo.png";
import { motion } from "framer-motion";


export const LogoTicker = () => {

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>All the Games I am currently playing</h2>
          </div>

          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div 
              initial={{
                translateX: '-50%',
              }}
              animate={{
                translateX: '0',
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {[acmeLogo, apexLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo, acmeLogo, apexLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo]
                .map((logo) =>
                  <img src={logo.src} key={logo.src} alt='logos' className="h-6 w-auto" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )

};

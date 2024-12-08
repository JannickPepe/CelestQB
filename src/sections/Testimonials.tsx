"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import avatar1 from "@/assets/gambleYT-logo.png";
import avatar2 from "@/assets/krispyYT-logo.png";
import avatar3 from "@/assets/naplmedYT-logo.png";
import avatar4 from "@/assets/bazarYT-logo.png";


const testimonials = [
  {
    text: "“Celest is a really good and helpfull streamer, always keeping the good energi and tone”",
    name: "GambleFiction(Twitch)",
    title: "@Gamble.Fiction",
    avatarImg: avatar1,
    ytLink: 'https://www.youtube.com/@Gamble.Fiction'
  },
  {
    text: "“As a competive duelist in high rank, Celest really shines in hook swing and double parry”",
    name: "Krispy",
    title: "@CrispeHD",
    avatarImg: avatar2,
    ytLink: 'https://www.youtube.com/@CrispeHD'
  },
  {
    text: "“His tips and guides in how to improve is really usefull, specially for serious gaming”",
    name: "Napalmed",
    title: "@NapalmedSOUP",
    avatarImg: avatar3,
    ytLink: 'https://www.youtube.com/@NapalmedSOUP'
  },
  {
    text: "“Having been able to stream with Celest for hours was one of the best experiences on YT”",
    name: "The Star Bazaar",
    title: "@TheStarBazaar",
    avatarImg: avatar4,
    ytLink: 'https://www.youtube.com/@TheStarBazaar'
  },
];


export const Testimonials = () => {

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">What are the community saying</h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-md mx-auto">
          CelestQB gaming community have been supporting and helping other gamers and gamer channels
        </p>

        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div 
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30,
            }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonials, ...testimonials].map(testimonial => (
              <div key={testimonial.name} className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,3),black)] max-w-xs md:max-w-md flex-none">
                <div className="text-lg md:text-2xl tracking-tight">
                  {testimonial.text}
                </div>
                <Link href={testimonial.ytLink} className="group">
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative group-hover:after:bg-[rgb(198,175,232)] after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10">
                      <Image src={testimonial.avatarImg} alt={`Avatar for ${testimonial.name}`} className="h-11 w-11 grayscale" />
                    </div>
                    <div>
                      <div className="group-hover:border-b group-hover:border-b-purple-500">
                        {testimonial.name}
                      </div>
                      <div className="text-white/50 text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )

};

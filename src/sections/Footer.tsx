import XSocial from "@/assets/social-x.svg";
import YTSocial from "@/assets/social-youtube.svg";
import Link from "next/link";
import { FaTwitch } from "react-icons/fa6";
import celestYT from '@/assets/celestYT.png';
import Image from "next/image";

export const Footer = () => {

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-center gap-2 lg:flex-1">
            <Image className="h-6 w-6" src={celestYT} alt="CelestQB logo" />
            <Link href={'/'}>
              <span className="font-medium">CelestQB Platform</span>
            </Link>
          </div>
        
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="/features" className="text-white/70 hover:text-white transition text-xs md:text-sm">Features</a>
            <a href="/games" className="text-white/70 hover:text-white transition text-xs md:text-sm">Games</a>
            <a href="/about" className="text-white/70 hover:text-white transition text-xs md:text-sm">About</a>
            <a href="/video" className="text-white/70 hover:text-white transition text-xs md:text-sm">Videos</a>
          </nav>
      
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <Link href={'twitter.com/CelestQB'}>
              <XSocial className="text-white/40 hover:text-white transition" />
            </Link>
            <Link href={'twitch.tv/celestqb'}>
              <FaTwitch className="text-white/40 hover:text-white transition size-5 mt-1" />
            </Link>
            <Link href={'https://www.youtube.com/@CelestQB'}>
              <YTSocial className="text-white/40 hover:text-white transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );

};

import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Header = () => {

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <Link href={'/'} className="border border-white/15 h-10 w-10 rounded-lg inline-flex justify-center items-center">
              <LogoIcon className="h-8 w-8" />
            </Link>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="/features" className="text-white/70 hover:text-white transition">Features</a>
              <a href="/games" className="text-white/70 hover:text-white transition">Games</a>
              <a href="about" className="text-white/70 hover:text-white transition">About</a>
              <a href="/video" className="text-white/70 hover:text-white transition">Videos</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href={'https://www.youtube.com/@CelestQB'}>
              <Button>QB Youtube</Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
};

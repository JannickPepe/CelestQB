import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";


export const Footer = () => {

  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="h-6 w-6" />
            <h3 className="font-medium">CelestQB Platform</h3>
          </div>
        
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a href="/features" className="text-white/70 hover:text-white transition text-xs md:text-sm">Features</a>
            <a href="/games" className="text-white/70 hover:text-white transition text-xs md:text-sm">Games</a>
            <a href="/about" className="text-white/70 hover:text-white transition text-xs md:text-sm">About</a>
            <a href="/video" className="text-white/70 hover:text-white transition text-xs md:text-sm">Videos</a>
          </nav>
      
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );

};

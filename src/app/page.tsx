import { Reviews } from "@/components/Reviews";
import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {

  return (
    <main>
      <section>
        <Hero />
      </section>

      <section>
        <LogoTicker />
      </section>

      <section>
        <Features />
      </section>

      <section>
        <Testimonials />
      </section>
  
      <section>
        <CallToAction />
      </section>

      <section>
          <Reviews />
      </section>
    </main>
  );

};

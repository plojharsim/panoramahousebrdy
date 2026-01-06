import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroPanorama from "@/assets/hero-panorama.png";

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image - panoramic view */}
      <div className="absolute inset-0">
        <img
          src={heroPanorama}
          alt="Panoramatický výhled na údolí z Panorama house Brdy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sunrise font-medium tracking-widest uppercase mb-4 animate-fade-up opacity-0 delay-100">
            Ubytování v Brdech
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up opacity-0 delay-200">
            Panorama house
            <span className="block text-sunrise-soft">Brdy</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up opacity-0 delay-300">
            Objevte kouzlo Brd z výjimečné perspektivy. Náš dům nabízí
            ohromující panoramatický výhled na malebné údolí, který vám vyrazí
            dech při každém východu slunce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0 delay-400">
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Rezervovat pobyt
              </Button>
            </a>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={scrollToContent}
              className="w-full sm:w-auto"
            >
              Prozkoumat
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed positioning wrapper to prevent transform conflicts */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToContent}
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-12 h-12" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
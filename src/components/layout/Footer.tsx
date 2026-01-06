import { Link } from "react-router-dom";
import { Mountain, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const googleMapsLink = "https://www.google.com/maps/place/Panorama+house+Brdy/@49.7105814,13.9486556,13z/data=!4m9!3m8!1s0x470b0f7517921271:0xfac34c8902a25ecd!5m2!4m1!1i2!8m2!3d49.7047269!4d13.9617081!16s%2Fg%2F11rc2hpfl0";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Mountain className="w-8 h-8" />
              <span className="font-display text-2xl font-semibold">
                Panorama house Brdy
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed text-center md:text-left">
              Útulné ubytování s výjimečným panoramatickým výhledem v srdci Brd.
              Ideální místo pro odpočinek v přírodě.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-4">
              Rychlé odkazy
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors block"
                >
                  Úvod
                </Link>
              </li>
              <li>
                <Link
                  to="/aktivity"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors block"
                >
                  Aktivity v okolí
                </Link>
              </li>
              <li>
                <a
                  href="https://www.booking.com/hotel/cz/panorama-house-brdy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors block"
                >
                  Rezervace
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 mt-0.5 text-sunrise flex-shrink-0" />
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors text-center md:text-left"
                >
                  Oseč 58, 261 01 Příbram
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-sunrise flex-shrink-0" />
                <a
                  href="mailto:info@panoramahouse.cz"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  info@panoramahouse.cz
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-5 h-5 text-sunrise flex-shrink-0" />
                <a
                  href="tel:+420702848814"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  +420 702 848 814
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Panorama house Brdy. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
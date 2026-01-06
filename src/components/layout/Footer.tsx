import { Link } from "react-router-dom";
import { Mountain, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8" />
              <span className="font-display text-2xl font-semibold">
                Panorama House
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Útulné ubytování s výjimečným panoramatickým výhledem v srdci Brd.
              Ideální místo pro odpočinek v přírodě.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">
              Rychlé odkazy
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  Úvod
                </Link>
              </li>
              <li>
                <Link
                  to="/aktivity"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  Aktivity v okolí
                </Link>
              </li>
              <li>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  Rezervace
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-sunrise" />
                <span className="text-primary-foreground/80">
                  Brdy, cca 10 minut od Příbrami
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunrise" />
                <a
                  href="mailto:info@panoramahouse.cz"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  info@panoramahouse.cz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sunrise" />
                <a
                  href="tel:+420123456789"
                  className="text-primary-foreground/80 hover:text-sunrise transition-colors"
                >
                  +420 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Panorama House Brdy. Všechna práva
            vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

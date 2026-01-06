import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";

const BookingCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-nature-gradient text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sunrise/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunrise/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-sunrise fill-sunrise"
              />
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Zarezervujte si svůj pobyt
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Udělejte si radost nezapomenutelným pobytem v Panorama House Brdy.
            Rezervujte snadno a bezpečně přes Booking.com.
          </p>

          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Rezervovat na Booking.com
            </Button>
          </a>

          <p className="mt-6 text-primary-foreground/60 text-sm">
            Bezpečná rezervace • Okamžité potvrzení • Flexibilní storno podmínky
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;

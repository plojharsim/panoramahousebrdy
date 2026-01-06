import { MapPin, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LocationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Mapa bude doplněna s přesnou polohou
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Kde nás <span className="text-primary">najdete</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Panorama House Brdy se nachází v malebné lokalitě Brdské
              vrchoviny, jen kousek od města Příbram. Snadno dostupné autem,
              přesto daleko od hluku a shonu velkoměsta.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    10 minut od Příbrami
                  </h3>
                  <p className="text-muted-foreground">
                    Snadný přístup po kvalitní silnici, parkování přímo u domu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    50 minut z Prahy
                  </h3>
                  <p className="text-muted-foreground">
                    Ideální víkendový únik z hlavního města do přírody.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    CHKO Brdy
                  </h3>
                  <p className="text-muted-foreground">
                    V srdci chráněné krajinné oblasti s bohatou faunou a flórou.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/aktivity">
              <Button variant="nature" size="lg">
                Objevte aktivity v okolí
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

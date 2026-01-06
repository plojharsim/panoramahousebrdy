import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Mountain,
  Bike,
  TreePine,
  Camera,
  Waves,
  Castle,
  Coffee,
  Footprints,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroPanorama from "@/assets/hero-panorama.png";

const activities = [
  {
    icon: Footprints,
    title: "Pěší turistika",
    description:
      "Brdy nabízejí desítky kilometrů značených turistických tras. Objevte Tok, nejvyšší vrchol Brd, nebo se projděte kolem bývalého vojenského prostoru.",
    highlights: ["Tok (865 m n. m.)", "Hřebeny Brd", "Naučné stezky"],
  },
  {
    icon: Bike,
    title: "Cyklistika",
    description:
      "Terén Brd is ideální pro horská kola i silniční cyklistiku. Nově vybudované cyklotrasy vás provedou nejkrásnějšími místy regionu.",
    highlights: ["MTB trasy", "Rodinné cyklotrasy", "E-bike půjčovny"],
  },
  {
    icon: Mountain,
    title: "Rozhledny a vyhlídky",
    description:
      "Region je poseté vyhlídkami a rozhlednami. Z každé z nich se otevírá jiný pohled na kopcovitou krajinu středních Čech.",
    highlights: ["Rozhledna Praha", "Vyhlídka Kočka", "Svatá Hora"],
  },
  {
    icon: TreePine,
    title: "Poznávání přírody",
    description:
      "CHKO Brdy je domovem vzácných druhů rostlin a živočichů. Vydejte se na průzkum lesů, mokřadů a luk s bohatou biodiverzitou.",
    highlights: ["CHKO Brdy", "Ptačí oblast", "Vzácné orchideje"],
  },
  {
    icon: Camera,
    title: "Fotografické výlety",
    description:
      "Malebná krajina Brd je rájem pro fotografy. Východy a západy slunce nad údolím nabízejí nezapomenutelné scenérie.",
    highlights: ["Mlžná údolí", "Hvězdná obloha", "Wildlife fotografie"],
  },
  {
    icon: Waves,
    title: "Vodní aktivity",
    description:
      "V okolí najdete několik koupacích rybníků a vodních nádrží ideálních pro letní osvěžení a relaxaci u vody.",
    highlights: ["Pilský rybník", "Láz", "Slapská přehrada"],
  },
  {
    icon: Castle,
    title: "Historické památky",
    description:
      "Region je bohatý na historii. Navštivte zámky, hrady a muzea, které vyprávějí příběhy zdejšího kraje.",
    highlights: ["Hornické muzeum", "Zámek Dobříš", "Svatá Hora"],
  },
  {
    icon: Coffee,
    title: "Gastronomie a relax",
    description:
      "Vychutnejte si lokální kuchyni v útulných restauracích a hospůdkách. Nebo si dopřejte wellness a relaxaci.",
    highlights: ["Lokální restaurace", "Pivovary", "Wellness centra"],
  },
];

const Aktivity = () => {
  return (
    <>
      <Helmet>
        <title>Aktivity v okolí | Panorama house Brdy</title>
        <meta
          name="description"
          content="Objevte aktivity a výlety v okolí Panorama house Brdy. Turistika, cyklistika, rozhledny, příroda CHKO Brdy a další atrakce jen pár minut od ubytování."
        />
        <meta
          name="keywords"
          content="aktivity Brdy, výlety Brdy, turistika Brdy, cyklotrasy Brdy, CHKO Brdy, co dělat v Brdech"
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroPanorama}
              alt="Výhled na krajinu Brd"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-hero-overlay" />
          </div>

          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sunrise font-medium tracking-widest uppercase mb-4 animate-fade-up opacity-0 delay-100">
                Zážitky a dobrodružství
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 delay-200">
                Aktivity v okolí
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-fade-up opacity-0 delay-300">
                Brdy a jejich okolí nabízejí nepřeberné množství aktivit pro
                milovníky přírody, sportu i historie. Ať už preferujete pěší
                túry, cyklistiku nebo klidnou procházku, najdete zde to pravé.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-border/50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <activity.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="flex-grow">
                      <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                        {activity.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {activity.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {activity.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips section */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tipy pro váš pobyt
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Brdy jsou ideální celoročně. Na jaře a na podzim si užijete
                barevnou přírodu, v létě osvěžení u vody a v zimě zasněženou
                krajinu. Doporučujeme mít s sebou pohodlnou obuv a
                fotoaparát – budete ho potřebovat!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Zpět na úvod
                  </Button>
                </Link>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent" size="lg">
                    Rezervovat pobyt
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Aktivity;
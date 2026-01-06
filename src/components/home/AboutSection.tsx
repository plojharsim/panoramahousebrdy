import { Eye, MapPin, TreePine, Sunrise } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Panoramatický výhled",
    description:
      "Nezapomenutelný výhled na údolí, který vás okouzlí za každého počasí a ročního období.",
  },
  {
    icon: MapPin,
    title: "Ideální poloha",
    description:
      "Pouhých 10 minut autem od Příbrami, v srdci chráněné krajinné oblasti Brdy.",
  },
  {
    icon: TreePine,
    title: "Příroda za dveřmi",
    description:
      "Vstupte přímo do přírody. Turistické stezky a cyklotrasy začínají hned u domu.",
  },
  {
    icon: Sunrise,
    title: "Klid a odpočinek",
    description:
      "Vzdáleni od ruchu města, v naprostém klidu s nádherným výhledem na východ slunce.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Útulný dům s{" "}
            <span className="text-primary">výjimečným výhledem</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Panorama House Brdy je soukromé ubytování zasazené do krásné přírody
            Brdské vrchoviny. Nabízíme moderní komfort v kombinaci s autentickým
            zážitkem z pobytu v přírodě, kde hlavní hvězdou je dechberoucí
            panoramatický výhled na údolí.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mx-auto md:mx-0">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 text-center md:text-left">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
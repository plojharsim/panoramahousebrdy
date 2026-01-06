"use client";

import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bike,
  TreePine,
  Camera,
  Waves,
  Castle,
  Coffee,
  Footprints,
  SearchX,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroPanorama from "@/assets/hero-panorama.png";
import ActivityFilter from "@/components/activities/ActivityFilter";
import ActivityCard, { Activity } from "@/components/activities/ActivityCard";

const activities: Activity[] = [
  {
    id: "1",
    icon: Footprints,
    title: "Pěší turistika na Tok",
    type: "turistika",
    weather: "sunny",
    duration: "long",
    description:
      "Výšlap na nejvyšší vrchol Brd. Objevte Tok (865 m n. m.) a kochejte se výhledy z vřesovišť bývalého vojenského prostoru.",
    highlights: ["Tok (865 m n. m.)", "Hřebeny Brd", "Vřesoviště"],
  },
  {
    id: "2",
    icon: Bike,
    title: "Padrťské rybníky na kole",
    type: "cyklistika",
    weather: "sunny",
    duration: "long",
    description:
      "Nádherná cyklotrasa k unikátním Padrťským rybníkům. Rovinatý terén vhodný i pro rodiny, s dechberoucí přírodou.",
    highlights: ["Padrťské rybníky", "Plochá dráha", "Nezničená příroda"],
  },
  {
    id: "3",
    icon: Castle,
    title: "Svatá Hora v Příbrami",
    type: "kultura",
    weather: "both",
    duration: "short",
    description:
      "Navštivte významné barokní poutní místo. Unikátní komplex s ambity a bazilikou tyčící se nad městem Příbram.",
    highlights: ["Barokní architektura", "Poutní místo", "Výhled na Příbram"],
  },
  {
    id: "4",
    icon: Castle,
    title: "Hornické muzeum Příbram",
    type: "kultura",
    weather: "both",
    duration: "medium",
    description:
      "Největší hornické muzeum v ČR. Prohlídky podzemí, jízda důlním vláčkem a historické parní stroje.",
    highlights: ["Podzemní štoly", "Důlní vláček", "Historie těžby"],
  },
  {
    id: "5",
    icon: Coffee,
    title: "Pivovar Podlesí",
    type: "relax",
    weather: "both",
    duration: "short",
    description:
      "Místní minipivovar s výbornou kuchyní a poctivým pivem. Ideální zastávka po výletě v Brdech.",
    highlights: ["Lokální pivo", "Tradiční kuchyně", "Terasa"],
  },
  {
    id: "6",
    icon: TreePine,
    title: "Procházka lesy u Oseče",
    type: "turistika",
    weather: "both",
    duration: "short",
    description:
      "Klidná procházka hned za domem. Lesní cesty plné hub a borůvek v sezóně, ideální pro odpolední relaxaci.",
    highlights: ["Klid u domu", "Houbaření", "Čistý vzduch"],
  },
  {
    id: "7",
    icon: Camera,
    title: "Vyhlídka Kočka",
    type: "turistika",
    weather: "sunny",
    duration: "medium",
    description:
      "Fotogenická vyhlídka v centrálních Brdech nabízející pohled na rozlehlé lesy a kopce. Skvělé místo pro západ slunce.",
    highlights: ["Panoramatický výhled", "Fotospot", "Divoká příroda"],
  },
  {
    id: "8",
    icon: Waves,
    title: "Pilská nádrž",
    type: "relax",
    weather: "sunny",
    duration: "medium",
    description:
      "Klidná vodní nádrž uprostřed lesů. Ideální pro procházku kolem břehu nebo tiché rozjímání u vody.",
    highlights: ["Lesní jezero", "Klidná zóna", "Naučná stezka"],
  },
];

const Aktivity = () => {
  const [activeType, setActiveType] = useState("all");
  const [activeWeather, setActiveWeather] = useState("all");
  const [activeDuration, setActiveDuration] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchType = activeType === "all" || activity.type === activeType;
      const matchWeather = 
        activeWeather === "all" || 
        (activeWeather === "sunny" && activity.weather === "sunny") ||
        (activeWeather === "rainy" && activity.weather === "both");
      const matchDuration = activeDuration === "all" || activity.duration === activeDuration;
      
      const searchLower = searchQuery.toLowerCase();
      const matchSearch = 
        activity.title.toLowerCase().includes(searchLower) || 
        activity.description.toLowerCase().includes(searchLower) ||
        activity.highlights.some(h => h.toLowerCase().includes(searchLower));
      
      return matchType && matchWeather && matchDuration && matchSearch;
    });
  }, [activeType, activeWeather, activeDuration, searchQuery]);

  const resetFilters = () => {
    setActiveType("all");
    setActiveWeather("all");
    setActiveDuration("all");
    setSearchQuery("");
  };

  const isFiltering = activeType !== "all" || activeWeather !== "all" || activeDuration !== "all" || searchQuery !== "";

  return (
    <>
      <Helmet>
        <title>Aktivity v okolí | Panorama house Brdy</title>
        <meta
          name="description"
          content="Objevte aktivity a výlety v okolí Panorama house Brdy. Filtrujte výlety podle počasí, náročnosti a typu."
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
                Zážitky na míru
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 delay-200">
                Co podniknout v okolí?
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed animate-fade-up opacity-0 delay-300">
                Naplánujte si svůj pobyt podle chuti. Vyberte si aktivitu, která odpovídá vašemu stylu, času i aktuálnímu počasí.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar Filters */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="space-y-4">
                    <h2 className="font-display text-2xl font-bold text-foreground">Vyhledávání</h2>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Hledat aktivitu..." 
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="font-display text-2xl font-bold text-foreground">Filtrování</h2>
                    <ActivityFilter 
                      activeType={activeType} 
                      setActiveType={setActiveType}
                      activeWeather={activeWeather}
                      setActiveWeather={setActiveWeather}
                      activeDuration={activeDuration}
                      setActiveDuration={setActiveDuration}
                    />
                  </div>
                </div>
              </aside>

              {/* Activities Grid */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-8">
                  <p className="text-muted-foreground">
                    Nalezeno <span className="font-bold text-foreground">{filteredActivities.length}</span> aktivit
                  </p>
                  {isFiltering && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={resetFilters}
                      className="text-primary hover:text-primary-light"
                    >
                      Zrušit vše
                    </Button>
                  )}
                </div>

                {filteredActivities.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {filteredActivities.map((activity, index) => (
                      <ActivityCard 
                        key={activity.id} 
                        activity={activity} 
                        index={index} 
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-muted/30 rounded-3xl border-2 border-dashed border-border">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <SearchX className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">Žádné aktivity nenalezeny</h3>
                    <p className="text-muted-foreground mb-6">Zkuste změnit hledaný výraz nebo filtry.</p>
                    <Button onClick={resetFilters}>
                      Zobrazit vše
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Chcete vědět víc?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Při příjezdu vám rádi poradíme s dalšími tipy na míru vašim zájmům. Brdy známe jako své boty!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Zpět na úvod
                  </Button>
                </Link>
                <a
                  href="https://www.booking.com/hotel/cz/panorama-house-brdy"
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
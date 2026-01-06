"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CloudRain, Sun, Clock, Map, Bike, Castle, Coffee, Timer } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterProps {
  activeType: string;
  setActiveType: (val: string) => void;
  activeWeather: string;
  setActiveWeather: (val: string) => void;
  activeDuration: string;
  setActiveDuration: (val: string) => void;
}

const ActivityFilter = ({
  activeType,
  setActiveType,
  activeWeather,
  setActiveWeather,
  activeDuration,
  setActiveDuration,
}: FilterProps) => {
  const types = [
    { id: "all", label: "Vše", icon: Map },
    { id: "turistika", label: "Pěšky", icon: Map },
    { id: "cyklistika", label: "Kolo", icon: Bike },
    { id: "kultura", label: "Kultura", icon: Castle },
    { id: "relax", label: "Relax", icon: Coffee },
  ];

  const weatherOptions = [
    { id: "all", label: "Libovolné", icon: Sun },
    { id: "sunny", label: "Slunečno", icon: Sun },
    { id: "rainy", label: "V dešti", icon: CloudRain },
  ];

  const durations = [
    { id: "all", label: "Jakákoliv", icon: Timer },
    { id: "short", label: "Do 2 hod", icon: Clock },
    { id: "medium", label: "2-5 hod", icon: Clock },
    { id: "long", label: "Celý den", icon: Clock },
  ];

  return (
    <Accordion type="multiple" defaultValue={["type", "duration"]} className="w-full">
      {/* Typ aktivity */}
      <AccordionItem value="type" className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          <span className="flex items-center gap-2">
            <Map className="w-4 h-4" /> Typ aktivity
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Button
                key={type.id}
                variant={activeType === type.id ? "nature" : "outline"}
                size="sm"
                onClick={() => setActiveType(type.id)}
                className="rounded-full h-8 px-3 text-xs"
              >
                {type.label}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Časová náročnost */}
      <AccordionItem value="duration" className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          <span className="flex items-center gap-2">
            <Timer className="w-4 h-4" /> Náročnost
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="flex flex-wrap gap-2">
            {durations.map((dur) => (
              <Button
                key={dur.id}
                variant={activeDuration === dur.id ? "nature" : "outline"}
                size="sm"
                onClick={() => setActiveDuration(dur.id)}
                className="rounded-full h-8 px-3 text-xs"
              >
                {dur.label}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Počasí */}
      <AccordionItem value="weather" className="border-none">
        <AccordionTrigger className="hover:no-underline py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground/80">
          <span className="flex items-center gap-2">
            <CloudRain className="w-4 h-4" /> Počasí
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-4">
          <div className="flex flex-wrap gap-2">
            {weatherOptions.map((opt) => (
              <Button
                key={opt.id}
                variant={activeWeather === opt.id ? "nature" : "outline"}
                size="sm"
                onClick={() => setActiveWeather(opt.id)}
                className="rounded-full h-8 px-3 text-xs"
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ActivityFilter;
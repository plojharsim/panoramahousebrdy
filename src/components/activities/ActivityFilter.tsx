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
    <Accordion type="multiple" defaultValue={["type"]} className="w-full">
      {/* Typ aktivity */}
      <AccordionItem value="type" className="border-none">
        <AccordionTrigger className="hover:no-underline py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          <span className="flex items-center gap-2">
            <Map className="w-3 h-3" /> Typ aktivity
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-3">
          <div className="flex flex-wrap gap-1.5">
            {types.map((type) => (
              <Button
                key={type.id}
                variant={activeType === type.id ? "nature" : "outline"}
                size="sm"
                onClick={() => setActiveType(type.id)}
                className="rounded-full h-7 px-2.5 text-[10px]"
              >
                {type.label}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Časová náročnost */}
      <AccordionItem value="duration" className="border-none">
        <AccordionTrigger className="hover:no-underline py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          <span className="flex items-center gap-2">
            <Timer className="w-3 h-3" /> Náročnost
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-3">
          <div className="flex flex-wrap gap-1.5">
            {durations.map((dur) => (
              <Button
                key={dur.id}
                variant={activeDuration === dur.id ? "nature" : "outline"}
                size="sm"
                onClick={() => setActiveDuration(dur.id)}
                className="rounded-full h-7 px-2.5 text-[10px]"
              >
                {dur.label}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Počasí */}
      <AccordionItem value="weather" className="border-none">
        <AccordionTrigger className="hover:no-underline py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          <span className="flex items-center gap-2">
            <CloudRain className="w-3 h-3" /> Počasí
          </span>
        </AccordionTrigger>
        <AccordionContent className="pb-3">
          <div className="flex flex-wrap gap-1.5">
            {weatherOptions.map((opt) => (
              <Button
                key={opt.id}
                variant={activeWeather === opt.id ? "nature" : "outline"}
                size="sm"
                onClick={() => setActiveWeather(opt.id)}
                className="rounded-full h-7 px-2.5 text-[10px]"
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
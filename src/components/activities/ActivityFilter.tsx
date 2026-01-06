"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CloudRain, Sun, Clock, Map, Bike, Castle, Coffee, Timer } from "lucide-react";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <Map className="w-4 h-4" /> Typ aktivity
        </h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <Button
              key={type.id}
              variant={activeType === type.id ? "nature" : "outline"}
              size="sm"
              onClick={() => setActiveType(type.id)}
              className="rounded-full h-9 px-4"
            >
              <type.icon className="w-3.5 h-3.5 mr-2" />
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <Timer className="w-4 h-4" /> Časová náročnost
        </h3>
        <div className="flex flex-wrap gap-2">
          {durations.map((dur) => (
            <Button
              key={dur.id}
              variant={activeDuration === dur.id ? "nature" : "outline"}
              size="sm"
              onClick={() => setActiveDuration(dur.id)}
              className="rounded-full h-9 px-4"
            >
              <dur.icon className="w-3.5 h-3.5 mr-2" />
              {dur.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          <CloudRain className="w-4 h-4" /> Podle počasí
        </h3>
        <div className="flex flex-wrap gap-2">
          {weatherOptions.map((opt) => (
            <Button
              key={opt.id}
              variant={activeWeather === opt.id ? "nature" : "outline"}
              size="sm"
              onClick={() => setActiveWeather(opt.id)}
              className="rounded-full h-9 px-4"
            >
              <opt.icon className="w-3.5 h-3.5 mr-2" />
              {opt.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFilter;
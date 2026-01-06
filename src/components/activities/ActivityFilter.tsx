"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CloudRain, Sun, Clock, Map, Bike, Castle, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterProps {
  activeType: string;
  setActiveType: (val: string) => void;
  activeWeather: string;
  setActiveWeather: (val: string) => void;
}

const ActivityFilter = ({
  activeType,
  setActiveType,
  activeWeather,
  setActiveWeather,
}: FilterProps) => {
  const types = [
    { id: "all", label: "Vše", icon: Map },
    { id: "turistika", label: "Pěšky", icon: Map },
    { id: "cyklistika", label: "Kolo", icon: Bike },
    { id: "kultura", label: "Kultura & Historie", icon: Castle },
    { id: "relax", label: "Relax & Jídlo", icon: Coffee },
  ];

  const weatherOptions = [
    { id: "all", label: "Libovolné", icon: Sun },
    { id: "sunny", label: "Jen slunečno", icon: Sun },
    { id: "rainy", label: "Vhodné i v dešti", icon: CloudRain },
  ];

  return (
    <div className="space-y-8 mb-12">
      <div className="flex flex-col space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <Map className="w-4 h-4" /> Typ aktivity
        </h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <Button
              key={type.id}
              variant={activeType === type.id ? "nature" : "outline"}
              size="sm"
              onClick={() => setActiveType(type.id)}
              className="rounded-full"
            >
              <type.icon className="w-4 h-4 mr-2" />
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <CloudRain className="w-4 h-4" /> Podle počasí
        </h3>
        <div className="flex flex-wrap gap-2">
          {weatherOptions.map((opt) => (
            <Button
              key={opt.id}
              variant={activeWeather === opt.id ? "accent" : "outline"}
              size="sm"
              onClick={() => setActiveWeather(opt.id)}
              className="rounded-full"
            >
              <opt.icon className="w-4 h-4 mr-2" />
              {opt.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFilter;
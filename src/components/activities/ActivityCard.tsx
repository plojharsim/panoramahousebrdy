"use client";

import React from "react";
import { LucideIcon, Clock, CloudRain, Sun } from "lucide-react";

export interface Activity {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  type: "turistika" | "cyklistika" | "kultura" | "relax";
  weather: "sunny" | "both";
  duration: "short" | "medium" | "long";
}

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const durationLabels = {
    short: "Do 2 hod",
    medium: "2-5 hod",
    long: "Celodenní",
  };

  return (
    <div
      className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 border border-border/50 animate-fade-up opacity-0"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <activity.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/5 text-primary text-xs font-semibold">
              <Clock className="w-3 h-3 mr-1" /> {durationLabels[activity.duration]}
            </span>
            {activity.weather === "both" ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                <CloudRain className="w-3 h-3 mr-1" /> Vhodné v dešti
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
                <Sun className="w-3 h-3 mr-1" /> Za sluníčka
              </span>
            )}
          </div>
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
  );
};

export default ActivityCard;
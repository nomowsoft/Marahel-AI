"use client";
import { useState, useEffect } from "react";
import { MapPin, Bot, Route, LayoutGrid, Navigation} from "lucide-react";
import { useTranslations } from "next-intl";

export const EventNavigationDemo = () => {
  const [currentBooth, setCurrentBooth] = useState(0);
  const [activeEngine, setActiveEngine] = useState(0);
  const t = useTranslations('Events');

  // بيانات الأركان مباشرة في الملف
  const booths = [
    { x: "10%", y: "20%", name: "ركن الحكومة", location: "القاعة A", room: "A1" },
    { x: "40%", y: "35%", name: "ركن المالية", location: "القاعة B", room: "B2" },
    { x: "70%", y: "25%", name: "ركن الصحة", location: "القاعة C", room: "C3" },
    { x: "30%", y: "70%", name: "ركن الطاقة", location: "القاعة D", room: "D4" },
    { x: "60%", y: "80%", name: "ركن التعليم", location: "القاعة E", room: "E5" },
  ];

  const engines = [
    { name: "MPE", label: "محرك تحديد المواقع", icon: Navigation, color: "from-primary/70 to-accent/30" },
    { name: "MORE", label: "محرك الطريق الأمثل", icon: Route, color: "from-purple-500 to-purple-600" },
    { name: "MSP", label: "مخطط المواقع", icon: LayoutGrid, color: "from-primary to-primary" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBooth(prev => (prev + 1) % booths.length);
    }, 2500);
    const engineInterval = setInterval(() => {
      setActiveEngine((prev) => (prev + 1) % engines.length);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearInterval(engineInterval);
    };
  }, [booths.length]);

  return (
    <div className="w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 relative overflow-hidden p-6">
      
      {/* Header */}
      <div className="mb-4 p-4 rounded-xl bg-gradient-to-b from-background/90 to-transparent backdrop-blur-sm flex items-center justify-between">
        <div>
          <h4 className="font-bold text-foreground">{t('title')}</h4>
          <p className="text-xs text-muted-foreground">{t('p')}</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold">
          AI Guide Active
        </div>
      </div>


      <div className="flex items-center justify-center gap-3 mb-3">
          {engines.map((engine, idx) => {
            const Icon = engine.icon;
            const isActive = idx === activeEngine;
            return (
              <div key={idx} className="flex flex-col items-center relative w-1/1 md:w-1/4">
                <div
                  className={`w-15 h-15 rounded-xl bg-gradient-to-br ${engine.color} flex items-center justify-center transition-all duration-500 ${
                    isActive ? "scale-110 shadow-lg" : "opacity-60 scale-95"
                  }`}
                >
                  <Icon className="w-8 h-8 text-white" />
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
                  )}
                </div>
                <span className="font-bold mt-1 text-foreground text-lg">{engine.name}</span>
                <span className="text-sm text-muted-foreground text-center">{engine.label}</span>
                
                {/* Connection Arrow */}
                {/* {idx < engines.length - 1 && (
                  <div className="absolute -left-4 top-5 w-8 h-0.5 bg-gradient-to-l from-primary/50 to-transparent"></div>
                )} */}
              </div>
            );
          })}
        </div>
      {/* Map */}
      <div className="relative w-full h-[400px] bg-background/40 rounded-xl border border-border/50">
        {/* Path */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path
            d={booths.map((b, i) => `${i === 0 ? 'M' : 'L'} ${b.x} ${b.y}`).join(' ')}
            stroke="url(#pathGradient)"
            strokeWidth="3"
            fill="none"
            strokeDasharray="8,4"
            className="animate-pulse"
          />
        </svg>

        {/* Booth Markers */}
        {booths.map((booth, idx) => (
          <div
            key={idx}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center transition-all duration-500"
            style={{ left: booth.x, top: booth.y }}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                idx === currentBooth
                  ? "bg-primary text-primary-foreground scale-110 animate-pulse"
                  : "bg-border text-muted-foreground"
              }`}
            >
              {idx === currentBooth ? <Bot className="w-5 h-5" /> : <MapPin className="w-4 h-4" />}
            </div>
            <p className="text-xs text-center mt-1 text-foreground font-medium whitespace-nowrap">
              {booth.name}
            </p>
          </div>
        ))}
      </div>

      {/* Booth Details */}
      <div className="mt-4 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/30 animate-fade-in">
        <h5 className="font-bold text-foreground mb-1">{booths[currentBooth].name}</h5>
        <div className="text-xs text-muted-foreground flex gap-2 items-center">
          <MapPin className="w-3 h-3" />
          <span>{booths[currentBooth].location}</span>
          <span className="px-2 py-0.5 rounded bg-accent/20 text-accent font-bold">
            {booths[currentBooth].room}
          </span>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

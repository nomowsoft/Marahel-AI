"use client";
import { useState, useEffect } from "react";
import { Route, LayoutGrid, Navigation } from "lucide-react";
import { useTranslations } from "next-intl";

export const EventNavigationDemo = () => {
  const [activeEngine, setActiveEngine] = useState(0);
  const t = useTranslations('Events');

  const engines = [
    { name: "MPE", label: t('label1'), icon: Navigation, color: "from-primary/70 to-accent/30" },
    { name: "MORE", label: t('label2'), icon: Route, color: "from-purple-500 to-purple-600" },
    { name: "MSP", label: t('label3'), icon: LayoutGrid, color: "from-primary to-primary" },
  ];

  useEffect(() => {
    const engineInterval = setInterval(() => {
      setActiveEngine((prev) => (prev + 1) % engines.length);
    }, 2000);
    return () => {
      clearInterval(engineInterval);
    };
  });

  return (
    <div className="w-full h-full bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 relative overflow-hidden p-6">
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
                className={`w-15 h-15 rounded-xl bg-gradient-to-br ${engine.color} flex items-center justify-center transition-all duration-500 ${isActive ? "scale-110 shadow-lg" : "opacity-60 scale-95"
                  }`}
              >
                <Icon className="w-8 h-8 text-white" />
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-white/20 animate-pulse"></div>
                )}
              </div>
              <span className="font-bold mt-1 text-foreground text-lg">{engine.name}</span>
              <span className="text-sm text-muted-foreground text-center">{engine.label}</span>
            </div>
          );
        })}
      </div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

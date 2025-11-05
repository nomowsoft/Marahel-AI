"use client";
import { useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { getNodes } from "@/utils/data";
import { useTranslations } from "next-intl";

export const SystemArchitecture = () => {
  const t = useTranslations('Nodes');
  const values = getNodes(t) 
  const [activeConnection, setActiveConnection] = useState(0);

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 3 },
    { from: 3, to: 2 },
    { from: 2, to: 0 },
    { from: 0, to: 3 },
    { from: 1, to: 2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConnection((prev) => (prev + 1) % connections.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [connections.length]);

  return (
    <div className="relative w-full h-auto md:h-[600px] bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col items-center justify-center">
      {/* Center Hub (Hidden on small screens) */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
          <Zap className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Responsive Node Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-12 w-full md:w-[80%] justify-items-center md:absolute md:inset-0 md:m-auto">
        {values.map((node, idx) => {
          const Icon = node.icon;
          const isActive =
            connections[activeConnection]?.from === idx ||
            connections[activeConnection]?.to === idx;

          // Positions for large screens only
          const positions = [
            "md:absolute md:top-[20%] md:left-[25%]",
            "md:absolute md:top-[20%] md:right-[25%]",
            "md:absolute md:bottom-[20%] md:left-[25%]",
            "md:absolute md:bottom-[20%] md:right-[25%]",
          ];

          return (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center transition-all duration-500 ${
                isActive ? "scale-110" : ""
              } ${positions[idx] || ""}`}
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-${node.color}/20 to-${node.color}/5 border-2 ${
                  isActive ? `border-${node.color}` : "border-border"
                } flex items-center justify-center transition-all duration-500 relative`}
              >
                <Icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${node.color}`} />
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping"></div>
                )}
              </div>
              <p className="text-sm sm:text-base text-center mt-2 text-muted-foreground font-medium">
                {node.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* Connection Lines (Only on large screens) */}
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {connections.map((_, idx) => {
          const isActive = idx === activeConnection;
          return (
            <line
              key={idx}
              x1="50%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke={isActive ? "url(#lineGradient)" : "hsl(var(--border))"}
              strokeWidth={isActive ? "3" : "1"}
              strokeDasharray={isActive ? "0" : "5,5"}
              className="transition-all duration-500"
              opacity={isActive ? "1" : "0.3"}
            />
          );
        })}
      </svg>

      {/* Data Flow Indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-fade-in">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <span className="text-xs sm:text-sm text-primary font-bold">{t('transfeer')}</span>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>
  );
};

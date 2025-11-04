"use client";
import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { getNodes } from "@/utils/data";

export const SystemArchitecture = () => {
  const t = useTranslations("Nodes");
  const values = getNodes(t);

  // نصف القطر يعتمد على أصغر بعد بين العرض والارتفاع
  const radius = typeof window !== "undefined" ? Math.min(window.innerWidth, window.innerHeight) * 0.3 : 200;
  const speed = 0.002;
  const [progress, setProgress] = useState(0);
 const animationRef = useRef<number | null>(null);

  const getNodePosition = (index: number) => {
    const angle = (index / values.length) * 2 * Math.PI;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const animate = () => {
    setProgress((prev) => (prev + speed) % 1);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
  animationRef.current = requestAnimationFrame(animate);
  return () => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
  };
}, []);

  const totalSegments = values.length;
  const segmentProgress = progress * totalSegments;
  const stepIndex = Math.floor(segmentProgress) % values.length;
  const nextStepIndex = (stepIndex + 1) % values.length;
  const localProgress = segmentProgress - Math.floor(segmentProgress);

  const fromPos = getNodePosition(stepIndex);
  const toPos = getNodePosition(nextStepIndex);

  const pointX = fromPos.x + (toPos.x - fromPos.x) * localProgress;
  const pointY = fromPos.y + (toPos.y - fromPos.y) * localProgress;

  return (
    <div className="relative flex items-center justify-center w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-card/50 rounded-2xl overflow-hidden">
      {/* المركز */}
      <div className="absolute w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
        <div className="w-16 sm:w-24 h-16 sm:h-24 bg-card rounded-full flex items-center justify-center">
          <Zap className="w-6 sm:w-10 h-6 sm:h-10 text-primary" />
        </div>
      </div>

      {/* الخطوط الخلفية والتوهج */}
      <svg className="absolute w-full h-full" viewBox="-400 -400 800 800">
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {values.map((_, idx) => {
          const nextIdx = (idx + 1) % values.length;
          const start = getNodePosition(idx);
          const end = getNodePosition(nextIdx);

          let lineProgress = 1;
          if (idx === stepIndex) lineProgress = localProgress;
          if (idx > stepIndex) lineProgress = 0;

          const x2 = start.x + (end.x - start.x) * Math.min(lineProgress, 1);
          const y2 = start.y + (end.y - start.y) * Math.min(lineProgress, 1);

          return (
            <line
              key={idx}
              x1={start.x}
              y1={start.y}
              x2={x2}
              y2={y2}
              stroke="url(#glowGradient)"
              strokeWidth={4}
              strokeLinecap="round"
              filter="url(#glow)"
              opacity={0.9}
            />
          );
        })}
      </svg>

      {/* النودات */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {values.map((node, idx) => {
          const Icon = node.icon;
          const { x, y } = getNodePosition(idx);
          const isActive = idx === stepIndex;

          return (
            <div
              key={idx}
              className="absolute flex flex-col items-center transition-all duration-500"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <div
                className={`w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-2xl border-2 flex items-center justify-center bg-gradient-to-br from-${node.color}/20 to-${node.color}/5 transition-all duration-500 ${
                  isActive ? `border-${node.color} scale-110 shadow-lg` : "border-border"
                }`}
              >
                <Icon
                  className={`w-6 sm:w-8 md:w-10 ${
                    isActive ? `text-${node.color}` : "text-muted-foreground"
                  }`}
                />
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping"></div>
                )}
              </div>
              <p
                className={`text-xs sm:text-sm md:text-base mt-1 sm:mt-2 ${
                  isActive ? "text-primary font-bold" : "text-muted-foreground"
                }`}
              >
                {node.label}
              </p>
            </div>
          );
        })}
      </div>

      {/* النقطة المتحركة */}
      <div
        className="absolute w-3 sm:w-5 h-3 sm:h-5 rounded-full bg-primary shadow-xl transition-all duration-50"
        style={{ transform: `translate(${pointX}px, ${pointY}px)` }}
      ></div>

      {/* مؤشر النص */}
      <div className="absolute top-6 flex items-center left-10 gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <span className="text-sm sm:text-base text-primary font-bold">{t("transfeer")}</span>
      </div>
    </div>
  );
};

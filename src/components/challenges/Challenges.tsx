import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { getChallenges } from "@/utils/data";
import { useTranslations } from "next-intl";
import { SystemArchitecture } from "../animations/file4";


export const Challenges: React.FC = () => {
  const t = useTranslations('Challenges');
  const values = getChallenges(t) 
  return (
    <section id="challenges" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-screen-xl mx-auto mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('p')}
          </p>
        </div>
        <div className="w-full mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <SystemArchitecture />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {values.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-${challenge.color}/10 flex items-center justify-center mb-6 group-hover:glow-${challenge.color} transition-all duration-300`}
                >
                  <Icon className={`w-8 h-8 text-${challenge.color}`} />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {challenge.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">{t('marahel')}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-primary mb-2">
                      {t('globalcloud')}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {challenge.global}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground glow-primary md:text-lg"
          >
            <Download className="ml-2 h-5 w-5" />
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

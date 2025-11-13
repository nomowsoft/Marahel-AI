"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import React from "react";
import { gethero } from "@/utils/data";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Card } from "../ui/card";
import { getdatahero } from "@/utils/data";

const Hero: React.FC = () => {
  const t = useTranslations('Hero');
  const datahero  = getdatahero(t);
  const localActive = useLocale();
  const values = gethero(t);
  return (
    <section className="relative min-h-screen my-auto flex items-center justify-center overflow-hidden px-4 pb-8">

      {/* 🔹 Background Layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* 🔹 Floating Orbs */}
      <div className="absolute top-10 right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* 🔹 Content */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView="auto"
        spaceBetween={0}
        speed={1000}
        centeredSlides={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1440: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <div className="container mx-auto relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in px-2 sm:px-6 md:px-10">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">{t('title1')}</span>
                <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 mb-10">
                  {t('title2')}
                </span>
                <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent block mt-3 text-xl sm:text-2xl md:text-3xl">
                  {t('sub_title')}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('p1')}
                <br className="hidden sm:block" />
                {t('p2')}
              </p>

              {/* 🔹 Feature Icons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 max-w-4xl mx-auto">
                {values.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center ${item.bg}`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm sm:text-base text-foreground font-medium text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 🔹 Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link
                  href={`${localActive}/solutions`}
                  className="bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground glow-primary group text-base sm:text-lg px-6 sm:px-8 py-3 flex items-center"
                >
                  {t('button1')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="text-muted-foreground border-2 rounded-xl border-primary/50 hover:bg-primary/10 hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group"
                >
                  <Play className="ml-2 h-5 w-5" />
                  {t('button2')}
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {datahero.map((item, index) => {
          return (
              <SwiperSlide key={index}>
                <div className="container mx-auto relative z-10">
                  <div className="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto text-center space-y-8 animate-fade-in px-2 sm:px-6 md:px-10">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
                      <span className="text-foreground">{item.title}</span>
                      <span className="bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent block mt-3 text-xl sm:text-2xl md:text-3xl">
                        {item.subtitle}
                      </span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {item.features.map((feat) => {
                        const Icon = feat.icon;
                        return (
                          <Card
                            key={feat.id}
                            className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up"
                            style={{ animationDelay: `${feat.id * 0.2}s` }}
                          >
                            <div
                              className="w-16 h-12 rounded-2xl  flex items-center justify-center  transition-all duration-300 bg-primary/20 py-8"
                            >
                              <Icon className="w-10 h-10  text-primary" />
                            </div>
                            <h1 className="text-primary text-start mt-4 text-xl">{feat.title}</h1>
                            <p className="text-muted-foreground mt-4 text-start">{feat.description}</p>
                          </Card>
                        );
                      })}
                    </div>
                    <div>
                        {item.cta.map((cta) =>{
                          return(
                            <div key={cta.id} className="flex flex-col md:flex-row justify-center gap-5">
                              <Link href="#" className={`text-base border border-primary rounded-xl py-2 px-10 text-foreground hover:bg-accent/10 hover:text-accent ${cta.primary ? 'bg-primary text-primary-foreground' : ''}`}>
                                {cta.primary}
                              </Link>
                              <Link href="#" className={`border border-primary rounded-xl py-2 px-10 text-base text-foreground hover:bg-primary/10 hover:text-primary ${cta.secondary ? 'text-primary' : ''}`}>
                                {cta.secondary}
                              </Link>
                            </div>
                          );
                        })}
                    </div>
                    <h1 className="text-2xl text-accent">
                      {item.footer}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;

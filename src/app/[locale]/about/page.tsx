import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { getValues, getChoseMarahel, getDescriptionTeam, getDataAbout } from "@/utils/data";

const About = () => {
  const t = useTranslations('about');
  const localActive = useLocale();
  const values = getValues(t);
  const choseMarahel = getChoseMarahel(t);
  const descriptionteam = getDescriptionTeam(t);
  const dataabout = getDataAbout(t);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-primary">
              {t('abouttitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('aboutdescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">{t('ourteam')}</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {dataabout.map((item, index) => (
                <Card
                  key={index}
                  className="rounded-3xl border border-accent py-5 transition-transform hover:scale-105 px-4"
                >
                  <div className="flex justify-center">
                    <Image
                      src={item.image}
                      alt=""
                      width={90}
                      height={90}
                      className="rounded-full border-4 border-primary w-20 h-20 sm:w-24 sm:h-24 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h1 className="my-3 text-primary text-lg">
                      {item.name}
                    </h1>
                    <p className="text-sm text-accent">
                      {item.dept}
                    </p>
                    <p className="text-sm text-foreground mt-2">
                      {item.certificate}
                    </p>
                    <p className="text-sm text-foreground/50 mt-2">
                      {item.experiance}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 ">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {descriptionteam.map((item) => {
              return(
                <Card className="border-2 border-primary rounded-3xl transition-transform hover:scale-105" key={item.id}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-background max-w-screen-lg mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t('story.title')}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  {t('story.p1')}
                </p>
              </div>
              <div className="mt-10">
                <Link href={`/${localActive}/contactus`} className="mt-10 border border-primary bg-primary hover:bg-accent hover:border-accent rounded-lg text-xl px-4 ">
                  {t('story.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 ">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary rounded-3xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('message.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('message.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary rounded-3xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('vision.title')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('values.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('values.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary rounded-3xl">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 ">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('whychose')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {choseMarahel.map((item) => {
              const Icon = item.icon;
              return(
                <Card key={item.id} className="border-2 border-primary rounded-3xl transition-transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

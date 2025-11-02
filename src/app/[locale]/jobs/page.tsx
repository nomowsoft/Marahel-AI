import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { MapPin, Briefcase } from "lucide-react";
import { useTranslations } from "next-intl";
import { getJobs, getBenefits } from "@/utils/data";
import { TalentCommunityForm } from "@/components/request_job/request_job";

const Jobs = () => {
  const t = useTranslations("jobs");
  const jobs = getJobs(t);
  const benefits = getBenefits(t);
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-primary">
              {t('jobstitle')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('jobsdescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground"> {t('jobstitle1')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('jobsdescription1')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg border border-primary rounded-3xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-down">
                <CardHeader>
                  <CardTitle className="text-xl">{benefit.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      {/* <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground"> {t('jobstitle2')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('jobsdescription2')}
            </p>
          </div>

          <div className="grid gap-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-xl border border-primary rounded-3xl hover:border-primary/50 transition-all duration-300 group hover:scale-105 animate-slide-up">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {job.type}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg">{t('requirments')}:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{req.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full md:w-auto" size="lg">
                    {t('requestjob')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-xl text-muted-foreground mb-8">
            {t('notdescription')}
          </p>
          <TalentCommunityForm />
          {/* <Button size="lg" className="text-lg px-8">
            {t('cv')}
          </Button> */}
        </div>
      </section>
    </div>
  );
};

export default Jobs;

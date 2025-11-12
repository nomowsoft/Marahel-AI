"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { getContactInfo } from "@/utils/data";
import { toast } from 'react-toastify';
import Link from "next/link";

export default function ContactUs() {
  const t = useTranslations("contactus");
  const contactInfo = getContactInfo(t);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone: string) =>
    /^[\d+]/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { name, email, company, phone, message } = formData;
      if (!name || !email || !company || !phone || !message) {
        toast.error(t('errorFieldRequired'));
        return;
      }
      if (!isValidEmail(email)) {
        toast.error(t('errorEmail'));
        return;
      }

      if (!isValidPhone(phone)) {
        toast.error(t('errorPhone'));
        return;
      }
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(t('successData'));
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(t('errorData'));
      }
    } catch {
      toast.error(t('errorServer'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary to-primary/60 bg-clip-text text-primary">
              {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-primary rounded-xl">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} dir={`${info.link === 'tel:+966112345678' ? 'ltr' : ''}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground" dir={`${info.link === 'tel:+966112345678' ? 'ltr' : ''}`}>{info.content}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">{t('form.title')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">{t('form.filedname')}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('form.placeholdername')}
                      className="text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">{t('form.filedemail')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('form.placeholderemail')}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">{t('form.filedcompany')}</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('form.placeholdercompany')}
                      className="text-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">{t('form.filedphone')}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('form.placeholderphone')}
                      className="text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">{t('form.filedmessage')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder={t('form.placeholdermessage')}
                    className="resize-none text-muted-foreground"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  <Send className="ml-2 h-4 w-4" />
                  {t('form.button')}
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">{t('help.title')}</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {t('help.description1')}
                  </p>
                  <p>
                    {t('help.description2')}
                  </p>
                </div>
              </div>

              {/* <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4">{t('support.title')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('support.description')}
                  </p>
                  <Button variant="outline" className="w-full">
                    {t('support.button')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-4">{t('book.title')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('book.description')}
                  </p>
                  <Button className="w-full">
                    {t('book.button')}
                  </Button>
                </CardContent>
              </Card> */}

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-foreground">{t('socialmedia.title')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('socialmedia.description')}
                </p>
                <div className="flex gap-4">
                  <Link href="https://x.com/marahelksa" target="new">
                    <Button variant="outline" size="icon" className="rounded-full text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2H21.5l-7.5 8.574L22 22h-6.27l-4.9-6.207L5.3 22H2l7.925-9.068L2.5 2h6.345l4.438 5.647L18.244 2zM17.1 20h1.57L7.09 4h-1.6L17.1 20z" />
                      </svg>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/company/marahelksa/" target="new">
                    <Button variant="outline" size="icon" className="rounded-full text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </Button>
                  </Link>
                  <Link href="https://www.facebook.com/MarahelKsa/" target="new">
                    <Button variant="outline" size="icon" className="rounded-full text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

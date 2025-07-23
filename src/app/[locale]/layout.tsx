import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

type Locale = 'en' | 'ar';

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  const messages = await getMessages();
  if (!routing.locales.includes(locale as Locale) || !messages) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/header/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </head>
      <body className="font-doto bg-gray-0 bg-[url('/hero/Home2.svg')] bg-cover bg-no-repeat">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <div className={`fixed bottom-10 ${locale === 'ar' ? 'left-10' : 'right-10'}`}>
            <Link href="https://wa.me/+9660548377947" target="_blank" className="block lg:hidden">
              <Image src="/header/whatsapp.png" alt="..." width={60} height={20} />
            </Link>
            <Link href="https://web.whatsapp.com/send?phone=+966 0548377947" target="_blank" className="hidden lg:block">
              <Image src="/header/whatsapp.png" alt="..." width={60} height={20} />
            </Link>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

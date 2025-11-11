import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Metadata } from "next";
import { Footer } from "@/components/footer/Footer";

type Locale = 'en' | 'ar';

export const metadata:Metadata = {
  metadataBase: new URL("https://marahel.ai"),
  title: {
    default: "Marahel Ai",
    template: `%s | Marahel Ai`
  },
  description:"Marahel Ai",
  verification: {
    google:"i4VQGTbQiBjuPpOvhZCDutFf7"
  },
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  const messages = await getMessages();
  if (!routing.locales.includes(locale as Locale) || !messages) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
          <link rel="icon" href="/navbar/MarahelAI.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </head>
      <body className="font-doto bg-background">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>
            {children}
            <ToastContainer />
          </main>
          <Footer />
          <div className={`fixed bottom-10 z-99 ${locale === 'ar' ? 'left-10' : 'right-10'}`}>
            <Link href="https://wa.me/+9660534551191" target="_blank" className="block lg:hidden">
              <Image src="/navbar/whatsapp.png" alt="..." width={60} height={20} />
            </Link>
            <Link href="https://web.whatsapp.com/send?phone=+966 0534551191" target="_blank" className="hidden lg:block">
              <Image src="/navbar/whatsapp.png" alt="..." width={60} height={20} />
            </Link>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

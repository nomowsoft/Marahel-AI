"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navlink from "./nav_link";
import Link from "next/link";
import LocaleSwitcher from "./swich_locale";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isArabic = locale === "ar";

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // إغلاق القائمة عند الانتقال لصفحة أخرى
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // إغلاق القائمة عند تكبير الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`${pathname === `/${locale}/morshed` ? "hidden" : ""} lg:mt-8`}>
      <nav className="bg-white border-gray-200 px-4 lg:px-1 relative w-full">
        <div className="flex flex-wrap justify-between items-center xl:mx-20 relative">
          {/* الشعار والتنقل */}
          <div className="flex items-center my-2">
            <Link href="/" className="flex items-center">
              <Image height={20} width={250} src="/header/Frame 8.svg" alt="Logo" />
            </Link>
            <div className="hidden lg:flex">
              <Navlink />
            </div>
          </div>

          {/* القائمة العلوية على الأجهزة الكبيرة */}
          <div className="hidden lg:flex items-center space-x-4">
            <LocaleSwitcher />
            <Link
              dir="rtl"
              href="#"
              className="mx-1 border border-primary py-1 px-2 rounded-md flex items-center"
            >
              <span className="mx-2 text-primary font-extrabold">947 377 548 966+</span>
              <div className="flex items-center">
                <Image height={0} width={40} src="/header/phone.svg" alt="phone" />
              </div>
            </Link>
            <Link
              href={`/${locale}/contact_us`}
              className="bg-primary border border-primary py-2.5 px-2 rounded-md flex justify-center items-center"
            >
              <span className="px-2 text-white font-extrabold">{t('contactus')}</span>
            </Link>
          </div>

          {/* زر فتح القائمة الجوالية */}
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center p-1 text-sm text-primary rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 border border-primary"
          >
            <span className="sr-only">فتح القائمة الرئيسية</span>
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* القائمة الجوالية */}
          <div
            id="mobile-menu"
            className={`absolute z-30 top-28 py-4 w-full bg-white shadow-lg text-center transition-all duration-300 ease-in-out lg:hidden
              ${isArabic ? "right-0" : "left-0"}
              ${isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : isArabic
                  ? "opacity-0 translate-x-full"
                  : "opacity-0 -translate-x-full"
              }`}
          >
            <Navlink />

            <div className="mt-8">
              <Link
                href="#"
                className="mx-2 border border-secondary py-2 px-4 rounded-md flex justify-center items-center"
              >
                <span className="mx-2 text-xl text-primary font-extrabold" dir="rtl">
                  947 377 548 966+
                </span>
                <div className="flex justify-center items-center">
                  <Image height={0} width={40} src="/header/phone.svg" alt="phone" />
                </div>
              </Link>
            </div>

            <div className="mt-4">
              <Link
                href={`/${locale}/contact_us`}
                className="bg-primary mx-2 border border-primary py-2.5 px-2 rounded-md flex justify-center items-center"
              >
                <span className="px-2 text-white font-extrabold">{t('contactus')}</span>
              </Link>
            </div>

            <div className="mt-4">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ProductsDropdown,
  ProductsDropdownMobile,
} from "./product_dropdown";
import {
  SolutionsDropdown,
  SolutionsDropdownMobile,
} from "./solutions_dropdown";

import {
  CompanyDropdown,
  CompanyDropdownMobile,
} from "./company_dropdown";

import { ServiceDropdown, ServiceDropdownMobile } from "./service_dropdown";
import { BlogsDropdown, BlogsDropdownMobile } from "./blogs_dropdown";

const DESKTOP_MENUS = [
  ProductsDropdown,
  ServiceDropdown,
  SolutionsDropdown,
  BlogsDropdown,
  CompanyDropdown,
];

const MOBILE_MENUS = [
  ProductsDropdownMobile,
  ServiceDropdownMobile,
  SolutionsDropdownMobile,
  BlogsDropdownMobile,
  CompanyDropdownMobile,
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();
  const t = useTranslations("Header");
  const t1 = useTranslations("MenuItem");

  const changeLocale = useCallback(
    (nextLocale: string) => {
      if (nextLocale === localeActive) return;
      const segments = pathname.split("/");
      if (["ar", "en"].includes(segments[1])) {
        segments[1] = nextLocale;
      } else {
        segments.splice(1, 0, nextLocale);
      }
      router.push(segments.join("/") || "/");
      setIsOpen(false);
    },
    [localeActive, pathname, router]
  );

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/navbar/MarahelAI.svg"
              alt="Marahel AI"
              width={110}
              height={24}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary font-medium transition"
            >
              {t1("home")}
            </Link>
            {DESKTOP_MENUS.map((Dropdown, i) => (
              <NavigationMenu key={i}>
                <NavigationMenuList>
                  <Dropdown />
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-border">
                  <Globe className="h-5 w-5 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {["ar", "en"].map((locale) => (
                  <DropdownMenuItem
                    key={locale}
                    onClick={() => changeLocale(locale)}
                    className={`cursor-pointer ${localeActive === locale
                        ? "bg-primary/10 text-primary"
                        : "text-foreground"
                      }`}
                  >
                    {locale === "ar" ? "العربية" : "English"}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={`/${localeActive}/contactus`}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition"
            >
              {t("contactus")}
            </Link>
          </div>

          {/* Mobile Button */}
          {isOpen &&
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6 text-slate-500" />
            </Button>
          }
          {!isOpen &&
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6 text-primary" />
            </Button>
          }
        </div>
      </div>

      {/* ======= Mobile Menu Drawer ======= */}
      {isOpen && (
        <div className="inset-0 z-[999] flex bg-slate-900/60 backdrop-blur-sm lg:hidden mb-20">
          {/* Drawer content */}
          <div className="bg-primary/1 shadow-xl px-5 py-6 overflow-y-scroll animate-slideIn w-full max-h-screen">
            {/* Menus */}
            <div className="space-y-4">
              {MOBILE_MENUS.map((DropdownMobile, i) => (
                <DropdownMobile key={i} onLinkClick={handleLinkClick} />
              ))}
            </div>

            {/* Language Switch */}
            <div className="mt-6 flex gap-2">
              {["ar", "en"].map((locale) => (
                <Button
                  key={locale}
                  variant={localeActive === locale ? "default" : "outline"}
                  onClick={() => changeLocale(locale)}
                  className={`flex-1 ${localeActive === locale ? '' : 'text-accent'}`}
                >
                  {locale === "ar" ? "العربية" : "English"}
                </Button>
              ))}
            </div>

            {/* Contact Us */}
            <div>
              <Link
                href={`/${localeActive}/contactus`}
                onClick={handleLinkClick}
                className="block mt-2 text-center bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-md font-medium transition mb-40"
              >
                {t("contactus")}
              </Link>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

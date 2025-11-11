import React from "react";
import { MapPin, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getCompany, getProductsFooter, getSolutions } from "@/utils/data";


export const Footer: React.FC = () => {
  const activelocal = useLocale();
  const t = useTranslations('Footer');
  const productsfooter = getProductsFooter(t);
  const solutions = getSolutions(t);
  const company = getCompany(t);
  return (
    <footer className="border-t border-border bg-[#0f1729]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/navbar/MarahelAI.svg"
                alt="Marahel AI Logo"
                width={100}
                height={20}
                priority
              />
            </div>
            <p className="text-muted-foreground text-sm">
              {t('description')}
            </p>

            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>CRN: 1010963775</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>VAT: 311966011400003</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('products')}</h3>
            <ul className="space-y-2 text-sm">
              {productsfooter.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${activelocal}/products/${item.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('solutions')}</h3>
            <ul className="space-y-2 text-sm">
              {solutions.map(
                (solution) => (
                  <li key={solution.name}>
                    <Link
                      href={`/${activelocal}/solutions`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {solution.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('company')}</h3>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/${activelocal}${item.href}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 {t('save')}</p>
          {/* <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              {t('privacy')}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {t('terms')}
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              {t('cookie')}
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

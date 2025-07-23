"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const changeLocale = (nextLocale: string) => {
    const newPath = `/${nextLocale}${pathname.replace(`/${localeActive}`, "")}`;
    router.push(newPath);
  };

  return (
    <div>
      <div className="flex justify-center" dir="rtl">
        <select
          defaultValue={localeActive}
          onChange={(e) => changeLocale(e.target.value)}
          className="text-primary bg-transparent focus:border focus:border-white text-center"
        >
          <option value="ar">عربي</option>
          <option value="en">English</option>
        </select>
        <Image src="/header/swich_language.svg" alt="" width={40} height={10} />
      </div>
    </div>
  );
}
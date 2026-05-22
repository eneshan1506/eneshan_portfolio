"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS = {
  de: "DE",
  tr: "TR",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  return (
    <nav
      className="flex items-center gap-1 rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(3,0,20,0.37)] p-1 text-xs font-semibold text-gray-200"
      aria-label={t("label")}
    >
      {routing.locales.map((targetLocale) => {
        const isActive = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={pathname}
            locale={targetLocale}
            prefetch={false}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-3 py-2 transition ${
              isActive
                ? "bg-[#00D4FF] text-[#030014]"
                : "hover:text-[#00D4FF] focus-visible:text-[#00D4FF]"
            }`}
          >
            {LOCALE_LABELS[targetLocale]}
          </Link>
        );
      })}
    </nav>
  );
}

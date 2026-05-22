import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";
import { StarsCanvas } from "@/app/components/StarBackground";
import { routing } from "@/i18n/routing";

import "../globals.css";

export const viewport = {
  themeColor: "#030014",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
        <NextIntlClientProvider>
          <StarsCanvas />
          <Navbar />
          {children}
          <ScrollToTopButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Caveat, DM_Sans, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/app/components/Footer";
import { HashScroll } from "@/app/components/HashScroll";
import { Navbar } from "@/app/components/Navbar";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";
import { StarsCanvas } from "@/app/components/StarBackground";
import { routing } from "@/i18n/routing";

import "../globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const accentFont = Caveat({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

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
    <html
      lang={locale}
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
    >
      <body className="overflow-x-hidden overflow-y-scroll bg-[#030014] font-sans antialiased">
        <NextIntlClientProvider>
          <HashScroll />
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

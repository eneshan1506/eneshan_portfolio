import { getTranslations, setRequestLocale } from "next-intl/server";

import { Hero } from "@/app/components/Hero";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("HomePage");

  return (
    <main className="h-full w-full">
      <p className="sr-only">{t("intro")}</p>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}

import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPage, LegalSection } from "@/app/components/LegalPage";
import { SITE_LEGAL } from "@/constants";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Impressum" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ImpressumPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Impressum");

  return (
    <LegalPage title={t("title")}>
      <LegalSection title={t("providerTitle")}>
        <p>{t("providerIntro")}</p>
        <p>
          {SITE_LEGAL.name}
          <br />
          {SITE_LEGAL.city}
        </p>
      </LegalSection>

      <LegalSection title={t("contactTitle")}>
        <p>
          {t("email")}:{" "}
          <a
            href={`mailto:${SITE_LEGAL.email}`}
            className="text-[#00D4FF] transition hover:underline"
          >
            {SITE_LEGAL.email}
          </a>
          <br />
          {t("website")}:{" "}
          <a
            href={SITE_LEGAL.website}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[#00D4FF] transition hover:underline"
          >
            {SITE_LEGAL.website}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t("liabilityTitle")}>
        <p>{t("liabilityContent")}</p>
      </LegalSection>

      <LegalSection title={t("linksTitle")}>
        <p>{t("linksContent")}</p>
      </LegalSection>

      <LegalSection title={t("copyrightTitle")}>
        <p>{t("copyrightContent")}</p>
      </LegalSection>
    </LegalPage>
  );
}

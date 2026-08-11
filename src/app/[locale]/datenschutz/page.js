import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPage, LegalSection } from "@/app/components/LegalPage";
import { SITE_LEGAL } from "@/constants";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Datenschutz" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function DatenschutzPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Datenschutz");

  return (
    <LegalPage title={t("title")}>
      <LegalSection title={t("introTitle")}>
        <p>{t("introContent")}</p>
      </LegalSection>

      <LegalSection title={t("controllerTitle")}>
        <p>
          {SITE_LEGAL.name}
          <br />
          {SITE_LEGAL.city}
          <br />
          {t("email")}:{" "}
          <a
            href={`mailto:${SITE_LEGAL.email}`}
            className="text-[#00D4FF] transition hover:underline"
          >
            {SITE_LEGAL.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t("hostingTitle")}>
        <p>{t("hostingContent")}</p>
      </LegalSection>

      <LegalSection title={t("logsTitle")}>
        <p>{t("logsContent")}</p>
      </LegalSection>

      <LegalSection title={t("contactTitle")}>
        <p>{t("contactContent")}</p>
      </LegalSection>

      <LegalSection title={t("cookiesTitle")}>
        <p>{t("cookiesContent")}</p>
      </LegalSection>

      <LegalSection title={t("externalTitle")}>
        <p>{t("externalContent")}</p>
      </LegalSection>

      <LegalSection title={t("rightsTitle")}>
        <p>{t("rightsContent")}</p>
      </LegalSection>

      <LegalSection title={t("updateTitle")}>
        <p>{t("updateContent")}</p>
      </LegalSection>
    </LegalPage>
  );
}

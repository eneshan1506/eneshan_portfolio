"use client";

import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { Container } from "@/app/components/Container";
import { FOOTER_DATA } from "@/constants";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full border-t border-[#00D4FF1A] bg-transparent p-4 text-gray-200 sm:p-6">
      <Container>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-row flex-wrap items-start justify-center gap-10 sm:justify-around">
            {FOOTER_DATA.map((column) => (
              <div
                key={column.titleKey}
                className="flex min-w-[160px] flex-col items-center justify-start"
              >
                <h3 className="text-[16px] font-bold">{t(column.titleKey)}</h3>
                {column.data.map(({ icon: Icon, name, link }) => (
                  <NextLink
                    key={`${column.titleKey}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={name}
                    className="my-2 inline-flex min-h-11 cursor-pointer flex-row items-center rounded-md px-2 transition hover:text-[#00D4FF]"
                  >
                    {Icon && <Icon aria-hidden="true" />}
                    <span className="ml-[6px] text-[15px]">{name}</span>
                  </NextLink>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 flex w-full flex-col items-center gap-3 border-t border-[#00D4FF1A] pt-6 text-center text-[13px] text-gray-400 sm:text-[14px]">
            <p>
              &copy; Enes HAN {new Date().getFullYear()}. {t("rights")}
            </p>
            <nav
              aria-label={t("legal")}
              className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
            >
              <Link
                href="/impressum"
                className="inline-flex min-h-11 cursor-pointer items-center px-1 transition hover:text-[#00D4FF]"
              >
                {t("impressum")}
              </Link>
              <span aria-hidden="true" className="text-gray-600">
                ·
              </span>
              <Link
                href="/datenschutz"
                className="inline-flex min-h-11 cursor-pointer items-center px-1 transition hover:text-[#00D4FF]"
              >
                {t("datenschutz")}
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}

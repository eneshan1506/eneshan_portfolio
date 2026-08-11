"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { Container } from "@/app/components/Container";
import { FOOTER_DATA } from "@/constants";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full bg-transparent p-4 text-gray-200 sm:p-6">
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
                  <Link
                    key={`${column.titleKey}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={name}
                    className="my-[15px] flex cursor-pointer flex-row items-center rounded-md transition hover:text-[#00D4FF]"
                  >
                    {Icon && <Icon aria-hidden="true" />}
                    <span className="ml-[6px] text-[15px]">{name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="mb-5 mt-4 text-center text-[15px] text-gray-400">
            &copy; Enes HAN {new Date().getFullYear()}. {t("rights")}
          </div>
        </div>
      </Container>
    </footer>
  );
}

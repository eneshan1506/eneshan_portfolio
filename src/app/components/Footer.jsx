"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { FOOTER_DATA } from "@/constants";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.titleKey}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{t(column.titleKey)}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.titleKey}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={name}
                  className="flex flex-row items-center my-[15px] rounded-md"
                >
                  {Icon && <Icon aria-hidden="true" />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Enes HAN {new Date().getFullYear()}. {t("rights")}
        </div>
      </div>
    </div>
  );
}

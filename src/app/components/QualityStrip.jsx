"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function QualityStrip() {
  const t = useTranslations("Encryption");

  return (
    <div className="relative z-10 mt-8 w-full max-w-3xl rounded-2xl border border-[#00D4FF3D] bg-[#030014c7] px-4 py-4 sm:rounded-3xl sm:px-6 sm:py-5">
      <div className="flex items-start justify-center gap-3 sm:items-center">
        <Image
          src="/lock-main.png"
          alt={t("lockMainAlt")}
          width={24}
          height={24}
          className="mt-0.5 shrink-0 opacity-90 sm:mt-0"
        />
        <p className="text-center text-[15px] leading-7 text-gray-200 sm:text-base">
          <span className="font-semibold text-[#00D4FF]">
            {t("titleStart")} & {t("titleEnd")}:
          </span>{" "}
          <span>{t("description")}</span>
        </p>
      </div>
    </div>
  );
}

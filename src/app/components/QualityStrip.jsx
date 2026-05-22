"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function QualityStrip() {
  const t = useTranslations("Encryption");

  return (
    <div className="relative z-10 mt-8 w-full max-w-3xl rounded-full border border-[#00D4FF3D] bg-[#030014c7] px-4 py-3 sm:px-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <Image
          src="/lock-main.png"
          alt={t("lockMainAlt")}
          width={24}
          height={24}
          className="opacity-90"
        />
        <p className="text-center text-[15px] sm:text-base text-gray-200 leading-7">
          <span className="text-[#00D4FF] font-semibold">
            {t("titleStart")} & {t("titleEnd")}:
          </span>{" "}
          <span>{t("description")}</span>
        </p>
      </div>
    </div>
  );
}

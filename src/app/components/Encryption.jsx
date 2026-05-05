"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { slideInFromTop } from "@/lib/motion";

export function Encryption() {
  const t = useTranslations("Encryption");

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          {t("titleStart")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFB800]">
            &
          </span>{" "}
          {t("titleEnd")}
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt={t("lockTopAlt")}
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt={t("lockMainAlt")}
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#00D4FF44] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">{t("badge")}</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          {t("description")}
        </div>
      </div>

      <div className="encryption-glow absolute inset-0 w-full h-full" />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { slideInFromTop } from "@/lib/motion";

export function Encryption() {
  const t = useTranslations("Encryption");

  return (
    <section className="relative flex min-h-[42vh] w-full items-center justify-center px-4 py-10 sm:px-8">
      <div className="encryption-glow absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl">
        <motion.h2
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl sm:text-4xl font-semibold text-center text-gray-100"
        >
          {t("titleStart")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFB800]">
            &
          </span>{" "}
          {t("titleEnd")}
        </motion.h2>

        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="relative mt-5 rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] backdrop-blur-xl p-5 sm:p-6 shadow-[0_0_20px_rgba(0,212,255,0.08)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-2xl p-[1px] [background:linear-gradient(135deg,rgba(0,212,255,0.45),rgba(255,184,0,0.28),rgba(255,255,255,0.08))] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-[#00D4FF1A] blur-3xl"
          />

          <div className="relative mx-auto w-fit rounded-full border border-[#00D4FF44] bg-[#00D4FF10] px-4 py-2">
            <span className="Welcome-text text-xs sm:text-sm font-semibold">
              {t("badge")}
            </span>
          </div>

          <div className="relative mt-4 flex justify-center">
            <div className="flex flex-col items-center group w-auto h-auto">
              <Image
                src="/lock-top.png"
                alt={t("lockTopAlt")}
                width={48}
                height={48}
                className="translate-y-4 transition-all duration-300 group-hover:translate-y-7"
              />
              <Image
                src="/lock-main.png"
                alt={t("lockMainAlt")}
                width={74}
                height={74}
                className="z-10 drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          <p className="relative mt-4 text-center text-[18px] text-gray-300 leading-relaxed max-w-xl mx-auto cursive">
            {t("description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

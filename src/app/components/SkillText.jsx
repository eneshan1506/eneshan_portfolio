"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export function SkillText() {
  const t = useTranslations("Skills");

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#00D4FF44] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#00D4FF] mr-[10px] h-5 w-5" />
        <p className="Welcome-text text-[13px]">
          {t("badge")}
        </p>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-[10px] mb-[15px] text-center font-display text-[30px] font-medium text-white"
      >
        {t("title")}
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[22px] sm:text-[24px] text-gray-100 mb-10 mt-[10px] text-center leading-8"
      >
        {t("subtitle")}
      </motion.div>
    </div>
  );
}

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
        <h1 className="Welcome-text text-[13px]">
          {t("badge")}
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        {t("title")}
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        {t("subtitle")}
      </motion.div>
    </div>
  );
}

"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "@/app/components/Container";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { Link } from "@/i18n/navigation";

export function HeroContent() {
  const t = useTranslations("Hero");

  return (
    <Container className="relative z-[20] overflow-x-hidden overflow-y-visible pt-28 sm:pt-32 md:pt-40">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:gap-8"
      >
        <div className="m-auto flex h-full w-full min-w-0 flex-col justify-center gap-5 text-start">
          <motion.h1
            variants={slideInFromTop}
            className="font-display text-2xl font-bold tracking-tight text-[#00D4FF] sm:text-3xl"
          >
            {t("name")}
          </motion.h1>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box max-w-full border border-[#00D4FF44] px-[7px] py-[8px] opacity-[0.9]"
          >
            <SparklesIcon className="mr-[10px] h-5 w-5 text-[#00D4FF]" />
            <p className="Welcome-text min-w-0 text-[13px]">{t("badge")}</p>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="mt-2 flex h-auto w-full min-w-0 max-w-[600px] flex-col gap-6 pb-1 font-display text-4xl font-bold leading-[1.2] text-white [overflow-wrap:anywhere] sm:mt-4 sm:text-6xl"
          >
            <span>
              {t("headlineStart")}{" "}
              <span className="inline-block align-baseline bg-gradient-to-r from-[#00D4FF] to-[#FFB800] bg-clip-text pb-[0.08em] leading-[1.2] text-transparent [overflow-wrap:anywhere]">
                {t("headlineHighlight")}
              </span>{" "}
              {t("headlineEnd")}
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="my-5 w-full min-w-0 max-w-[600px] text-lg text-gray-400"
          >
            {t("description")}
          </motion.p>

          <motion.div variants={slideInFromLeft(1)}>
            <Link
              href="/#projects"
              className="button-primary inline-block w-full max-w-[220px] cursor-pointer rounded-lg py-2 text-center text-sm text-white sm:text-base"
            >
              {t("cta")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="flex w-full min-w-0 items-center justify-center"
        >
          <Image
            src="/hero-bg.svg"
            alt={t("imageAlt")}
            height={650}
            width={650}
            priority
            draggable={false}
            className="h-auto w-full max-w-[420px] select-none sm:max-w-[520px] lg:max-w-[650px]"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}

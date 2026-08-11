"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useTranslations } from "next-intl";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations("ScrollTop");

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t("label")}
      className={`fixed bottom-6 right-4 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#00D4FF66] bg-[#030014cc] text-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.2)] backdrop-blur-md transition-all duration-200 hover:border-[#00D4FF] hover:text-white sm:right-6 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}

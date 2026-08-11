"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";

/**
 * Scrolls to hash targets after client navigations (e.g. /impressum -> /#projects).
 */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollToHash = () => {
      const hash = window.location.hash?.replace("#", "");
      if (!hash) return;

      const el = document.getElementById(hash);
      if (!el) return;

      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timer = window.setTimeout(scrollToHash, 50);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}

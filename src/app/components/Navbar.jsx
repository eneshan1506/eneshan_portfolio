"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/app/components/LanguageSwitcher/LanguageSwitcher";
import { SOCIALS } from "@/constants";
import { Link } from "@/i18n/navigation";

const NAV_LINKS = [
  {
    titleKey: "about",
    link: "#about-me",
  },
  {
    titleKey: "skills",
    link: "#skills",
  },
  {
    titleKey: "projects",
    link: "#projects",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  return (
    <header className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#00D4FF]/20 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-8 lg:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <Link href="#about-me" className="flex items-center rounded-md">
          <Image
            src="/logo-transparent.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer mix-blend-lighten"
          />
          <div className="hidden lg:flex font-bold ml-[10px] text-gray-300 whitespace-nowrap">
            Enes HAN
          </div>
        </Link>

        <div className="hidden md:flex flex-1 min-w-0 h-full flex-row items-center justify-center px-4 lg:px-8">
          <nav
            aria-label="Primary"
            className="flex items-center justify-between w-full max-w-[560px] h-auto border border-[rgba(0,212,255,0.25)] bg-[rgba(3,0,20,0.37)] px-4 lg:px-5 py-[10px] rounded-full text-gray-200"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.titleKey}
                href={link.link}
                className="cursor-pointer hover:text-[#00D4FF] transition focus-visible:text-[#00D4FF] text-sm lg:text-base whitespace-nowrap"
              >
                {t(link.titleKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex flex-row items-center gap-3 lg:gap-5 shrink-0">
          <LanguageSwitcher />
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <NextLink
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              className="rounded-md"
            >
              <Icon aria-hidden="true" className="h-6 w-6 text-white" />
            </NextLink>
          ))}
        </div>

        <button
          className="md:hidden text-white p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={t(isMobileMenuOpen ? "closeMenu" : "openMenu")}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon aria-hidden="true" className="h-8 w-8" />
          ) : (
            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden"
        >
          <nav aria-label="Mobile Primary" className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.titleKey}
                href={link.link}
                className="cursor-pointer hover:text-[#00D4FF] transition text-center focus-visible:text-[#00D4FF]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.titleKey)}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center gap-6 mt-6">
            <LanguageSwitcher />
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <NextLink
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={name}
                className="rounded-md"
              >
                <Icon aria-hidden="true" className="h-8 w-8 text-white" />
              </NextLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

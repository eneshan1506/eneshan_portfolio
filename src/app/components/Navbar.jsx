"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslations } from "next-intl";

import { Container } from "@/app/components/Container";
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
    <header className="fixed top-0 z-50 h-[65px] w-full bg-[#03001427] shadow-lg shadow-[#00D4FF]/20 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        <Link href="#about-me" className="flex items-center rounded-md">
          <Image
            src="/logo-transparent.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer mix-blend-lighten"
          />
          <div className="ml-[10px] hidden whitespace-nowrap font-bold text-gray-300 sm:flex">
            Enes HAN
          </div>
        </Link>

        <div className="hidden h-full min-w-0 flex-1 flex-row items-center justify-center px-4 md:flex lg:px-8">
          <nav
            aria-label="Primary"
            className="flex h-auto w-full max-w-[560px] flex-row items-center justify-between rounded-full border border-[rgba(0,212,255,0.25)] bg-[rgba(3,0,20,0.37)] px-4 py-[10px] text-gray-200 lg:px-5"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.titleKey}
                href={link.link}
                className="cursor-pointer whitespace-nowrap text-sm transition hover:text-[#00D4FF] focus-visible:text-[#00D4FF] lg:text-base"
              >
                {t(link.titleKey)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden shrink-0 flex-row items-center gap-3 md:flex lg:gap-5">
          <LanguageSwitcher />
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <NextLink
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={name}
              className="cursor-pointer rounded-md"
            >
              <Icon aria-hidden="true" className="h-6 w-6 text-white" />
            </NextLink>
          ))}
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-md p-2 text-white md:hidden"
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
      </Container>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="absolute left-0 top-[65px] flex w-full flex-col items-center bg-[#030014] p-5 text-gray-300 md:hidden"
        >
          <nav aria-label="Mobile Primary" className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.titleKey}
                href={link.link}
                className="cursor-pointer text-center transition hover:text-[#00D4FF] focus-visible:text-[#00D4FF]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.titleKey)}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex justify-center gap-6">
            <LanguageSwitcher />
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <NextLink
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                aria-label={name}
                className="cursor-pointer rounded-md"
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

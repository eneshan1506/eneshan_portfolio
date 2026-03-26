"use client";

import { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "@/app/components/ThemeProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, mounted, toggleTheme } = useTheme();

  const menuItems = [
    { href: "#home", label: "Startsite" },
    { href: "#about", label: "Über mich" },
    { href: "#projects", label: "Projekte" },
    { href: "#contact", label: "Kontakt" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const isDark = mounted && theme === "dark";

  return (
    <header className="fixed top-0 z-50 w-full border-b backdrop-blur-sm" style={{ backgroundColor: "var(--header-bg)", borderColor: "var(--border-color)" }}>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          Portfolio
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium transition-colors hover:text-blue-600"
              style={{ color: "var(--muted-text)" }}>
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-blue-500 hover:text-blue-600"
            style={{
              borderColor: "var(--button-border)",
              color: "var(--button-text)",
              backgroundColor: "var(--surface-color)",
            }}
            aria-label="Toggle theme">
            {isDark ? (
              <IoSunny className="h-4 w-4" />
            ) : (
              <IoMoon className="h-4 w-4" />
            )}
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border p-2 transition-colors hover:border-blue-500 hover:text-blue-600"
            style={{
              borderColor: "var(--button-border)",
              color: "var(--button-text)",
              backgroundColor: "var(--surface-color)",
            }}
            aria-label="Toggle theme">
            {isDark ? (
              <IoSunny className="h-5 w-5" />
            ) : (
              <IoMoon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors hover:text-blue-600"
            style={{ color: "var(--muted-text)" }}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-b md:hidden" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--surface-color)" }}>
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMenuClick}
                className="rounded px-2 py-2 font-medium transition-colors hover:text-blue-600"
                style={{ color: "var(--muted-text)" }}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

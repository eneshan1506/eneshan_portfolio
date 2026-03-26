"use client";

import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ boxShadow: `0 10px 25px var(--scroll-shadow)` }}>
      <IoArrowUp className="w-6 h-6" />
    </button>
  );
}

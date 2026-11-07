"use client";

import { useEffect, useState } from "react";

type SectionId = "home" | "creator" | "what-to-expect";

const links: { label: string; id: SectionId }[] = [
  { label: "Home", id: "home" },
  { label: "Creator", id: "creator" },
  { label: "Lessons", id: "what-to-expect" },
];

export default function SectionNavbar() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const navbar = document.getElementById("site-navbar");
      const offset = (navbar?.getBoundingClientRect().height ?? 68) + 24;

      let current: SectionId = "home";

      for (const id of ["creator", "what-to-expect"] as const) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActive(current);
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function scrollToSection(id: SectionId) {
    setActive(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const navbar = document.getElementById("site-navbar");
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 68;

    const target =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight - 24;

    window.scrollTo({
      top: Math.max(0, target),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <div className="flex items-center gap-3 sm:gap-6">
      {links.map((link) => {
        const isActive = active === link.id;

        return (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollToSection(link.id)}
            aria-current={isActive ? "location" : undefined}
            className={[
              "relative whitespace-nowrap py-2",
              "text-[11px] font-bold sm:text-[14px]",
              "transition-colors duration-200",
              "after:absolute after:bottom-0 after:left-0",
              "after:h-[2px] after:w-full after:rounded-full",
              "after:bg-[#6025dc] after:transition-opacity",
              isActive
                ? "text-[#6025dc] after:opacity-100"
                : "text-[#263254] after:opacity-0 hover:text-[#6025dc]",
            ].join(" ")}
          >
            {link.label}
          </button>
        );
      })}
    </div>
  );
}

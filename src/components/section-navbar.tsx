"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

type SectionId = "home" | "creator" | "what-to-expect";

const links: { label: string; id: SectionId }[] = [
  { label: "Home", id: "home" },
  { label: "Who made this", id: "creator" },
  { label: "What to expect", id: "what-to-expect" },
];

export default function SectionNavbar() {
  const [active, setActive] = useState<SectionId>("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update active section while scrolling.
  useEffect(() => {
    let frame = 0;

    function updateActiveSection() {
      const navbar = document.getElementById("site-navbar");
      const offset = (navbar?.getBoundingClientRect().height ?? 76) + 24;

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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock page scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDrawerOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth >= 640) {
        setDrawerOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [drawerOpen]);

  function scrollToSection(id: SectionId) {
    setActive(id);
    setDrawerOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.history.replaceState(null, "", window.location.pathname);

      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const navbar = document.getElementById("site-navbar");
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 76;

    const target =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight - 24;

    window.scrollTo({
      top: Math.max(0, target),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden items-center gap-6 sm:flex">
        {links.map((link) => {
          const isActive = active === link.id;

          return (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              aria-current={isActive ? "location" : undefined}
              className={[
                "whitespace-nowrap py-2 text-[14px] font-bold",
                "transition-colors duration-200",
                isActive
                  ? "text-[#6025dc]"
                  : "text-[#263254] hover:text-[#6025dc]",
              ].join(" ")}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Mobile hamburger button */}
      <button
        type="button"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={drawerOpen}
        aria-controls="mobile-navigation-drawer"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-[#0b1438] transition-colors hover:bg-[#f0e7ff] sm:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile drawer, rendered outside the page container */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] sm:hidden ${
              drawerOpen ? "pointer-events-auto" : "pointer-events-none"
            }`}
          >
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={drawerOpen ? 0 : -1}
              onClick={() => setDrawerOpen(false)}
              className={`absolute inset-0 bg-[#0b1438]/40 transition-opacity duration-300 ${
                drawerOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Sliding drawer */}
            <aside
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal={drawerOpen ? true : undefined}
              aria-label="Mobile navigation"
              aria-hidden={!drawerOpen}
              inert={!drawerOpen}
              className={`absolute inset-y-0 left-0 flex w-[min(82vw,320px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
                drawerOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Drawer header */}
              <div className="flex min-h-[76px] items-center justify-between border-b border-[#e8dafa] px-6">
                <span className="text-[15px] font-black tracking-[0.035em] text-[#0b1438]">
                  ALTERNATIVE TECH PATH
                </span>

                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#0b1438] hover:bg-[#f0e7ff]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1 px-4 py-6"
              >
                {links.map((link) => {
                  const isActive = active === link.id;

                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={[
                        "flex w-full items-center rounded-xl px-4 py-4 text-left text-[16px] font-bold",
                        "transition-colors duration-200",
                        isActive
                          ? "bg-[#f0e7ff] text-[#6025dc]"
                          : "text-[#263254] hover:bg-[#f7f4ff] hover:text-[#6025dc]",
                      ].join(" ")}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </nav>

              {/* Drawer footer */}
              <div className="mt-auto px-6 pb-8 text-xs text-[#64748b]">
                Alternative Tech Path
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </>
  );
}

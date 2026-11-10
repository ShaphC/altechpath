"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "light" | "dark" | "system";

const storageKey = "atp-site-theme";

function applyTheme(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  document.documentElement.classList.toggle("site-dark", isDark);

  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

export default function SiteTheme() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);

    if (saved === "light" || saved === "dark" || saved === "system") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme("system");
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = () => applyTheme(theme);

    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, [theme]);

  function changeTheme(value: Theme) {
    setTheme(value);
    window.localStorage.setItem(storageKey, value);
    applyTheme(value);
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-[var(--site-border)] bg-[var(--site-soft)] p-1"
      aria-label="Appearance"
    >
      {(
        [
          { value: "light", Icon: Sun, label: "Light" },
          { value: "dark", Icon: Moon, label: "Dark" },
          { value: "system", Icon: Monitor, label: "System" },
        ] as const
      ).map(({ value, Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => changeTheme(value)}
          aria-label={`${label} theme`}
          aria-pressed={theme === value}
          title={`${label} theme`}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
            theme === value
              ? "bg-[var(--site-accent)] text-white"
              : "text-[var(--site-muted)] hover:text-[var(--site-text)]"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

export const THEME_STORAGE_KEY = "cove-theme";

type Theme = "light" | "dark";

/**
 * Minimal theme switch — no framework, no context, no provider.
 *
 * <html data-theme> is the single source of truth. The blocking script in
 * `layout.tsx` sets it before first paint (so there is no flash), and this
 * component subscribes to that attribute as an external store.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Matches the `data-theme` default rendered on the server. */
function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* Storage can be unavailable (private mode) — the toggle still works. */
    }
  }

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`inline-flex h-11 w-11 items-center justify-center border border-line text-ink-soft transition-colors hover:border-ink-faint hover:text-ink ${className}`}
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" className="h-[18px] w-[18px]" />
      ) : (
        <Moon aria-hidden="true" className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}

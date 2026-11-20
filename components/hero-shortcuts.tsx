"use client";

import { useEffect } from "react";

type Props = { email: string; github: string; cv?: string };

export function HeroShortcuts({ email, github, cv }: Props) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;

      const key = event.key.toLowerCase();
      if (key === "e") window.location.href = `mailto:${email}`;
      if (key === "g") window.open(github, "_blank", "noopener,noreferrer");
      if (key === "r" && cv) window.open(cv, "_blank", "noopener,noreferrer");
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [email, github, cv]);

  return null;
}
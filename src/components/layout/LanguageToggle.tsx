import React from "react";
import { switchLocalePath, type Locale } from "../../i18n/utils";

interface LanguageToggleProps {
  locale: Locale;
  pathname?: string;
}

export default function LanguageToggle({ locale, pathname = "/" }: LanguageToggleProps) {
  const targetLocale: Locale = locale === "ar" ? "en" : "ar";
  const label = targetLocale === "ar" ? "العربية" : "English";

  return (
    <button
      type="button"
      aria-label={`Switch language to ${label}`}
      onClick={() => {
        window.location.href = switchLocalePath(pathname || window.location.pathname, targetLocale);
      }}
      className="min-h-[2.75rem] border border-border px-3 py-2 text-sm text-fg transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      {label}
    </button>
  );
}

import en from './en.json';
import ar from './ar.json';

export const locales = {
  en,
  ar,
} as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = 'en';
export const rtlLocales = new Set<Locale>(['ar']);

export function isLocale(value: string | undefined): value is Locale {
  return value === 'en' || value === 'ar';
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/ar' || pathname.startsWith('/ar/') ? 'ar' : 'en';
}

export function getLocaleFromPathname(pathname: string): Locale {
  return getLocaleFromPath(pathname);
}

export function getDictionary(locale: Locale) {
  return locales[locale];
}

export function getDir(locale: Locale): 'ltr' | 'rtl' {
  return rtlLocales.has(locale) ? 'rtl' : 'ltr';
}

export function getHtmlDir(locale: Locale): 'ltr' | 'rtl' {
  return getDir(locale);
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/ar') return '/';
  if (pathname.startsWith('/ar/')) return pathname.slice(3) || '/';
  return pathname || '/';
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const basePath = stripLocalePrefix(pathname);

  if (target === defaultLocale) {
    return basePath === '' ? '/' : basePath;
  }

  if (basePath === '/' || basePath === '') {
    return '/ar';
  }

  return `/ar${basePath}`;
}

export function localizePath(pathname: string, locale: Locale): string {
  return switchLocalePath(pathname, locale);
}

export function getLanguageLabel(locale: Locale): string {
  return getDictionary(locale).site.languageLabel;
}

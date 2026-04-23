import { type Locale, normalizeLocale, translate } from '@open-codesign/i18n';

let currentLocale: Locale = normalizeLocale(undefined);

export function setMainLocale(locale: string | undefined | null): Locale {
  currentLocale = normalizeLocale(locale);
  return currentLocale;
}

export function getMainLocale(): Locale {
  return currentLocale;
}

export function mt(key: string, options?: Record<string, unknown>): string {
  return translate(currentLocale, key, options);
}

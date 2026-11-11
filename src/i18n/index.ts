import en from './en'
import de from './de'

export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]
export type Messages = typeof en

export function t(locale: Locale): Messages {
  switch (locale) {
    case 'de':
      return de
    default:
      return en
  }
}

export const defaultLocale: Locale = 'en'

export function path(locale: Locale, page = ''): string {
  return page ? `/${locale}/${page}/` : `/${locale}/`
}

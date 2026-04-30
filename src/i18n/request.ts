import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['it', 'en', 'de', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = (cookieStore.get('locale')?.value as Locale) || 'it';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

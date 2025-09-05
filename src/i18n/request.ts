// import {getRequestConfig} from 'next-intl/server';

// export default getRequestConfig(async () => {
//   // Static for now, will be adapted later
//   const locale = 'fi';

//   // Load messages from the filesystem
//   const messages = (await import(`../../messages/${locale}.json`)).default;

//   return {
//     locale,
//     messages
//   };
// });

import {getRequestConfig} from 'next-intl/server';
import type {AbstractIntlMessages} from 'next-intl';


// 1) لوکال‌های مجاز و پیش‌فرض
type Locale =  'en' | 'fi';
const DEFAULT_LOCALE: Locale = 'fi';

// 2) پیام‌ها را استاتیک ایمپورت کن (tsconfig: "resolveJsonModule": true)

import en from '../../messages/en.json';
import fi from '../../messages/fi.json';

const messagesMap: Record<Locale, AbstractIntlMessages> = {
  en,
  fi
};

// 3) تایپ‌گارد برای اعتبارسنجی لوکال ورودی
function isLocale(x: string | undefined): x is Locale {
  return x === 'fi' || x === 'en';
}

// 4) کانفیگ
export default getRequestConfig(async ({locale}) => {
  const resolvedLocale: Locale = isLocale(locale) ? locale : DEFAULT_LOCALE;

  return {
    locale: resolvedLocale,                     // همیشه string معتبر
    messages: messagesMap[resolvedLocale]       // AbstractIntlMessages
  };
});

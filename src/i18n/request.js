import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "@/i18n/routing";

function mergeMessages(fallbackMessages, localeMessages) {
  return Object.keys({ ...fallbackMessages, ...localeMessages }).reduce(
    (messages, key) => {
      const fallbackValue = fallbackMessages[key];
      const localeValue = localeMessages[key];

      if (
        fallbackValue &&
        localeValue &&
        typeof fallbackValue === "object" &&
        typeof localeValue === "object" &&
        !Array.isArray(fallbackValue) &&
        !Array.isArray(localeValue)
      ) {
        messages[key] = mergeMessages(fallbackValue, localeValue);
      } else {
        messages[key] =
          typeof localeValue === "undefined" ? fallbackValue : localeValue;
      }

      return messages;
    },
    {}
  );
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const fallbackMessages = (await import("../../messages/de.json")).default;
  const localeMessages =
    locale === routing.defaultLocale
      ? fallbackMessages
      : (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: mergeMessages(fallbackMessages, localeMessages),
  };
});

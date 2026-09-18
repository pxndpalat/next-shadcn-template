import { routing } from "@/i18n/routing";
import { MOCK_HOME_PAGE_CONTENT } from "./mock-data";
import type { HomePageContent } from "./types";

export async function getHomePageContent(
  locale: string,
): Promise<HomePageContent> {
  const supportedLocale = routing.locales.find((item) => item === locale);

  return MOCK_HOME_PAGE_CONTENT[supportedLocale ?? routing.defaultLocale];
}

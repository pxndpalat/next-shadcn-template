import { HomePage } from "@/features/home/components/home-page";
import { getHomePageContent } from "@/features/home/queries";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const content = await getHomePageContent(locale);

  return <HomePage content={content} />;
}

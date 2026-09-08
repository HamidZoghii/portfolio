import { locales, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/dictionaries";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Categories } from "@/components/Categories";
import { Work } from "@/components/Work";
import { Currently } from "@/components/Currently";
import { Journey } from "@/components/Journey";
import { Stack } from "@/components/Stack";
import { Experiments } from "@/components/Experiments";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main>
        <Hero dict={dict} />
        <About dict={dict} />
        <Categories dict={dict} />
        <Work dict={dict} />
        <Currently dict={dict} />
        <Journey dict={dict} />
        <Stack dict={dict} />
        <Experiments dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}

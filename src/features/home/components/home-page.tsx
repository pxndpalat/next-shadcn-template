import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { HomePageContent } from "../types";
import { HomePageIcon } from "./home-page-icon";

type Props = {
  content: HomePageContent;
};

export function HomePage({ content }: Props) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1360px] px-4 py-3 sm:px-6 lg:px-8">
        <header className="flex h-16 items-center justify-between rounded-2xl bg-card px-4 shadow-xs sm:px-6">
          <a
            href="#top"
            className="flex min-h-11 items-center gap-2 rounded-lg font-semibold outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          >
            {content.brandName}
          </a>

          <nav
            aria-label={content.navigation.ariaLabel}
            className="hidden items-center gap-1 lg:flex"
          >
            {content.navigation.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#signin"
              className={cn(
                buttonVariants({ variant: "outline", shape: "pill" }),
                "hidden sm:inline-flex",
              )}
            >
              {content.navigation.signInLabel}
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "default", shape: "pill" })}
            >
              <span className="hidden sm:inline">
                {content.navigation.contactLabel}
              </span>
              <span className="sm:hidden">
                {content.navigation.compactContactLabel}
              </span>
              <ArrowRight data-icon="inline-end" />
            </a>
          </div>
        </header>

        <main id="top" className="space-y-3 pt-3">
          <section className="grid min-h-[560px] overflow-hidden rounded-3xl bg-card px-6 py-8 shadow-soft lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10 lg:py-12">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {content.hero.eyebrow}
              </p>
              <h1 className="text-3xl leading-[1.14] font-bold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                {content.hero.title}
                <br />
                {content.hero.titleContinuation}
              </h1>
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                {content.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    shape: "pill",
                  })}
                >
                  {content.hero.primaryActionLabel}
                  <ArrowRight data-icon="inline-end" />
                </a>
                <a
                  href="#solutions"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    shape: "pill",
                  })}
                >
                  {content.hero.secondaryActionLabel}
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                {content.hero.proofPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium"
                  >
                    <CircleCheck
                      className="size-5 text-accent-strong"
                      aria-hidden="true"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 min-h-[360px] lg:mt-0 lg:min-h-[480px] lg:pl-10">
              <Image
                src="/images/hero-business-dashboard.webp"
                alt={content.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-contain"
              />
            </div>
          </section>

          <section className="grid rounded-3xl bg-card px-6 py-8 lg:grid-cols-[280px_1fr] lg:gap-10 lg:px-8">
            <div className="mb-8 lg:mb-0">
              <p className="text-2xl leading-tight font-bold">
                {content.process.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {content.process.description}
              </p>
            </div>
            <ol className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {content.process.steps.map((step) => (
                <li
                  key={step.number}
                  className="relative border-t border-border pt-4 xl:border-t-0 xl:border-l xl:pl-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
                      <HomePageIcon
                        name={step.icon}
                        className="size-5"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-sm font-bold text-muted-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h2 className="mt-4 font-semibold">{step.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section
            id="solutions"
            className="rounded-3xl bg-card px-6 py-8 lg:px-8"
          >
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-bold tracking-[-0.02em]">
                  {content.solutions.title}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {content.solutions.subtitle}
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {content.solutions.description}
              </p>
            </div>

            <div
              id="industries"
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            >
              {content.solutions.items.map((solution) => (
                <Card key={solution.title} size="sm" className="min-h-40">
                  <CardHeader>
                    <HomePageIcon
                      name={solution.icon}
                      className="size-7"
                      aria-hidden="true"
                    />
                    <CardTitle className="mt-3 text-sm">
                      {solution.title}
                    </CardTitle>
                    <CardDescription>
                      {content.solutions.itemDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="grid rounded-3xl bg-card px-6 py-8 lg:grid-cols-[320px_1fr] lg:items-center lg:gap-8 lg:px-8"
          >
            <h2 className="text-3xl leading-tight font-bold tracking-[-0.02em]">
              {content.differentiators.title}
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0 xl:grid-cols-4">
              {content.differentiators.items.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-24 items-center gap-4 rounded-2xl bg-surface-subtle p-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <HomePageIcon
                      name={item.icon}
                      className="size-5"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="grid overflow-hidden rounded-3xl bg-surface-inverse px-6 py-10 text-surface-inverse-foreground lg:grid-cols-[1fr_auto] lg:items-center lg:px-12"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-surface-inverse-foreground/60 uppercase">
                {content.contact.eyebrow}
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl leading-tight font-bold tracking-[-0.02em]">
                {content.contact.title}
              </h2>
              <p className="mt-3 text-surface-inverse-foreground/65">
                {content.contact.description}
              </p>
            </div>
            <a
              href={`mailto:${content.contact.email}`}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  shape: "pill",
                }),
                "mt-8 min-w-56 border-white/20 bg-white text-primary hover:bg-white/90 lg:mt-0",
              )}
            >
              {content.contact.actionLabel}
              <ArrowRight data-icon="inline-end" />
            </a>
          </section>
        </main>

        <footer
          id="articles"
          className="flex flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-medium text-foreground">
            {content.footer.companyName}
          </p>
          <nav aria-label={content.navigation.ariaLabel}>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {content.footer.links.map((link) => (
                <li key={link.href}>
                  <a className="hover:text-foreground" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}

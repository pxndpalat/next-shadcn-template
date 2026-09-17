import {
  ArrowRight,
  Bot,
  Boxes,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  Database,
  FileText,
  PackageCheck,
  Settings,
  ShoppingCart,
  Sparkles,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "01",
    title: "วิเคราะห์กระบวนการทำงาน",
    description: "เข้าใจปัญหา จุดคอขวด และเป้าหมายของทีม",
    icon: FileText,
  },
  {
    number: "02",
    title: "ออกแบบระบบให้เหมาะกับงาน",
    description: "วางโครงสร้างและประสบการณ์ใช้งานที่ตอบโจทย์",
    icon: Settings,
  },
  {
    number: "03",
    title: "พัฒนาและเชื่อมต่อข้อมูล",
    description: "เชื่อม workflow และระบบเดิมเข้าด้วยกัน",
    icon: Database,
  },
  {
    number: "04",
    title: "ต่อยอดด้วย AI",
    description: "เพิ่มประสิทธิภาพการทำงานและการตัดสินใจ",
    icon: ChartNoAxesColumnIncreasing,
  },
];

const solutions = [
  { title: "Warehouse & Logistics", icon: Boxes },
  { title: "Manufacturing & Operations", icon: Settings },
  { title: "Retail & Order Management", icon: ShoppingCart },
  { title: "Project & Internal Tools", icon: FileText },
  { title: "Quality Control", icon: PackageCheck },
  { title: "AI & Data Automation", icon: Sparkles },
];

const differentiators = [
  { title: "พัฒนาตาม workflow จริง", icon: Users },
  { title: "เชื่อมต่อข้อมูลง่าย", icon: Database },
  { title: "พร้อมขยายต่อได้", icon: ChartNoAxesColumnIncreasing },
  { title: "ต่อยอด AI ได้จริง", icon: Sparkles },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1360px] px-4 py-3 sm:px-6 lg:px-8">
        <header className="flex h-16 items-center justify-between rounded-2xl bg-card px-4 shadow-xs sm:px-6">
          <a
            href="#top"
            className="flex min-h-11 items-center gap-2 rounded-lg font-semibold outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
          >
            Logo
          </a>

          <nav
            aria-label="เมนูหลัก"
            className="hidden items-center gap-1 lg:flex"
          >
            {[
              ["หน้าแรก", "#top"],
              ["โซลูชัน", "#solutions"],
              ["Industries", "#industries"],
              ["เกี่ยวกับเรา", "#about"],
              ["บทความ", "#articles"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="flex min-h-11 items-center rounded-lg px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/35"
              >
                {label}
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
              เข้าสู่ระบบ
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "default", shape: "pill" })}
            >
              <span className="hidden sm:inline">คุยโปรเจกต์กับเรา</span>
              <span className="sm:hidden">ติดต่อเรา</span>
              <ArrowRight data-icon="inline-end" />
            </a>
          </div>
        </header>

        <main id="top" className="space-y-3 pt-3">
          <section className="grid min-h-[560px] overflow-hidden rounded-3xl bg-card px-6 py-12 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-14 lg:py-16">
            <div className="relative z-10 max-w-2xl">
              <p className="mb-5 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                Software development & AI implementation
              </p>
              <h1 className="text-4xl leading-[1.14] font-bold tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                พัฒนาซอฟต์แวร์ให้ตรงธุรกิจ
                <br />
                พร้อมต่อยอด AI ได้จริง
              </h1>
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                ออกแบบและพัฒนาระบบให้เหมาะกับการทำงานจริงของธุรกิจ
                ตั้งแต่ระบบภายในองค์กร ไปจนถึงการเชื่อมต่อข้อมูลและ AI
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
                  คุยโปรเจกต์กับเรา
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
                  ดูโซลูชัน
                </a>
              </div>

              <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                {[
                  "เข้าใจงานจริง",
                  "ออกแบบให้ใช้งานได้จริง",
                  "พร้อมต่อยอด AI",
                ].map((item) => (
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

            <div className="relative mt-12 lg:mt-0 lg:pl-10">
              <div className="absolute inset-4 rounded-full bg-accent blur-3xl" />
              <div
                role="img"
                aria-label="ตัวอย่างหน้าจอแดชบอร์ดสำหรับบริหารธุรกิจ"
                className="relative min-h-[360px] rotate-[-2deg] rounded-2xl border-[10px] border-primary bg-card p-4 shadow-float sm:min-h-[420px]"
              >
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="size-5 rounded bg-primary" /> Dashboard
                  </div>
                  <div className="h-7 w-28 rounded-full bg-muted" />
                </div>
                <div className="grid gap-3 pt-4 sm:grid-cols-[120px_1fr]">
                  <div className="hidden space-y-3 rounded-lg bg-muted p-3 sm:block">
                    {["Overview", "Orders", "Products", "Reports"].map(
                      (item) => (
                        <div key={item} className="h-6 rounded bg-card/80" />
                      ),
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-3">
                      {["1,240", "320", "892"].map((value) => (
                        <div
                          key={value}
                          className="rounded-xl border border-border p-3"
                        >
                          <div className="h-2 w-12 rounded bg-muted" />
                          <p className="mt-3 text-lg font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="h-44 rounded-xl border border-border bg-surface-subtle p-4">
                      <div
                        className="flex h-full items-end gap-2"
                        aria-hidden="true"
                      >
                        {[35, 55, 42, 75, 50, 82, 70].map((height) => (
                          <div
                            key={height}
                            className="flex-1 rounded-t bg-accent-strong/70"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 bottom-5 flex max-w-48 items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-float sm:right-0">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Bot className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">
                    สรุปข้อมูลและรายงาน
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="grid rounded-3xl bg-card px-6 py-8 lg:grid-cols-[280px_1fr] lg:gap-10 lg:px-8">
            <div className="mb-8 lg:mb-0">
              <p className="text-2xl font-bold leading-tight">
                จากโจทย์ธุรกิจ สู่ระบบที่ใช้งานได้จริง
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                เริ่มจากทำความเข้าใจงาน แล้วค่อยออกแบบ พัฒนา
                และต่อยอดอย่างเป็นระบบ
              </p>
            </div>
            <ol className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="relative border-t border-border pt-4 xl:border-t-0 xl:border-l xl:pl-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
                      <step.icon className="size-5" aria-hidden="true" />
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
                  Industry Solutions
                </h2>
                <p className="mt-1 text-muted-foreground">
                  ประสบการณ์พัฒนาระบบในหลายอุตสาหกรรม
                </p>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                โครงสร้างระบบยืดหยุ่นตามลักษณะงาน
                พร้อมวางรากฐานสำหรับการเชื่อมต่อข้อมูลและ AI
              </p>
            </div>

            <div
              id="industries"
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            >
              {solutions.map((solution) => (
                <Card key={solution.title} size="sm" className="min-h-40">
                  <CardHeader>
                    <solution.icon className="size-7" aria-hidden="true" />
                    <CardTitle className="mt-3 text-sm">
                      {solution.title}
                    </CardTitle>
                    <CardDescription>
                      พื้นที่สำหรับรายละเอียดโซลูชันแบบย่อ
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
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em]">
              โซลูชันที่ออกแบบตามธุรกิจ ไม่ใช่ระบบสำเร็จรูปที่ต้องฝืนใช้
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0 xl:grid-cols-4">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex min-h-24 items-center gap-4 rounded-2xl bg-surface-subtle p-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <item.icon className="size-5" aria-hidden="true" />
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
                Ready for what&apos;s next
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.02em]">
                พร้อมสร้างระบบที่พาธุรกิจไปต่อได้ไกลกว่าเดิม?
              </h2>
              <p className="mt-3 text-surface-inverse-foreground/65">
                คุยกับเราเพื่อวางแนวทางซอฟต์แวร์และ AI ที่เหมาะกับธุรกิจของคุณ
              </p>
            </div>
            <a
              href="mailto:hello@example.com"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  shape: "pill",
                }),
                "mt-8 min-w-56 border-white/20 bg-white text-primary hover:bg-white/90 lg:mt-0",
              )}
            >
              เริ่มต้นโปรเจกต์
              <ArrowRight data-icon="inline-end" />
            </a>
          </section>
        </main>

        <footer
          id="articles"
          className="flex flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-medium text-foreground">Company name</p>
          <p>หน้าแรก · โซลูชัน · เกี่ยวกับเรา · ติดต่อเรา</p>
        </footer>
      </div>
    </div>
  );
}

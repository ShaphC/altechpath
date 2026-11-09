"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Layers3,
  Mail,
  Menu,
  Monitor,
  X,
  Zap,
} from "lucide-react";
import SiteTheme from "@/components/site-theme";

export type HomepageVariant = "hybrid" | "existing" | "modern";

const courseUrl = "/learn/from-skills-to-software";

const projects = [
  {
    title: "Interactive website sections",
    description:
      "Testimonials, galleries, FAQs, and interactive features for existing websites.",
    category: "Website section",
    image: "/images/showcase-testimonials.png",
    href: "/work/scrolling-testimonials",
    icon: Layers3,
  },
  {
    title: "Landing pages",
    description:
      "Email courses, lead magnets, product launches, and service offers.",
    category: "Landing page",
    image: "/images/showcase-course.png",
    href: courseUrl,
    icon: Monitor,
  },
  {
    title: "Software projects",
    description:
      "Web applications, dashboards, and custom tools built around practical needs.",
    category: "Web applications",
    image: "/images/showcase-software.png",
    href: "/work",
    icon: Code2,
  },
  {
    title: "Business tools",
    description:
      "Calculators, forms, booking experiences, and helpful website utilities.",
    category: "Interactive tools",
    image: "/images/showcase-calculator.png",
    href: "/work",
    icon: Zap,
  },
];

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Learn", href: "#learn" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Brand() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2.5"
      aria-label="Alternative Tech Path home"
    >
      <div className="relative h-8 w-9 shrink-0" aria-hidden="true">
        <span className="absolute bottom-0 left-0 h-[90%] w-[70%] bg-violet-700 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <span className="absolute bottom-0 left-[40%] h-[70%] w-[60%] bg-sky-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      </div>
      <span className="text-[12px] font-black leading-[1.15] tracking-[0.035em] sm:text-[14px]">
        ALTERNATIVE
        <span className="block">TECH PATH</span>
      </span>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className="relative z-30 flex min-h-[78px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Brand />

        <div className="hidden items-center gap-7 md:flex">
          <nav aria-label="Main navigation" className="flex gap-7">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-[var(--site-text)] hover:text-[var(--site-accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <SiteTheme />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          role="dialog"
          aria-modal={open ? true : undefined}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
          className={`absolute inset-y-0 left-0 flex w-[min(85vw,330px)] flex-col bg-[var(--site-surface)] p-6 text-[var(--site-text)] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <Brand />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="mt-10 flex flex-col gap-2"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-bold hover:bg-[var(--site-soft)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-[var(--site-border)] pt-5">
            <p className="mb-3 text-xs text-[var(--site-muted)]">Appearance</p>
            <SiteTheme />
          </div>
        </aside>
      </div>
    </>
  );
}

function ProjectPreview({ image, title }: { image: string; title: string }) {
  return (
    <div className="atp-preview relative aspect-[16/10] w-full overflow-hidden">
      <Image
        src={image}
        alt={`${title} preview`}
        fill
        sizes="(max-width: 768px) 100vw, 600px"
        className="object-cover"
      />
    </div>
  );
}

function ProjectCard({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  const Icon = project.icon;

  return (
    <Link
      href={project.href}
      className={`atp-card group block ${
        compact ? "lg:flex lg:items-center" : ""
      }`}
    >
      <div className={compact ? "lg:w-[48%] lg:shrink-0" : ""}>
        <ProjectPreview image={project.image} title={project.title} />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center gap-2 text-[var(--site-accent)]">
          <Icon className="h-5 w-5" />
          <span className="text-xs font-semibold">{project.category}</span>
        </div>

        <h3 className="text-lg font-extrabold leading-tight">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-[var(--site-muted)]">
          {project.description}
        </p>

        <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[var(--site-accent)]">
          View example
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

function Hero({ variant }: { variant: HomepageVariant }) {
  const modern = variant === "modern";

  return (
    <section
      className={`relative overflow-hidden ${
        modern
          ? "bg-gradient-to-br from-[#171345] via-[#3b178b] to-[#6422cb] text-white"
          : "bg-[var(--site-surface)]"
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1320px] items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20 ${
          variant === "existing" ? "lg:grid-cols-1" : ""
        }`}
      >
        <div className="relative z-10">
          <p
            className={`mb-5 text-xs font-extrabold uppercase tracking-[0.08em] sm:text-sm ${
              modern ? "text-violet-200" : "text-[var(--site-accent)]"
            }`}
          >
            Software development & web experiences
          </p>

          <h1 className="max-w-[750px] text-[36px] font-black leading-[1.09] tracking-[-0.055em] sm:text-[48px] lg:text-[58px]">
            Practical software.
            <span className="block">Thoughtful web experiences.</span>
          </h1>

          <p
            className={`mt-6 max-w-[610px] text-base leading-[1.75] sm:text-lg ${
              modern ? "text-white/85" : "text-[var(--site-muted)]"
            }`}
          >
            I build websites, interactive components, and digital tools that
            help turn ideas into something people can actually use.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="atp-primary">
              Explore my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={`atp-secondary ${
                modern ? "!border-white/40 !bg-white/10 !text-white" : ""
              }`}
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className={`relative ${
            variant === "existing" ? "mx-auto w-full max-w-[560px]" : ""
          }`}
        >
          <div className="rounded-[24px] bg-gradient-to-br from-violet-200 via-purple-100 to-sky-200 p-5 shadow-[0_25px_65px_rgba(42,20,100,0.14)] sm:p-8">
            <div className="overflow-hidden rounded-xl border border-violet-200 bg-white shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="ml-3 text-[10px] text-slate-400">
                  Interactive website preview
                </span>
              </div>

              <div className="p-5 text-[#0b1438] sm:p-7">
                <h2 className="mb-5 text-center text-lg font-black">
                  What clients say
                </h2>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    "A smoother experience.",
                    "Simple and effective.",
                    "Exactly what we needed.",
                  ].map((quote) => (
                    <div
                      key={quote}
                      className="rounded-lg border border-violet-100 bg-white p-2 shadow-sm sm:p-3"
                    >
                      <div className="mb-2 text-[10px] text-amber-500">
                        ★★★★★
                      </div>
                      <p className="text-[9px] font-medium leading-relaxed sm:text-xs">
                        “{quote}”
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-between text-violet-600">
                  <ArrowRight className="h-5 w-5 rotate-180" />
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <p
            className={`mt-3 text-center text-xs ${
              modern ? "text-white/70" : "text-[var(--site-muted)]"
            }`}
          >
            Illustrative demo — not actual client reviews
          </p>
        </div>
      </div>
    </section>
  );
}

function Work({ variant }: { variant: HomepageVariant }) {
  return (
    <section
      id="work"
      className="scroll-mt-8 px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
            Selected work
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Explore my work
          </h2>
          <p className="mt-3 max-w-[650px] text-sm leading-relaxed text-[var(--site-muted)] sm:text-base">
            A collection of working examples, from complete landing pages to
            focused website sections and practical tools.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-[var(--site-accent)]"
        >
          Have a project in mind?
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div
        className={
          variant === "modern"
            ? "grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            : "grid gap-5 md:grid-cols-2"
        }
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            compact={variant === "hybrid"}
          />
        ))}
      </div>
    </section>
  );
}

function Learn() {
  return (
    <section
      id="learn"
      className="scroll-mt-8 bg-[var(--site-hero)] px-5 py-12 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid max-w-[1150px] items-center gap-8 md:grid-cols-[1fr_240px]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
            Learn and build
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            From Skills to Software
          </h2>
          <p className="mt-4 max-w-[660px] leading-relaxed text-[var(--site-muted)]">
            A free five-day email course to help you turn your programming
            knowledge into a real application you can build, finish, and deploy.
          </p>
          <Link href={courseUrl} className="atp-primary mt-6">
            Start the free course
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto h-[260px] w-[230px]">
          <Image
            src="/images/from-skills-to-software-book.png"
            alt="From Skills to Software course book"
            fill
            sizes="230px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  const services = [
    {
      title: "Build",
      description: "Create websites and web applications around real needs.",
      Icon: Code2,
    },
    {
      title: "Enhance",
      description:
        "Add interactive sections and useful features to an existing website.",
      Icon: Layers3,
    },
    {
      title: "Share",
      description:
        "Make practical development knowledge accessible through educational resources.",
      Icon: BookOpen,
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-8 px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
    >
      <div className="mb-8 max-w-[750px]">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
          What I do
        </p>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          How I can help
        </h2>
        <p className="mt-3 leading-relaxed text-[var(--site-muted)]">
          From small improvements to complete software projects, I focus on
          creating useful experiences without unnecessary complexity.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {services.map(({ title, description, Icon }) => (
          <div key={title} className="atp-card p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--site-soft)] text-[var(--site-accent)]">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--site-muted)]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 px-5 pb-12 sm:px-8 lg:px-10">
      <div className="rounded-[22px] bg-gradient-to-r from-[#5720c7] to-[#347de8] px-6 py-10 text-white sm:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black sm:text-3xl">
              Have an idea for your website or a project in mind?
            </h2>
            <p className="mt-3 text-sm text-white/85 sm:text-base">
              Let's talk about how to make it happen.
            </p>
          </div>

          <a
            href="mailto:hello@alternativetechpath.com"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#32117d] hover:bg-violet-50"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-5 border-t border-[var(--site-border)] px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
      <Brand />

      <nav
        aria-label="Footer navigation"
        className="flex flex-wrap gap-5 text-sm font-semibold"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <p className="text-xs text-[var(--site-muted)]">Alternative Tech Path</p>
    </footer>
  );
}

export default function ShowcaseHomepage({
  variant,
}: {
  variant: HomepageVariant;
}) {
  return (
    <main className="atp-site">
      <div
        className={
          variant === "existing"
            ? "mx-auto min-h-screen max-w-[860px] bg-[var(--site-surface)] shadow-sm lg:my-6 lg:overflow-hidden lg:rounded-[24px] lg:border lg:border-[var(--site-border)]"
            : variant === "hybrid"
              ? "mx-auto min-h-screen max-w-[1440px] bg-[var(--site-surface)] shadow-sm lg:my-5 lg:overflow-hidden lg:rounded-[24px] lg:border lg:border-[var(--site-border)]"
              : "min-h-screen bg-[var(--site-surface)]"
        }
      >
        <Header />
        <Hero variant={variant} />
        <Work variant={variant} />
        <Learn />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

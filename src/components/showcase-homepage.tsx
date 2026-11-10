"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calculator,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Layers3,
  Mail,
  Menu,
  Monitor,
  Sparkles,
  X,
} from "lucide-react";
import SiteTheme from "@/components/site-theme";

export type HomepageVariant = "hybrid" | "existing" | "modern";

const courseUrl = "/learn/from-skills-to-software";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Examples", href: "#examples" },
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
        <span className="absolute bottom-0 left-0 h-[90%] w-[70%] bg-[#1768E8] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <span className="absolute bottom-0 left-[40%] h-[70%] w-[60%] bg-[#3DE0D0] [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
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
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    let frame = 0;

    function updateScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setFloating(window.scrollY > 0);
      });
    }

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function handleResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`atp-header ${floating ? "atp-header--floating" : ""}`}
      >
        <div className="atp-header-inner flex items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Brand />

          <div className="hidden items-center gap-7 md:flex">
            <nav aria-label="Main navigation" className="flex gap-7">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold transition-colors hover:text-[var(--site-accent)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <SiteTheme />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="atp-mobile-navigation"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        id="atp-mobile-navigation"
        className={`fixed inset-0 z-[100] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          role="dialog"
          aria-modal={open ? true : undefined}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          inert={!open}
          className={`absolute inset-y-0 left-0 flex w-[min(85vw,330px)] flex-col bg-[var(--site-surface)] p-6 text-[var(--site-text)] shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
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
                className="rounded-xl px-4 py-3 font-bold hover:bg-[var(--site-soft)]"
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

function BrowserWindow({
  children,
  address = "example.com",
  className = "",
}: {
  children: React.ReactNode;
  address?: string;
  className?: string;
}) {
  return (
    <div className={`atp-browser ${className}`}>
      <div className="atp-browser-bar">
        <div className="flex shrink-0 gap-1.5">
          <span className="atp-browser-dot bg-[#ff8585]" />
          <span className="atp-browser-dot bg-[#ffc56a]" />
          <span className="atp-browser-dot bg-[#68d8a0]" />
        </div>
        <div className="atp-browser-address">{address}</div>
        <div className="w-[33px] shrink-0" />
      </div>
      {children}
    </div>
  );
}

function LandingScreen({ hero = false }: { hero?: boolean }) {
  return (
    <div
      className={`bg-[#F7FBFF] text-[#10243E] ${hero ? "p-4 sm:p-6" : "p-3"}`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#236BDF] text-white">
            <Sparkles className="h-3 w-3" />
          </div>
          <span className="text-[9px] font-black tracking-tight">
            THE GROWTH GUIDE
          </span>
        </div>
        <div className="flex items-center gap-3 text-[7px] font-semibold text-slate-500">
          <span>About</span>
          <span>Resources</span>
          <span className="rounded bg-[#236BDF] px-2 py-1 text-white">
            Join free
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-3">
        <div>
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#DCEFFA] px-2 py-1 text-[7px] font-bold text-[#1259BC]">
            <Mail className="h-2.5 w-2.5" />
            FREE 5-DAY EMAIL SERIES
          </div>

          <h3
            className={`font-black leading-[1.12] tracking-tight ${
              hero ? "text-[clamp(13px,2.4vw,24px)]" : "text-base"
            }`}
          >
            Share your knowledge.
            <span className="block text-[#1259BC]">Grow your audience.</span>
          </h3>

          <p
            className={`mt-2 leading-relaxed text-slate-500 ${
              hero ? "text-[9px] sm:text-[11px]" : "text-[8px]"
            }`}
          >
            Practical lessons delivered straight to your inbox.
          </p>

          <div className="mt-4 flex gap-1.5">
            <div className="flex h-7 min-w-0 flex-1 items-center rounded-md border border-slate-200 bg-white px-2 text-[8px] text-slate-400">
              Your email address
            </div>
            <div className="flex h-7 items-center justify-center rounded-md bg-[#236BDF] px-3 text-[8px] font-bold text-white">
              Get started
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1 text-[7px] text-slate-500">
            <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            Free lessons. No spam.
          </div>
        </div>

        <div className="relative flex min-h-[125px] items-center justify-center sm:min-h-[160px]">
          <div className="absolute h-28 w-28 rounded-full bg-[#87E8F2]/50 blur-2xl" />
          <div className="relative w-[76%] max-w-[145px] -rotate-6 rounded-xl border border-[#D7E7F4] bg-white p-3 shadow-xl">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCEFFA]">
              <BookOpen className="h-4 w-4 text-[#236BDF]" />
            </div>
            <p className="text-[8px] font-black text-[#123B69]">
              5 DAYS TO
              <br />
              BETTER IDEAS
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-[#DCEFFA]" />
              <div className="h-1.5 w-4/5 rounded bg-[#DCEFFA]" />
              <div className="h-1.5 w-3/5 rounded bg-sky-100" />
            </div>
            <div className="mt-3 h-1.5 w-12 rounded bg-[#236BDF]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroLaptop() {
  return (
    <div
      className="atp-laptop-scene relative mx-auto w-full max-w-[590px]"
      role="img"
      aria-label="Illustrative landing page displayed on a laptop"
    >
      <div className="atp-laptop-glow" />
      <div className="atp-laptop-perspective">
        <div className="atp-laptop relative w-full">
          <div className="atp-laptop-lid">
            <div className="atp-laptop-camera" />
            <div className="atp-laptop-screen">
              <LandingScreen hero />
            </div>
          </div>
          <div className="atp-laptop-base">
            <div className="atp-laptop-notch" />
          </div>
          <div className="atp-laptop-bottom" />
        </div>
      </div>

      <div className="atp-hero-float atp-hero-float--left" aria-hidden="true">
        <span className="atp-float-icon">
          <Mail size={16} />
        </span>
        <span>
          <strong>5-day course</strong>
          <small>Ready to launch</small>
        </span>
      </div>

      <div className="atp-hero-float atp-hero-float--right" aria-hidden="true">
        <span className="atp-float-icon atp-float-icon--green">
          <Check size={16} />
        </span>
        <span>
          <strong>Signup connected</strong>
          <small>Audience-ready</small>
        </span>
      </div>

      <div className="pointer-events-none absolute -right-1 top-[10%] hidden items-center gap-2 rounded-xl border border-white/30 bg-white px-3 py-2 text-[#123B69] shadow-xl sm:flex atp-original-hero-badge">
        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
        <span className="text-[10px] font-bold">Ready to engage</span>
      </div>
    </div>
  );
}

function Hero({ variant }: { variant: HomepageVariant }) {
  const modern = variant === "modern";

  return (
    <section
      className={`relative overflow-hidden ${
        modern
          ? "bg-gradient-to-br from-[#071324] via-[#12365D] to-[#155D83] text-white"
          : "bg-[var(--site-surface)]"
      }`}
    >
      {modern && (
        <>
          <div className="pointer-events-none absolute -right-20 -top-24 h-[350px] w-[350px] rounded-full bg-cyan-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-28 left-[25%] h-[300px] w-[300px] rounded-full bg-sky-400/15 blur-[90px]" />
        </>
      )}

      <div
        className={`relative grid items-center gap-10 px-5 py-16 sm:px-8 lg:gap-10 lg:px-10 lg:py-24 ${
          variant === "existing"
            ? "lg:grid-cols-1"
            : "lg:grid-cols-[0.92fr_1.08fr]"
        }`}
      >
        <div className="relative z-10 order-2 lg:order-1">
          <p
            className={`mb-6 text-xs font-extrabold uppercase tracking-[0.09em] ${
              modern ? "text-cyan-100" : "text-[var(--site-accent)]"
            }`}
          >
            Landing pages · Email courses · Website add-ons
          </p>

          <h1 className="max-w-[660px] text-[37px] font-black leading-[1.09] tracking-[-0.055em] sm:text-[47px] lg:text-[52px]">
            Turn what you know into something your audience can use.
          </h1>

          <p
            className={`mt-6 max-w-[550px] text-base leading-[1.85] ${
              modern ? "text-white/85" : "text-[var(--site-muted)]"
            }`}
          >
            From focused landing pages and educational email courses to
            interactive website features, I help you create digital assets that
            share your expertise and give visitors a reason to take the next
            step.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="atp-primary">
              Explore what I build
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className={`atp-secondary ${
                modern ? "!border-white/40 !bg-white/10 !text-white" : ""
              }`}
            >
              Discuss an idea
            </a>
          </div>
        </div>

        <div className="relative order-1 min-w-0 py-4 lg:order-2">
          <HeroLaptop />
          <p
            className={`mt-3 text-center text-[11px] ${
              modern ? "text-white/65" : "text-[var(--site-muted)]"
            }`}
          >
            Illustrative landing page concept
          </p>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    number: "01",
    title: "Landing pages",
    subtitle: "Give your visitors a clear next step.",
    description:
      "Focused pages built around a specific offer, free resource, signup, or launch. Designed to communicate the value clearly and make taking action simple.",
    items: [
      "Lead magnet pages",
      "Email signup pages",
      "Launch and offer pages",
    ],
    icon: Monitor,
  },
  {
    number: "02",
    title: "Educational email courses",
    subtitle: "Turn your expertise into a useful resource.",
    description:
      "Structured educational email sequences that teach your audience something valuable, supported by a signup page and email platform integration.",
    items: [
      "Course planning and structure",
      "Email content and sequence",
      "Landing page and signup setup",
    ],
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Website add-ons",
    subtitle: "Add something useful to the website you already have.",
    description:
      "Standalone interactive components that enhance an existing website without requiring a complete rebuild.",
    items: [
      "Testimonials and reviews",
      "Calculators and interactive tools",
      "FAQs, galleries, and custom sections",
    ],
    icon: Layers3,
  },
];

function Services() {
  const [expandedServices, setExpandedServices] = useState<string[]>([]);

  function toggleService(number: string) {
    setExpandedServices((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number],
    );
  }

  return (
    <section id="services-section" className="px-5 py-20 sm:px-8 lg:px-10">
      <div
        id="services"
        className="atp-anchor atp-section-heading max-w-[750px]"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
          What I can build for you
        </p>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Practical solutions for your next idea.
        </h2>
        <p className="mt-5 leading-[1.85] text-[var(--site-muted)]">
          You don&apos;t always need an entirely new website. Sometimes the most
          useful next step is a focused page, an educational resource, or a
          feature that solves a specific problem.
        </p>
      </div>

      <div className="atp-services-grid grid gap-7 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          const expanded = expandedServices.includes(service.number);
          const detailsId = `service-details-${service.number}`;

          return (
            <article
              key={service.number}
              className="atp-card atp-service-card flex flex-col p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="atp-service-icon flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--site-soft)] text-[var(--site-accent)]">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-black text-[var(--site-muted)]/50">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-extrabold">{service.title}</h3>

              <p className="mt-3 text-sm font-semibold text-[var(--site-accent)]">
                {service.subtitle}
              </p>

              <div className="mt-7 border-t border-[var(--site-border)] pt-5">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={detailsId}
                  onClick={() => toggleService(service.number)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl bg-[var(--site-soft)] px-4 py-3 text-left text-sm font-bold text-[var(--site-text)] transition-colors hover:text-[var(--site-accent)]"
                >
                  <span>What&apos;s included</span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 text-[var(--site-accent)] transition-transform duration-300 ${
                      expanded ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div id={detailsId} hidden={!expanded} className="pt-5">
                  <p className="mb-5 text-sm leading-[1.85] text-[var(--site-muted)]">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--site-accent)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--site-accent)]"
                  >
                    Discuss this service
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialScreen() {
  const quotes = [
    ["Alex M.", "Simple, clear, and easy to use."],
    ["Jordan L.", "A much smoother experience."],
    ["Taylor R.", "Exactly what I was looking for."],
  ];

  return (
    <div className="bg-[#F4F9FD] p-4 text-[#10243E]">
      <div className="mb-4 text-center">
        <p className="text-[8px] font-bold uppercase tracking-widest text-[#236BDF]">
          Customer stories
        </p>
        <h3 className="mt-1 text-sm font-black">What people are saying</h3>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {quotes.map(([name, quote]) => (
          <div
            key={name}
            className="rounded-lg border border-[#D7E7F4] bg-white p-2 shadow-sm"
          >
            <p className="text-[8px] text-amber-400">★★★★★</p>
            <p className="mt-2 min-h-[43px] text-[8px] font-semibold leading-relaxed">
              “{quote}”
            </p>
            <p className="mt-3 border-t border-slate-100 pt-2 text-[8px] font-bold">
              {name}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-[7px] text-slate-400">
        Fictional testimonials for demonstration
      </p>
    </div>
  );
}

function EmailCourseScreen() {
  const lessons = [
    ["01", "Welcome and first steps"],
    ["02", "Understand the opportunity"],
    ["03", "Build a practical plan"],
    ["04", "Put it into action"],
    ["05", "What comes next"],
  ];

  return (
    <div className="bg-[#F4F9FD] p-4 text-[#10243E]">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCEFFA]">
          <Mail className="h-4 w-4 text-[#236BDF]" />
        </div>
        <div>
          <p className="text-[10px] font-black">Your 5-day email course</p>
          <p className="text-[8px] text-slate-500">
            Educational sequence preview
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {lessons.map(([day, title], index) => (
          <div
            key={day}
            className="flex items-center gap-3 rounded-lg border border-[#D7E7F4] bg-white p-2"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#DCEFFA] text-[8px] font-black text-[#1259BC]">
              {day}
            </span>
            <span className="min-w-0 flex-1 truncate text-[9px] font-semibold">
              {title}
            </span>
            {index === 0 ? (
              <CheckCircle2 className="h-3 w-3 text-emerald-500" />
            ) : (
              <ChevronRight className="h-3 w-3 text-slate-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalculatorScreen() {
  return (
    <div className="bg-[#F4F9FD] p-4 text-[#10243E]">
      <div className="mb-4 flex items-center gap-2">
        <Calculator className="h-5 w-5 text-[#236BDF]" />
        <div>
          <p className="text-xs font-black">Interactive estimator</p>
          <p className="text-[8px] text-slate-500">Example website add-on</p>
        </div>
      </div>

      <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
        <div className="space-y-4 rounded-lg border border-[#D7E7F4] bg-white p-3">
          {[
            ["Project size", "65%"],
            ["Complexity", "40%"],
            ["Features", "80%"],
          ].map(([label, width]) => (
            <div key={label}>
              <p className="mb-1.5 text-[8px] font-semibold">{label}</p>
              <div className="h-2 rounded-full bg-[#DCEFFA]">
                <div
                  className="h-2 rounded-full bg-[#22B8CC]"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center rounded-lg bg-[#123B69] p-3 text-white">
          <p className="text-[8px] text-white/70">Illustrative estimate</p>
          <p className="mt-2 text-lg font-black">$2,400</p>
          <p className="mt-2 text-[7px] text-white/70">Example only</p>
        </div>
      </div>
    </div>
  );
}

type ExampleKind = "landing" | "email" | "testimonial" | "calculator";

function ExamplePreview({ kind }: { kind: ExampleKind }) {
  switch (kind) {
    case "landing":
      return <LandingScreen />;
    case "email":
      return <EmailCourseScreen />;
    case "testimonial":
      return <TestimonialScreen />;
    case "calculator":
      return <CalculatorScreen />;
  }
}

const examples: {
  title: string;
  description: string;
  type: string;
  href: string;
  kind: ExampleKind;
}[] = [
  {
    title: "Focused landing page",
    description: "A clear offer, a simple signup, and a reason to take action.",
    type: "Landing page",
    href: courseUrl,
    kind: "landing",
  },
  {
    title: "Educational email sequence",
    description: "A structured series of lessons delivered through email.",
    type: "Email course",
    href: courseUrl,
    kind: "email",
  },
  {
    title: "Scrolling testimonials",
    description:
      "A standalone section that can be added to an existing website.",
    type: "Website add-on",
    href: "/work/scrolling-testimonials",
    kind: "testimonial",
  },
  {
    title: "Interactive calculator",
    description: "An example of a focused tool visitors can use directly.",
    type: "Website add-on concept",
    href: "#contact",
    kind: "calculator",
  },
];

function Examples() {
  return (
    <section
      id="examples-section"
      className="bg-[var(--site-hero)] px-5 py-20 sm:px-8 lg:px-10"
    >
      <div
        id="examples"
        className="atp-anchor atp-section-heading max-w-[750px]"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
          Examples and demonstrations
        </p>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          See what&apos;s possible.
        </h2>
        <p className="mt-5 leading-[1.85] text-[var(--site-muted)]">
          A few examples of the kinds of digital assets and interactive features
          that can be created. These are demonstrations, not claims of completed
          client projects.
        </p>
      </div>

      <div className="atp-examples-grid grid gap-7 md:grid-cols-2">
        {examples.map((example) => (
          <Link
            key={example.title}
            href={example.href}
            className="atp-card group"
          >
            <div className="atp-preview-stage">
              <div className="atp-preview-halo" aria-hidden="true" />
              <BrowserWindow className="w-full max-w-[390px] transition-transform duration-300 group-hover:scale-[1.025]">
                <ExamplePreview kind={example.kind} />
              </BrowserWindow>
            </div>

            <div className="atp-example-description">
              <p className="mb-3 text-xs font-bold text-[var(--site-accent)]">
                {example.type}
              </p>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold">{example.title}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--site-accent)] transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-3 text-sm leading-[1.8] text-[var(--site-muted)]">
                {example.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Start with an idea",
      description:
        "We discuss what you want to accomplish, who it's for, and what would make it useful.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Plan the right asset",
      description:
        "We decide on the page, email course, or interactive feature that best fits the goal.",
      icon: Layers3,
    },
    {
      number: "03",
      title: "Build and deliver",
      description:
        "I create the asset, refine the details, and help prepare it for use.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="process-section"
      className="atp-process-section px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div
        id="process"
        className="atp-anchor atp-section-heading max-w-[750px]"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
          A straightforward process
        </p>
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          From conversation to something useful.
        </h2>
      </div>

      <div className="atp-process-grid grid gap-7 md:grid-cols-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.number} className="atp-process-card">
              <div className="atp-process-topline">
                <div className="atp-process-icon">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="atp-process-number">{step.number}</span>
              </div>
              <h3 className="mt-7 text-lg font-extrabold">{step.title}</h3>
              <p className="mt-4 text-sm leading-[1.85] text-[var(--site-muted)]">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about-section"
      className="atp-about-section px-5 py-20 sm:px-8 lg:px-10"
    >
      <div className="atp-about-grid grid items-center gap-12 md:grid-cols-[1fr_0.85fr]">
        <div id="about" className="atp-anchor relative z-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
            About Alternative Tech Path
          </p>
          <h2 className="text-3xl font-black tracking-tight">
            A practical approach to building.
          </h2>
          <p className="mt-6 leading-[1.85] text-[var(--site-muted)]">
            I&apos;m an IT Technician and Software Developer with experience
            building web applications and solving practical technology problems.
          </p>
          <p className="mt-5 leading-[1.85] text-[var(--site-muted)]">
            Through Alternative Tech Path, I bring that technical background to
            focused projects: landing pages, educational email courses, and
            useful additions to existing websites.
          </p>
        </div>

        <div
          className="atp-about-visual"
          aria-label="Illustration of connected design, development and integrations"
        >
          <div
            className="atp-about-orbit atp-about-orbit--one"
            aria-hidden="true"
          />
          <div
            className="atp-about-orbit atp-about-orbit--two"
            aria-hidden="true"
          />
          <div className="atp-about-main-card">
            <div className="atp-about-card-head">
              <div className="atp-about-icon">
                <Code2 className="h-6 w-6" />
              </div>
              <span className="atp-about-dots" aria-hidden="true">
                ● ● ●
              </span>
            </div>
            <h3 className="mt-6 text-xl font-extrabold">
              More than just a page.
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-[var(--site-muted)]">
              Design, development, integrations, and technical details working
              together to make something genuinely useful.
            </p>
            <div className="atp-about-tags">
              <span>Web development</span>
              <span>Integrations</span>
              <span>Problem solving</span>
            </div>
          </div>
          <div
            className="atp-about-mini atp-about-mini--top"
            aria-hidden="true"
          >
            <Sparkles size={16} />
            <span>Ideas into products</span>
          </div>
          <div
            className="atp-about-mini atp-about-mini--bottom"
            aria-hidden="true"
          >
            <CheckCircle2 size={17} />
            <span>Built to be useful</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Learn() {
  return (
    <section id="learn-section" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="atp-course-panel grid items-center gap-10 rounded-2xl bg-[var(--site-hero)] px-6 py-12 md:grid-cols-[minmax(0,1fr)_minmax(240px,350px)] md:px-10">
        <div id="learn" className="atp-anchor">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--site-accent)]">
            A free resource
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            From Skills to Software
          </h2>
          <p className="mt-6 max-w-[600px] leading-[1.85] text-[var(--site-muted)]">
            Interested in building software yourself? This free five-day email
            course walks through the decisions involved in turning programming
            knowledge into a real application.
          </p>
          <Link href={courseUrl} className="atp-primary mt-8">
            Explore the free course
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="atp-course-art relative mx-auto flex w-full max-w-[350px] items-center justify-center">
          <div className="absolute h-[230px] w-[230px] rounded-full bg-cyan-300/20 blur-[45px]" />
          <div className="atp-course-ring" aria-hidden="true" />
          <div className="relative h-[350px] w-full">
            <Image
              src="/images/from-skills-to-software-book.png"
              alt="From Skills to Software course book"
              fill
              sizes="(max-width: 768px) 290px, 350px"
              className="object-contain"
            />
          </div>
          <div className="atp-course-chip" aria-hidden="true">
            <BookOpen size={16} />
            Free 5-day course
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact-section"
      className="px-5 pb-16 pt-12 sm:px-8 lg:px-10 lg:pb-20"
    >
      <div className="atp-contact-panel rounded-[22px] bg-gradient-to-r from-[#103D71] via-[#1768B3] to-[#0A9BB1] px-6 py-14 text-white sm:px-10">
        <div className="flex flex-col justify-between gap-9 md:flex-row md:items-center">
          <div id="contact" className="atp-anchor max-w-[700px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-white/75">
              Let&apos;s explore your idea
            </p>
            <h2 className="text-2xl font-black sm:text-3xl">
              Have something in mind? Let&apos;s talk about it.
            </h2>
            <p className="mt-5 leading-[1.85] text-white/85">
              Whether it&apos;s a landing page, an educational email course, or
              a feature for your website, we can start with a simple
              conversation about what you&apos;re trying to achieve.
            </p>
          </div>

          <a
            href="mailto:hello@alternativetechpath.com?subject=Project%20idea"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#103D71] transition-colors hover:bg-violet-50"
          >
            <Mail className="h-4 w-4" />
            Discuss an idea
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="atp-footer flex flex-col gap-6 border-t border-[var(--site-border)] bg-[var(--site-surface)] px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
      <Brand />
      <nav
        aria-label="Footer navigation"
        className="flex flex-wrap gap-5 text-sm font-semibold"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-[var(--site-accent)]"
          >
            {item.label}
          </a>
        ))}
        <Link href={courseUrl} className="hover:text-[var(--site-accent)]">
          Free course
        </Link>
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
        className={`atp-page-frame ${
          variant === "existing" ? "atp-page-frame--existing" : ""
        }`}
      >
        <Header />
        <Hero variant={variant} />
        <Services />
        <Examples />
        <Process />
        <About />
        <Learn />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Code2 } from "lucide-react";

const colors = {
  navy: "#050426",
  navySoft: "#0D1036",
  navyRaised: "#11143F",
  cyan: "#1EAEF5",
  cyanLight: "#27B7FF",
  text: "#FFFFFF",
  muted: "#C4CAE2",
  border: "#29294D",
  outer: "#F5F3EF",
};

const course = {
  badge: "FREE 5-DAY EMAIL COURSE",
  title: "THE ALTERNATIVE TECH PATH PLAYBOOK",
  description:
    "Avoid These 5 Costly Mistakes That Keep You Stuck in Traditional Roles, Limit Your Earning Potential, and Stop You from Breaking Into New Markets and Opportunities like Business, Entrepreneurship, and High-Impact Non-Technical Roles",
  supportingText:
    "Even If You’re an Experienced Developer or Tech Professional!",
};

const benefits = [
  {
    strong: "Actionable Insights",
    rest: "to transition from being purely technical.",
  },
  {
    strong: "A Step-by-Step Framework",
    rest: "for identifying your transferable skills in new tech roles and business opportunities.",
  },
  {
    strong: "Essential Communication Tactics",
    rest: "that make you irreplaceable.",
  },
  {
    strong: "A 5-Day Free Email Course",
    rest: "to transition from technical roles to consulting, writing online, or entrepreneurship.",
  },
];

const lessons = [
  {
    day: 1,
    title: "Underestimating Your Transferable Skills",
    description: "Why this holds you back from unlocking new opportunities.",
  },
  {
    day: 2,
    title: "Overlooking Business Fundamentals",
    description: "Why this makes your transition more difficult.",
  },
  {
    day: 3,
    title: "Ignoring Solutions That Don't Require Code",
    description:
      "Why this can prevent you from solving bigger, higher-value problems.",
  },
  {
    day: 4,
    title: "Failing to Leverage Your Industry Knowledge",
    description:
      "Why this means missing out on roles that value what you know.",
  },
  {
    day: 5,
    title: "Neglecting Communication Skill Improvement",
    description: "How this can make you replaceable.",
  },
];

function BrandMark() {
  return (
    <div className="relative h-8 w-9 shrink-0" aria-hidden="true">
      <span className="absolute bottom-0 left-0 h-[90%] w-[70%] bg-violet-700 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <span className="absolute bottom-0 left-[40%] h-[70%] w-[60%] bg-sky-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
    </div>
  );
}

function Header() {
  return (
    <header
      className="sticky top-0 z-50 -mx-5 border-b px-5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
      style={{
        backgroundColor: "rgba(5, 4, 38, 0.96)",
        borderColor: colors.border,
      }}
    >
      <nav
        aria-label="Main navigation"
        className="flex min-h-[76px] items-center justify-between gap-3"
      >
        <Link
          href="/"
          aria-label="Alternative Tech Path home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <BrandMark />

          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-black leading-[1.15] tracking-[0.035em] text-white sm:text-[15px]">
              ALTERNATIVE
            </span>
            <span className="text-[11px] font-black leading-[1.15] tracking-[0.035em] text-white sm:text-[15px]">
              TECH PATH
            </span>
          </div>
        </Link>

        <span
          className="rounded-full border px-3 py-1.5 text-[10px] font-bold sm:text-xs"
          style={{
            borderColor: colors.border,
            color: colors.muted,
            backgroundColor: colors.navyRaised,
          }}
        >
          Portfolio demonstration
        </span>
      </nav>
    </header>
  );
}

function PlaybookBook() {
  return (
    <div className="flex w-full items-center justify-center lg:justify-end">
      <div
        className="relative h-[370px] w-full max-w-[340px] overflow-hidden sm:h-[430px] sm:max-w-[390px] lg:h-[500px] lg:max-w-none"
        style={{ backgroundColor: colors.navy }}
      >
        <Image
          src="/images/alternative-tech-path-playbook.png"
          alt="The Alternative Tech Path Playbook book cover"
          fill
          priority
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 390px, 430px"
          className="scale-[1.55] object-contain"
        />
      </div>
    </div>
  );
}

function DemoSubscribeForm() {
  return (
    <div className="mx-auto w-full max-w-[660px]">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email here"
          disabled
          className="min-h-[54px] min-w-0 flex-1 rounded-xl border border-[#D7DDEB] bg-white px-4 text-[15px] text-[#0B1438] placeholder:text-[#7D89A2] disabled:cursor-not-allowed disabled:opacity-100"
        />

        <button
          type="button"
          disabled
          className="flex min-h-[54px] items-center justify-center gap-2 rounded-xl px-6 text-[14px] font-extrabold text-[#050426] disabled:cursor-not-allowed disabled:opacity-100 sm:text-[15px]"
          style={{ backgroundColor: colors.cyan }}
        >
          SEND ME LESSON #1
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs" style={{ color: colors.muted }}>
        Portfolio demonstration — email submissions are disabled.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section>
      <div className="grid items-center gap-2 sm:gap-7 lg:grid-cols-[minmax(0,1fr)_310px] lg:gap-8">
        {/* Book first on mobile, right on desktop */}
        <div className="order-1 min-w-0 lg:order-2">
          <PlaybookBook />
        </div>

        {/* Hero text */}
        <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
          <span
            className="inline-flex rounded-xl border px-4 py-2 text-[12px] font-extrabold tracking-[0.025em] sm:text-sm"
            style={{
              color: colors.cyan,
              backgroundColor: colors.navyRaised,
              borderColor: colors.border,
            }}
          >
            {course.badge}
          </span>

          <h1 className="mx-auto mt-5 max-w-[680px] text-[30px] font-black italic leading-[1.12] tracking-[-0.035em] text-white sm:text-[37px] lg:mx-0 lg:text-[36px]">
            {course.title}
          </h1>

          <p className="mx-auto mt-5 max-w-[680px] text-[17px] font-bold leading-[1.5] text-white sm:text-[19px] lg:mx-0 lg:text-[19px]">
            {course.description}
          </p>

          <p
            className="mx-auto mt-5 max-w-[680px] text-[15px] font-medium italic leading-relaxed sm:text-[17px] lg:mx-0"
            style={{ color: colors.cyanLight }}
          >
            ({course.supportingText})
          </p>
        </div>
      </div>

      <div className="mt-9 w-full sm:mt-2">
        <DemoSubscribeForm />
      </div>
    </section>
  );
}

function CreatorSection() {
  return (
    <section
      id="creator"
      className="mt-10 border-t pt-9 sm:mt-12"
      style={{ borderColor: colors.border }}
    >
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-5 sm:flex-row sm:gap-9">
        <div
          className="flex h-[115px] w-[115px] shrink-0 items-center justify-center rounded-full border sm:h-[145px] sm:w-[145px]"
          style={{
            backgroundColor: colors.navyRaised,
            borderColor: colors.border,
          }}
        >
          <Code2 className="h-12 w-12" style={{ color: colors.cyan }} />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-[28px] font-black leading-tight tracking-[-0.045em] text-white sm:text-[32px]">
            Who Made This
          </h2>

          <p
            className="mt-3 text-[15px] leading-[1.65] sm:text-[17px]"
            style={{ color: colors.muted }}
          >
            I&apos;m Shaphan Charles, a Software Developer who has applied
            technical skills across different fields, including business
            analytics, independent software projects, and writing for founders
            and tech entrepreneurs.
          </p>

          <p
            className="mt-3 text-[15px] leading-[1.65] sm:text-[17px]"
            style={{ color: colors.muted }}
          >
            This course shares insights from exploring opportunities beyond
            traditional development roles.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section
      className="mt-10 border-t pt-9 sm:mt-12"
      style={{ borderColor: colors.border }}
    >
      <div className="mx-auto max-w-[790px]">
        <h2 className="text-center text-[28px] font-black leading-tight tracking-[-0.045em] text-white sm:text-[34px]">
          Start Leveraging Your Tech Skills in 5 Days
        </h2>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit.strong}
              className="flex items-start gap-3 rounded-xl border p-4"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.navySoft,
              }}
            >
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#163C61",
                  color: colors.cyan,
                }}
              >
                <Check className="h-4 w-4" />
              </div>

              <p className="text-[14px] leading-[1.6]">
                <strong style={{ color: colors.cyan }}>{benefit.strong}</strong>{" "}
                <span style={{ color: colors.muted }}>{benefit.rest}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LessonsSection() {
  return (
    <section
      id="what-to-expect"
      className="mt-10 border-t pt-9 sm:mt-12"
      style={{ borderColor: colors.border }}
    >
      <h2 className="mb-3 text-center text-[29px] font-black leading-tight tracking-[-0.05em] text-white sm:text-[38px]">
        What You&apos;ll Learn in 5 Days
      </h2>

      <p
        className="mx-auto mb-8 max-w-[620px] text-center text-[15px] leading-relaxed"
        style={{ color: colors.muted }}
      >
        Want to know what&apos;s inside before signing up? Here&apos;s a
        breakdown of the five lessons.
      </p>

      <div className="mx-auto max-w-[790px]">
        {lessons.map((lesson) => (
          <div
            key={lesson.day}
            className="grid grid-cols-[76px_minmax(0,1fr)] items-start gap-3 py-2 sm:grid-cols-[95px_minmax(0,1fr)] sm:gap-8"
          >
            <div
              className="flex h-[42px] items-center justify-center rounded-xl text-[14px] font-extrabold sm:text-[17px]"
              style={{
                backgroundColor: "#11274D",
                color: colors.cyan,
              }}
            >
              Day {lesson.day}
            </div>

            <div
              className="min-w-0 border-b pb-3"
              style={{ borderColor: colors.border }}
            >
              <h3 className="text-[17px] font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-[19px]">
                {lesson.title}
              </h3>

              <p
                className="mt-1 text-[13px] leading-[1.55] sm:text-[15px]"
                style={{ color: colors.muted }}
              >
                {lesson.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalSignup() {
  return (
    <section className="mt-12 w-full sm:mt-14">
      <h2 className="mb-5 text-center text-[25px] font-black tracking-[-0.04em] text-white sm:text-[30px]">
        Ready to Explore Your Alternative Tech Path?
      </h2>

      <DemoSubscribeForm />

      <p
        className="mt-4 text-center text-[13px] leading-relaxed sm:text-[15px]"
        style={{ color: colors.muted }}
      >
        Get the first lesson in your inbox and start exploring new opportunities
        for your skills.
      </p>
    </section>
  );
}

export default function AlternativeTechPathPlaybookDemo() {
  return (
    <main
      className="min-h-screen text-white lg:py-6"
      style={{ backgroundColor: colors.outer }}
    >
      <div
        className="mx-auto min-h-screen max-w-[860px] border-x px-5 pb-10 sm:px-8 lg:overflow-clip lg:rounded-[24px] lg:border lg:px-10"
        style={{
          backgroundColor: colors.navy,
          borderColor: colors.border,
        }}
      >
        <Header />
        <Hero />
        <CreatorSection />
        <BenefitsSection />
        <LessonsSection />
        <FinalSignup />

        <footer
          className="mt-14 text-center text-xs"
          style={{ color: colors.muted }}
        >
          © Alternative Tech Path
        </footer>
      </div>
    </main>
  );
}

import Image from "next/image";
import { Code2 } from "lucide-react";

import { CourseBook } from "@/components/course-book";
import SubscribeForm from "@/components/subscribe-form";
import { siteConfig } from "@/lib/site-config";

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <div
      className={
        small ? "relative h-7 w-9 shrink-0" : "relative h-9 w-12 shrink-0"
      }
      aria-hidden="true"
    >
      <span className="absolute bottom-0 left-0 h-[90%] w-[70%] bg-violet-700 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <span className="absolute bottom-0 left-[40%] h-[70%] w-[60%] bg-sky-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-center pb-12 pt-7 sm:pb-14">
      <div className="flex items-center justify-center gap-3">
        <BrandMark />

        <span className="text-[14px] font-black tracking-[0.07em] text-[#0b1438] sm:text-[21px] sm:tracking-[0.09em]">
          {siteConfig.brand.name.toUpperCase()}
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section>
      <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-14">
        {/* Book appears first on mobile, right on desktop */}
        <div className="order-1 lg:order-2">
          <CourseBook />
        </div>

        {/* Hero text */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="inline-flex rounded-xl bg-[#f0e7ff] px-4 py-2 text-[12px] font-extrabold tracking-[0.025em] text-[#6025dc] sm:text-sm">
            {siteConfig.course.badge}
          </span>

          <h1 className="mx-auto mt-4 max-w-[680px] text-[34px] font-black leading-[1.09] tracking-[-0.055em] text-[#0b1438] sm:text-[46px] lg:mx-0 lg:text-[50px]">
            {" "}
            {siteConfig.course.headline}
          </h1>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-[1.6] text-[#263254] sm:text-[19px] lg:mx-0">
            {siteConfig.course.description}
          </p>
        </div>
      </div>

      {/* First signup */}
      <div className="mt-9 sm:mt-11">
        <SubscribeForm />
      </div>
    </section>
  );
}

function CreatorSection() {
  const creator = siteConfig.creator;

  return (
    <section className="mt-10 border-t border-[#e8dafa] pt-9 sm:mt-12">
      <div className="mx-auto flex max-w-[800px] flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-9">
        <div className="relative flex h-[115px] w-[115px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#eee8fa] sm:h-[145px] sm:w-[145px]">
          {creator.image ? (
            <Image
              src={creator.image}
              alt={creator.name || "Course creator"}
              fill
              sizes="(max-width: 640px) 115px, 145px"
              className="object-cover"
            />
          ) : (
            <Code2 className="h-12 w-12 text-violet-700" />
          )}
        </div>

        <div className="text-center sm:text-left">
          <h2 className="text-[28px] font-black leading-tight tracking-[-0.045em] text-[#0b1438] sm:text-[32px]">
            {creator.name ? `Hi, I'm ${creator.name}` : creator.heading}
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#263254] sm:text-[17px]">
            {creator.description}
          </p>
        </div>
      </div>
    </section>
  );
}

function LessonsSection() {
  return (
    <section className="mt-10 border-t border-[#e8dafa] pt-9 sm:mt-12">
      <h2 className="mb-8 text-center text-[29px] font-black leading-tight tracking-[-0.05em] text-[#0b1438] sm:text-[38px]">
        What You&apos;ll Learn in 5 Days
      </h2>

      <div className="mx-auto max-w-[790px]">
        {siteConfig.lessons.map((lesson) => (
          <div
            key={lesson.day}
            className="grid grid-cols-[76px_minmax(0,1fr)] items-start gap-3 py-2 sm:grid-cols-[95px_minmax(0,1fr)] sm:gap-8"
          >
            <div className="flex h-[42px] items-center justify-center rounded-xl bg-[#f0e7ff] text-[14px] font-extrabold text-[#6025dc] sm:text-[17px]">
              Day {lesson.day}
            </div>

            <div className="min-w-0 border-b border-[#eee5fc] pb-3">
              <h3 className="text-[17px] font-extrabold leading-tight tracking-[-0.03em] text-[#0b1438] sm:text-[19px]">
                {lesson.title}
              </h3>

              <p className="mt-1 text-[13px] leading-[1.55] text-[#263254] sm:text-[15px]">
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
    <section className="mt-12 sm:mt-14">
      <SubscribeForm />

      <p className="mt-4 text-center text-[13px] leading-relaxed text-[#455276] sm:text-[15px]">
        {siteConfig.course.footerText}
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0b1438]">
      <div className="mx-auto max-w-[940px] px-5 pb-10 sm:px-8">
        <Header />

        <Hero />

        <CreatorSection />

        <LessonsSection />

        <FinalSignup />

        <footer className="mt-14 text-center text-xs text-slate-400">
          © {siteConfig.brand.name}
        </footer>
      </div>
    </main>
  );
}

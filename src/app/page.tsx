import { BookOpen, Code2 } from "lucide-react";
import { CourseBook } from "@/components/course-book";
import SubscribeForm from "@/components/subscribe-form";
import { siteConfig } from "@/lib/site-config";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative h-9 w-11">
        <span className="absolute bottom-0 left-0 h-8 w-7 bg-violet-700 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <span className="absolute bottom-0 left-4 h-6 w-7 bg-blue-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      </div>

      <span className="text-base font-extrabold tracking-[0.12em] text-[#0b1438] sm:text-xl">
        {siteConfig.brand.name.toUpperCase()}
      </span>
    </div>
  );
}

function CreatorSection() {
  return (
    <section className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-9">
      <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-violet-100">
        <Code2 className="h-12 w-12 text-violet-700" />
      </div>

      <div className="max-w-2xl text-center sm:text-left">
        <h2 className="text-3xl font-black tracking-tight">
          {siteConfig.creator.heading}
        </h2>

        <p className="mt-3 text-lg leading-relaxed text-[#263254]">
          {siteConfig.creator.description}
        </p>
      </div>
    </section>
  );
}

function LessonsSection() {
  return (
    <section className="mx-auto mt-20 max-w-4xl">
      <h2 className="mb-9 text-center text-3xl font-black tracking-tight sm:text-4xl">
        What You&apos;ll Learn in 5 Days
      </h2>

      <div>
        {siteConfig.lessons.map((lesson) => (
          <div
            key={lesson.day}
            className="grid grid-cols-[76px_1fr] gap-3 py-3 sm:grid-cols-[115px_1fr] sm:gap-7"
          >
            <div className="flex h-12 items-center justify-center rounded-xl bg-violet-100 text-sm font-extrabold text-violet-700 sm:text-base">
              Day {lesson.day}
            </div>

            <div className="border-b border-violet-100 pb-4">
              <h3 className="text-lg font-extrabold sm:text-xl">
                {lesson.title}
              </h3>

              <p className="mt-1 leading-relaxed text-[#263254]">
                {lesson.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0b1438]">
      <div className="mx-auto max-w-5xl px-5 pb-16 pt-7 sm:px-8">
        <header className="mb-12">
          <Logo />
        </header>

        {/* Hero */}
        <section className="grid items-center gap-9 lg:grid-cols-[1fr_260px] lg:gap-14">
          {/* Book first on mobile, right on desktop */}
          <div className="order-1 lg:order-2">
            <CourseBook />
          </div>

          {/* Text second on mobile, left on desktop */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-xl bg-violet-100 px-4 py-2 text-sm font-extrabold tracking-wide text-violet-700">
              {siteConfig.course.badge}
            </span>

            <h1 className="mt-5 text-4xl font-black leading-[1.09] tracking-tight sm:text-5xl lg:text-[54px]">
              {siteConfig.course.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#263254]">
              {siteConfig.course.description}
            </p>
          </div>
        </section>

        {/* First signup */}
        <div className="mt-11">
          <SubscribeForm />
        </div>

        {/* Creator */}
        <CreatorSection />

        {/* Five-day curriculum */}
        <LessonsSection />

        {/* Second signup */}
        <section className="mt-16">
          <SubscribeForm />

          <p className="mt-4 text-center text-sm text-[#455276]">
            <BookOpen className="mr-1 inline h-4 w-4" />
            {siteConfig.course.footerText}
          </p>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-500">
          © {siteConfig.brand.name}
        </footer>
      </div>
    </main>
  );
}

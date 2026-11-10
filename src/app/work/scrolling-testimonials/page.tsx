import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    quote: "A smoother, more professional experience.",
    author: "Alex M.",
  },
  {
    quote: "Simple to navigate and easy to understand.",
    author: "Jordan R.",
  },
  {
    quote: "A great improvement to the overall design.",
    author: "Taylor K.",
  },
  {
    quote: "Exactly the kind of experience we wanted.",
    author: "Morgan L.",
  },
  {
    quote: "Thoughtful details make a real difference.",
    author: "Casey P.",
  },
  {
    quote: "Clean, polished, and easy to use.",
    author: "Jamie D.",
  },
];

function TestimonialRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`testimonial-track flex w-max gap-4 ${
          reverse ? "testimonial-reverse" : ""
        }`}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 gap-4"
            aria-hidden={copy === 1}
          >
            {reviews.map((review) => (
              <article
                key={`${copy}-${review.author}`}
                className="w-[270px] shrink-0 rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:w-[320px]"
              >
                <p className="text-sm tracking-widest text-amber-500">★★★★★</p>
                <p className="mt-4 min-h-[70px] text-base font-medium leading-relaxed text-[#0b1438]">
                  “{review.quote}”
                </p>
                <p className="mt-5 text-sm font-bold text-violet-700">
                  {review.author}
                </p>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScrollingTestimonialsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ff] text-[#0b1438]">
      <header className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold text-violet-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Interactive demo
        </span>
      </header>

      <section className="mx-auto max-w-[900px] px-5 pb-10 pt-12 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
          Website enhancement
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          What clients say
        </h1>
        <p className="mx-auto mt-5 max-w-[650px] text-base leading-relaxed text-slate-600">
          A continuously scrolling testimonial section with alternating
          directions. Hover over a row to pause it.
        </p>
      </section>

      <section
        aria-label="Illustrative testimonials"
        className="space-y-4 pb-20"
      >
        <TestimonialRow />
        <TestimonialRow reverse />
        <TestimonialRow />
      </section>

      <div className="mx-auto max-w-[800px] px-5 pb-20 text-center">
        <p className="mb-6 text-sm text-slate-500">
          These testimonials are fictional examples used only to demonstrate the
          layout.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-6 py-3 font-bold text-white hover:bg-violet-800"
        >
          Discuss a similar feature
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

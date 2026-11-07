import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "You're Signed Up | Alternative Tech Path",
  description: "Thank you for joining the free five-day email course.",
  robots: {
    index: false,
    follow: false,
  },
};

function BrandMark() {
  return (
    <div className="relative h-9 w-12 shrink-0" aria-hidden="true">
      <span className="absolute bottom-0 left-0 h-[90%] w-[70%] bg-violet-700 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <span className="absolute bottom-0 left-[40%] h-[70%] w-[60%] bg-sky-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="-mx-5 border-b border-[#e8dafa] px-4 sm:-mx-8 sm:px-6 lg:-mx-10 lg:px-8">
      <nav className="flex min-h-[68px] items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Alternative Tech Path — Home"
        >
          <div className="scale-[0.75] sm:scale-90">
            <BrandMark />
          </div>

          <span className="text-[10px] font-black leading-[1.2] tracking-[0.035em] text-[#0b1438] sm:text-[14px]">
            ALTERNATIVE
            <span className="block">TECH PATH</span>
          </span>
        </Link>

        <Link
          href="/"
          className="text-[12px] font-bold text-[#6025dc] transition hover:text-[#5016c9] sm:text-sm"
        >
          Home
        </Link>
      </nav>
    </header>
  );
}

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-[#e9edf5] text-[#0b1438] lg:py-6">
      <div className="mx-auto min-h-screen max-w-[860px] border-x border-[#cfd6e3] bg-white px-5 pb-10 sm:px-8 lg:overflow-clip lg:rounded-[24px] lg:border lg:px-10">
        <Header />

        <section className="mx-auto max-w-[720px] pt-10 sm:pt-14">
          {/* Success indicator */}
          <div className="mb-6 flex items-center gap-2 text-[#6025dc]">
            <CheckCircle2 className="h-6 w-6" />

            <span className="text-[12px] font-extrabold uppercase tracking-[0.08em]">
              You're signed up
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[34px] font-black leading-[1.12] tracking-[-0.05em] text-[#0b1438] sm:text-[43px]">
            Congrats! Your first lesson is on its way to your inbox.
          </h1>

          {/* Confirmation message */}
          <div className="mt-8 space-y-6 text-[16px] leading-[1.7] text-[#263254] sm:text-[18px]">
            <p>
              Thanks for signing up for{" "}
              <strong className="font-extrabold text-[#0b1438]">
                From Skills to Software.
              </strong>
            </p>

            <p>
              Check your inbox for an email from{" "}
              <strong className="font-bold text-[#0b1438]">
                {siteConfig.brand.name}
              </strong>{" "}
              with instructions for getting started.
            </p>

            <p>
              Over the next five days, we'll explore how to turn your
              programming skills into a real, working application.
            </p>

            <p>
              If you have any questions, just reply to the email. I'll be happy
              to help.
            </p>

            <p className="font-bold text-[#0b1438]">Now go check your inbox!</p>
          </div>

          {/* P.S. */}
          <div className="mt-10 border-t border-[#e8dafa] pt-8">
            <p className="text-[16px] italic leading-[1.7] text-[#263254] sm:text-[18px]">
              <strong className="font-extrabold text-[#0b1438]">P.S.</strong> If
              you don't see the email in your inbox in the next few minutes,
              please check your spam or promotions folder.
            </p>

            <p className="mt-4 text-[15px] italic leading-[1.7] text-[#455276]">
              Sometimes emails end up there, especially when you're hearing from
              someone for the first time.
            </p>
          </div>

          {/* Return link */}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#6025dc] transition hover:text-[#5016c9]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Alternative Tech Path
            </Link>
          </div>
        </section>

        <footer className="mt-16 text-center text-xs text-slate-400">
          © {siteConfig.brand.name}
        </footer>
      </div>
    </main>
  );
}

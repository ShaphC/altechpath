import { siteConfig } from "@/lib/site-config";

export function CourseBook() {
  return (
    <div className="flex w-full justify-center lg:justify-end">
      <div className="relative h-[290px] w-[205px] rotate-[-2deg] rounded-r-md border border-slate-200 bg-[#fafaff] shadow-[12px_15px_22px_rgba(22,23,70,0.15)] sm:h-[330px] sm:w-[235px]">
        <div className="absolute -right-3 top-2 h-[98%] w-3 rounded-r bg-slate-200" />

        <div className="relative flex h-full flex-col items-center overflow-hidden px-5 pt-8 text-center">
          <div className="text-xs font-black tracking-wider text-[#10183c]">
            ALTERNATIVE
            <br />
            TECH PATH
          </div>

          <h2 className="mt-9 text-[27px] font-black leading-[1.04] tracking-tight text-[#0b1438] sm:text-[30px]">
            From Skills
            <br />
            to Software
          </h2>

          <p className="mt-5 text-sm font-medium leading-snug text-violet-700">
            Build a real project,
            <br />
            step by step
          </p>

          <div className="absolute bottom-0 left-0 h-24 w-full overflow-hidden">
            <div className="absolute inset-x-[-25%] bottom-[-65px] h-36 rotate-[-14deg] rounded-[50%] bg-sky-400" />
            <div className="absolute inset-x-[-25%] bottom-[-55px] h-32 rotate-[10deg] rounded-[50%] bg-violet-400" />
            <div className="absolute inset-x-[-25%] bottom-[-90px] h-36 rotate-[-9deg] rounded-[50%] bg-violet-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { siteConfig } from "@/lib/site-config";

export function CourseBook() {
  return (
    <div className="flex w-full items-center justify-center lg:justify-end">
      <div className="relative h-[300px] w-[230px] sm:h-[330px] sm:w-[250px]">
        {/* Ground shadow */}
        <div className="absolute bottom-0 left-4 right-0 h-5 rounded-[50%] bg-slate-300/50 blur-xl" />

        {/* Page block */}
        <div
          className="absolute bottom-3 right-0 top-1 w-[92%] rounded-r-[5px] border border-slate-200 bg-gradient-to-r from-slate-200 via-white to-slate-200"
          style={{
            transform: "skewY(-2deg)",
          }}
        />

        {/* Back cover */}
        <div className="absolute bottom-2 right-2 top-0 w-[92%] rounded-r-md bg-[#e7e5f8] shadow-md" />

        {/* Front cover */}
        <div
          className="absolute bottom-3 left-0 top-2 w-[91%] overflow-hidden rounded-r-[3px] border border-[#e5e4f2] bg-gradient-to-br from-white via-[#f9f8ff] to-[#e9e7f9] shadow-[8px_12px_18px_rgba(20,20,70,0.17)]"
          style={{
            transform: "perspective(850px) rotateY(-5deg)",
            transformOrigin: "left center",
          }}
        >
          {/* Spine */}
          <div className="absolute inset-y-0 left-0 z-20 w-[7px] bg-gradient-to-r from-[#a8a5cf] via-[#eeeefa] to-transparent" />

          <div className="relative z-10 flex h-full flex-col items-center px-5 pt-8 text-center">
            {/* Small brand symbol */}
            <div className="relative h-8 w-12">
              <div className="absolute bottom-0 left-0 h-7 w-8 bg-violet-700 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
              <div className="absolute bottom-0 left-5 h-6 w-7 bg-sky-500 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
            </div>

            <span className="mt-2 text-[10px] font-black leading-[1.15] tracking-wide text-[#10183c]">
              {siteConfig.brand.name.toUpperCase()}
            </span>

            <h2 className="mt-9 text-[27px] font-black leading-[1.03] tracking-[-0.055em] text-[#0b1438] sm:text-[30px]">
              From Skills
              <br />
              to Software
            </h2>

            <p className="mt-5 text-[12px] font-semibold leading-[1.45] text-violet-700">
              Build a real project,
              <br />
              step by step
            </p>
          </div>

          {/* Cover waves */}
          <svg
            viewBox="0 0 240 110"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 h-[105px] w-full"
            aria-hidden="true"
          >
            <path
              d="M0 80 C45 54 70 96 112 72 C160 45 184 16 240 6 L240 110 L0 110Z"
              fill="#bd69e4"
            />
            <path
              d="M0 89 C48 65 75 100 116 84 C160 66 195 34 240 44 L240 110 L0 110Z"
              fill="#7440d6"
            />
            <path
              d="M0 83 C43 62 64 84 100 91 C132 97 158 81 180 74 C210 66 230 78 240 84 L240 110 L0 110Z"
              fill="#26a9e0"
            />
            <path
              d="M0 110 C72 75 112 104 154 85 C190 68 215 73 240 79 L240 110Z"
              fill="#5423c7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export function CourseBook() {
  return (
    <div className="flex w-full items-center justify-center lg:justify-end">
      <div className="relative h-[285px] w-[240px] sm:h-[330px] sm:w-[280px] lg:h-[350px] lg:w-[290px]">
        <Image
          src="/images/from-skills-to-software-book.png"
          alt="From Skills to Software — Alternative Tech Path five-day email course"
          fill
          priority
          sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 290px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

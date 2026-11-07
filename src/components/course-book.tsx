import Image from "next/image";

export function CourseBook() {
  return (
    <div className="flex w-full items-center justify-center lg:justify-end">
      <div className="relative h-[330px] w-[300px] shrink-0 sm:h-[370px] sm:w-[330px] lg:h-[430px] lg:w-[380px] lg:translate-x-6">
        <Image
          src="/images/from-skills-to-software-book.png"
          alt="From Skills to Software — Alternative Tech Path five-day email course"
          fill
          priority
          sizes="(max-width: 640px) 300px, (max-width: 1024px) 330px, 380px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

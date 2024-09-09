import { BentoCard, BentoGrid } from "../../components/magicui/bento-grid";
import { FadeText } from "../../components/magicui/fade-text";
import Image from "next/image";
import DotPattern from "../../components/magicui/dot-pattern";
import { cn } from "../../lib/utils";

const projects = [
  {
    name: "Sliding Image",
    href: "https://formesean.github.io/sliding-image/",
    description:
      "Own interpretation and code of a part of Camille Mormal's website.",
    cta: "Live site",
    className: "col-span-3 lg:col-span-1",
    technologies: ["HTML", "CSS", "JavaScript"],
    background: (
      <div className="absolute right-0 -top-5 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105">
        <Image
          src={"/project-sliding-image.png"}
          width={500}
          height={500}
          alt={"Project Sliding Image"}
        />
      </div>
    ),
  },
  {
    name: "Parcel Tracking System",
    href: "https://klaro.vercel.app",
    description:
      "Real-time parcel tracker and project on Software Design course.",
    cta: "Live site",
    className: "col-span-3 lg:col-span-2",
    technologies: ["Nextjs", "Shadcn", "Firebase", "Nextauth"],
    background: (
      <div className="absolute right-0 top-0 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] group-hover:scale-105">
        <Image
          src={"/project-klaro.png"}
          width={500}
          height={500}
          alt={"Project Klaro"}
        />
      </div>
    ),
  },
  {
    name: "Student Organization Landing Page",
    href: "https://code-usc.vercel.app",
    description:
      "Computer Driven Enthusiasts - USC official website for events and blogs",
    cta: "Live site",
    className: "col-span-3 lg:col-span-2",
    technologies: ["Nextjs", "Shadcn", "Supbase", "Prisma", "Clerk"],
    background: (
      <div className="absolute right-10 -top-14 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
        <Image
          src={"/project-code.png"}
          width={500}
          height={500}
          alt={"Project CODE"}
        />
      </div>
    ),
  },
  {
    name: "More Projects",
    href: "https://github.com/formesean",
    description: "Shocked? go visit my GitHub :>",
    cta: "View more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent)] "
        )}
      />
    ),
  },
];

export default function Project() {
  return (
    <section className="flex min-h-screen flex-col items-center pt-20 gap-20 max-lg:gap-10 max-lg:pb-40">
      <FadeText
        className="text-4xl font-bold"
        direction="down"
        framerProps={{
          show: { transition: { delay: 0.3 } },
        }}
        text="Code & Craft"
      />
      <BentoGrid className="auto-rows-[14rem] w-5/6">
        {projects.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}

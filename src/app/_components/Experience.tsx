"use client";

import { cn } from "../../lib/utils";
import { AnimatedList } from "../../components/magicui/animated-list";

interface Item {
  position: string;
  description: string;
  icon: string;
  color: string;
  company: string;
}

let notifications = [
  {
    position: "Web Developer",
    description: "University of San Carlos' Official Student Publication",
    company: "Today's Carolinian",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    position: "President and Software Lead",
    description: "CpE Student exclusive Student Orgranization in USC",
    company: "Computer Driven Enthusiasts - USC",
    icon: "👤",
    color: "#FFB800",
  },
  {
    position: "DICT's Philippine Start Up Challenge 7 & 8",
    description:
      "Placed 9th in the 7th PSC and 25th in the 8th PSC Regional Competitions for students",
    company: "CoTech Solution",
    icon: "💬",
    color: "#FF3D71",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  position,
  description,
  icon,
  color,
  company,
}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[650px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{position}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{company}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function Experiences({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[215px] w-full flex-col p-6 overflow-hidden",
        className
      )}
    >
      <AnimatedList delay={3500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

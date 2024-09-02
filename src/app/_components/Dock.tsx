"use client";

import { Dock, DockIcon } from "../../components/magicui/dock";
import { LayoutGrid, Mail, PencilLine, Sticker, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const active = `bg-[#0d0d0d] border-2 border-[#dbdbdb]`;
const inactive = `bg-[#0d0d0d]`;

export function Dockbar() {
  const router = useRouter();
  const currentRoute = usePathname();

  return (
    <Dock
      className="bg-[#1e1e1e] border-[#000000] shadow-2xl fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-7 px-7 py-10"
      magnification={60}
      distance={50}
      direction="middle"
    >
      <DockIcon className={currentRoute === "/" ? active : inactive}>
        <LayoutGrid
          className={`size-full ${
            currentRoute === "/" ? "text-[#dbdbdb]" : "text-[#6a6a6a]"
          }`}
          onClick={() => router.push("/")}
        />
      </DockIcon>
      <DockIcon className={currentRoute === "/project" ? active : inactive}>
        <Zap
          className={`size-full ${
            currentRoute === "/project" ? "text-[#dbdbdb]" : "text-[#6a6a6a]"
          }`}
          onClick={() => router.push("/project")}
        />
      </DockIcon>
      <DockIcon className={currentRoute === "/blog" ? active : inactive}>
        <PencilLine
          className={`size-full ${
            currentRoute === "/blog" ? "text-[#dbdbdb]" : "text-[#6a6a6a]"
          }`}
          onClick={() => router.push("/blog")}
        />
      </DockIcon>
      <DockIcon className={currentRoute === "/about" ? active : inactive}>
        <Sticker
          className={`size-full ${
            currentRoute === "/about" ? "text-[#dbdbdb]" : "text-[#6a6a6a]"
          }`}
          onClick={() => router.push("/about")}
        />
      </DockIcon>
      <DockIcon className={currentRoute === "/contact" ? active : inactive}>
        <Mail
          className={`size-full ${
            currentRoute === "/contact" ? "text-[#dbdbdb]" : "text-[#6a6a6a]"
          }`}
          onClick={() => router.push("/contact")}
        />
      </DockIcon>
    </Dock>
  );
}

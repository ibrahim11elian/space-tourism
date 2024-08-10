"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationItem({ number, text, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`flex h-fit items-center gap-3 border-r-4 border-transparent transition-colors duration-300 hover:border-white/50 md:min-h-[96px] md:border-b-4 md:border-r-0 ${isActive ? "border-white" : ""}`}
      >
        <div className="font-bold tracking-[2px]">{number}</div>
        <div className="tracking-[2px]">{text}</div>
      </Link>
    </li>
  );
}

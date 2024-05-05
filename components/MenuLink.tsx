"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const MenuLink = () => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((link) => {
        const isActive =
          pathname === link.route || pathname.startsWith(`${link.route}/`);
        return (
          <Link
            className={cn("sidebar-link", {
              "bg-bank-gradient": isActive,
            })}
            href={link.route}
            key={link.label}
          >
            <div className="relative size-6">
              <Image
                className={cn({ "brightness-[3] invert-0": isActive })}
                fill
                src={link.imgURL}
                alt={link.label}
              />
            </div>
            <p className={cn("sidebar-label", { "!text-white": isActive })}>
              {link.label}
            </p>
          </Link>
        );
      })}
    </>
  );
};

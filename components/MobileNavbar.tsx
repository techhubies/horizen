"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { MenuLink } from "./MenuLink";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileNavbar = (props: MobileNavProps) => {
  const { user } = props;
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image src="/icons/hamburger.svg" alt="Menu" width={30} height={30} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white border-none">
          <nav
            role="navigation"
            aria-label="Main"
            className="flex flex-col gap-4"
          >
            <Link
              href="/"
              className="cursor-pointer flex  items-center gap-1 px-4"
            >
              <Image
                width={34}
                height={34}
                alt="Horizon"
                src="/icons/logo.svg"
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
                Horzion
              </h1>
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <div className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((link) => {
                    const isActive =
                      pathname === link.route ||
                      pathname.startsWith(`${link.route}/`);
                    return (
                      <SheetClose asChild key={link.label}>
                        <Link
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-bank-gradient": isActive,
                          })}
                          href={link.route}
                        >
                          <Image
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                            width={20}
                            height={20}
                            src={link.imgURL}
                            alt={link.label}
                          />
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2 ",
                              {
                                "!text-white": isActive,
                              }
                            )}
                          >
                            {link.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </div>
              </SheetClose>
            </div>
            {/* user */}
          </nav>
        </SheetContent>
        {/* Footer */}
      </Sheet>
    </section>
  );
};

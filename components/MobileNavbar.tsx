"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

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
            <Logo />
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

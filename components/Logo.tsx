import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = ({ page = "root" }: { page?: "auth" | "root" }) => {
  return (
    <Link
      href="/"
      className={cn("cursor-pointer flex  items-center gap-1", {
        "px-4": page === "root",
      })}
    >
      <Image width={34} height={34} alt="Horizon" src="/icons/logo.svg" />
      <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
        Horzion
      </h1>
    </Link>
  );
};

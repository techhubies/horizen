"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuLink } from "./MenuLink";

export const Sidebar = (props: SidebarProps) => {
  const { user } = props;

  return (
    <section className="sidebar" aria-label="Sidebar">
      <nav role="navigation" aria-label="Main" className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12 cursor-pointer flex  items-center gap-2"
        >
          <Image
            width={34}
            height={34}
            alt="Horizon"
            src="/icons/logo.svg"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        <MenuLink />
        {/* user */}
      </nav>
      {/* Footer */}
    </section>
  );
};

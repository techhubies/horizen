import { MobileNavbar } from "@/components/MobileNavbar";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Alireza", lastName: "Jsm" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            width={30}
            height={30}
            alt="logo"
            src="/icons/logo.svg"
            className="size-[24px] max-xl:size-14"
          />
          <div>{<MobileNavbar user={loggedIn} />}</div>
        </div>
        {children}
      </div>
    </main>
  );
}

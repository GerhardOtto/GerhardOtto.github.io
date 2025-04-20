"use client";

import Link from "next/link";
import { Menubar, MenubarMenu } from "./ui/menubar";
import { Separator } from "./ui/separator";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const navigationItems = [
  { text: "Education", href: "#education" },
  { text: "Tech Stack", href: "#tech-stack" },
  { text: "Work History", href: "#work-history" },
  { text: "Projects", href: "#projects" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="hidden md:flex flex-wrap lg:flex-nowrap justify-between mx-10 my-5">
        <span className="text-3xl font-bold mx-auto pb-5">Gerhard Otto</span>
        <div className="mx-auto">
          <Menubar className="space-x-5 px-5 text-nowrap">
            <MenubarMenu>
              <Link href={"#education"}>Education</Link>
            </MenubarMenu>
            <Separator orientation="vertical" />
            <MenubarMenu>
              <Link href={"#stack"}>Tech Stack</Link>
            </MenubarMenu>
            <Separator orientation="vertical" />
            <MenubarMenu>
              <Link href={"#history"}>Work History</Link>
            </MenubarMenu>
            <Separator orientation="vertical" />
            <MenubarMenu>
              <Link href={"#projects"}>Notable Projects</Link>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>

      {/* Hamburger */}
      <header className="md:hidden flex items-center justify-between w-full px-10 my-5">
        <div className="text-3xl">Gerhard Otto</div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="sr-only">Gerhard Otto</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col items-center space-y-5">
              {navigationItems.map((item, index) => (
                <Link href={item.href} key={index} passHref>
                  <Button variant="ghost" onClick={() => setIsOpen(false)}>
                    {item.text}
                  </Button>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};

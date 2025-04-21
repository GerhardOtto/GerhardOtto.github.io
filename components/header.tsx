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
import { Badge } from "./ui/badge";

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

<Badge variant={"default"} className="text-3xl font-bold my-5 mx-auto flex">Gerhard Otto</Badge>
      {/* <header className="hidden sm:flex flex-wrap justify-between mx-10 my-5">
        <Badge variant="outline" className="text-3xl font-bold sm:mx-auto lg:mx-0 mb-5">Gerhard Otto</Badge>
          <Menubar className="space-x-5 text-nowrap sm:mx-auto lg:mx-0 mt-1 px-5 ">
            <MenubarMenu>
              <Link href={"#education"}>Education</Link>
            </MenubarMenu>
            <Separator orientation="vertical" />
            <MenubarMenu>
              <Link href={"#tech-stack"}>Tech Stack</Link>
            </MenubarMenu>
            <Separator orientation="vertical" />
            <MenubarMenu>
              <Link href={"#work-history"}>Work History</Link>
            </MenubarMenu>
            <Separator orientation="vertical" />
            <MenubarMenu>
              <Link href={"#projects"}>Projects</Link>
            </MenubarMenu>
          </Menubar>
      </header> */}

      {/* Hamburger */}
      {/* <header className="sm:hidden flex items-center justify-between w-full px-10 my-5">
        <Badge variant="outline" className="text-3xl font-bold">Gerhard Otto</Badge>
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
      </header> */}
    </>
  );
};

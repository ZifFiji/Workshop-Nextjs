"use client"

import * as React from "react"
import Link from "next/link"
import guts from "@/public/guts.jpg"
import { ContactMeModal } from "./ContactMeModal"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ThemeToggle from "./ui/toggle-mode"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog"
import { Button } from "./ui/button"
import { useState } from "react"

export function NavigationMenuDemo() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full space-x-12 my-12 items-center justify-center">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Accueil</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/projects">Projets</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/about">À propos</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem onClick={() => setIsOpen(true)}>
            <ContactMeModal isOpen={isOpen} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="px-4 py-2">
              <Avatar>
                <AvatarImage src={guts.src} width={60} className="rounded-2xl"/>
                <AvatarFallback>ZifFiji</AvatarFallback>
              </Avatar>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

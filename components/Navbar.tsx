"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ThemeToggle from "./ui/toggle-mode"

export function NavigationMenuDemo() {
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
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contacts">Me contacter</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

// export default function Navbar() {
//   return (
//     <div className="flex w-full space-x-12 my-12 items-center justify-center">
//       <Link href="/" className="decoration-wavy underline font-semibold text-blue-500">Accueil</Link>
//       <Link href="/about" className="decoration-wavy underline font-semibold text-blue-500">À propos</Link>
//       <Link href="/projects" className="decoration-wavy underline font-semibold text-blue-500">Projets</Link>
//       <Link href="/contacts" className="decoration-wavy underline font-semibold text-blue-500">Me contacter</Link>
//       <ThemeToggle />
//     </div>
//   )
// }

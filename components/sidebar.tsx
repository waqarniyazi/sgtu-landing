"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface SidebarNavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon: React.ReactNode
    variant: "default" | "ghost"
    href: string
  }[]
}

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin"
    }
    return pathname.startsWith(href)
  }

  const links = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
      variant: isActive("/admin") ? "default" : "ghost",
    },
    {
      title: "Leads",
      href: "/admin/leads",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      variant: isActive("/admin/leads") ? "default" : "ghost",
    },
  ]

  return (
    <>
      <aside className="hidden md:flex h-screen border-r bg-background w-64 flex-col fixed inset-y-0">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Image src="/logo.png" alt="SGTU Logo" width={30} height={30} className="h-6 w-auto" />
            <span>SGTU Admin</span>
          </Link>
        </div>
        <ScrollArea className="flex-1">
          <nav className="grid gap-2 p-4 text-sm">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <Button
                  variant={link.variant}
                  className={cn("w-full justify-start", {
                    "bg-primary text-primary-foreground": link.variant === "default",
                  })}
                >
                  {link.icon}
                  <span className="ml-2">{link.title}</span>
                </Button>
              </Link>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden absolute top-4 left-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/admin" className="flex items-center gap-2 font-semibold" onClick={() => setIsOpen(false)}>
              <Image src="/logo.png" alt="SGTU Logo" width={30} height={30} className="h-6 w-auto" />
              <span>SGTU Admin</span>
            </Link>
          </div>
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <nav className="grid gap-2 p-4 text-sm">
              {links.map((link, index) => (
                <Link key={index} href={link.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={link.variant}
                    className={cn("w-full justify-start", {
                      "bg-primary text-primary-foreground": link.variant === "default",
                    })}
                  >
                    {link.icon}
                    <span className="ml-2">{link.title}</span>
                  </Button>
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}

"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, LayoutDashboard, Users } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href)

  const links = [
    { title: "Dashboard", href: "/admin", icon: <LayoutDashboard className="h-4 w-4" /> },
    { title: "Leads",     href: "/admin/leads", icon: <Users className="h-4 w-4" /> },
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
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start transition-colors",
                    isActive(link.href)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
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
        <SheetTrigger asChild className="md:hidden absolute top-2 left-28 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex h-14 items-center border-b px-4">
            <Link
              href="/admin"
              className="flex items-center gap-2 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/logo.png" alt="SGTU Logo" width={30} height={30} className="h-6 w-auto" />
              <span>SGTU Admin</span>
            </Link>
          </div>
          <ScrollArea className="h-[calc(100vh-3.5rem)]">
            <nav className="grid gap-2 p-4 text-sm">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start transition-colors",
                      isActive(link.href)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    )}
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
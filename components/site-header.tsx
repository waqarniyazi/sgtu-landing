"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ApplyDialog } from "@/components/apply-dialog"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programmes", href: "/programmes" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="SGTU Logo" width={50} height={50} className="h-10 w-auto" />
            <span className="hidden font-bold sm:inline-block">Sikkim Global Technical University</span>
            <span className="font-bold sm:hidden">SGTU</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          <ApplyDialog>
            <Button>Apply Now</Button>
          </ApplyDialog>
          <ModeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <ApplyDialog>
                  <Button className="mt-4">Apply Now</Button>
                </ApplyDialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

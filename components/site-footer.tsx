import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="SGTU Logo" width={60} height={60} className="h-12 w-auto" />
              <span className="font-bold">SGTU</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sikkim Global Technical University (SGTU) - Empowering futures through quality education and innovation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Sikkim Global Technical University, Sikkim, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+91 8305366261</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">ice40125@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
             <div className="space-y-4">
                           <h3 className="font-semibold text-lg mb-4">Accredited By</h3>
           <div className="flex flex-col md:flex-row flex-wrap gap-4">
             <div className="flex items-center gap-2">
               <Image
                 src="/AIU Logo.png"
                 alt="Association of Indian Universities"
                 width={30}
                 height={30}
                 className="h-15 w-15"
               />
               <p className="text-xs text-muted-foreground">
                 Association of Indian Universities
               </p>
             </div>
             <div className="flex items-center gap-2">
               <Image
                 src="/UGC Logo.png"
                 alt="University Grants Commission"
                 width={30}
                 height={30}
                 className="h-15 w-15"
               />
               <p className="text-xs text-muted-foreground">
                 University Grants Commission
               </p>
             </div>
           </div>
                           </div>
        </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sikkim Global Technical University, Bilaspur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp } from "react-icons/si"

export function WhatsappButton() {
  const phoneNumber = "+918305366261" // Replace with your actual WhatsApp number
  const message = "Hello, I'm interested in SGTU programs."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 bg-green-500 hover:bg-green-600 shadow-lg z-50"
      aria-label="Contact us on WhatsApp"
    >
      <SiWhatsapp className="h-10 w-10 text-white" />
    </Button>
  )
}
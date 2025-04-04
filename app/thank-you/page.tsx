"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { useToast } from "../../hooks/toast"
import BackgroundEffect from "@/components/background-efect"

export default function ThankYouPage() {
  const router = useRouter()
  const [animate, setAnimate] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const searchParams = useSearchParams()
  const { toast } = useToast()
  const isPending = searchParams.get("pending") === "true"

  // Run only once when component mounts
  useEffect(() => {
    setAnimate(true)

    // Show success toast when the page loads with pending=true
    if (isPending) {
      // Use setTimeout to ensure this doesn't cause a re-render loop
      setTimeout(() => {
        toast({
          title: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
          description: "Ma'lumotlaringiz muvaffaqiyatli yuborildi.",
          duration: 5000,
        })
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleJoinTelegram = () => {
    window.open("https://t.me/+DDhC5mQl1KdkMWQy", "_blank")
    // Redirect back to main page after a short delay
    setTimeout(() => {
      router.push("/")
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Background effects */}
      <BackgroundEffect />
      <div className="bg-grid absolute inset-0 z-0 opacity-30"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#00e676] opacity-5 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#00b8d4] opacity-5 blur-[100px] animate-pulse-slow"></div>

      <div className="text-center max-w-2xl z-10 p-10 rounded-2xl bg-blur-card border border-[#00e676]/20 animate-glow">
        <div className="w-40 h-40 mx-auto mb-6 relative">
          <Image
            src="/logo.jpg"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
            className="rounded-full glow-border"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Tabriklaymiz!</h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">Ro&apos;yhatdan o&apos;tganingiz bilan tabriklayman.</p>
        <p className="text-xl md:text-2xl text-white/90 mb-12">
          Oxirgi bosqichni bajaring va yopiq telegram kanalga qo&apos;shiling.
        </p>

        <button
          onClick={handleJoinTelegram}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00e676] to-[#00b8d4] rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
          <div className="relative bg-[#0d1117] border border-[#00e676]/30 rounded-lg px-8 py-4 flex items-center space-x-3 animate-shine">
            <span className="text-white font-bold text-xl">TELEGRAM KANALGA QO'SHILISH</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-[#00e676] transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}


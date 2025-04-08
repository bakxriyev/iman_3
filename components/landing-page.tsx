"use client"

import { useState } from "react"
import Image from "next/image"
import { useToast } from "../hooks/toast"
import RegistrationModal from "./register-modal"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = async (data: {
    full_name: string
    phone_number: string
    tg_user: string
  }) => {
    // Close the modal immediately
    setIsModalOpen(false)

    // Show toast and redirect immediately to thank-you page
    toast({
      title: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
      description: "Ma'lumotlaringiz yuborilmoqda...",
      duration: 3000,
    })

    // Redirect immediately without waiting for API response
    router.push("/thank-you?pending=true")

    // Send data to backend in the background after redirect
    try {
      // This will run in the background after the page transition
      axios.post(`${process.env.NEXT_PUBLIC_API_URL || "/api"}/users`, data).catch((error) => {
        console.error("Background submission error:", error)
      })
    } catch (error) {
      console.error("Registration error:", error)
    }

    return Promise.resolve()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#3d624f] via-[#0d1117] to-[#0c5730] relative">
      {/* Background grid */}
      <div className="bg-grid absolute inset-0 z-0 opacity-30"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#00e676] opacity-5 blur-[100px]"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#00b8d4] opacity-5 blur-[100px]"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header with date and time */}
        <header className="flex justify-between items-center mb-8 mt-4">
          <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#00e676]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span className="text-white/90 font-medium">17-18 APREL</span>
          </div>

          <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#00e676]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-white/90 font-medium">20:00</span>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center">
          {/* Logo and title */}
          <div className="text-center mb-12">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <Image
                src="/logo.jpg"
                alt="Logo"
                fill
                className="object-contain rounded-full border border-[#00e676]/20"
                priority
              />
            </div>

            <div className="inline-block mb-2 px-4 py-2 bg-white/5 rounded-full">
              <div className="flex items-center justify-center gap-2">
                <span className="bg-gradient-to-r from-[#00e676] to-[#00b8d4] bg-clip-text text-transparent font-bold">
                  BEPUL VEBINAR
                </span>
                <span className="bg-[#00e676]/20 text-[#00e676] px-2 py-0.5 text-xs font-bold rounded-md">LIVE</span>
              </div>
            </div>

              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
                Iman Akhmedovnadan 2 kunlik Bepul Vebinar
              </h1>
            <div className="mt-4 bg-white/5 p-6 rounded-2xl border border-[#00e676]/20">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#00e676] to-[#00b8d4] bg-clip-text text-transparent">
                "Hayotni Tartiblash orqali Maqsad sari 5 QADAM"
              </h1>
            </div>
          </div>

          {/* Registration button */}
          <div className="flex justify-center my-10">
            <button onClick={handleRegister} className="relative">
              <div className="relative bg-gradient-to-r from-[#00e676] to-[#00b8d4] rounded-lg px-8 py-4 flex items-center space-x-3">
                <span className="text-white font-bold text-xl">ISHTIROK ETISH</span>
                <div className="bg-white/20 px-2 py-1 rounded-md text-white text-sm font-bold">BEPUL</div>
              </div>
            </button>
          </div>

          {/* Webinar topics */}
          <div className="w-full max-w-4xl mb-12">
            <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-[#00e676]/20">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">Vebinarda Siz:</h2>

              <ul className="space-y-3">
                {[
                  "Intizomga erishish yo'llari va Maqsadga erishish boshqichlarini",
                  "Maqsad yo'lida \"Fail\" bo'lish sabablari va ularga yechimni",
                  "O'ziga bo'lgan ishonchni oshirgan holda Muvaffaqiyatga erishishni",
                  "Dangasalikni yengishningbir nechta texnikalarini o'rganasiz",
                ].map((topic, index) => (
                  <li key={index} className="flex items-center bg-white/5 p-4 rounded-xl">
                    <div className="mr-4 flex-shrink-0 bg-[#00e676]/10 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#00e676]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-white/90 text-lg">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration button */}
            <div className="flex justify-center my-10">
              <button onClick={handleRegister} className="relative">
                <div className="relative bg-gradient-to-r from-[#00e676] to-[#00b8d4] rounded-lg px-8 py-4 flex items-center space-x-3">
                  <span className="text-white font-bold text-xl">ISHTIROK ETISH</span>
                  <div className="bg-white/20 px-2 py-1 rounded-md text-white text-sm font-bold">BEPUL</div>
                </div>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-white/50 py-4">
          <p>© 2025 Jonli Vebinar. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </div>
  )
}

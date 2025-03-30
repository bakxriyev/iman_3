"use client"

import { useState } from "react"
import Image from "next/image"
import { useToast } from '../hooks/toast'
import BackgroundEffect from "./background-efect"
import RegistrationModal from "./register-modal"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = async (data: {
    full_name: string
    phone_number: string
    tg_user: string
  }) => {
    toast({
      title: "Iltimos biroz kuting",
      description: "Ma'lumotlaringiz yuborilmoqda...",
      duration: 3000,
    })

    console.log("Form submitted:", data)
    setIsModalOpen(false)
    return Promise.resolve()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffect />
      <div className="bg-grid absolute inset-0 z-0 opacity-30"></div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#00e676] opacity-5 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#00b8d4] opacity-5 blur-[100px] animate-pulse-slow"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header with date and time */}
        <header className="flex justify-between items-center mb-12 mt-4">
          <div className="flex items-center space-x-2 bg-blur-card px-4 py-2 rounded-full">
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

          <div className="flex items-center space-x-2 bg-blur-card px-4 py-2 rounded-full">
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
            <div className="relative w-40 h-40 mx-auto mb-6 animate-float">
              <Image src="/logo.jpg" alt="Logo" fill className="object-contain rounded-full glow-border" priority />
            </div>

            <div className="inline-block mb-2 px-4 py-2 bg-blur-card rounded-full">
              <div className="flex items-center justify-center gap-2">
                <span className="text-gradient font-bold">JONLI VEBINAR</span>
                <span className="bg-[#00e676]/20 text-[#00e676] px-2 py-0.5 text-xs font-bold rounded-md animate-pulse-slow">
                  LIVE
                </span>
              </div>
            </div>

            <div className="mt-4 bg-blur-card p-6 rounded-2xl glow-border animate-glow">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white glow-text">Intizom va "Самооценка" ni</h1>
              <h1 className="text-3xl md:text-5xl font-bold text-gradient">Shakllantirish</h1>
            </div>
          </div>

          {/* Webinar topics */}
          <div className="w-full max-w-4xl mb-12">
            <div className="bg-blur-card rounded-2xl p-6 mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#00e676]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
                JONLI BEPUL VEBINAR DAVOMIDA
              </h2>

              <ul className="space-y-3">
                {[
                  { text: "Nega Maqsadlarga erishish QIYINDEK tuyiladi?", icon: "target" },
                  { text: "O'ziga bo'lgan ishonch Muvaffaqiyat kaliti", icon: "key" },
                  { text: "Dangasalikning kelib chiqish sabablari?", icon: "coffee" },
                  { text: "Intizomga qanday qilib erishish mumkin?", icon: "check-circle" },
                  { text: "Maqsad yo'lida \"Fail\" bo'lishning asl sabablari", icon: "alert-triangle" },
                ].map((topic, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-secondary/50 p-4 rounded-xl hover:bg-secondary/70 transition-all"
                  >
                    <div className="mr-4 flex-shrink-0 bg-[#00e676]/10 p-2 rounded-lg">
                      {topic.icon === "target" && (
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
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      )}
                      {topic.icon === "key" && (
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
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                        </svg>
                      )}
                      {topic.icon === "coffee" && (
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
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                          <line x1="6" y1="1" x2="6" y2="4" />
                          <line x1="10" y1="1" x2="10" y2="4" />
                          <line x1="14" y1="1" x2="14" y2="4" />
                        </svg>
                      )}
                      {topic.icon === "check-circle" && (
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
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      )}
                      {topic.icon === "alert-triangle" && (
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
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      )}
                    </div>
                    <span className="text-white/90 text-lg">{topic.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Registration button */}
            <div className="flex justify-center my-10">
              <button onClick={handleRegister} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00e676] to-[#00b8d4] rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
                <div className="relative bg-[#0d1117] border border-[#00e676]/30 rounded-lg px-8 py-4 flex items-center space-x-3 animate-shine">
                  <span className="text-white font-bold text-xl">RO'YXATDAN O'TISH</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#00e676] group-hover:translate-x-1 transition-transform duration-300"
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

            {/* Benefits */}
            <div className="bg-blur-card rounded-2xl p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-[#00e676]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                BEPUL VEBINARDAN QANDAY FOYDALAR OLASIZ?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    text: "Dangasalikdan qutilish va Maqsadlarga erishishning qadamma-qadam bosqichlari",
                    icon: "trending-up",
                  },
                  {
                    text: "Hayotni tartiblash orqali Muammolarni yengish",
                    icon: "layout",
                  },
                  {
                    text: "O'ziga bo'lgan ishonchni oshirish mumkinligi",
                    icon: "award",
                  },
                  {
                    text: "Odatlarni shakllantirishning bir nechta usullarini ko'rib chiqamiz",
                    icon: "repeat",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="bg-secondary/50 p-4 rounded-xl hover:bg-secondary/70 transition-all">
                    <div className="flex items-start">
                      <div className="mr-4 flex-shrink-0 bg-[#00e676]/10 p-2 rounded-lg">
                        {benefit.icon === "trending-up" && (
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
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                          </svg>
                        )}
                        {benefit.icon === "layout" && (
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
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                          </svg>
                        )}
                        {benefit.icon === "award" && (
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
                            <circle cx="12" cy="8" r="7" />
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                          </svg>
                        )}
                        {benefit.icon === "repeat" && (
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
                            <polyline points="17 1 21 5 17 9" />
                            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                            <polyline points="7 23 3 19 7 15" />
                            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                          </svg>
                        )}
                      </div>
                      <span className="text-white/90">{benefit.text}</span>
                    </div>
                  </div>
                ))}
              </div>
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


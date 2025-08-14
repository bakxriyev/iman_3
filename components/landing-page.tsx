"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegistrationModal from "@/components/register-modal"

export default function LandingPageComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleModalSubmit = (data: { full_name: string; phone_number: string; tg_user: string }) => {
    console.log("Registration data:", data)
    setIsModalOpen(false)
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-25 via-white via-orange-25 to-yellow-100 relative overflow-hidden">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-50/30 to-amber-100/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-orange-50/20 via-transparent to-yellow-50/30"></div>

      {/* Background grid */}
      <div className="bg-grid absolute inset-0 z-0 opacity-20"></div>

      {/* Enhanced glowing orbs with better colors */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/40 via-yellow-100/30 to-transparent opacity-60 blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-orange-100/50 via-yellow-50/40 to-transparent opacity-70 blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-amber-100/30 via-yellow-50/20 to-transparent opacity-50 blur-[80px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-gradient-to-tl from-yellow-200/40 via-amber-50/30 to-transparent opacity-60 blur-[90px] animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
      {/* Added additional ambient light effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-radial from-yellow-100/20 via-amber-50/10 to-transparent opacity-80 blur-[120px]"></div>

      {/* Header */}
      <header className="flex justify-center items-center gap-8 mb-8 mt-4 relative z-10 animate-fade-in">
        <div className="relative flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-600"
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
          <span className="text-gray-700 font-medium">2,3,4-SENTABR</span>
        </div>
        <div className="relative flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-600"
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
          <span className="text-gray-700 font-medium">20:00</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-8 py-6 max-w-7xl mx-auto relative z-10">
        <div className="absolute inset-0 bg-pattern-lines opacity-10 z-0"></div>

        <div className="lg:w-1/3 relative flex justify-center items-start z-10 order-1 lg:order-2">
          <div className="relative w-full max-w-[200px] animate-slide-up">
            <Image
              src="/photo.jpg"
              alt="Iman Akhmedovna"
              width={200}
              height={267}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-yellow-100 hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-300 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* Left Content */}
        <div className="lg:w-2/3 space-y-6 lg:pr-8 text-center lg:text-left z-10 order-2 lg:order-1 animate-slide-in">
          {/* Badge */}
          <div className="inline-block mb-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-yellow-200 shadow-sm relative hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-center gap-2">
              <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent font-bold">
                BEPUL VEBINAR
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs font-bold rounded-md animate-pulse">
                LIVE
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-gray-800 font-serif animate-fade-in-up">
            Iman Akhmedovnadan 3 kunlik Bepul Vebinar
          </h1>

          {/* Subtitle */}
          <div
            className="mt-4 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-yellow-200 shadow-lg relative hover:shadow-xl transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent font-serif leading-tight">
              "Dangasalikdan Halos Bo'l"
            </h1>
          </div>

          {/* Registration Button */}
          <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button onClick={handleRegister} className="relative group">
              <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg px-8 py-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-white font-bold text-xl">ISHTIROK ETISH</span>
                <div className="bg-white/20 px-2 py-1 rounded-md text-white text-sm font-bold">BEPUL</div>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Webinar topics */}
      <section
        className="relative z-10 px-8 py-12 w-full max-w-5xl mx-auto animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="bg-[#FFFBF5] backdrop-blur-sm rounded-2xl p-6 mb-8 border border-yellow-200 shadow-lg bg-pattern-circles relative hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-gray-800 font-serif">
            Jonli Bepul Vebinar davomida quyidagilar haqida gaplashamiz:
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "Nega Maqsadlarga erishish QIYINDEK tuyiladi?",
              "Dangasalikning kelib chiqish sabablari?",
              "Intizomga qanday qilib erishish mumkin?",
              "Maqsad yo'lida \"Fail\" bo'lishning asl sabablari.",
            ].map((topic, index) => (
              <li
                key={index}
                className="flex items-center bg-white/60 p-4 rounded-xl border border-yellow-100 relative hover:bg-white/80 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="mr-4 flex-shrink-0 bg-yellow-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
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
                <span className="text-gray-700 text-lg font-light">{topic}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-gray-800 font-serif">
            Bepul Vebinardan qanday foydalar olasiz?
          </h3>
          <ul className="space-y-3">
            {[
              "Dangasalikdan qutilish va Maqsadlarga erishishning qadamma-qadam bosqichlari",
              "Hayotni tartiblash orqali Muammolarni yengish",
              "Orzular orzuligacha qolmasdan ularni amalga oshirish formulalari",
              "Odatlarni shakllantirishning bir nechta usullarini ko'rib chiqamiz",
            ].map((benefit, index) => (
              <li
                key={index}
                className="flex items-center bg-white/60 p-4 rounded-xl border border-yellow-100 relative hover:bg-white/80 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="mr-4 flex-shrink-0 bg-green-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <span className="text-gray-700 text-lg font-light">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center my-8 animate-fade-in-up" style={{ animationDelay: "1.6s" }}>
            <button onClick={handleRegister} className="relative group">
              <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg px-8 py-4 flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-white font-bold text-xl">ISHTIROK ETISH</span>
                <div className="bg-white/20 px-2 py-1 rounded-md text-white text-sm font-bold">BEPUL</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-4 animate-fade-in" style={{ animationDelay: "1.8s" }}>
        <p>© 2025 Jonli Vebinar. Barcha huquqlar himoyalangan.</p>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}

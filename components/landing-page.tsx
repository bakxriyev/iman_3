"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegistrationModal from "../components/register-modal"

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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200/30 to-yellow-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-100/40 to-yellow-200/30 rounded-full blur-2xl"></div>

      {/* Header */}
      <header className="flex justify-center items-center gap-8 mb-8 mt-4">
        <div className="relative flex items-center space-x-2 bg-gradient-to-r from-yellow-50 to-white px-6 py-3 rounded-full border border-yellow-200/50 shadow-sm">
          <div className="absolute top-0 left-2 w-3 h-3 border-t border-l border-yellow-300 rounded-tl-lg"></div>
          <div className="absolute top-0 right-2 w-3 h-3 border-t border-r border-yellow-300 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-2 w-3 h-3 border-b border-l border-yellow-300 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-2 w-3 h-3 border-b border-r border-yellow-300 rounded-br-lg"></div>
          <span className="text-yellow-700 font-semibold">2,3,4-SENTABR</span>
        </div>
        <div className="relative flex items-center space-x-2 bg-gradient-to-r from-yellow-50 to-white px-6 py-3 rounded-full border border-yellow-200/50 shadow-sm">
          <div className="absolute top-0 left-2 w-3 h-3 border-t border-l border-yellow-300 rounded-tl-lg"></div>
          <div className="absolute top-0 right-2 w-3 h-3 border-t border-r border-yellow-300 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-2 w-3 h-3 border-b border-l border-yellow-300 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-2 w-3 h-3 border-b border-r border-yellow-300 rounded-br-lg"></div>
          <span className="text-yellow-700 font-semibold">20:00</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-8 py-6 max-w-7xl mx-auto">
        <div className="lg:w-1/3 relative flex justify-center items-start order-1 lg:order-2">
          <div className="relative w-full max-w-[200px]">
            <Image
              src="/photo.jpg"
              alt="Iman Akhmedovna"
              width={200}
              height={267}
              className="rounded-2xl shadow-lg"
              style={{ width: "auto", height: "auto", maxWidth: "100%" }}
              priority
            />
          </div>
        </div>

        {/* Left Content */}
        <div className="lg:w-2/3 space-y-6 lg:pr-8 text-center lg:text-left order-2 lg:order-1">
          <div className="relative inline-block mb-2 px-6 py-3 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-full border border-yellow-200/50 shadow-sm">
            <div className="absolute top-0 left-2 w-2 h-2 border-t border-l border-yellow-300 rounded-tl-md"></div>
            <div className="absolute top-0 right-2 w-2 h-2 border-t border-r border-yellow-300 rounded-tr-md"></div>
            <div className="absolute bottom-0 left-2 w-2 h-2 border-b border-l border-yellow-300 rounded-bl-md"></div>
            <div className="absolute bottom-0 right-2 w-2 h-2 border-b border-r border-yellow-300 rounded-br-md"></div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-700 font-bold">BEPUL VEBINAR</span>
              <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 text-yellow-800 px-3 py-1 text-xs font-bold rounded-full border border-yellow-300/50">
                LIVE
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-serif font-bold mb-2 text-gray-800">
            Iman Akhmedovnadan 3 kunlik Bepul Vebinar
          </h1>

          <div className="relative mt-4 bg-gradient-to-r from-yellow-50 to-white p-6 rounded-2xl border border-yellow-200/50 shadow-sm">
            <div className="absolute top-1 left-3 w-4 h-4 border-t border-l border-yellow-300 rounded-tl-lg"></div>
            <div className="absolute top-1 right-3 w-4 h-4 border-t border-r border-yellow-300 rounded-tr-lg"></div>
            <div className="absolute bottom-1 left-3 w-4 h-4 border-b border-l border-yellow-300 rounded-bl-lg"></div>
            <div className="absolute bottom-1 right-3 w-4 h-4 border-b border-r border-yellow-300 rounded-br-lg"></div>
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-yellow-600 leading-tight">
              "Dangasalikdan Halos Bo'l"
            </h1>
          </div>

          <div className="mt-6">
            <button
              onClick={handleRegister}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-200"
            >
              ISHTIROK ETISH - BEPUL
            </button>
          </div>
        </div>
      </main>

      {/* Webinar topics */}
      <section className="px-8 py-12 w-full max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 mb-8 border border-yellow-200/50 shadow-sm">
          <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 text-center text-gray-800">
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
                className="relative flex items-center bg-white p-4 rounded-xl border border-yellow-100 shadow-sm"
              >
                <div className="absolute top-1 left-2 w-2 h-2 border-t border-l border-yellow-300 rounded-tl-sm"></div>
                <div className="absolute bottom-1 right-2 w-2 h-2 border-b border-r border-yellow-300 rounded-br-sm"></div>
                <div className="mr-4 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{topic}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg md:text-xl font-serif font-bold mb-4 text-center text-gray-800">
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
                className="relative flex items-center bg-white p-4 rounded-xl border border-green-100 shadow-sm"
              >
                <div className="absolute top-1 left-2 w-2 h-2 border-t border-l border-green-300 rounded-tl-sm"></div>
                <div className="absolute bottom-1 right-2 w-2 h-2 border-b border-r border-green-300 rounded-br-sm"></div>
                <div className="mr-4 w-3 h-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full"></div>
                <span className="text-gray-700 text-lg font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center my-8">
            <button
              onClick={handleRegister}
              className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-lg transition-all duration-200"
            >
              ISHTIROK ETISH - BEPUL
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-4">
        <p>© 2025 Jonli Vebinar. Barcha huquqlar himoyalangan.</p>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}

"use client"

import { useState } from "react"

interface RegisterButtonProps {
  onRegister: () => void
}

export default function RegisterButton({ onRegister }: RegisterButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex justify-center my-16 relative">
      {/* Animated background circles */}
      <div className="absolute -inset-10 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gray-400/10 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-400/5 rounded-full animate-ping-slower"></div>
      </div>

      {/* Main button */}
      <button
        onClick={onRegister}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative z-10 group"
      >
        {/* Button background with gradient */}
        <div className="relative px-12 py-6 overflow-hidden rounded-xl transition-all duration-500 transform hover:scale-105 animate-float-button">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700"></div>

          {/* Shine effect */}
          <div
            className={`absolute inset-0 opacity-50 ${isHovered ? "animate-shine" : ""}`}
            style={{
              background: "linear-gradient(45deg, transparent 45%, rgba(255, 255, 255, 0.8) 50%, transparent 55%)",
              backgroundSize: "200% 200%",
              backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
            }}
          ></div>

          {/* Button content */}
          <div className="relative flex items-center justify-center">
            <span className="text-white text-2xl font-bold uppercase tracking-wider">Ro&apos;yxatdan O&apos;tish</span>

            {/* Arrow icon that moves on hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-6 w-6 ml-3 text-white transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>

          {/* Animated border */}
          <div className="absolute inset-0 border border-white/30 rounded-xl"></div>
        </div>
      </button>
    </div>
  )
}


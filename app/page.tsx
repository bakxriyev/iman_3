"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const LandingPageComponent = dynamic(() => import("@/components/landing-page"), {
  ssr: false,
  loading: () => null,
})

export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 50) // Very fast initial load

    if (document.readyState === "complete") {
      clearTimeout(timer)
      setShowContent(true)
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`transition-opacity duration-200 ${showContent ? "opacity-100" : "opacity-0"}`}>
      <LandingPageComponent />
    </div>
  )
}

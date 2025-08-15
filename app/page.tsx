"use client"

import dynamic from "next/dynamic"

const LandingPageComponent = dynamic(() => import("../components/landing-page"), {
  ssr: false,
  loading: () => null,
})

export default function Page() {
  return (
    <div>
      <LandingPageComponent />
    </div>
  )
}

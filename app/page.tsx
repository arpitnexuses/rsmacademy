import LeadCaptureForm from "@/components/lead-capture-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Training Needs Assessment | RSM Saudi",
  description:
    "Unlock a Complimentary Training Needs Assessment (Valued at SAR 7,500) to Diagnose Critical Skill Gaps and Align with Saudi Arabia's Economic Ambitions",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img
            src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/logo@2x_06d7fbfa-3c0b-4a7b-91a1-108d58c5a5f4.webp"
            alt="RSM Saudi Logo"
            className="h-14 w-auto"
          />
          <nav className="hidden md:flex items-center space-x-8">
            {["About Us", "Courses", "Corporate Training", "Contact Us"].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <h3 className="w-full text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Elevate Your <span className="text-green-600">Organization</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Unlock a Complimentary Training Needs Assessment
              <span className="font-semibold"> (Valued at SAR 7,500)</span> to Align with Saudi Arabia's Economic
              Ambitions
            </p>
            <LeadCaptureForm />
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl"></div>
            <img
              src="https://i.imgur.com/Q4ucx6u.png"
              alt="RSM Training Assessment"
              className="rounded-2xl w-full h-auto object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </main>
  )
}


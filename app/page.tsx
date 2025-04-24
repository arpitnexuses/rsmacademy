import LeadCaptureForm from "@/components/lead-capture-form"
import type { Metadata } from "next"
import Navigation from "./components/Navigation"

export const metadata: Metadata = {
  title: "Free Training Needs Assessment | RSM Saudi",
  description:
    "Unlock a Complimentary Training Needs Assessment (Valued at SAR 7,500) to Diagnose Critical Skill Gaps and Align with Saudi Arabia's Economic Ambitions",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="py-8 bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a 
            href="https://rsmacademy-sa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-nexlink.s3.us-east-2.amazonaws.com/logo@2x_06d7fbfa-3c0b-4a7b-91a1-108d58c5a5f4.webp"
              alt="RSM Saudi Logo"
              className="h-16 w-auto"
            />
          </a>
          <Navigation />
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="https://rsmacademy-sa.com/login"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-base font-medium">Sign in</span>
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors relative group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 border border-gray-100">
                <div className="flex flex-col items-center justify-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className="text-gray-500 text-center">Your shopping bag is empty</p>
                </div>
              </div>
            </a>
            <a 
              href="https://rsmacademy-sa.com/courses/search/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
            <h3 className="w-full text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
              className="rounded-2xl w-full h-auto object-cover relative z-10 shadow-xl"
            />
          </div>
        </div>
      </div>

      <footer className="bg-[#151515] text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* National Center Policies */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-400">National Center Policies</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/attendance" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Attendance Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy and Usage Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/support" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Technical and Educational Support Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/integrity" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Academic Integrity
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/copyright" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Principles of Intellectual Property Rights and Copyrights
                  </a>
                </li>
              </ul>
            </div>

            {/* Guidelines */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-400">Guidelines</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/staff" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Organizational Structure Document & Roles and Responsibilities
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/student_guide" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Trainee's Guide
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/guidelines" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Guidelines for Trainers and Trainees
                  </a>
                </li>
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/feedback" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Beneficiary Satisfaction Measurement Questionnaire
                  </a>
                </li>
              </ul>
            </div>

            {/* Technical Support */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-400">Technical Support</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://rsmacademy-sa.com/contact_us" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Complaints and Suggestions
                  </a>
                </li>
              </ul>
            </div>

            {/* National Center for E-Learning Accreditation */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-400">National Center for E-Learning Accreditation</h3>
              <img
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image%20(23).png"
                alt="National eLearning Center Logo"
                className="h-24 w-auto mt-4"
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}


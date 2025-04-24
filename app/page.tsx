import LeadCaptureForm from "@/components/lead-capture-form"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Free Training Needs Assessment | RSM Saudi",
  description:
    "Unlock a Complimentary Training Needs Assessment (Valued at SAR 7,500) to Diagnose Critical Skill Gaps and Align with Saudi Arabia's Economic Ambitions",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

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
              className="rounded-2xl w-full h-auto object-cover relative z-10"
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


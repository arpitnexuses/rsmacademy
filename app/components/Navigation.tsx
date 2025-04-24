"use client"

import { useState } from "react"

export default function Navigation() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const aboutLinks = [
    { name: "Presentation", url: "https://rsmacademy-sa.com/foreword" },
    { name: "Vision", url: "https://rsmacademy-sa.com/vision" },
    { name: "Message", url: "https://rsmacademy-sa.com/mission" },
    { name: "Objectives", url: "https://rsmacademy-sa.com/objectives" },
    { name: "Our Values", url: "https://rsmacademy-sa.com/core_values" }
  ];

  const mainLinks = [
    { name: "Courses", url: "https://rsmacademy-sa.com/courses" },
    { name: "Corporate Training", url: "https://rsm-academy-landing.vercel.app/" },
    { name: "Contact Us", url: "https://rsmacademy-sa.com/contact_us" }
  ];

  return (
    <nav className="hidden md:flex items-center space-x-10">
      <div 
        className="relative group"
        onMouseEnter={() => setIsAboutDropdownOpen(true)}
        onMouseLeave={() => setIsAboutDropdownOpen(false)}
      >
        <button
          className="flex items-center text-gray-600 group-hover:text-green-600 font-medium transition-colors text-lg gap-1"
        >
          About Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`absolute top-full left-0 w-48 bg-white rounded-lg shadow-lg py-2 divide-y divide-gray-100 transition-all duration-200 ${
            isAboutDropdownOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-2'
          }`}
        >
          {aboutLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      {mainLinks.map((item) => (
        <a 
          key={item.name} 
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-600 font-medium transition-colors text-lg"
        >
          {item.name}
        </a>
      ))}
    </nav>
  )
} 
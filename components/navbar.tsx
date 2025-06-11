"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ShoppingBag, User, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const cartRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const NavLinks = () => (
    <>
      <div className="relative" ref={dropdownRef}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center text-gray-700 hover:text-gray-900"
          onClick={() => setIsAboutOpen(!isAboutOpen)}
        >
          About Us
          <motion.div
            animate={{ rotate: isAboutOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="ml-1 h-4 w-4" />
          </motion.div>
        </motion.button>
        <AnimatePresence>
          {isAboutOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-56 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 md:z-50"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link 
                  href="https://rsmacademy-sa.com/foreword" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                >
                  Presentation
                </Link>
              </motion.div>
              <div className="border-t border-gray-100"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
              >
                <Link 
                  href="https://rsmacademy-sa.com/vision" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                >
                  Vision
                </Link>
              </motion.div>
              <div className="border-t border-gray-100"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <Link 
                  href="https://rsmacademy-sa.com/mission" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                >
                  Message
                </Link>
              </motion.div>
              <div className="border-t border-gray-100"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.25 }}
              >
                <Link 
                  href="https://rsmacademy-sa.com/objectives" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                >
                  Objectives
                </Link>
              </motion.div>
              <div className="border-t border-gray-100"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <Link 
                  href="https://rsmacademy-sa.com/core_values" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                >
                  Our Values
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          href="https://rsmacademy-sa.com/courses" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Courses
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          href="https://rsmacademy-sa.com/courses/online" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Live Courses
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          href="https://rsmacademy-sa.com/courses/recorded" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Recorded Courses
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          href="https://rsm-academy-landing.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900"
        >
          Corporate Training
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link 
          href="https://rsmacademy-sa.com/contact_us"
          target="_blank"
          rel="noopener noreferrer" 
          className="text-gray-700 hover:text-gray-900"
        >
          Contact Us
        </Link>
      </motion.div>
    </>
  )

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="border-b border-gray-200 bg-white fixed w-full top-0 z-50"
    >
      <div className="container mx-auto px-0">
        <div className="flex h-24 items-center justify-between">
          {/* Left: Logo and Nav */}
          <div className="flex items-center -ml-4 mr-auto">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 w-44 md:w-52 pl-12"
            >
              <Link 
                href="https://rsmacademy-sa.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center h-full"
              >
                <img
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy/new_logo.png"
                  alt="RSM Saudi Tech Logo"
                  className="h-18 md:h-20 w-auto object-contain"
                />
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12 ml-12">
              <NavLinks />
            </nav>
          </div>

          {/* Right: Sign in, Cart and Search */}
          <div className="flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="https://rsmacademy-sa.com/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center text-gray-700 hover:text-gray-900"
              >
                <User className="mr-1 h-5 w-5" />
                <span>Sign in</span>
              </Link>
            </motion.div>
            
            <div className="relative" ref={cartRef}>
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setIsCartOpen(true)}
                className="cursor-pointer"
              >
                <div className="text-gray-700 hover:text-gray-900">
                  <ShoppingBag className="h-5 w-5" />
                </div>
              </motion.div>

              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-72 rounded-lg bg-white py-4 px-6 shadow-xl ring-1 ring-black ring-opacity-5"
                    onMouseLeave={() => setIsCartOpen(false)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ShoppingBag className="h-12 w-12 text-gray-300" />
                      </motion.div>
                      <p className="text-gray-500 text-sm font-medium">Your shopping bag is empty</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Link
                href="https://rsmacademy-sa.com/courses/search/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Search className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="flex flex-col space-y-4">
                  <NavLinks />
                  <div className="border-t border-gray-200 pt-4">
                    <Link 
                      href="https://rsmacademy-sa.com/login" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-gray-900"
                    >
                      <User className="mr-2 h-5 w-5" />
                      <span>Sign in</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

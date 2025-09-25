'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Funzionalità', href: '#features' },
    { name: 'Demo', href: 'https://rockdreams.staging.infinitymundi.it/' },
    { name: 'Contatti', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/assets/LogoAssociate.png"
                alt="Associate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gradient">
              Associate
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium transition-colors duration-300 hover:text-primary-600 text-gray-700"
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://rockdreams.staging.infinitymundi.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Prova la Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-primary-600 transition-colors duration-300"
                {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="https://rockdreams.staging.infinitymundi.it/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 inline-block text-center"
              >
              Prova la Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

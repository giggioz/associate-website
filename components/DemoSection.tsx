'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Image from 'next/image'

const mockups = [
  {
    id: 'dashboard',
    title: 'Dashboard Principale',
    description: 'Panoramica completa della tua associazione',
    image: '/assets/Dashboard Admin.jpg',
    features: ['Statistiche in tempo reale', 'Accesso rapido alle funzioni', 'Notifiche importanti']
  },
  {
    id: 'members',
    title: 'Gestione Membri',
    description: 'Registrazione e gestione completa dei soci',
    image: '/assets/Members.jpg',
    features: ['Lista membri organizzata', 'Profili dettagliati', 'Gestione documenti']
  },
  {
    id: 'courses',
    title: 'Catalogo Corsi',
    description: 'Gestione completa dei corsi e iscrizioni',
    image: '/assets/Courses.jpg',
    features: ['Catalogo interattivo', 'Iscrizioni online', 'Gestione pagamenti']
  },
  {
    id: 'calendar',
    title: 'Calendario Prenotazioni',
    description: 'Prenotazione risorse e gestione eventi',
    image: '/assets/Reservations.jpg',
    features: ['Vista calendario intuitiva', 'Prenotazioni in tempo reale', 'Gestione conflitti']
  },
  {
    id: 'communication',
    title: 'Centro Comunicazioni',
    description: 'Messaggistica e comunicazioni di gruppo',
    image: '/assets/Communications.jpg',
    features: ['Messaggi interni', 'Notifiche push', 'Template personalizzabili']
  },
  {
    id: 'presence',
    title: 'Registro Presenze',
    description: 'Registro presenze e controllo accessi',
    image: '/assets/Presence register.jpg',
    features: ['Registro presenze digitale', 'Controllo accessi', 'Report automatici']
  }
]

export default function DemoSection() {
  const [currentMockup, setCurrentMockup] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentMockup((prev) => (prev + 1) % mockups.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const nextMockup = () => {
    setCurrentMockup((prev) => (prev + 1) % mockups.length)
  }

  const prevMockup = () => {
    setCurrentMockup((prev) => (prev - 1 + mockups.length) % mockups.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Vedi <span className="text-gradient">Associate</span> in Azione
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come la nostra piattaforma può rivoluzionare la gestione della tua associazione
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mockup Display */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  {mockups[currentMockup].title}
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMockup}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-video overflow-hidden"
                >
                  {mockups[currentMockup].image.startsWith('/api/placeholder') ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-gray-600 font-medium">
                          Mockup {mockups[currentMockup].title}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={mockups[currentMockup].image}
                      alt={mockups[currentMockup].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevMockup}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              
              <button
                onClick={nextMockup}
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMockup(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMockup
                      ? 'bg-primary-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Feature Description */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMockup}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {mockups[currentMockup].title}
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  {mockups[currentMockup].description}
                </p>
                
                <div className="space-y-4">
                  {mockups[currentMockup].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <a 
                    href="https://rockdreams.staging.infinitymundi.it/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary text-lg px-8 py-4 inline-block"
                  >
                    Prova la Demo
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

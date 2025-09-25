'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, Cloud, Settings } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-16 h-16 mr-4">
              <Image
                src="/assets/LogoAssociate.png"
                alt="Associate Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Associate
            </h1>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8 max-w-4xl mx-auto leading-tight"
        >
          La piattaforma completa per la tua{' '}
          <span className="text-gradient">associazione sportiva o culturale</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Gestisci membri, corsi, prenotazioni, comunicazione e pagamenti in un&apos;unica soluzione moderna, 
          sicura e sempre aggiornata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a href="#features" className="btn-primary text-lg px-8 py-4 group inline-block">
            Scopri di più
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
          {/* <button className="btn-secondary text-lg px-8 py-4">
            Richiedi una demo
          </button> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="card p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Multiruolo</h3>
            <p className="text-gray-600">Amministrazione, insegnanti, membri: ognuno ha il suo spazio</p>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">In Cloud</h3>
            <p className="text-gray-600">Disponibile ovunque, sempre aggiornato e sicuro</p>
          </div>

          <div className="card p-6 text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customizzabile</h3>
            <p className="text-gray-600">Sviluppata da zero per adattarsi a ogni realtà</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

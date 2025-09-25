'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  CreditCard, 
  BookOpen, 
  Calendar, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  ClipboardList,
  ChevronRight
} from 'lucide-react'

const features = [
  {
    id: 'members',
    title: 'Gestione Membri',
    icon: Users,
    description: 'Registrazione, autenticazione, profilo personalizzato, accettazione statuto',
    details: [
      'Registrazione online semplificata',
      'Profili personalizzati per ogni membro',
      'Gestione documenti e autorizzazioni',
      'Sistema di autenticazione sicuro',
      'Accettazione digitale dello statuto'
    ]
  },
  {
    id: 'memberships',
    title: 'Tesseramenti',
    icon: CreditCard,
    description: 'Membership card, gratuiti o a pagamento con gestione automatica',
    details: [
      'Tessere digitali personalizzate',
      'Gestione quote associative',
      'Pagamenti online integrati',
      'Storico completo dei tesseramenti'
    ]
  },
  {
    id: 'courses',
    title: 'Gestione Corsi',
    icon: BookOpen,
    description: 'Catalogo, iscrizioni, pagamenti online o contanti, sezione "I miei corsi"',
    details: [
      'Catalogo corsi completo',
      'Iscrizioni online in tempo reale',
      'Gestione pagamenti flessibile',
      'Area personale "I miei corsi"',
      'Calendario lezioni integrato'
    ]
  },
  {
    id: 'bookings',
    title: 'Prenotazioni',
    icon: Calendar,
    description: 'Calendario, risorse prenotabili, filtri avanzati per una gestione ottimale',
    details: [
      'Calendario interattivo',
      'Prenotazione risorse e spazi',
      'Filtri avanzati per ricerca',
      'Notifiche automatiche',
      'Gestione conflitti e sovrapposizioni'
    ]
  },
  {
    id: 'files',
    title: 'Gestione File',
    icon: FileText,
    description: 'Upload documenti e immagini con organizzazione intelligente',
    details: [
      'Upload sicuro di documenti',
      'Gestione immagini e media',
      'Organizzazione per categorie',
    ]
  },
  {
    id: 'communication',
    title: 'Comunicazione a gruppi',
    icon: MessageSquare,
    description: 'Messaggi a soci, docenti, o iscritti a un corso',
    details: [
      'Comunicazioni di gruppo',
      'Notifiche via email',
    ]
  },
  {
    id: 'finances',
    title: 'Finanze & Report',
    icon: BarChart3,
    description: 'Pagamenti, rendiconti, focus finanziario completo',
    details: [
      'Gestione pagamenti centralizzata',
      'Rendiconti automatici',
      'Dashboard finanziaria',
      'Esportazione dati contabili',
      'Analisi e statistiche'
    ]
  },
  {
    id: 'attendance',
    title: 'Registro Presenze',
    icon: ClipboardList,
    description: 'Tracciamento presenze per corsi e eventi',
    details: [
      'Registro digitale presenze',
      // 'QR code per check-in veloce',
      // 'Report presenze automatici',
      'Integrazione con calendario',
      'Esportazione dati presenze'
    ]
  }
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('members')

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Funzionalità <span className="text-gradient">Principali</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutto quello che serve per gestire la tua associazione in modo professionale e moderno
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center group ${
                      activeFeature === feature.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mr-3 ${
                      activeFeature === feature.id ? 'text-white' : 'text-primary-600'
                    }`} />
                    <span className="font-medium">{feature.title}</span>
                    <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                      activeFeature === feature.id ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Feature Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {features.map((feature) => {
                if (feature.id !== activeFeature) return null
                const Icon = feature.icon
                
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="card p-8 h-full"
                  >
                    <div className="flex items-start mb-6">
                      <div className="bg-primary-100 p-3 rounded-xl mr-4">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Caratteristiche principali:
                      </h4>
                      {feature.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0" />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

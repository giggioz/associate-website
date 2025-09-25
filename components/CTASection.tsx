'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react'

const benefits = [
  'Setup gratuito e personalizzato',
  'Formazione completa del team',
  'Supporto tecnico dedicato',
  'Aggiornamenti automatici',
  'Backup sicuro dei dati'
]

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pronto a Rivoluzionare la Tua{' '}
            <span className="text-yellow-300">Associazione?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unisciti alle associazioni che hanno già scelto Associate 
            per una gestione moderna, efficiente e professionale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                Cosa Include il Pacchetto Completo:
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                    <span className="text-lg text-blue-100">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                Contattaci Ora:
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:infinitymundi.publishing@gmail.com"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-blue-100 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  infinitymundi.publishing@gmail.com
                </motion.a>
                
                <motion.a
                  href="tel:+393384291451"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-blue-100 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  +39 338 429 1451
                </motion.a>
                
                <motion.a
                  href="https://wa.me/393384291451?text=Ciao,%20sono%20interessato%20ad%20Associate%20per%20la%20mia%20associazione"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-blue-100 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="https://rockdreams.staging.infinitymundi.it/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-primary-800 font-bold text-xl px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group inline-block"
            >
              Prova la Demo
              <ArrowRight className="w-6 h-6 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            
            {/* <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 font-bold text-xl px-10 py-5 rounded-xl transition-all duration-300 transform hover:scale-105">
              Scarica Brochure
            </button> */}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-blue-200 mt-8 text-lg"
          >
            ⚡ Risposta garantita entro 24 ore
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

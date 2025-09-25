'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // const footerLinks = {
  //   prodotto: [
  //     { name: 'Funzionalità', href: '#features' },
  //     { name: 'Demo', href: 'https://rockdreams.staging.infinitymundi.it/' },
  //     { name: 'Prezzi', href: '#pricing' },
  //     { name: 'Integrazioni', href: '#integrations' },
  //   ],
  //   supporto: [
  //     { name: 'Centro Assistenza', href: '#help' },
  //     { name: 'Documentazione', href: '#docs' },
  //     { name: 'Formazione', href: '#training' },
  //     { name: 'Status', href: '#status' },
  //   ],
  //   azienda: [
  //     { name: 'Chi Siamo', href: '#about' },
  //     { name: 'Carriere', href: '#careers' },
  //     { name: 'Blog', href: '#blog' },
  //     { name: 'Press', href: '#press' },
  //   ],
  //   legale: [
  //     { name: 'Privacy Policy', href: '#privacy' },
  //     { name: 'Termini di Servizio', href: '#terms' },
  //     { name: 'Cookie Policy', href: '#cookies' },
  //     { name: 'GDPR', href: '#gdpr' },
  //   ],
  // }

  // const socialLinks = [
  //   { name: 'Facebook', icon: Facebook, href: '#' },
  //   { name: 'Twitter', icon: Twitter, href: '#' },
  //   { name: 'LinkedIn', icon: Linkedin, href: '#' },
  //   { name: 'Instagram', icon: Instagram, href: '#' },
  // ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8">
          {/* Brand Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/assets/LogoAssociate.png"
                    alt="Associate Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-3xl font-bold">Associate</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                La piattaforma completa per la gestione delle associazioni sportive e culturali. 
                Moderna, sicura e sempre aggiornata.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-primary-400" />
                  <a href="mailto:infinitymundi.publishing@gmail.com" className="hover:text-white transition-colors">
                  infinitymundi.publishing@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-primary-400" />
                  <a href="tel:+393384291451" className="hover:text-white transition-colors">
                    +39 338 429 1451
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {/* {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                      {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))} */}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Associate. Tutti i diritti riservati.
            </div>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                )
              })}
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

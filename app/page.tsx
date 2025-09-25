import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import DemoSection from '@/components/DemoSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <CTASection />
      <Footer />
    </main>
  )
}

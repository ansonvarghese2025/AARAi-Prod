import Navbar   from '@/components/layout/Navbar'
import Footer   from '@/components/layout/Footer'
import Hero     from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyAARAi from '@/components/sections/WhyAARAi'
import Contact  from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Hero />
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <Services />
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <WhyAARAi />
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

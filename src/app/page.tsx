import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'
import Hero      from '@/components/sections/Hero'
import Services  from '@/components/sections/Services'
import TechStack from '@/components/sections/TechStack'
import WhyAARAi  from '@/components/sections/WhyAARAi'
import Contact   from '@/components/sections/Contact'
import FadeIn    from '@/components/ui/FadeIn'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Hero />
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <FadeIn><Services /></FadeIn>
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <FadeIn><TechStack /></FadeIn>
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <FadeIn><WhyAARAi /></FadeIn>
        <div className="glow-divider" style={{ position: 'relative', zIndex: 10 }} />
        <FadeIn><Contact /></FadeIn>
      </main>
      <Footer />
    </>
  )
}

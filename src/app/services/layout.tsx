import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CybercoreBackground from '@/components/ui/cybercore-section-hero'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CybercoreBackground beamCount={80} />
      <div className="noise-overlay" />
      <Navbar />
      <main style={{ position: 'relative' }}>{children}</main>
      <Footer />
    </>
  )
}

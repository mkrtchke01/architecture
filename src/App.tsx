import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { B2BSection } from './components/B2BSection'
import { PrivateClientsSection } from './components/PrivateClientsSection'
import { Solutions } from './components/Solutions'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Advantages } from './components/Advantages'
import { Trust } from './components/Trust'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'

export default function App() {
  return (
    <>
      {/* Доступность: переход к основному контенту с клавиатуры */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brass focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Перейти к содержимому
      </a>

      <Header />

      <main>
        <Hero />
        <Services />
        <B2BSection />
        <PrivateClientsSection />
        <Solutions />
        <Portfolio />
        <Process />
        <Advantages />
        <Trust />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>

      <Footer />
      <FloatingContact />
    </>
  )
}

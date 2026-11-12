import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Infrastructure from './components/Infrastructure'
import Rent from './components/Rent'
import Training from './components/Training'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded-lg bg-lime px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Перейти до змісту
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Rent />
        <Training />
        <Infrastructure />
        <Gallery />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

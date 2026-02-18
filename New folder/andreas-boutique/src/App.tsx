import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Collections } from '@/pages/Collections'
import { Featured } from '@/pages/Featured'
import { Features } from '@/pages/Features'
import { OurStory } from '@/pages/OurStory'
import { Contact } from '@/pages/Contact'
import { Cart } from '@/pages/Cart'
import { ProductDetails } from '@/pages/ProductDetails'
import { Checkout } from '@/pages/Checkout'
import { Terms } from '@/pages/Terms'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnimateOnScroll() {
  const { pathname } = useLocation()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in')
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    )
    const els = document.querySelectorAll('[data-animate]')
    els.forEach((el) => observer.observe(el))
    return () => els.forEach((el) => observer.unobserve(el))
  }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-soft">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <AnimateOnScroll />
              <Home />
            </Layout>
          }
        />
        <Route path="/collections" element={<Layout><Collections /></Layout>} />
        <Route path="/featured" element={<Layout><Featured /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/our-story" element={<Layout><OurStory /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/cart" element={<Layout><Cart /></Layout>} />
        <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
      </Routes>
    </div>
  )
}

import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import AOS from 'aos'
import { Layout } from './components/Layout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServicesPage } from './pages/ServicesPage'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      offset: 40,
      delay: 0,
      duration: 1100,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    let frameA = 0
    let frameB = 0

    frameA = window.requestAnimationFrame(() => {
      frameB = window.requestAnimationFrame(() => {
        AOS.refreshHard()
        window.dispatchEvent(new Event('scroll'))
      })
    })

    return () => {
      window.cancelAnimationFrame(frameA)
      window.cancelAnimationFrame(frameB)
    }
  }, [location.key, location.pathname])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

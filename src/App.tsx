import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "relative" }}>
        <Nav />

        <div style={{ paddingTop: 64 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <ThemeToggle />
      </div>
    </BrowserRouter>
  )
}

import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

/*
App.jsx composes the single-page portfolio by arranging sections in order.
- Navigation is a simple sticky header with smooth scrolling anchors.
- Each section is exported as its own component file for clarity.
- Detailed comments inside components explain structure and accessibility choices.
*/

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/*
      Top navigation bar. Kept compact for a professional look.
      Using Tailwind utility classes for layout, spacing, and responsiveness.
      */}
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">Philip Ruffin Jr., MBA, CSM</div>
          <div className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#education" className="hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12 space-y-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Philip Ruffin Jr. — Built with React + Vite + Tailwind
      </footer>
    </div>
  )
}

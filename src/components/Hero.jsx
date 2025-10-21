import React from 'react'

/*
Hero component: first impression area with name, tagline, photo, and contact CTA.
- Uses a two-column layout on large screens, stacked on mobile.
- Includes accessible semantic markup (header, h1, p, img with alt).
- Placeholder image and contact link; replace with your photo and preferred contact method.
*/

export default function Hero() {
  return (
    <section id="hero" className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Left column: text */}
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-600">Higher Education Professional • Tech Consultant • Entrepreneur</p>
        <h1 className="mt-4 text-4xl lg:text-5xl font-semibold leading-tight">Philip Ruffin Jr., MBA, CSM</h1>
        <p className="mt-4 text-lg text-slate-700 max-w-2xl">
          Dynamic business systems professional with 7+ years of experience supporting enterprise student systems, technology risk consulting, and operational leadership. Rapid system mastery and a proven record of maintaining high availability across critical services.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#contact" className="inline-block px-5 py-3 rounded-md border border-primary-500 text-primary-500 hover:bg-primary-50">Contact</a>
          <a href="/resume.pdf" className="inline-block px-5 py-3 rounded-md bg-accent-500 text-white hover:opacity-95">Download Resume</a>
        </div>

        <ul className="mt-6 text-sm space-y-1 text-slate-600">
          <li><strong>Email:</strong> pruffi791@outlook.com</li>
          <li><strong>Location:</strong> Seattle, WA</li>
          <li><strong>Phone:</strong> 985-381-8608</li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/philip-ruffin-jr" className="underline">linkedin.com/in/philip-ruffin-jr</a></li>
        </ul>
      </div>

      {/* Right column: photo placeholder */}
      <div className="flex items-center justify-center">
        {/* Replace src with an imported image or hosted file. Use a professional headshot. */}
        <div className="w-56 h-56 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-100 to-white">
          <img src="https://via.placeholder.com/280x280.png?text=Your+Photo" alt="Philip Ruffin Jr." className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

import React from 'react'

/*
About component: condensed professional summary using content from the provided resume.
- Keep paragraphs short for readability.
- Use semantic section with id for navigation.
*/

export default function About() {
  return (
    <section id="about">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-4 text-slate-700 leading-relaxed">
        Dynamic Business Systems professional with 7+ years of experience supporting diverse user bases with clarity and care. Managed enterprise Student Information Systems for 40,000+ users, and worked as a Technology Risk Consultant with a proven 99.7% uptime record. Experienced across CRM, ERP, GRC, and financial systems including AWS, SAP, Oracle, and Workday.
      </p>
      <p className="mt-3 text-slate-700 leading-relaxed">
        I specialize in rapid system mastery, compliance (FERPA, GDPR, SOX), and leading technical teams to deliver reliable, user-centered solutions. I enjoy turning complex technical details into clear business outcomes and mentoring teams to achieve operational excellence.
      </p>
    </section>
  )
}

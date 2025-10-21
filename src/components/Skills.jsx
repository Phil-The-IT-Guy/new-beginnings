import React from 'react'

/*
Skills component: grid of core skill categories.
- Each skill shows a short label and optional subtext.
- Keep it easy to add/remove items later.
*/

const SKILLS = [
  { title: 'Student Systems Administration', items: ['SIS', 'Degree Audit', 'Records Management'] },
  { title: 'Registration & Records', items: ['Peak Registration', 'Transcripts', 'Enrollment Verification'] },
  { title: 'ERP & Databases', items: ['Workday', 'Oracle', 'SAP', 'SQL', 'pSQL'] },
  { title: 'Compliance & Governance', items: ['FERPA', 'GDPR', 'SOX', 'Security'] },
  { title: 'Enterprise Technologies', items: ['Active Directory', 'AWS', 'Power BI', 'Power Automate'] },
  { title: 'Leadership', items: ['Team Supervision', 'Project Coordination', 'Mentorship'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold">Core Skills</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {SKILLS.map((s) => (
          <div key={s.title} className="p-4 border rounded-lg">
            <h3 className="font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.items.join(' • ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import React from 'react'

/*
Experience component: chronological list of roles using data copied from resume.
- Each role shows title, company, dates, location, and bullet points.
- Keep content concise on the site, but link to a full resume for detailed reading.
*/

const EXPERIENCE = [
  {
    role: 'Internal Controls Contractor',
    company: 'PACCAR',
    location: 'Seattle, WA',
    dates: '08/2025 – Present',
    bullets: [
      'Designed streamlined communications workflows using SharePoint, Power Automate, and Outlook across 15 global divisions.',
      'Improved invoicing and payment processes through data analysis and procedural changes.'
    ]
  },
  {
    role: 'Technology Risk Consultant II',
    company: 'Ernst & Young',
    location: 'Seattle, WA',
    dates: '07/2023 – 08/2024',
    bullets: [
      'Led system testing across Workday, SAP, and AWS for Fortune 500 clients including Amazon and Microsoft.',
      'Supervised and mentored consulting interns and improved implementation efficiency by 28% for $20M+ engagements.'
    ]
  },
  {
    role: 'Information Technology Analyst',
    company: 'Louisiana State University',
    location: 'Baton Rouge, LA',
    dates: '05/2021 – 07/2023',
    bullets: [
      'Managed enterprise SIS supporting 40,000+ users and supervised 40+ student technical staff.',
      'Maintained 99.7% system uptime and developed Power BI dashboards and SQL queries for reporting.'
    ]
  },
  {
    role: 'Asset Manager',
    company: 'Self-Employed',
    location: 'Remote',
    dates: '07/2021 – Present',
    bullets: [
      'Built and manage a $298K diversified property portfolio with 11% above-market returns.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {EXPERIENCE.map((job) => (
          <article key={job.role} className="p-4 border rounded-lg">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{job.role} — {job.company}</h3>
                <div className="text-sm text-slate-600">{job.location} • {job.dates}</div>
              </div>
            </header>
            <ul className="mt-3 ml-4 list-disc text-slate-700">
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

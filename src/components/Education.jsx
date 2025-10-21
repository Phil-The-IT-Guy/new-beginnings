import React from 'react'

/*
Education & Certifications component.
- Lists degrees and certifications from the resume.
*/

export default function Education() {
  return (
    <section id="education">
      <h2 className="text-2xl font-semibold">Education & Certifications</h2>
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">MBA — Louisiana State University</h3>
          <div className="text-sm text-slate-600">2023</div>
          <p className="mt-2 text-sm text-slate-700">Emerging Information Technologies Certificate</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">BS, Information Systems & Decision Sciences — LSU</h3>
          <div className="text-sm text-slate-600">2021</div>
          <p className="mt-2 text-sm text-slate-700">Certified Scrum Master (CSM), Lean Six Sigma White Belt, AWS Academy Graduate</p>
        </div>
      </div>
    </section>
  )
}

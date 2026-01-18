import { useState } from 'react';

// Decorative pattern component using CSS variables
const DotPattern = ({ opacity = 0.07, className = "" }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      backgroundImage: `radial-gradient(circle, var(--terracotta) 1px, transparent 1px)`,
      backgroundSize: '24px 24px',
      opacity
    }}
  />
);

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-primary)', fontFamily: 'var(--font-main)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--sand)' }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight">[YourCo]</span>
          <div className="flex gap-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <a href="#services" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Services</a>
            <a href="#case-study" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Case Study</a>
            <a href="#about" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <DotPattern opacity={0.04} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--terracotta)' }}>AI GTM Strategy</p>
            <h1 className="text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              Your board wants an AI story.{' '}
              <span style={{ color: 'var(--terracotta)' }}>Your team has 12 tools and no adoption metrics.</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We help PE-backed companies turn AI tool sprawl into an investor-ready adoption story — in 4-6 weeks.
            </p>
            <a href="#contact" className="btn-primary">
              Book a Discovery Call
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div style={{ height: '1px', backgroundColor: 'var(--sand)' }}></div>
      </div>

      {/* Problem Section - The Adoption Paradox */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>The Problem</p>
          <h2 className="text-3xl font-semibold mb-8">The Adoption Paradox</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>84% of GTM teams</strong> are deploying AI tools. But satisfaction is dropping — only <strong style={{ color: 'var(--text-primary)' }}>60% are satisfied</strong>, down from 77% last year.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                The gap isn't access to tools. It's the absence of a coherent strategy. Your team has licenses, but no adoption metrics. Your board wants an AI story, but you're delivering tool receipts.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--terracotta)' }}></div>
                <div>
                  <h3 className="font-medium mb-1">10-15 AI tools deployed</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Across sales, marketing, and ops — with no unified view</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--terracotta)' }}></div>
                <div>
                  <h3 className="font-medium mb-1">No adoption metrics</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>License costs visible, ROI invisible</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--terracotta)' }}></div>
                <div>
                  <h3 className="font-medium mb-1">Board meeting in 2-3 months</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Investors expecting an AI strategy narrative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative overflow-hidden">
        <DotPattern opacity={0.03} />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>What We Deliver</p>
          <h2 className="text-3xl font-semibold mb-4">AI GTM Assessment</h2>
          <p className="text-lg mb-12 max-w-xl" style={{ color: 'var(--text-secondary)' }}>A 4-6 week engagement that audits, analyzes, and architects your AI adoption story.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Current State Audit',
                desc: 'We inventory every AI tool in use across sales and marketing. Interview 8-12 stakeholders. Map actual usage against license spend.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                )
              },
              {
                title: 'Adoption Gap Analysis',
                desc: 'Identify where tools exist but aren\'t delivering value. Score each tool on adoption, impact, and strategic fit. Prioritize quick wins.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                )
              },
              {
                title: 'Investor Narrative',
                desc: 'Board-ready talking points and visual presentation. Connects AI investments to business outcomes in language investors understand.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                )
              }
            ].map((service, i) => (
              <div key={i} className="card relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: 'var(--terracotta)' }}></div>
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--blush)', color: 'var(--terracotta)' }}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>The Process</p>
          <h2 className="text-3xl font-semibold mb-12">Clarity in 4-6 Weeks</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { week: 'Week 1-2', title: 'Discovery', desc: 'Stakeholder interviews, tool inventory, usage data collection' },
              { week: 'Week 2-3', title: 'Analysis', desc: 'Adoption scoring, gap identification, opportunity mapping' },
              { week: 'Week 3-4', title: 'Synthesis', desc: 'Quick wins prioritization, 90-day roadmap, ROI projections' },
              { week: 'Week 4-6', title: 'Delivery', desc: 'Executive presentation, board materials, implementation guide' }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="text-sm font-medium mb-2" style={{ color: 'var(--terracotta)' }}>{phase.week}</div>
                <h3 className="font-semibold mb-2">{phase.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{phase.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-3 -right-4 w-8 text-center" style={{ color: 'var(--sand)' }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section id="case-study" className="py-24 px-6 relative overflow-hidden">
        <DotPattern opacity={0.03} />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>Case Study</p>
          <div className="card max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--blush)' }}>
                <span className="text-lg font-bold" style={{ color: 'var(--terracotta)' }}>G</span>
              </div>
              <div>
                <h3 className="font-semibold">Global Software Company</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>50+ sales reps, 12 AI tools, PE-backed</p>
              </div>
            </div>
            <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--text-secondary)', borderLeft: '3px solid var(--terracotta)', paddingLeft: '1rem' }}>
              "We went from tool chaos to a clear adoption story for our investors — with quick wins we could execute in 90 days."
            </blockquote>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--terracotta)' }}>12→4</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Tools consolidated</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--terracotta)' }}>3x</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Adoption rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--terracotta)' }}>$40K</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>About</p>
            <h2 className="text-3xl font-semibold mb-8">Quick wins over transformation theater.</h2>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              [YourCo] Consulting was founded on a simple observation: PE-backed companies don't need another AI roadmap that takes 18 months to execute. They need clarity they can act on before their next board meeting.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              We focus exclusively on GTM teams at growth-stage companies. We've seen the same pattern: tools purchased with good intentions, adoption stalled at 20-30%, and no story to tell investors.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Our approach is pragmatic. Audit what exists. Score what's working. Identify 2-3 quick wins. Build the narrative. Move on.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'var(--text-primary)', color: 'var(--bg-page)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--text-secondary)' }}>Get in Touch</p>
              <h2 className="text-3xl font-semibold mb-6">Ready to build your AI story?</h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Whether you have a board meeting in 60 days or you're just trying to make sense of your AI investments — let's talk.
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'var(--bg-surface)' }}>
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--terracotta)' }}>
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <p className="font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Message received</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--sand)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--sand)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <textarea
                    placeholder="Tell us about your AI adoption challenges"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none resize-none"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: 'var(--sand)',
                      color: 'var(--text-primary)'
                    }}
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 rounded-lg font-medium transition-all hover:opacity-90"
                    style={{ backgroundColor: 'var(--terracotta)', color: 'white' }}
                  >
                    Book a Discovery Call
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: 'var(--text-primary)', borderTop: '1px solid var(--sand)' }}>
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span>© 2026 [YourCo] Consulting. All rights reserved.</span>
          <span>AI GTM Strategy for PE-Backed Companies</span>
        </div>
      </footer>
    </div>
  );
}

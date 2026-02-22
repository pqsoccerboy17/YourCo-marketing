import { useState } from 'react';

const MycelNetwork = ({ opacity = 0.06, className = "" }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{ opacity }}
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mycel-network" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Organic branching lines */}
          <path d="M20,60 Q40,30 60,50 T100,40" fill="none" stroke="var(--color-accent-primary)" strokeWidth="0.5" opacity="0.6" />
          <path d="M10,90 Q30,70 50,80 T90,60" fill="none" stroke="var(--color-accent-primary)" strokeWidth="0.5" opacity="0.4" />
          <path d="M60,10 Q70,40 80,30 T110,70" fill="none" stroke="var(--color-accent-primary)" strokeWidth="0.5" opacity="0.5" />
          <path d="M0,40 Q20,50 40,45 T80,90" fill="none" stroke="var(--color-border-strong)" strokeWidth="0.5" opacity="0.4" />
          {/* Connection nodes */}
          <circle cx="60" cy="50" r="1.5" fill="var(--color-accent-primary)" opacity="0.5" />
          <circle cx="20" cy="60" r="1" fill="var(--color-accent-primary)" opacity="0.4" />
          <circle cx="100" cy="40" r="1" fill="var(--color-accent-primary)" opacity="0.3" />
          <circle cx="50" cy="80" r="1.5" fill="var(--color-accent-primary)" opacity="0.4" />
          <circle cx="80" cy="30" r="1" fill="var(--color-accent-primary)" opacity="0.3" />
          <circle cx="40" cy="45" r="1" fill="var(--color-border-strong)" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mycel-network)" />
    </svg>
  </div>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('mycel-theme');
    if (stored === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      return true;
    }
    return false;
  });

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('mycel-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('mycel-theme', 'light');
    }
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#case-study', label: 'Case Study' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', fontFamily: 'var(--font-main)' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm" style={{ backgroundColor: 'var(--color-bg-primary)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">Mycel</span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t"
            style={{ backgroundColor: 'var(--color-bg-primary)', borderColor: 'var(--color-border)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg py-2 hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <MycelNetwork opacity={0.05} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-accent-primary)' }}>AI GTM Strategy</p>
            <h1 className="text-h1 mb-6">
              Your board wants an AI story.{' '}
              <span style={{ color: 'var(--color-accent-primary)' }}>Your team has 12 tools and no adoption metrics.</span>
            </h1>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              We help PE-backed companies connect scattered AI tools into a rooted, investor-ready adoption story — in 4-6 weeks.
            </p>
            <a href="#contact" className="btn-primary">
              Book a Discovery Call
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="px-6">
        <div className="section-divider"></div>
      </div>

      {/* Problem Section - The Adoption Paradox */}
      <section className="py-24 px-6" style={{ backgroundColor: 'var(--color-bg-card)' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-secondary)' }}>The Problem</p>
          <h2 className="text-h2 mb-8">The Adoption Paradox</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                <strong style={{ color: 'var(--color-text-primary)' }}>84% of GTM teams</strong> are deploying AI tools. But satisfaction is dropping — only <strong style={{ color: 'var(--color-text-primary)' }}>60% are satisfied</strong>, down from 77% last year.
              </p>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                The gap isn't access to tools. It's the absence of a connected strategy beneath the surface. Your team has licenses, but no adoption metrics. Your board wants an AI story, but you're delivering tool receipts.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-primary)' }}></div>
                <div>
                  <h3 className="font-medium mb-1">10-15 AI tools deployed</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Across sales, marketing, and ops — with no unified view</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-primary)' }}></div>
                <div>
                  <h3 className="font-medium mb-1">No adoption metrics</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>License costs visible, ROI invisible</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent-primary)' }}></div>
                <div>
                  <h3 className="font-medium mb-1">Board meeting in 2-3 months</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Investors expecting an AI strategy narrative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="px-6">
        <div className="section-divider"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative overflow-hidden">
        <MycelNetwork opacity={0.04} />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-secondary)' }}>What We Deliver</p>
          <h2 className="text-h2 mb-4">AI GTM Assessment</h2>
          <p className="text-lg mb-12 max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>A 4-6 week engagement that maps your AI network, finds the gaps, and builds your adoption story.</p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10" style={{ backgroundColor: 'var(--color-accent-primary)' }}></div>
                <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent-soft)', color: 'var(--color-accent-primary)' }}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          {/* What's Included + Deliverables */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-h3 mb-6">What's Included</h3>
              <div className="space-y-4">
                {[
                  { title: 'Stakeholder Discovery', desc: '8-12 interviews with sales, marketing, ops, leadership' },
                  { title: 'Tech Stack Inventory', desc: 'Complete audit of every AI tool in use' },
                  { title: 'Adoption Gap Analysis', desc: 'Who\'s using what, what\'s working, what\'s not' },
                  { title: 'Opportunity Prioritization', desc: 'Ranked list of quick wins and strategic bets' },
                  { title: 'Business Cases', desc: 'ROI projections for top 3-5 opportunities' },
                  { title: 'Investor Narrative', desc: 'Board-ready talking points and presentation' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: 'var(--color-accent-soft)' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/></svg>
                    </div>
                    <div>
                      <span className="font-medium">{item.title}</span>
                      <span style={{ color: 'var(--color-text-secondary)' }}> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-h3 mb-6">Deliverables</h3>
              <div className="card">
                <ul className="space-y-3">
                  {[
                    'Stakeholder interview synthesis',
                    'Tech stack inventory with adoption scores',
                    'Gap analysis report',
                    'Prioritized opportunity matrix',
                    'Business cases (3-5)',
                    'Implementation roadmap',
                    'Board presentation deck',
                    'Executive summary one-pager'
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span style={{ color: 'var(--color-accent-primary)' }}>•</span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="px-6">
        <div className="section-divider"></div>
      </div>

      {/* Case Study */}
      <section id="case-study" className="py-24 px-6 relative overflow-hidden">
        <MycelNetwork opacity={0.03} />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-secondary)' }}>Case Study</p>
          <div className="card max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent-soft)' }}>
                <span className="text-lg font-bold" style={{ color: 'var(--color-accent-primary)' }}>G</span>
              </div>
              <div>
                <h3 className="font-semibold">Global Software Company</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>50+ sales reps, 12 AI tools, PE-backed</p>
              </div>
            </div>
            <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--color-text-secondary)', borderLeft: '3px solid var(--color-accent-primary)', paddingLeft: '1rem' }}>
              "We went from tool chaos to a clear adoption story for our investors — with quick wins we could execute in 90 days."
            </blockquote>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-accent-primary)' }}>12→4</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Tools consolidated</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-accent-primary)' }}>3x</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Adoption rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--color-accent-primary)' }}>$40K</div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-secondary)' }}>Get in Touch</p>
              <h2 className="text-h2 mb-6">Ready to build your AI story?</h2>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Whether you have a board meeting in 60 days or you're just trying to make sense of your AI investments — let's talk.
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: 'var(--color-bg-card)' }}>
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent-primary)' }}>
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <p className="font-medium mb-2" style={{ color: 'var(--color-text-primary)' }}>Message received</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none"
                      style={{
                        backgroundColor: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none"
                      style={{
                        backgroundColor: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell us about your AI adoption challenges"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none resize-none"
                      style={{
                        backgroundColor: 'var(--color-bg-card)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text-primary)'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-medium transition-all hover:opacity-90"
                    style={{ backgroundColor: 'var(--color-accent-primary)', color: 'white' }}
                  >
                    Book a Discovery Call
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ backgroundColor: 'var(--color-text-primary)', borderTop: '1px solid var(--color-border)' }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <span>© 2026 Mycel. All rights reserved.</span>
          <span>AI GTM Strategy for PE-Backed Companies</span>
        </div>
      </footer>
    </div>
  );
}

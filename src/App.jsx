import { useState } from 'react';

const DotPattern = ({ opacity = 0.07, className = "" }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      backgroundImage: `radial-gradient(circle, #4a5d4a ${1}px, transparent ${1}px)`,
      backgroundSize: '24px 24px',
      opacity
    }}
  />
);

const LinePattern = ({ opacity = 0.05, className = "" }) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #4a5d4a 40px, #4a5d4a 41px)`,
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
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <nav className="fixed top-0 w-full bg-stone-50/90 backdrop-blur-sm z-50 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tight text-stone-900">[YourCo]</span>
          <div className="flex gap-8 text-sm text-stone-600">
            <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <DotPattern opacity={0.06} />
        <div className="absolute top-20 right-0 w-96 h-96 pointer-events-none hidden lg:block">
          <div className="absolute w-72 h-72 rounded-full border border-stone-300/30" style={{top: '10%', right: '5%'}}></div>
          <div className="absolute w-56 h-56 rounded-full border border-stone-300/20" style={{top: '20%', right: '10%'}}></div>
          <div className="absolute w-40 h-40 rounded-full" style={{top: '30%', right: '15%', backgroundColor: '#4a5d4a', opacity: 0.06}}></div>
          <div className="absolute w-24 h-24 rounded-full" style={{top: '25%', right: '25%', backgroundColor: '#4a5d4a', opacity: 0.04}}></div>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{color: '#4a5d4a'}}>AI & Sales Consulting</p>
            <h1 className="text-5xl font-light text-stone-900 leading-tight mb-6">
              Bridge the Gap Between
              <span className="block font-medium">AI Investment & Real Value</span>
            </h1>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Your company invested in AI tools—but adoption stalled at 30%. You can see who isn't using them, but you don't know why. We partner with leaders to diagnose the blockers, build systematic enablement, and turn expensive licenses into measurable growth.
            </p>
            <a href="#contact" className="inline-block text-white px-8 py-4 rounded-lg text-sm font-medium hover:opacity-90 transition-colors" style={{backgroundColor: '#4a5d4a'}}>
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6"><div className="h-px bg-stone-200"></div></div>

      <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
        <LinePattern opacity={0.04} />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-sm font-medium text-stone-500 uppercase tracking-widest mb-4">Services</h2>
          <p className="text-3xl font-light text-stone-900 mb-16 max-w-xl">From adoption gaps to competitive advantage</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Adoption Diagnostics', desc: "Uncover the real reasons your AI tools aren't sticking—whether it's workflow friction, skill gaps, or cultural resistance. Get the "why" behind your usage data." },
              { title: 'Enablement Systems', desc: 'Build personalized, scalable programs that meet teams where they are. Move from one-size-fits-all training to targeted interventions that drive real behavior change.' },
              { title: 'Sales Process Integration', desc: 'Embed AI into your revenue workflows in ways that feel natural, not forced. Accelerate pipeline, improve conversion, and prove ROI to leadership.' }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all group relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-10" style={{backgroundColor: '#4a5d4a'}}></div>
                <div className="w-10 h-10 rounded-full mb-6 transition-colors" style={{backgroundColor: '#5c6d5c'}}></div>
                <h3 className="text-lg font-medium text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-stone-100 relative overflow-hidden">
        <DotPattern opacity={0.05} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-stone-300/20 pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-stone-300/15 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-sm font-medium text-stone-500 uppercase tracking-widest mb-4">Why Partner With Us</h2>
          <p className="text-3xl font-light text-stone-900 mb-16 max-w-xl">We don't just report problems—we build solutions</p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { stat: 'Beyond the dashboard', desc: "Usage reports tell you what's happening. We help leaders understand why—and systematically fix it." },
              { stat: 'AI-native, sales-fluent', desc: 'Deep expertise in both AI tooling and revenue operations. We speak the language of engineering teams and executive leadership alike.' },
              { stat: 'Culture change, not just training', desc: 'Sustainable adoption requires shifting habits and mindsets, not just running workshops.' },
              { stat: 'Hands-on partnership', desc: 'We work alongside leadership and their teams—diagnosing, designing, and iterating until the numbers move.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#5c6d5c'}}></div>
                <div>
                  <h3 className="font-medium text-stone-900 mb-1">{item.stat}</h3>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-white relative overflow-hidden">
        <LinePattern opacity={0.03} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-sm font-medium text-stone-500 uppercase tracking-widest mb-4">About</h2>
            <p className="text-3xl font-light text-stone-900 mb-8">Founded to help leaders close the AI adoption gap</p>
            <p className="text-stone-600 leading-relaxed mb-6">
              [YourCo] was founded after watching company after company invest millions in AI tools—only to see adoption flatline at 20-30%. The dashboards showed the problem clearly, but leaders lacked a systematic way to fix it.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              The gap between buying AI and getting value from it isn't a technology problem. It's a human one—workflow friction, unclear ROI, change resistance. Solving it requires understanding the "why" behind the data and orchestrating real behavior change.
            </p>
            <p className="text-stone-600 leading-relaxed">
              That's where we come in. We partner with leaders to turn passive usage data into active culture change, and expensive licenses into genuine competitive advantage.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #ffffff ${1}px, transparent ${1}px)`, backgroundSize: '32px 32px', opacity: 0.03 }} />
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-stone-700/50 pointer-events-none hidden md:block"></div>
        <div className="absolute top-16 right-16 w-20 h-20 rounded-full border border-stone-700/30 pointer-events-none hidden md:block"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4">Get in Touch</h2>
              <p className="text-3xl font-light text-stone-100 mb-6">Ready to close the gap?</p>
              <p className="text-stone-400 leading-relaxed">
                Whether adoption has stalled, you're planning a rollout, or you're just trying to understand why the numbers aren't moving—let's talk.
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="bg-stone-800 rounded-2xl p-8 text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: '#c4704b'}}>
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <p className="text-stone-200 font-medium mb-2">Message received</p>
                  <p className="text-stone-400 text-sm">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors" />
                  <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors" />
                  <textarea placeholder="Tell us about your adoption challenges" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors resize-none" />
                  <button onClick={handleSubmit} className="w-full text-white py-3 rounded-lg font-medium hover:opacity-90 transition-colors" style={{backgroundColor: '#c4704b'}}>Send Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-stone-900 border-t border-stone-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-stone-500">
          <span>© 2026 [YourCo]. All rights reserved.</span>
          <span>AI Adoption & Sales Consulting</span>
        </div>
      </footer>
    </div>
  );
}

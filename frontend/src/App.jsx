import React, { useState } from 'react';
import logo from './assets/logo.png'; // Make sure your logo is still here!

// --- LAYOUT COMPONENTS ---
const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#home" className="flex items-center gap-2 group">
        {/* Fallback text if logo image is missing */}
        <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600 tracking-tighter group-hover:from-blue-700 group-hover:to-blue-500 transition-all">
          SPARCAINE
        </span>
      </a>
      <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600 items-center">
        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
        <a href="#global-reach" className="hover:text-blue-600 transition-colors">Global Reach</a>
        <a href="#careers" className="hover:text-blue-600 transition-colors">Careers</a>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
          Partner With Us
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 text-center text-sm border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="font-medium">© 2026 Sparcaine. A Premier Brand by Medispark Healthcare LLP.</p>
      <p className="text-slate-500">Ahmedabad, Gujarat, India.</p>
    </div>
  </footer>
);

// --- SECTIONS ---
const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-slate-50 to-white opacity-70"></div>
    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 font-semibold text-sm backdrop-blur-sm">
        Elevating Dental Standards Globally
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
        Precision in Pain Management. <br/> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
          Excellence in Care.
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
        Delivering world-class dental anesthesia and healthcare solutions with a commitment to quality, safety, and global standards.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#products" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all transform hover:-translate-y-1">
          Explore Portfolio
        </a>
        <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
          Our Story
        </a>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 bg-blue-900 relative z-20 shadow-2xl">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-800/50">
      <div className="py-4">
        <h3 className="text-4xl font-black text-white tracking-tight">State-of-the-Art</h3>
        <p className="text-blue-200 mt-2 font-medium">Manufacturing Facilities</p>
      </div>
      <div className="py-4">
        <h3 className="text-4xl font-black text-white tracking-tight">1M+ Units/Mo</h3>
        <p className="text-blue-200 mt-2 font-medium">Scaling Capacity by April 2026</p>
      </div>
      <div className="py-4">
        <h3 className="text-4xl font-black text-white tracking-tight">Global Trust</h3>
        <p className="text-blue-200 mt-2 font-medium">Spanning Across MEA</p>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Foundation</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">About Sparcaine</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              Our Story
            </h4>
            <p className="text-slate-600 leading-relaxed text-lg">
              Backed by the robust manufacturing capabilities of Medispark Healthcare LLP, the Sparcaine brand was built on a singular vision: to elevate the standard of patient comfort in dental and medical procedures. We are dedicated to continuous innovation and stringent quality control.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-1 bg-cyan-500 rounded-full"></span>
              Our Capabilities
            </h4>
            <p className="text-slate-600 leading-relaxed text-lg">
              We pride ourselves on advanced manufacturing processes. By April 2026, our production capacity will scale to an impressive 800,000 to 1,000,000 units per month, ensuring a steady, reliable supply chain for our global partners.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <h4 className="text-3xl font-bold mb-6">Quality & Compliance</h4>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 font-light">
            Manufactured in state-of-the-art facilities adhering to stringent Good Manufacturing Practices (GMP) and ISO standards. Our rigorous regulatory compliance and facility inspections ensure that every cartridge meets the highest global safety and efficacy benchmarks.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg font-mono text-sm border border-white/20">GMP Certified</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg font-mono text-sm border border-white/20">ISO Standards</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section id="products" className="py-32 bg-slate-50 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Portfolio</h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Clinical Solutions</h3>
      </div>
      
      <div className="space-y-8">
        {/* Product 1 */}
        <div className="group bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <div className="flex items-baseline gap-4 mb-4">
              <h3 className="text-4xl font-black text-slate-900">Sparcaine SP</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold tracking-wide">Standard</span>
            </div>
            <p className="text-xl text-slate-500 font-light mb-8">Standard Precision Dental Anesthetic engineered for rapid onset and reliable, profound anesthesia.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Active</p>
                <p className="font-semibold text-slate-800">Lidocaine HCl 2% <br/> Articaine HCl 4%</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Onset</p>
                <p className="font-semibold text-slate-800">1 - 3 minutes</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</p>
                <p className="font-semibold text-slate-800">Pulpal: 45-60m <br/> Tissue: 2-3h</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-slate-50 p-8 rounded-2xl border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              Presentation
            </h4>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center gap-2">✓ Clinical-grade glass cartridges</li>
              <li className="flex items-center gap-2">✓ 1.8 ml volume</li>
              <li className="flex items-center gap-2">✓ Optimized 50-pack</li>
            </ul>
          </div>
        </div>

        {/* Product 2 */}
        <div className="group bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <div className="flex items-baseline gap-4 mb-4">
              <h3 className="text-4xl font-black text-slate-900">Sparcaine LA</h3>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold tracking-wide">Long-Acting</span>
            </div>
            <p className="text-xl text-slate-500 font-light mb-8">Premier long-acting formulation developed for complex, prolonged surgical procedures.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Active</p>
                <p className="font-semibold text-slate-800">Bupivacaine HCl 0.5% <br/> Ropivacaine</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Onset</p>
                <p className="font-semibold text-slate-800">2 - 5 minutes</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</p>
                <p className="font-semibold text-slate-800">Pulpal: 90-180m <br/> Tissue: 4-9h</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-slate-50 p-8 rounded-2xl border border-slate-100 group-hover:bg-cyan-50/50 transition-colors">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              Presentation
            </h4>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex items-center gap-2">✓ Clinical-grade glass cartridges</li>
              <li className="flex items-center gap-2">✓ 1.8 ml volume</li>
              <li className="flex items-center gap-2">✓ 50-cartridge packs</li>
            </ul>
          </div>
        </div>

        {/* Ancillary Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-3">Spargel B</h4>
            <p className="text-slate-400 leading-relaxed">Premium topical anesthetic gel providing fast-acting surface numbing prior to injection.</p>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-3">Precision Needles</h4>
            <p className="text-slate-400 leading-relaxed">Engineered for minimal tissue trauma and optimal fluid flow. Distributor pricing available.</p>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-3">Medispark Portfolio</h4>
            <p className="text-slate-400 leading-relaxed">Nutraceuticals including BioVit C, Derma Glow, Painova, VITA CDZ, and REGEN.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GlobalReach = () => (
  <section id="global-reach" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Expansion</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Global Footprint</h3>
          <p className="text-xl text-slate-600 mb-10 font-light">Trusted by healthcare professionals across the globe, with a rapidly expanding network.</p>
          
          <div className="space-y-6 mb-10">
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-3">Current Export Markets</h4>
              <div className="flex flex-wrap gap-2">
                {['UAE', 'Ghana', 'Kenya', 'Tanzania', 'Rwanda', 'Somalia', 'Djibouti'].map(c => (
                  <span key={c} className="px-4 py-2 bg-blue-50 border border-blue-100 text-blue-700 rounded-lg text-sm font-semibold">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Domestic Network</h4>
              <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                Powerful distribution across India, supported by partners like <span className="font-bold text-slate-800">Skydent Surgical Corp</span> in Gujarat.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl shadow-blue-600/30">
          <svg className="w-16 h-16 mx-auto mb-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
          <p className="text-blue-100 mb-8 text-lg">Seeking strategic distributors, dealers, and JV partners in Myanmar, SEA, Africa, and Saudi Arabia.</p>
          <a href="#contact" className="inline-block w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-colors">
            Inquire About Distribution
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Careers = () => (
  <section id="careers" className="py-24 bg-slate-900 text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-white mb-6">Join the Innovation</h2>
      <p className="text-xl text-slate-400 mb-12 font-light">Build your career with a rapidly growing leader in pharmaceutical and healthcare manufacturing.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
          <h4 className="text-xl font-bold text-white mb-2">Open Roles</h4>
          <p className="text-slate-400 text-sm">Regulatory Affairs (ROW) • Sales Reps • Medical Reps</p>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
          <h4 className="text-xl font-bold text-white mb-2">Internships</h4>
          <p className="text-slate-400 text-sm">Regulatory Affairs • Sales & Marketing</p>
        </div>
      </div>
      <a href="#contact" className="inline-block bg-blue-500 text-white font-bold px-10 py-4 rounded-full hover:bg-blue-400 transition-colors shadow-lg shadow-blue-500/20">
        Apply Now
      </a>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', country: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-600">Whether you're a professional or seeking distribution, we're ready.</p>
        </div>

        {isSubmitted ? (
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center transform transition-all">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h3>
            <p className="text-lg text-slate-600 mb-8">Thank you for reaching out to Sparcaine. Our corporate team will review your details and contact you shortly.</p>
            <button onClick={() => setIsSubmitted(false)} className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <input required type="text" name="name" onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Company (Optional)</label>
                <input type="text" name="company" onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <input required type="email" name="email" onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                <input required type="tel" name="phone" onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">Country / Region</label>
              <input required type="text" name="country" onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 ml-1">How can we help you?</label>
              <textarea required name="message" rows="5" onChange={handleChange} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"></textarea>
            </div>
            
            {error && <div className="p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm font-semibold">{error}</div>}
            
            <button type="submit" disabled={isSubmitting} className={`w-full text-white font-bold py-5 rounded-xl transition-all shadow-lg ${isSubmitting ? 'bg-blue-400 cursor-not-allowed shadow-none' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-600/30'}`}>
              {isSubmitting ? 'Processing Request...' : 'Submit Inquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

// --- APP RENDERER ---
export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <GlobalReach />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- LAYOUT COMPONENTS ---
const Navbar = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-900 tracking-tight">SPARCAINE</Link>
      <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600 items-center">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About Us</Link>
        <Link to="/products" className="hover:text-blue-600">Products</Link>
        <Link to="/global-reach" className="hover:text-blue-600">Global Reach</Link>
        <Link to="/careers" className="hover:text-blue-600">Careers</Link>
        <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Contact</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-8 text-center text-sm">
    <p>© 2026 Sparcaine. A Premier Brand by Medispark Healthcare LLP.</p>
    <p>Ahmedabad, Gujarat, India.</p>
  </footer>
);

// --- PAGE COMPONENTS ---
const Home = () => (
  <div className="animate-fade-in">
    <section className="bg-blue-50 py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
          Precision in Pain Management. <br/> Excellence in Dental Care.
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Delivering world-class dental anesthesia and healthcare solutions with a commitment to quality, safety, and global standards.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">Explore Our Products</Link>
          <Link to="/contact" className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition">Partner With Us</Link>
        </div>
      </div>
    </section>

    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-bold text-blue-900">State-of-the-Art</h3>
          <p className="text-gray-500 mt-2">Manufacturing Facilities</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-900">1 Million Units/Mo</h3>
          <p className="text-gray-500 mt-2">Scaling Capacity by April 2026</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-900">Global Footprint</h3>
          <p className="text-gray-500 mt-2">Trusted across MEA</p>
        </div>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="animate-fade-in max-w-5xl mx-auto px-4 py-16">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4">About Sparcaine</h2>
      <p className="text-xl text-gray-600">Elevating the standard of patient comfort worldwide.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Story</h3>
        <p className="text-gray-600 leading-relaxed">
          Backed by the robust manufacturing capabilities of Medispark Healthcare LLP, the Sparcaine brand was built on a singular vision: to elevate the standard of patient comfort in dental and medical procedures. We are dedicated to continuous innovation and stringent quality control in the pharmaceutical and nutraceutical sectors.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Capabilities</h3>
        <p className="text-gray-600 leading-relaxed">
          We pride ourselves on our advanced manufacturing processes. By April 2026, our production capacity will scale to an impressive 800,000 to 1,000,000 units per month, ensuring a steady, reliable supply chain for our global partners.
        </p>
      </div>
    </div>

    <div className="bg-blue-50 p-10 rounded-xl text-center border border-blue-100">
      <h3 className="text-2xl font-bold text-blue-900 mb-4">Quality & Compliance</h3>
      <p className="text-gray-700 max-w-3xl mx-auto">
        Manufactured in state-of-the-art facilities adhering to stringent Good Manufacturing Practices (GMP) and ISO standards. Our rigorous regulatory compliance and facility inspections ensure that every cartridge meets the highest global safety and efficacy benchmarks.
      </p>
    </div>
  </div>
);

const Products = () => (
  <div className="animate-fade-in max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">Our Product Portfolio</h2>
    
    <div className="space-y-12">
      {/* Sparcaine SP */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold text-blue-800 mb-2">Sparcaine SP</h3>
          <p className="text-blue-600 font-semibold mb-4">Standard Precision Dental Anesthetic</p>
          <p className="text-gray-600 mb-6">Engineered for rapid onset and reliable, profound anesthesia, making it the ideal choice for a wide range of routine dental and maxillofacial procedures.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div><span className="font-bold text-gray-800">Active Ingredient:</span> Lidocaine HCl 2% / Articaine HCl 4%</div>
            <div><span className="font-bold text-gray-800">Vasoconstrictor:</span> Epinephrine 1:100,000 / 1:80,000</div>
            <div><span className="font-bold text-gray-800">Onset of Action:</span> 1 to 3 minutes</div>
            <div><span className="font-bold text-gray-800">Duration (Pulpal):</span> 45 - 60 minutes</div>
            <div><span className="font-bold text-gray-800">Duration (Soft Tissue):</span> 2 - 3 hours</div>
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col justify-center">
          <h4 className="font-bold text-gray-800 mb-2">Presentation</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Clinical-grade glass cartridges</li>
            <li>• 1.8 ml per cartridge</li>
            <li>• Optimized 50-cartridge packs</li>
          </ul>
        </div>
      </div>

      {/* Sparcaine LA */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold text-blue-800 mb-2">Sparcaine LA</h3>
          <p className="text-blue-600 font-semibold mb-4">Long-Acting Dental Anesthetic</p>
          <p className="text-gray-600 mb-6">Our premier long-acting formulation, specifically developed for complex, prolonged surgical procedures where extended pain control is paramount.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div><span className="font-bold text-gray-800">Active Ingredient:</span> Bupivacaine HCl 0.5% / Ropivacaine</div>
            <div><span className="font-bold text-gray-800">Vasoconstrictor:</span> Epinephrine 1:200,000</div>
            <div><span className="font-bold text-gray-800">Onset of Action:</span> 2 to 5 minutes</div>
            <div><span className="font-bold text-gray-800">Duration (Pulpal):</span> 90 - 180 minutes</div>
            <div><span className="font-bold text-gray-800">Duration (Soft Tissue):</span> 4 - 9 hours</div>
          </div>
        </div>
        <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col justify-center">
          <h4 className="font-bold text-gray-800 mb-2">Presentation</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Clinical-grade glass cartridges</li>
            <li>• 1.8 ml per cartridge</li>
            <li>• 50-cartridge packs</li>
          </ul>
        </div>
      </div>
      
      {/* Additional Solutions */}
      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl font-bold mb-6">Additional Dental & Healthcare Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-blue-300 mb-2">Spargel B</h4>
            <p className="text-sm text-gray-300">A premium topical anesthetic gel providing fast-acting surface numbing prior to injection or minor procedures.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-300 mb-2">Precision Needles</h4>
            <p className="text-sm text-gray-300">Engineered for minimal tissue trauma and optimal fluid flow. Available at specialized distributor pricing.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-300 mb-2">Medispark Portfolio</h4>
            <p className="text-sm text-gray-300">Nutraceuticals and specialized formulations including BioVit C, Derma Glow, Painova, VITA CDZ, and REGEN.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GlobalReach = () => (
  <div className="animate-fade-in max-w-5xl mx-auto px-4 py-16 text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Global Reach & Partnerships</h2>
    <p className="text-xl text-gray-600 mb-12">Trusted by healthcare professionals across the globe.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-blue-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Global Footprint</h3>
        <p className="text-gray-600 mb-4">Our current export markets span across the Middle East and Africa, including:</p>
        <div className="flex flex-wrap gap-2">
          {['UAE', 'Ghana', 'Kenya', 'Tanzania', 'Rwanda', 'Somalia', 'Djibouti'].map(country => (
            <span key={country} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{country}</span>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Domestic Network</h3>
        <p className="text-gray-600 mb-4">We maintain a powerful distribution network across India, ensuring reliable supply chains nationwide.</p>
        <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded border border-gray-100">
          Supported by trusted regional partners like <strong>Skydent Surgical Corporation</strong> in Gujarat.
        </p>
      </div>
    </div>

    <div className="bg-blue-600 text-white p-10 rounded-xl shadow-lg">
      <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
      <p className="mb-8 max-w-2xl mx-auto text-blue-100">
        We are actively expanding our global presence and seeking strategic distributors, dealers, and joint venture partners in key markets including Myanmar, Southeast Asia, Africa, and Saudi Arabia. We welcome discussions regarding technology transfers and facility inspections.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition">Inquire About Distribution</Link>
        <Link to="/contact" className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-bold hover:bg-white hover:text-blue-600 transition">Discuss Tech Transfer</Link>
      </div>
    </div>
  </div>
);

const Careers = () => (
  <div className="animate-fade-in max-w-4xl mx-auto px-4 py-16 text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Careers & Opportunities</h2>
    <p className="text-xl text-gray-600 mb-12">Join a rapidly growing leader in pharmaceutical and healthcare manufacturing.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
        <h3 className="text-2xl font-bold text-blue-800 mb-3">Join Our Team</h3>
        <p className="text-gray-600 mb-6">
          We are continuously looking for top talent. From Regulatory Affairs Officers for ROW markets to dynamic Sales and Medical Representatives, discover where you fit in.
        </p>
        <ul className="text-sm text-gray-500 space-y-2 mb-6 font-medium">
          <li>✓ Regulatory Affairs Officers (ROW)</li>
          <li>✓ Sales Representatives</li>
          <li>✓ Medical Representatives</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
        <h3 className="text-2xl font-bold text-blue-800 mb-3">Internship Programs</h3>
        <p className="text-gray-600 mb-6">
          Cultivating the next generation of healthcare industry leaders. We offer hands-on, intensive internship programs designed to build real-world skills.
        </p>
        <ul className="text-sm text-gray-500 space-y-2 mb-6 font-medium">
          <li>✓ Regulatory Affairs Internships</li>
          <li>✓ Sales & Marketing Internships</li>
        </ul>
      </div>
    </div>

    <Link to="/contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition shadow-lg">
      View Open Positions & Apply
    </Link>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', country: '', message: '' });
  
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from Sparcaine Website*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Country:* ${formData.country}%0A*Message:* ${formData.message}`;
    
    // REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER
    const whatsappNumber = "919876543210"; 
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Get in Touch</h2>
      <form onSubmit={handleWhatsAppSubmit} className="bg-white p-8 shadow-sm rounded-xl border border-gray-100 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input required type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="company" placeholder="Company Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />
          <input required type="text" name="country" placeholder="Country" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <textarea required name="message" rows="4" placeholder="Area of Interest / Your Message" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition flex justify-center items-center gap-2">
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
};

// --- APP ROUTER ---
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-800">
        <Navbar />
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/global-reach" element={<GlobalReach />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
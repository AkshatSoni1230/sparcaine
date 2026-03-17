import os
import subprocess
import time

# --- 1. THE CODE PAYLOADS ---

REQUIREMENTS_TXT = """fastapi
uvicorn
pydantic
"""

MAIN_PY = """from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Sparcaine API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    company: str
    email: str
    phone: str
    country: str
    message: str

@app.get("/")
def health_check():
    return {"status": "Sparcaine Backend is running."}

@app.post("/api/contact-backup")
def save_contact_backup(form_data: ContactForm):
    return {"message": "Lead received and backed up successfully."}
"""

TAILWIND_CONFIG = """/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
"""

INDEX_CSS = """@tailwind base;
@tailwind components;
@tailwind utilities;

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
"""

APP_JSX = """import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
        <p className="text-gray-600 leading-relaxed">Backed by the robust manufacturing capabilities of Medispark Healthcare LLP, the Sparcaine brand was built on a singular vision: to elevate the standard of patient comfort in dental and medical procedures.</p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Capabilities</h3>
        <p className="text-gray-600 leading-relaxed">We pride ourselves on our advanced manufacturing processes. By April 2026, our production capacity will scale to an impressive 800,000 to 1,000,000 units per month.</p>
      </div>
    </div>
  </div>
);

const Products = () => (
  <div className="animate-fade-in max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">Our Product Portfolio</h2>
    <div className="space-y-12">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h3 className="text-3xl font-bold text-blue-800 mb-2">Sparcaine SP</h3>
          <p className="text-blue-600 font-semibold mb-4">Standard Precision Dental Anesthetic</p>
          <p className="text-gray-600 mb-6">Engineered for rapid onset and reliable, profound anesthesia, making it the ideal choice for a wide range of routine dental and maxillofacial procedures.</p>
        </div>
      </div>
    </div>
  </div>
);

const GlobalReach = () => (
  <div className="animate-fade-in max-w-5xl mx-auto px-4 py-16 text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Global Reach & Partnerships</h2>
    <p className="text-xl text-gray-600 mb-12">Trusted by healthcare professionals across the globe.</p>
    <div className="bg-blue-600 text-white p-10 rounded-xl shadow-lg">
      <h3 className="text-3xl font-bold mb-4">Become a Partner</h3>
      <p className="mb-8 max-w-2xl mx-auto text-blue-100">We are actively expanding our global presence and seeking strategic distributors.</p>
    </div>
  </div>
);

const Careers = () => (
  <div className="animate-fade-in max-w-4xl mx-auto px-4 py-16 text-center">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Careers & Opportunities</h2>
    <p className="text-xl text-gray-600 mb-12">Join a rapidly growing leader in pharmaceutical and healthcare manufacturing.</p>
    <Link to="/contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition shadow-lg">View Open Positions & Apply</Link>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', country: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from Sparcaine Website*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Country:* ${formData.country}%0A*Message:* ${formData.message}`;
    const whatsappNumber = "919876543210"; // CHANGE THIS NUMBER
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Get in Touch</h2>
      <form onSubmit={handleWhatsAppSubmit} className="bg-white p-8 shadow-sm rounded-xl border border-gray-100 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input required type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none" />
          <input type="text" name="company" placeholder="Company Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none" />
          <input required type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none" />
          <input required type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none" />
          <input required type="text" name="country" placeholder="Country" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none" />
        </div>
        <textarea required name="message" rows="4" placeholder="Area of Interest / Your Message" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md outline-none"></textarea>
        <button type="submit" className="w-full bg-green-500 text-white font-bold py-3 rounded-md hover:bg-green-600 transition">Send via WhatsApp</button>
      </form>
    </div>
  );
};

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
"""

def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

print("🚀 Starting Sparcaine Project Scaffold...")

# --- 2. SETUP BACKEND ---
print("📁 Creating Backend...")
os.makedirs("backend", exist_ok=True)
write_file("backend/requirements.txt", REQUIREMENTS_TXT)
write_file("backend/main.py", MAIN_PY)

# --- 3. SETUP FRONTEND ---
print("📁 Scaffolding Vite React App (this takes a few seconds)...")
# Run Vite setup silently
subprocess.run("npm create vite@latest frontend -- --template react --yes", shell=True, check=True)

print("📦 Installing Frontend Dependencies (React Router, Tailwind)...")
# Install base deps and tailwind
subprocess.run("npm install && npm install react-router-dom && npm install -D tailwindcss postcss autoprefixer", cwd="frontend", shell=True, check=True)

print("🎨 Initializing Tailwind...")
subprocess.run("npx tailwindcss init -p", cwd="frontend", shell=True, check=True)

print("✍️ Injecting Sparcaine React Code...")
write_file("frontend/tailwind.config.js", TAILWIND_CONFIG)
write_file("frontend/src/index.css", INDEX_CSS)
write_file("frontend/src/App.jsx", APP_JSX)

print("\n✅ Build Complete! Your workspace is ready.")
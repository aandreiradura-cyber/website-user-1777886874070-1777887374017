import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you. Our team will contact you within 24 hours.');
    setTimeout(() => setFormStatus(''), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>TA Dentist | Premium Dental Care & Aesthetic Dentistry</title>
        <meta name="description" content="TA Dentist offers elite dental services with state-of-the-art technology and personalized care." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo" onClick={() => scrollToSection('home')}>
              <span className="logo-mark">TA</span>
              <span className="logo-text">DENTIST</span>
            </div>
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('team')}>Team</a></li>
              <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
              <li><a onClick={() => scrollToSection('contact')} className="cta-link">Book Now</a></li>
            </ul>
            <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-tag">Elite Dental Excellence</span>
            <h1>Crafting Confident <br /><em>Smiles</em></h1>
            <p>Where precision meets artistry. Experience dental care redefined through cutting-edge technology, distinguished expertise, and unparalleled personal attention.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>Schedule Consultation</button>
              <button className="btn-secondary" onClick={() => scrollToSection('services')}>Explore Services</button>
            </div>
            <div className="hero-stats">
              <div><strong>20+</strong><span>Years of Excellence</span></div>
              <div><strong>5,000+</strong><span>Smiles Restored</span></div>
              <div><strong>100%</strong><span>Patient Satisfaction</span></div>
            </div>
          </div>
        </section>

        {/* About / Presentation */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-grid">
              <div className="about-image">
                <div className="image-frame">
                  <div className="frame-accent"></div>
                </div>
              </div>
              <div className="about-content">
                <span className="section-label">About TA Dentist</span>
                <h2>A Sanctuary for <em>Refined</em> Dental Care</h2>
                <p className="lead">Founded on a philosophy of meticulous craftsmanship and patient-centered service, TA Dentist has emerged as a destination for those who expect more from their dental experience.</p>
                <p>Our practice unites artisanal precision with the latest advancements in dental science. Every consultation, every treatment, every moment is curated to deliver outcomes that transcend expectations. We invite you into an environment where comfort, confidence, and clinical excellence converge.</p>
                <div className="values">
                  <div className="value-item">
                    <div className="value-num">01</div>
                    <div>
                      <h4>Precision Craftsmanship</h4>
                      <p>Every procedure performed with surgical accuracy and aesthetic sensibility.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-num">02</div>
                    <div>
                      <h4>Advanced Technology</h4>
                      <p>State-of-the-art equipment for diagnostics, treatment, and lasting results.</p>
                    </div>
                  </div>
                  <div className="value-item">
                    <div className="value-num">03</div>
                    <div>
                      <h4>Personal Devotion</h4>
                      <p>A bespoke approach that honors each patient's unique journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Services</span>
              <h2>Distinguished <em>Treatments</em></h2>
              <p>A comprehensive suite of dental services delivered with mastery and care.</p>
            </div>
            <div className="services-grid">
              {[
                { title: 'Cosmetic Dentistry', desc: 'Transform your smile through veneers, contouring, and aesthetic refinement.' },
                { title: 'Dental Implants', desc: 'Permanent, natural-looking replacements crafted with surgical precision.' },
                { title: 'Teeth Whitening', desc: 'Professional brightening systems for a luminous, confident smile.' },
                { title: 'Orthodontics', desc: 'Discreet alignment solutions including Invisalign and clear aligners.' },
                { title: 'Restorative Care', desc: 'Crowns, bridges, and full-mouth reconstruction with artistic excellence.' },
                { title: 'Preventive Hygiene', desc: 'Comprehensive cleanings and examinations for lifelong oral health.' }
              ].map((service, i) => (
                <div key={i} className="service-card">
                  <div className="service-number">0{i + 1}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a onClick={() => scrollToSection('contact')} className="service-link">Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="team">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Our Practitioners</span>
              <h2>Distinguished <em>Specialists</em></h2>
            </div>
            <div className="team-grid">
              {[
                { name: 'Dr. Thomas Anderson', role: 'Founder & Lead Dentist', bio: 'Two decades of expertise in cosmetic and restorative dentistry.' },
                { name: 'Dr. Elena Voss', role: 'Orthodontic Specialist', bio: 'Renowned for transformative alignment work and Invisalign mastery.' },
                { name: 'Dr. Marcus Reid', role: 'Implant Surgeon', bio: 'Pioneering surgical techniques in dental implantology.' }
              ].map((member, i) => (
                <div key={i} className="team-card">
                  <div className="team-image"></div>
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Patient Voices</span>
              <h2>Words of <em>Trust</em></h2>
            </div>
            <div className="testimonials-grid">
              {[
                { quote: 'An extraordinary experience from consultation to completion. The artistry and care are unmatched.', author: 'Catherine M.', detail: 'Cosmetic Patient' },
                { quote: 'TA Dentist transformed not just my smile, but my confidence. Truly elite service.', author: 'Jonathan W.', detail: 'Implant Patient' },
                { quote: 'Refined, professional, and remarkably skilled. I would recommend without hesitation.', author: 'Isabella R.', detail: 'Orthodontic Patient' }
              ].map((t, i) => (
                <div key={i} className="testimonial-card">
                  <div className="quote-mark">"</div>
                  <p>{t.quote}</p>
                  <div className="testimonial-author">
                    <strong>{t.author}</strong>
                    <span>{t.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="section-label">Get In Touch</span>
                <h2>Begin Your <em>Journey</em></h2>
                <p>Schedule your private consultation today. Our concierge team will respond within one business day to arrange your visit.</p>
                <div className="info-blocks">
                  <div className="info-block">
                    <h4>Visit Us</h4>
                    <p>1240 Madison Avenue<br />Suite 800<br />New York, NY 10128</p>
                  </div>
                  <div className="info-block">
                    <h4>Contact</h4>
                    <p>(212) 555-0142<br />concierge@tadentist.com</p>
                  </div>
                  <div className="info-block">
                    <h4>Hours</h4>
                    <p>Monday – Friday: 8AM – 7PM<br />Saturday: 9AM – 4PM<br />Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Request a Consultation</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Service of Interest</label>
                      <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select a service</option>
                        <option>Cosmetic Dentistry</option>
                        <option>Dental Implants</option>
                        <option>Teeth Whitening</option>
                        <option>Orthodontics</option>
                        <option>Restorative Care</option>
                        <option>Preventive Hygiene</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn-primary full">Submit Request</button>
                  {formStatus && <p className="form-status">{formStatus}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="logo">
                  <span className="logo-mark">TA</span>
                  <span className="logo-text">DENTIST</span>
                </div>
                <p>Elite dental care, refined for the discerning.</p>
              </div>
              <div>
                <h5>Practice</h5>
                <ul>
                  <li><a onClick={() => scrollToSection('about')}>About</a></li>
                  <li><a onClick={() => scrollToSection('team')}>Team</a></li>
                  <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                </ul>
              </div>
              <div>
                <h5>Visit</h5>
                <ul>
                  <li>1240 Madison Avenue</li>
                  <li>New York, NY 10128</li>
                  <li>(212) 555-0142</li>
                </ul>
              </div>
              <div>
                <h5>Hours</h5>
                <ul>
                  <li>Mon – Fri: 8AM – 7PM</li>
                  <li>Sat: 9AM – 4PM</li>
                  <li>Sun: Appointment</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} TA Dentist. All rights reserved.</p>
              <p>Crafted with precision.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: 'Inter', -apple-system, sans-serif;
          color: #1a1a1a;
          background: #fafaf7;
          line-height: 1.6;
        }
        :global(*) { box-sizing: border-box; }

        .page { overflow-x: hidden; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        h1, h2, h3, h4, h5 {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin: 0;
        }
        em { font-style: italic; color: #b8956a; font-family: 'Playfair Display', serif; }

        /* Navbar */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          background: rgba(250, 250, 247, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          z-index: 1000;
          padding: 20px 0;
        }
        .nav-container {
          max-width: 1280px; margin: 0 auto; padding: 0 32px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .logo {
          display: flex; align-items: center; gap: 10px; cursor: pointer;
        }
        .logo-mark {
          font-family: 'Playfair Display', serif;
          font-size: 28px; font-weight: 700; color: #b8956a;
          border: 2px solid #b8956a; padding: 4px 10px;
        }
        .logo-text {
          font-size: 14px; letter-spacing: 0.3em; font-weight: 500;
        }
        .nav-links {
          display: flex; gap: 36px; list-style: none; margin: 0; padding: 0;
        }
        .nav-links a {
          font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase;
          cursor: pointer; color: #1a1a1a; font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover { color: #b8956a; }
        .cta-link {
          background: #1a1a1a; color: #fafaf7 !important;
          padding: 10px 22px; border-radius: 2px;
        }
        .cta-link:hover { background: #b8956a; color: #fff !important; }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer;
        }
        .hamburger span { width: 24px; height: 2px; background: #1a1a1a; }

        /* Hero */
        .hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          color: #fafaf7;
          padding: 140px 32px 80px;
          overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; top: 0; right: 0; width: 50%; height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(184, 149, 106, 0.08) 100%);
        }
        .hero::after {
          content: ''; position: absolute; right: -200px; top: 50%; transform: translateY(-50%);
          width: 600px; height: 600px; border: 1px solid rgba(184, 149, 106, 0.15);
          border-radius: 50%;
        }
        .hero-content {
          max-width: 1280px; margin: 0 auto; width: 100%;
          position: relative; z-index: 2;
        }
        .hero-tag {
          display: inline-block; font-size: 12px; letter-spacing: 0.3em;
          text-transform: uppercase; color: #b8956a;
          padding-bottom: 8px; border-bottom: 1px solid #b8956a;
          margin-bottom: 32px;
        }
        .hero h1 {
          font-size: clamp(48px, 8vw, 96px); line-height: 1.05;
          margin-bottom: 28px;
        }
        .hero p {
          font-size: 18px; max-width: 580px; margin-bottom: 44px;
          color: rgba(250, 250, 247, 0.75);
        }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 80px; }
        .btn-primary {
          background: #b8956a; color: #fff; border: none;
          padding: 18px 36px; font-size: 13px; letter-spacing: 0.2em;
          text-transform: uppercase; cursor: pointer; font-weight: 500;
          transition: all 0.3s; font-family: inherit;
        }
        .btn-primary:hover { background: #a07f54; transform: translateY(-2px); }
        .btn-primary.full { width: 100%; padding: 20px; }
        .btn-secondary {
          background: transparent; color: #fafaf7;
          border: 1px solid rgba(250,250,247,0.3);
          padding: 18px 36px; font-size: 13px; letter-spacing: 0.2em;
          text-transform: uppercase; cursor: pointer; font-weight: 500;
          transition: all 0.3s; font-family: inherit;
        }
        .btn-secondary:hover { border-color: #b8956a; color: #b8956a; }
        .hero-stats {
          display: flex; gap: 64px; flex-wrap: wrap;
          padding-top: 48px; border-top: 1px solid rgba(250,250,247,0.1);
        }
        .hero-stats div { display: flex; flex-direction: column; gap: 6px; }
        .hero-stats strong {
          font-family: 'Playfair Display', serif;
          font-size: 40px; font-weight: 400; color: #b8956a;
        }
        .hero-stats span {
          font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(250,250,247,0.6);
        }

        /* Sections */
        section { padding: 120px 0; }
        .section-label {
          display: inline-block; font-size: 12px; letter-spacing: 0.3em;
          text-transform: uppercase; color: #b8956a;
          margin-bottom: 20px; font-weight: 500;
        }
        .section-header { text-align: center; max-width: 720px; margin: 0 auto 80px; }
        .section-header h2 {
          font-size: clamp(36px, 5vw, 56px); margin-bottom: 20px;
        }
        .section-header p { font-size: 18px; color: #555; }

        /* About */
        .section-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .about-image {
          aspect-ratio: 4/5; position: relative;
        }
        .image-frame {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #d4c4a8 0%, #b8956a 100%);
          position: relative;
        }
        .frame-accent {
          position: absolute; top: 24px; left: 24px;
          right: -24px; bottom: -24px;
          border: 1px solid #b8956a; z-index: -1;
        }
        .about-content h2 {
          font-size: clamp(36px, 4vw, 52px); margin-bottom: 24px;
        }
        .lead { font-size: 19px; color: #333; margin-bottom: 20px; }
        .about-content p { color: #555; }
        .values { margin-top: 40px; display: flex; flex-direction: column; gap: 24px; }
        .value-item { display: flex; gap: 20px; align-items: flex-start; }
        .value-num {
          font-family: 'Playfair Display', serif;
          font-size: 24px; color: #b8956a;
          min-width: 40px; padding-top: 4px;
        }
        .value-item h4 { font-size: 20px; margin-bottom: 6px; }
        .value-item p { font-size: 15px; margin: 0; }

        /* Services */
        .services { background: #fff; }
        .services-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
          background: #eee;
        }
        .service-card {
          background: #fff; padding: 56px 40px;
          transition: all 0.4s; cursor: pointer;
          position: relative;
        }
        .service-card:hover {
          background: #1a1a1a; color: #fafaf7;
        }
        .service-card:hover .service-number { color: #b8956a; }
        .service-card:hover .service-link { color: #b8956a; }
        .service-number {
          font-family: 'Playfair Display', serif;
          font-size: 14px; color: #b8956a; letter-spacing: 0.2em;
          margin-bottom: 28px; transition: color 0.4s;
        }
        .service-card h3 {
          font-size: 26px; margin-bottom: 16px;
        }
        .service-card p { margin-bottom: 28px; }
        .service-link {
          font-size: 12px; letter-spacing: 0.2em;
          text-transform: uppercase; cursor: pointer;
          color: #1a1a1a; font-weight: 600;
          border-bottom: 1px solid currentColor;
          padding-bottom: 4px; transition: color 0.4s;
        }

        /* Team */
        .team { background: #fafaf7; }
        .team-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;
        }
        .team-card { text-align: center; }
        .team-image {
          aspect-ratio: 1; background: linear-gradient(135deg, #d4c4a8 0%, #8a6d4d 100%);
          margin-bottom: 28px;
        }
        .team-card h3 { font-size: 26px; margin-bottom: 6px; }
        .team-card .role {
          font-size: 12px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #b8956a;
          display: block; margin-bottom: 16px;
        }

        /* Testimonials */
        .testimonials {
          background: #1a1a1a; color: #fafaf7;
        }
        .testimonials .section-header p { color: rgba(250,250,247,0.7); }
        .testimonials-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;
        }
        .testimonial-card {
          padding: 48px 36px;
          border: 1px solid rgba(184, 149, 106, 0.3);
          position: relative;
        }
        .quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 80px; color: #b8956a; line-height: 1;
          margin-bottom: 16px;
        }
        .testimonial-card p {
          font-size: 17px; line-height: 1.7;
          color: rgba(250,250,247,0.85);
          margin-bottom: 32px;
        }
        .testimonial-author { display: flex; flex-direction: column; gap: 4px; }
        .testimonial-author strong {
          font-family: 'Playfair Display', serif;
          font-size: 18px; font-weight: 400;
        }
        .testimonial-author span {
          font-size: 12px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #b8956a;
        }

        /* Contact */
        .contact { background: #fafaf7; }
        .contact-grid {
          display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px;
        }
        .contact-info h2 {
          font-size: clamp(36px, 4vw, 52px); margin-bottom: 24px;
        }
        .contact-info > p { color: #555; margin-bottom: 48px; font-size: 17px; }
        .info-blocks { display: flex; flex-direction: column; gap: 32px; }
        .info-block h4 {
          font-size: 13px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #b8956a;
          margin-bottom: 12px; font-family: 'Inter', sans-serif;
          font-weight: 600;
        }
        .info-block p { margin: 0; color: #1a1a1a; }
        .contact-form-wrapper {
          background: #fff; padding: 56px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
        }
        .contact-form h3 {
          font-size: 32px; margin-bottom: 32px;
        }
        .form-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
        }
        .form-group {
          margin-bottom: 24px;
          display: flex; flex-direction: column;
        }
        .form-group label {
          font-size: 12px; letter-spacing: 0.15em;
          text-transform: uppercase; color: #1a1a1a;
          margin-bottom: 10px; font-weight: 500;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 0; border: none;
          border-bottom: 1px solid #ddd;
          font-family: inherit; font-size: 15px;
          background: transparent; outline: none;
          transition: border-color 0.3s;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-bottom-color: #b8956a;
        }
        .form-group textarea { resize: vertical; }
        .form-status {
          margin-top: 20px; padding: 14px;
          background: #f5efe6; color: #8a6d4d;
          font-size: 14px; text-align: center;
          border-left: 3px solid #b8956a;
        }

        /* Footer */
        .footer {
          background: #1a1a1a; color: rgba(250,250,247,0.7);
          padding: 80px 0 32px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px; padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer .logo-text { color: #fafaf7; }
        .footer p { color: rgba(250,250,247,0.6); margin-top: 16px; }
        .footer h5 {
          color: #fafaf7; font-family: 'Inter', sans-serif;
          font-size: 13px; letter-spacing: 0.2em;
          text-transform: uppercase; margin-bottom: 20px;
          font-weight: 600;
        }
        .footer ul { list-style: none; padding: 0; margin: 0; }
        .footer ul li { margin-bottom: 10px; font-size: 14px; }
        .footer ul li a { cursor: pointer; color: inherit; transition: color 0.3s; }
        .footer ul li a:hover { color: #b8956a; }
        .footer-bottom {
          padding-top: 32px;
          display: flex; justify-content: space-between;
          font-size: 13px; flex-wrap: wrap; gap: 12px;
        }

        @media (max-width: 968px) {
          .nav-links {
            position: absolute; top: 100%; left: 0; right: 0;
            background: #fafaf7; flex-direction: column;
            padding: 32px; gap: 24px;
            transform: translateY(-200%); transition: transform 0.3s;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }
          .nav-links.open { transform: translateY(0); }
          .hamburger { display: flex; }
          .section-grid, .contact-grid {
            grid-template-columns: 1fr; gap: 48px;
          }
          .services-grid, .team-grid, .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form-wrapper { padding: 32px; }
          .hero-stats { gap: 32px; }
          .hero-stats strong { font-size: 32px; }
          section { padding: 80px 0; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
          .container { padding: 0 20px; }
          .nav-container { padding: 0 20px; }
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>
    </>
  );
}
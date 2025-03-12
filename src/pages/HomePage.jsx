import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import BrevoForm from "../components/BrevoForm";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address" });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      console.log('Submitting email:', email);
      
      // Simulate a successful submission
      setTimeout(() => {
        setStatus({ type: "success", message: "Thank you for joining our waitlist!" });
        setEmail("");
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus({ type: "", message: "" });
        }, 2000);
      }, 1000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">
          <img 
            src={scrolled ? "/images/TrueTide (3) (1).png" : "/images/TrueTide (3) (1)(1).png"} 
            alt="TrueTide Logo" 
            className="logo-image" 
          />
          <span className={`logo-text ${scrolled ? "logo-text-scrolled" : ""}`}>
            TrueTide
          </span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
          <a href="#faq">FAQ</a>
          <div className="nav-buttons">
            <Link to="#" onClick={handleSignUpClick} className="nav-btn login-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
          <BrevoForm />
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-background">
          <div className="bg-shape-top"></div>
          
          {/* Wave animation */}
          <div className="wave-container">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>

        <section className="hero-section">
          <div className="hero-content">
            <h1>Stay Accountable, Achieve More</h1>
            <p>
            Empowering high achievers to ignite innovation and accelerate breakthrough growth.
            </p>
            <div className="hero-buttons">
              <Link to="#" onClick={handleSignUpClick} className="primary-btn">
                Join Beta
              </Link>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="dashboard-images">
              <img
                src="/images/Mainsoftware.png"
                alt="Dashboard Preview"
                className="left-image"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Partners/Integrations Section */}
      <section className="partners-section">
        <div className="partners-container">
          <h3 className="partners-title">Powered by Industry-Leading APIs</h3>
          <div className="partners-logos">
            <div className="logo-slider">
              <div className="logo-slide">
                {/* First set of logos */}
                <img src="/images/google-logo.png" alt="Google API" className="partner-logo" />
                <img src="/images/outlook-logo.png" alt="Outlook API" className="partner-logo" />
                <img src="/images/openai-logo.png" alt="OpenAI" className="partner-logo" />
                {/* Duplicate set for infinite scrolling */}
                <img src="/images/google-logo.png" alt="Google API" className="partner-logo" />
                <img src="/images/outlook-logo.png" alt="Outlook API" className="partner-logo" />
                <img src="/images/openai-logo.png" alt="OpenAI" className="partner-logo" />
                {/* Third set to ensure smooth looping */}
                <img src="/images/google-logo.png" alt="Google API" className="partner-logo" />
                <img src="/images/outlook-logo.png" alt="Outlook API" className="partner-logo" />
                <img src="/images/openai-logo.png" alt="OpenAI" className="partner-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-container">
        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-container">
            <h2 className="section-title">About TrueTide</h2>
            <div className="section-content">
              <div className="about-text">
                <p>
                  TrueTide is a powerful platform designed to help individuals
                  and teams stay accountable and achieve their goals. Our
                  mission is to provide the tools and support needed to turn
                  ambitions into accomplishments.
                </p>
                <p>
                  Founded in 2023, we've already helped thousands of users track
                  their progress, build better habits, and reach their full
                  potential through our innovative accountability features.
                </p>
              </div>
              <div className="about-image">
                <div className="image-placeholder"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section features-section">
          <div className="section-container">
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    <rect x="2" y="20" width="4" height="0"></rect>
                    <rect x="8" y="20" width="4" height="0"></rect>
                    <rect x="14" y="20" width="4" height="0"></rect>
                  </svg>
                </div>
                <h3>Progress Tracking</h3>
                <p>
                  Visualize your journey with intuitive charts and metrics that
                  show your improvement over time.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Accountability Partners</h3>
                <p>
                  Connect with friends, colleagues, or mentors who can help keep
                  you on track toward your goals.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3>Smart Reminders</h3>
                <p>
                  Never miss an important task with customizable notifications
                  that adapt to your schedule.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <h3>Cross-Platform</h3>
                <p>
                  Access your dashboard from any device with our web, iOS, and
                  Android applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section pricing-section">
          <div className="section-container">
            <h2 className="section-title">Pricing Plans</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Free</h3>
                  <div className="price">
                    $0<span>/month</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  <li>Basic goal tracking</li>
                  <li>Up to 3 active goals</li>
                  <li>Weekly progress reports</li>
                  <li>Community support</li>
                </ul>
                <Link to="#" onClick={handleSignUpClick} className="pricing-btn">
                  Join Waitlist
                </Link>
              </div>
              <div className="pricing-card featured">
                <div className="pricing-header">
                  <h3>Pro</h3>
                  <div className="price">
                    $9.99<span>/month</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  <li>Unlimited goal tracking</li>
                  <li>5 accountability partners</li>
                  <li>Advanced analytics</li>
                  <li>Priority support</li>
                  <li>Custom reminders</li>
                </ul>
                <Link to="#" onClick={handleSignUpClick} className="pricing-btn primary">
                  Join Waitlist
                </Link>
              </div>
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3>Team</h3>
                  <div className="price">
                    $29.99<span>/month</span>
                  </div>
                </div>
                <ul className="pricing-features">
                  <li>Everything in Pro</li>
                  <li>Up to 10 team members</li>
                  <li>Team dashboards</li>
                  <li>Goal collaboration</li>
                  <li>Admin controls</li>
                </ul>
                <Link to="#" onClick={handleSignUpClick} className="pricing-btn">
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="section demo-section">
          <div className="section-container">
            <h2 className="section-title">See TrueTide in Action</h2>
            <div className="demo-content">
              <div className="demo-video">
                <div className="video-placeholder">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="demo-text">
                <h3>Watch how TrueTide works</h3>
                <p>
                  Our quick demo shows you how to set up goals, connect with
                  accountability partners, and track your progress effectively.
                </p>
                <Link to="#" onClick={handleSignUpClick} className="primary-btn">
                  Sign Up Free
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section faq-section">
          <div className="section-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-container">
              <div className="faq-column">
                {[
                  {
                    question: "What is TrueTide?",
                    answer: "TrueTide is an accountability platform designed to help high achievers track their goals, build better habits, and achieve breakthrough growth through innovative accountability features and progress tracking."
                  },
                  {
                    question: "How does the accountability partner system work?",
                    answer: "Our accountability partner system allows you to connect with friends, colleagues, or mentors who can view your progress, provide feedback, and help keep you on track. You can set permissions for what they can see and how they can interact with your goals."
                  },
                  {
                    question: "When will TrueTide officially launch?",
                    answer: "We're currently in beta testing and plan to launch officially in the coming months. Join our waitlist to be among the first to access TrueTide when it launches and receive exclusive early-bird offers."
                  }
                ].map((faq, index) => (
                  <div 
                    className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`} 
                    key={index}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <div className="faq-icon">
                        <span className="plus-icon"></span>
                      </div>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="faq-column">
                {[
                  {
                    question: "Can I use TrueTide for my team or organization?",
                    answer: "Absolutely! Our Team plan is specifically designed for teams and organizations. It includes features like team dashboards, goal collaboration, and admin controls to help your entire team stay accountable and achieve more together."
                  },
                  {
                    question: "Is my data secure with TrueTide?",
                    answer: "Yes, we take data security very seriously. TrueTide uses industry-standard encryption and security practices to ensure your personal information and goal data remain private and secure at all times."
                  },
                  {
                    question: "How do I join the beta program?",
                    answer: "To join our beta program, simply click the \"Join Beta\" button at the top of the page or any of the \"Join Waitlist\" buttons throughout the site. Enter your email address, and we'll notify you when you're granted access."
                  }
                ].map((faq, index) => (
                  <div 
                    className={`faq-item ${expandedFaq === index + 3 ? 'expanded' : ''}`} 
                    key={index + 3}
                    onClick={() => toggleFaq(index + 3)}
                  >
                    <div className="faq-question">
                      <h3>{faq.question}</h3>
                      <div className="faq-icon">
                        <span className="plus-icon"></span>
                      </div>
                    </div>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img 
                src="/images/TrueTide (3) (1).png" 
                alt="TrueTide Logo" 
                className="footer-logo-image" 
              />
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#demo">Demo</a>
                <a href="#faq">FAQ</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="https://discord.gg/2DAx7KF6b9" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 TrueTide. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
} 
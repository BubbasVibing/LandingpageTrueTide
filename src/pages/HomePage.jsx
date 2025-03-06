import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address" });
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful signup
      setStatus({ type: "success", message: "Thank you for joining our waitlist!" });
      setEmail("");
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus({ type: "", message: "" });
      }, 2000);
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo">
          <span className={`logo-text ${scrolled ? "logo-text-scrolled" : ""}`}>
            TrueTide
          </span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#demo">Demo</a>
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
          <div className="modal-header">
            <h2>Join Our Waitlist</h2>
            <p>Be the first to know when we launch and get early access to TrueTide.</p>
          </div>
          <form onSubmit={handleSubmit} className="waitlist-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Join Waitlist</button>
            {status.message && (
              <div className={`form-${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="hero-wrapper">
        <div className="hero-background">
          <div className="bg-shape-top"></div>
          <div className="bg-shape-bottom"></div>
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
                <div className="feature-icon">📊</div>
                <h3>Progress Tracking</h3>
                <p>
                  Visualize your journey with intuitive charts and metrics that
                  show your improvement over time.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h3>Accountability Partners</h3>
                <p>
                  Connect with friends, colleagues, or mentors who can help keep
                  you on track toward your goals.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔔</div>
                <h3>Smart Reminders</h3>
                <p>
                  Never miss an important task with customizable notifications
                  that adapt to your schedule.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📱</div>
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

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <span className="logo-text">TrueTide</span>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#demo">Demo</a>
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
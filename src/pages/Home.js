import React from 'react';
import { Link } from 'react-router-dom';
// import { FaExclamationCircle, FaMap } from 'react-icons/fa';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-light text-center">
        <div className="container text-white py-5">
          <h1 className="display-4 fw-bold mb-3">Women Safety Platform</h1>
          <p className="lead fw-bold mb-4">
            Empowering women through data-driven safety solutions in Chhattisgarh
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/report" className="btn btn-primary d-flex align-items-center gap-2 me-4 mb-2">
              <i className="fas fa-exclamation-circle"></i> Report Incident
            </Link>
            <Link to="/dashboard" className="btn btn-secondary d-flex align-items-center gap-2 mb-2">
              <i className="fas fa-map"></i> View Safety Map
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Our Safety Features</h2>
          <p className="text-muted">Comprehensive tools designed for your protection</p>
          <div className="row g-4 mt-4">
            {[
              {
                icon: "fas fa-bell fa-3x",
                title: "Emergency Alerts",
                desc: "Instant notifications to authorities and trusted contacts with your location when you're in danger.",
              },
              {
                icon: "fas fa-map-marked-alt fa-3x",
                title: "Safety Zones",
                desc: "Real-time mapping of safe areas and high-risk zones across Chhattisgarh based on community reports.",
              },
              {
                icon: "fas fa-users fa-3x",
                title: "Community Network",
                desc: "Connect with other women in your area to share safety tips and travel together.",
              },
            ].map((f, i) => (
              <div key={i} className="col-md-4">
                <div className="text-center p-4">
                  <div className="feature-icon mb-3">
                    <i className={f.icon}></i>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Safety in Numbers</h2>
          <p className="text-muted">Understanding the landscape of women's safety in our state</p>
          <div className="row g-4 mt-4">
            {[
              { stat: "1,200+", desc: "Incidents reported monthly" },
              { stat: "85%", desc: "Response rate by authorities" },
              { stat: "42", desc: "Safe zones identified" },
              { stat: "10,000+", desc: "Active users protected" },
            ].map((s, i) => (
              <div key={i} className="col-md-3">
                <div className="stats-card bg-white p-4 text-center shadow-sm rounded">
                  <h3 className="text-primary">{s.stat}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Map Preview */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">Interactive Safety Map</h2>
              <p>
                Our real-time safety map shows reported incidents, safe routes, and nearby help centers across Chhattisgarh...
              </p>
              <Link to="/dashboard" className="btn btn-primary mt-3">
                Explore the Map
              </Link>
            </div>
            <div className="col-md-6">
              <div className="map-container p-3 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1350&q=80"
                  alt="Safety Map Preview"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Safety Tips & Resources</h2>
          <div className="row g-4">
            {[
              {
                icon: "fas fa-walking",
                title: "Travel Safety",
                tips: [
                  "Share your live location with trusted contacts",
                  "Avoid isolated routes after dark",
                  "Use verified public transportation",
                  "Trust your instincts",
                ],
              },
              {
                icon: "fas fa-mobile-alt",
                title: "Digital Safety",
                tips: [
                  "Keep emergency contacts easily accessible",
                  "Use our panic button feature",
                  "Be cautious sharing location",
                  "Check safety alerts",
                ],
              },
              {
                icon: "fas fa-first-aid",
                title: "Emergency Preparedness",
                tips: [
                  "Memorize important phone numbers",
                  "Know the nearest police stations",
                  "Attend self-defense workshops",
                  "Report suspicious activity",
                ],
              },
            ].map((tip, i) => (
              <div key={i} className="col-md-4">
                <div className="safety-tips p-4 h-100">
                  <h4>
                    <i className={`${tip.icon} me-2`}></i> {tip.title}
                  </h4>
                  <ul className="mt-3 text-start">
                    {tip.tips.map((t, j) => (
                      <li key={j} className="mb-2">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Community Voices</h2>
          <div className="row g-4">
            {[
              {
                quote: "The safety map helped me avoid a high-risk area in Raipur...",
                name: "Priya Sharma",
                role: "College Student, Raipur",
                img: "/images/img1.jpg",
              },
              {
                quote: "The emergency alert connected me directly to police...",
                name: "Anjali Patel",
                role: "Working Professional, Bilaspur",
                img: "/images/img2.jpeg",
              },
              {
                quote: "The community feature helped me find women to travel with...",
                name: "Meena Yadav",
                role: "Nurse, Durg",
                img: "/images/img3.jpeg",
              },
            ].map((t, i) => (
              <div key={i} className="col-md-4">
                <div className="testimonial-card p-4 bg-white shadow-sm h-100">
                  <p>"{t.quote}"</p>
                  <div className="d-flex align-items-center mt-3">
                    <img src={t.img} alt={t.name} className="rounded-circle me-3" width="50" />
                    <div>
                      <h6 className="mb-0">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Join Our Safety Network Today</h2>
          <p className="lead mb-4">Together, we can make Chhattisgarh safer for all women</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/register" className="btn btn-light btn-lg px-4">
              Register Now
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg px-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

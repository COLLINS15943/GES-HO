import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Ghana Education Service</h1>
          <h2>Ho Municipal Directorate</h2>
          <p>Empowering educators, enriching communities, and building a brighter future through quality education in the Ho Municipality.</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stat-item">
          <h3>3000</h3>
          <p>Teachers</p>
        </div>
        <div className="stat-item">
          <h3>125</h3>
          <p>Schools</p>
        </div>
        <div className="stat-item">
          <h3>25,000+</h3>
          <p>Students</p>
        </div>
        <div className="stat-item">
          <h3>50+</h3>
          <p>Programs</p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <p className="services-subtitle">Comprehensive support and resources for educational excellence in Ho Municipality</p>
        
        <div className="services-grid">
          <div className="service-card teacher-support">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
            </div>
            <h3>Teacher Support</h3>
            <p>Comprehensive support system for professional development and career advancement.</p>
          </div>
          
          <div className="service-card educational-resources">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 7v14"/>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
              </svg>
            </div>
            <h3>Educational Resources</h3>
            <p>Access to curriculum materials, teaching aids, and educational guidelines.</p>
          </div>
          
          <div className="service-card training-programs">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/>
                <circle cx="12" cy="8" r="6"/>
              </svg>
            </div>
            <h3>Training Programs</h3>
            <p>Regular workshops and training sessions to enhance teaching capabilities.</p>
          </div>
          
          <div className="service-card announcements">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
              </svg>
            </div>
            <h3>Announcements</h3>
            <p>Stay updated with the latest news and official communications.</p>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="quick-access">
        <h2>Quick Access</h2>
        <p className="quick-access-subtitle">Access important information and services with just one click</p>
        
        <div className="quick-access-grid">
          <div className="access-card">
            <div className="access-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <h3>Latest Announcements</h3>
            </div>
            <p>Stay informed with the latest news, circulars, and official communications.</p>
            <button className="access-btn">View Announcements</button>
          </div>
          
          <div className="access-card">
            <div className="access-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 7v14"/>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
              </svg>
              <h3>Educational Resources</h3>
            </div>
            <p>Access curriculum guides, teaching materials, and educational documents.</p>
            <button className="access-btn">Browse Resources</button>
          </div>
          
          <div className="access-card">
            <div className="access-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <h3>Teacher Services</h3>
            </div>
            <p>Apply for upgrades, training programs, and access professional development tools.</p>
            <button className="access-btn">Access Portal</button>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="join-community">
        <h2>Join Our Educational Community</h2>
        <p>Be part of our mission to transform education in Ho Municipality. Together, we can build a brighter future for our children.</p>
        <button className="btn-join">Get In Touch</button>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Stay Informed with the Latest Updates</h2>
        <p>Subscribe to receive official news, announcements, and educational resources from the Ho Municipal Directorate.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </section>
    </div>
  );
}

export default Home;

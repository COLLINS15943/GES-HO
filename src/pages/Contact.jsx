import { CONTACT_INFO, DEPARTMENTS, PORTAL_FEATURES } from '../constants';
import './Contact.css';

function Contact() {
  // Helper function to render portal feature icons
  const renderPortalIcon = (id) => {
    const icons = {
      streamlined: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
      resources: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>,
      development: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
    };
    return icons[id] || null;
  };


  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help you answer any questions you might have</p>
      </section>

      {/* Get in Touch Section */}
      <section className="get-in-touch">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">Multiple ways to reach us for your convenience</p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <div className="method-icon location">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Office Address</h3>
            <p>{CONTACT_INFO.address.line1}<br/>{CONTACT_INFO.address.line2}<br/>{CONTACT_INFO.address.line3}</p>
          </div>
          
          <div className="contact-method">
            <div className="method-icon phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3>Phone Numbers</h3>
            <p>{CONTACT_INFO.phone}</p>
          </div>
          
          <div className="contact-method">
            <div className="method-icon email">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3>Email Addresses</h3>
            <p>{CONTACT_INFO.emails.primary}<br/>{CONTACT_INFO.emails.director}</p>
          </div>
          
          <div className="contact-method">
            <div className="method-icon hours">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3>Office Hours</h3>
            <p>{CONTACT_INFO.hours}</p>
          </div>
        </div>
      </section>

      {/* Why Use Teacher Portal Section */}
      <section className="teacher-portal-section">
        <div className="portal-container">
          <div className="portal-content">
            <h2>Why Use Our Teacher Portal?</h2>
            
            {PORTAL_FEATURES.map((feature) => (
              <div key={feature.id} className="portal-feature">
                <div className="feature-icon-wrapper">
                  <div className={`feature-icon-circle ${feature.color}`}>
                    {renderPortalIcon(feature.id)}
                  </div>
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="portal-image">
            <img src="/images/Teachers-with-cert.png" alt="Teacher Portal" />
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="department-contacts">
        <h2>Department Contacts</h2>
        <p className="section-subtitle">Connect directly with specific departments for specialized assistance</p>
        
        <div className="departments-grid">
          {DEPARTMENTS.map((dept, index) => (
            <div key={index} className="department-card">
              <h3>{dept.name}</h3>
              <p className="dept-head">Head: {dept.head}</p>
              <p className="dept-info">Email: <a href={`mailto:${dept.email}`}>{dept.email}</a></p>
              <p className="dept-info">Phone: {dept.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;

import { useState } from 'react';
import { MISSION, VISION, CORE_VALUES, MANAGEMENT_TEAM, ACHIEVEMENTS } from '../constants';
import './About.css';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Listen for window resize
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create slides based on screen size
  const teamSlides = isMobile 
    ? MANAGEMENT_TEAM.map(member => [member]) // One card per slide on mobile
    : [MANAGEMENT_TEAM]; // All cards in one slide on desktop

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Helper function to render value icons
  const renderValueIcon = (id) => {
    const icons = {
      excellence: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
      integrity: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
      collaboration: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      innovation: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
    };
    return icons[id] || null;
  };

  // Helper function to render achievement icons
  const renderAchievementIcon = (id) => {
    const icons = {
      'digital-transformation': <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>,
      'teacher-development': <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      'resource-innovation': <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    };
    return icons[id] || null;
  };

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our Directorate</h1>
        <p>Dedicated to educational excellence and teacher empowerment in Ho Municipality</p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="icon-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
              <h2>Our Mission</h2>
            </div>
            <p>{MISSION}</p>
          </div>

          <div className="vision-card">
            <div className="icon-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <h2>Our Vision</h2>
            </div>
            <p>{VISION}</p>
          </div>

          <div className="building-image">
            <img src="/images/Municipal-build.png" alt="GES Municipal Building" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <p className="section-subtitle">The principles that guide our work and commitment to educational excellence</p>
        
        <div className="values-grid">
          {CORE_VALUES.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-icon">
                {renderValueIcon(value.id)}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Management Team Section */}
      <section className="management-team">
        <h2>Our Management Team</h2>
        <p className="section-subtitle">Experienced leaders committed to educational transformation</p>
        
        <div className="team-carousel-container">
          <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="Previous">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div 
            className="team-carousel-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="team-slides" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="team-slide">
                  {slide.map((member) => (
                    <div key={member.id} className="team-card">
                      <div className="team-photo">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                      <p className="team-description">{member.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="Next">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        {/* Slide Indicators for Mobile */}
        {isMobile && teamSlides.length > 1 && (
          <div className="carousel-indicators">
            {teamSlides.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Journey & Achievements Section */}
      <section className="journey-achievements">
        <div className="journey-container">
          <div className="journey-content">
            <h2>Our journey & Our achievements</h2>
            
            {ACHIEVEMENTS.map((achievement) => (
              <div key={achievement.id} className="achievement-item">
                <div className="achievement-icon">
                  {renderAchievementIcon(achievement.id)}
                </div>
                <div className="achievement-text">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <img 
            src="/images/Teachers-with-cert.png" 
            alt="Teachers with certificates"
            className="journey-photo"
          />
        </div>
      </section>
    </div>
  );
}

export default About;

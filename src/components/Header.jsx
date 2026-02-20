import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);
  
  const handleSamePageClick = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      <header className={`header ${!mobileMenuOpen ? 'transparent' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo" onClick={(e) => handleSamePageClick(e, '/')}>
            <img src="/logos/GES-LOGO.png" alt="Ghana Education Service - Ho Municipal Directorate" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="nav">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/')}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/about')}>About</Link>
            <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/blog')}>Blog</Link>
            <Link to="/resources" className={`nav-link ${location.pathname === '/resources' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/resources')}>Resources</Link>
            <Link to="/media" className={`nav-link ${location.pathname === '/media' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/media')}>Media</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/contact')}>Contact</Link>
          </nav>

          <button className="teacher-login" onClick={(e) => e.preventDefault()}>Teacher Login</button>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </header>
      
      {/* Mobile overlay backdrop */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      
      {/* Mobile navigation drawer */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/')}>Home</Link>
        <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/about')}>About</Link>
        <Link to="/blog" className={`mobile-nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/blog')}>Blog</Link>
        <Link to="/resources" className={`mobile-nav-link ${location.pathname === '/resources' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/resources')}>Resources</Link>
        <Link to="/media" className={`mobile-nav-link ${location.pathname === '/media' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/media')}>Media</Link>
        <Link to="/contact" className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={(e) => handleSamePageClick(e, '/contact')}>Contact</Link>
        <button className="mobile-teacher-login" onClick={(e) => e.preventDefault()}>Teacher Login</button>
      </nav>
    </>
  );
}

export default Header;

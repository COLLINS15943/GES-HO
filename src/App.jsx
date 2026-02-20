import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Resources from './pages/Resources';
import Media from './pages/Media';
import Contact from './pages/Contact';
import TeacherPortal from './pages/TeacherPortal';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import BlogList from './pages/admin/BlogList';
import BlogForm from './pages/admin/BlogForm';
import ResourcesList from './pages/admin/ResourcesList';
import ResourcesForm from './pages/admin/ResourcesForm';
import MediaList from './pages/admin/MediaList';
import MediaForm from './pages/admin/MediaForm';
import TeamList from './pages/admin/TeamList';
import TeamForm from './pages/admin/TeamForm';
import Newsletter from './pages/admin/Newsletter';

import './App.css';

/**
 * ScrollToTop Component
 * Handles scroll behavior when navigating between pages
 * - Smooth scroll when clicking same page link
 * - Instant jump when navigating to different page
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const prevPathname = prevPathnameRef.current;
    
    if (prevPathname === pathname) {
      // Same page - smooth scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // Different page - instant jump
      window.scrollTo(0, 0);
    }
    
    prevPathnameRef.current = pathname;
  }, [pathname]);

  return null;
}

/**
 * Main App Component
 * Sets up routing and layout structure
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Header /><Home /><Footer /></>} />
        <Route path="/about" element={<><Header /><About /><Footer /></>} />
        <Route path="/blog" element={<><Header /><Blog /><Footer /></>} />
        <Route path="/blog/:id" element={<><Header /><BlogDetail /><Footer /></>} />
        <Route path="/resources" element={<><Header /><Resources /><Footer /></>} />
        <Route path="/media" element={<><Header /><Media /><Footer /></>} />
        <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
        <Route path="/teacher-portal" element={<><Header /><TeacherPortal /><Footer /></>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/admin/blog" element={<AdminLayout><BlogList /></AdminLayout>} />
        <Route path="/admin/blog/new" element={<AdminLayout><BlogForm /></AdminLayout>} />
        <Route path="/admin/blog/edit/:id" element={<AdminLayout><BlogForm /></AdminLayout>} />
        <Route path="/admin/resources" element={<AdminLayout><ResourcesList /></AdminLayout>} />
        <Route path="/admin/resources/new" element={<AdminLayout><ResourcesForm /></AdminLayout>} />
        <Route path="/admin/resources/edit/:id" element={<AdminLayout><ResourcesForm /></AdminLayout>} />
        <Route path="/admin/media" element={<AdminLayout><MediaList /></AdminLayout>} />
        <Route path="/admin/media/new" element={<AdminLayout><MediaForm /></AdminLayout>} />
        <Route path="/admin/media/edit/:id" element={<AdminLayout><MediaForm /></AdminLayout>} />
        <Route path="/admin/team" element={<AdminLayout><TeamList /></AdminLayout>} />
        <Route path="/admin/team/new" element={<AdminLayout><TeamForm /></AdminLayout>} />
        <Route path="/admin/team/edit/:id" element={<AdminLayout><TeamForm /></AdminLayout>} />
        <Route path="/admin/newsletter" element={<AdminLayout><Newsletter /></AdminLayout>} />
      </Routes>
    </Router>
  );
}

export default App;

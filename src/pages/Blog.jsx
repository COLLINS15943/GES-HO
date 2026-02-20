import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BLOG_POSTS, BLOG_FILTERS, RECENT_UPDATES, BLOG_CONTACT_INFO } from '../constants';
import './Blog.css';

function Blog() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesFilter = activeFilter === 'All' || post.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
                         post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Announcements & News</h1>
        <p>Stay updated with the latest news, announcements, and important information from the directorate</p>
      </section>

      {/* Search and Filter Section */}
      <section className="blog-controls">
        <div className="blog-controls-container">
          <div className="search-wrapper">
            <input 
              type="text" 
              className="search-input"
              placeholder="Search announcements..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={`search-btn ${searchTerm ? 'active' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
          </div>
          
          <div className="filter-buttons">
            {BLOG_FILTERS.map(filter => (
              <button 
                key={filter}
                className={`blog-filter-button ${activeFilter === filter ? 'blog-filter-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="blog-content-container">
          {/* Blog Posts */}
          <div className="blog-posts">
            {filteredPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-tags">
                  <span className={`priority-badge ${post.priority.toLowerCase()}`}>{post.priority}</span>
                  <span className="category-tag">{post.category}</span>
                </div>
                <h2>{post.title}</h2>
                <div className="blog-meta-top">
                  <span className="meta-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    {post.date}
                  </span>
                  <span className="meta-author">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    {post.author}
                  </span>
                </div>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="post-tag">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" x2="7.01" y1="7" y2="7"/></svg>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="read-more" onClick={() => navigate(`/blog/${post.id}`)}>Read More</button>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Recent Updates */}
            <div className="sidebar-section">
              <h3>Recent Updates</h3>
              <ul className="recent-updates">
                {RECENT_UPDATES.map((update, index) => (
                  <li key={index}>
                    <a href="#">{update.title}</a>
                    <span className="update-date">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                      {update.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Notice */}
            <div className="sidebar-section notice-box">
              <h3>Important Notice</h3>
              <p>All teachers are required to complete the mandatory training sessions by the end of this month. Please check your email for detailed schedules.</p>
            </div>

            {/* Need Help */}
            <div className="sidebar-section help-box">
              <h3>Need Help?</h3>
              <p>For queries about announcements or updates contact us:</p>
              <p className="contact-detail">Email: {BLOG_CONTACT_INFO.email}</p>
              <p className="contact-detail">Phone: {BLOG_CONTACT_INFO.phone}</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Blog;

import { useState } from 'react';
import { RESOURCES, RESOURCE_FILTERS, POPULAR_DOWNLOADS, CATEGORIES } from '../constants';
import './Resources.css';

function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredResources = RESOURCES.filter(resource => {
    const matchesFilter = activeFilter === 'All' || resource.badge === activeFilter;
    const matchesSearch = searchTerm === '' ||
                         resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.badge.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.fileType.toLowerCase().includes(searchTerm.toLowerCase());
    const showInAllFilter = activeFilter === 'All' ? resource.showInAll : true;
    return matchesFilter && matchesSearch && showInAllFilter;
  });

  // Helper function to render resource icon
  const renderIcon = (fileType) => {
    if (fileType === 'MP4') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    );
  };

  const renderPopularIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );

  return (
    <div className="resources">
      {/* Hero Section */}
      <section className="resources-hero">
        <h1>Educational Resources</h1>
        <p>Access curriculum guides, teaching materials, forms, and multimedia resources</p>
      </section>

      {/* Search and Filter Section */}
      <section className="resources-controls">
        <div className="resources-controls-container">
          <div className="search-wrapper">
            <input 
              type="text" 
              className="search-input"
              placeholder="Search resources..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={`search-btn ${searchTerm ? 'active' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </button>
          </div>
          
          <div className="filter-buttons">
            {RESOURCE_FILTERS.map(filter => (
              <button 
                key={filter}
                className={`resource-filter-button ${activeFilter === filter ? 'resource-filter-active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="resources-content">
        <div className="resources-content-container">
          {/* Resources List */}
          <div className="resources-list">
            {filteredResources.map(resource => (
              <article key={resource.id} className="resource-card">
                <div className="resource-header">
                  <span className="resource-icon">{renderIcon(resource.fileType)}</span>
                  <div>
                    <h3>{resource.title}</h3>
                    <div className="resource-badges">
                      <span className="file-type">{resource.fileType}</span>
                      <span className="category-badge">{resource.badge}</span>
                    </div>
                  </div>
                </div>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-meta">
                  <span>Size: {resource.size}</span>
                  <span>Downloads: {resource.downloads}</span>
                  <span>Added: {resource.added}</span>
                </div>
                <button className="download-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Resource
                </button>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="resources-sidebar">
            {/* Popular Downloads */}
            <div className="sidebar-section">
              <h3>Popular Downloads</h3>
              <ul className="popular-list">
                {POPULAR_DOWNLOADS.map((item, index) => (
                  <li key={index}>
                    <span className="item-icon">{renderPopularIcon()}</span>
                    <div>
                      <a href="#">{item.title}</a>
                      <span className="download-count">{item.downloads}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="sidebar-section">
              <h3>Categories</h3>
              <ul className="category-list">
                {CATEGORIES.map((cat, index) => (
                  <li key={index}>
                    <a href="#">{cat.name}</a>
                    <span className="count">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help Box */}
            <div className="sidebar-section need-help-box">
              <h3>Need a Resource?</h3>
              <p>Can't find what you're looking for? Contact us to request specific resources or materials.</p>
              <button className="request-btn">Request Resource</button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default Resources;

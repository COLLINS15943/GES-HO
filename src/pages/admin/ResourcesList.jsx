import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPages.css';

function ResourcesList() {
  const [resources, setResources] = useState([
    { id: 1, title: 'Primary Mathematics Curriculum Guide 2024', category: 'Curriculum', fileType: 'PDF', size: '2.3 MB', downloads: 245, date: '2024-01-15' },
    { id: 2, title: 'Interactive Learning Materials for English', category: 'Teaching Materials', fileType: 'ZIP', size: '45 MB', downloads: 298, date: '2024-01-08' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      setResources(resources.filter(r => r.id !== id));
    }
  };

  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || r.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Curriculum', 'Teaching Materials', 'Policies', 'Forms', 'Multimedia'];

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Resources</h1>
          <p>Manage educational resources and downloads</p>
        </div>
        <Link to="/admin/resources/new" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Upload Resource
        </Link>
      </div>

      <div className="page-controls">
        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search resources..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="filter-group">
          <label>Category:</label>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Size</th>
              <th>Downloads</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredResources.map(resource => (
              <tr key={resource.id}>
                <td className="title-cell">{resource.title}</td>
                <td><span className="badge badge-category">{resource.category}</span></td>
                <td><span className="badge">{resource.fileType}</span></td>
                <td>{resource.size}</td>
                <td>{resource.downloads}</td>
                <td>{new Date(resource.date).toLocaleDateString()}</td>
                <td className="actions-cell">
                  <Link to={`/admin/resources/edit/${resource.id}`} className="btn-icon" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                  </Link>
                  <button className="btn-icon" title="Download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </button>
                  <button onClick={() => handleDelete(resource.id)} className="btn-icon btn-danger" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResourcesList;

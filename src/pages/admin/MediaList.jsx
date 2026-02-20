import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPages.css';

function MediaList() {
  const [galleries, setGalleries] = useState([
    { id: 1, title: 'Jesi AI Training For Teachers 2025', description: 'Highlights from day one and day two', date: '2025-01-07', uploadedBy: 'Admin', imageCount: 32 },
    { id: 2, title: 'Annual Sports Day 2024', description: 'Students participating in various sports', date: '2024-12-15', uploadedBy: 'Admin', imageCount: 24 }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this album?')) {
      setGalleries(galleries.filter(g => g.id !== id));
    }
  };

  const filteredGalleries = galleries.filter(g => 
    g.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Albums</h1>
          <p>Manage photo albums and media content</p>
        </div>
        <Link to="/admin/media/new" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Create Album
        </Link>
      </div>

      <div className="page-controls">
        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search albums..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Images</th>
              <th>Date</th>
              <th>Uploaded By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGalleries.map(gallery => (
              <tr key={gallery.id}>
                <td className="title-cell">{gallery.title}</td>
                <td>{gallery.description}</td>
                <td>{gallery.imageCount} images</td>
                <td>{new Date(gallery.date).toLocaleDateString()}</td>
                <td>{gallery.uploadedBy}</td>
                <td className="actions-cell">
                  <Link to={`/admin/media/edit/${gallery.id}`} className="btn-icon" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                  </Link>
                  <Link to={`/media`} className="btn-icon" title="View" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </Link>
                  <button onClick={() => handleDelete(gallery.id)} className="btn-icon btn-danger" title="Delete">
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

export default MediaList;

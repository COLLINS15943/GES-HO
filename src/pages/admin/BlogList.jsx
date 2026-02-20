import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminPages.css';

/**
 * Blog List - Manage all blog posts
 */
function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  // TODO: Fetch from API
  useEffect(() => {
    // Mock data - replace with API call
    setBlogs([
      {
        id: 1,
        title: 'New Teacher Training Program Launch',
        category: 'Training',
        priority: 'HIGH',
        author: 'Dr. Kwame Asante',
        date: '2024-01-15',
        status: 'Published'
      },
      {
        id: 2,
        title: 'Curriculum Updates for 2024 Academic Year',
        category: 'Announcements',
        priority: 'MEDIUM',
        author: 'Mrs. Akosua Mensah',
        date: '2024-01-10',
        status: 'Published'
      }
    ]);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      // TODO: Call API to delete
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || blog.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Announcements', 'Training', 'Policies', 'Events', 'Updates', 'Blogs'];

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Blog Posts</h1>
          <p>Manage announcements and news articles</p>
        </div>
        <Link to="/admin/blog/new" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          New Blog Post
        </Link>
      </div>

      <div className="page-controls">
        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Category:</label>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Author</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map(blog => (
              <tr key={blog.id}>
                <td className="title-cell">{blog.title}</td>
                <td>
                  <span className="badge badge-category">{blog.category}</span>
                </td>
                <td>
                  <span className={`badge badge-priority badge-${blog.priority.toLowerCase()}`}>
                    {blog.priority}
                  </span>
                </td>
                <td>{blog.author}</td>
                <td>{new Date(blog.date).toLocaleDateString()}</td>
                <td>
                  <span className="badge badge-success">{blog.status}</span>
                </td>
                <td className="actions-cell">
                  <Link to={`/admin/blog/edit/${blog.id}`} className="btn-icon" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                  </Link>
                  <Link to={`/blog/${blog.id}`} className="btn-icon" title="View" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                  </Link>
                  <button onClick={() => handleDelete(blog.id)} className="btn-icon btn-danger" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredBlogs.length === 0 && (
          <div className="empty-state">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            <h3>No blog posts found</h3>
            <p>Create your first blog post to get started</p>
            <Link to="/admin/blog/new" className="btn btn-primary">Create Blog Post</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogList;

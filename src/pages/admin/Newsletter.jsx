import { useState } from 'react';
import './AdminPages.css';

function Newsletter() {
  const [subscribers, setSubscribers] = useState([
    { id: 1, email: 'teacher1@example.com', date: '2024-01-15', status: 'Active' },
    { id: 2, email: 'teacher2@example.com', date: '2024-01-10', status: 'Active' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this subscriber?')) {
      setSubscribers(subscribers.filter(s => s.id !== id));
    }
  };

  const handleExport = () => {
    const csv = 'Email,Date,Status\n' + subscribers.map(s => `${s.email},${s.date},${s.status}`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
  };

  const filteredSubscribers = subscribers.filter(s => 
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Newsletter Subscribers</h1>
          <p>Manage email newsletter subscriptions</p>
        </div>
        <button onClick={handleExport} className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export CSV
        </button>
      </div>

      <div className="page-controls">
        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search subscribers..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubscribers.map(subscriber => (
              <tr key={subscriber.id}>
                <td className="title-cell">{subscriber.email}</td>
                <td>{new Date(subscriber.date).toLocaleDateString()}</td>
                <td><span className="badge badge-success">{subscriber.status}</span></td>
                <td className="actions-cell">
                  <button onClick={() => handleDelete(subscriber.id)} className="btn-icon btn-danger" title="Remove">
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

export default Newsletter;

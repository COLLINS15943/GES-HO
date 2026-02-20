import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminPages.css';

function TeamList() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Esther Adzo Yeboah-Adzimah (Ed.D)', role: 'Municipal Director of Education', order: 1 },
    { id: 2, name: 'Mr. Francis Kpormi', role: 'Deputy Director (Administration and Finance)', order: 2 },
    { id: 3, name: 'Mr. Godsway Williams Beglah', role: 'Deputy Director (Monitoring and Supervision)', order: 3 }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this team member?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>Team Members</h1>
          <p>Manage management team members</p>
        </div>
        <Link to="/admin/team/new" className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Team Member
        </Link>
      </div>

      <div className="data-table">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map(member => (
              <tr key={member.id}>
                <td>{member.order}</td>
                <td className="title-cell">{member.name}</td>
                <td>{member.role}</td>
                <td className="actions-cell">
                  <Link to={`/admin/team/edit/${member.id}`} className="btn-icon" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                  </Link>
                  <button onClick={() => handleDelete(member.id)} className="btn-icon btn-danger" title="Delete">
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

export default TeamList;

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminPages.css';

function TeamForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    description: '',
    image: null,
    order: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/admin/team');
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>{isEdit ? 'Edit Team Member' : 'Add New Team Member'}</h1>
          <p>{isEdit ? 'Update team member details' : 'Add a new management team member'}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-grid">
          <div className="form-main">
            <div className="form-card">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" required />
              </div>

              <div className="form-group">
                <label htmlFor="role">Role/Position *</label>
                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} placeholder="e.g., Municipal Director of Education" required />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Brief description of responsibilities" rows="5" required />
              </div>
            </div>
          </div>

          <div className="form-sidebar">
            <div className="form-card">
              <h3>Settings</h3>
              
              <div className="form-group">
                <label htmlFor="order">Display Order</label>
                <input type="number" id="order" name="order" value={formData.order} onChange={handleChange} min="1" />
                <small className="form-hint">Lower numbers appear first</small>
              </div>
            </div>

            <div className="form-card">
              <h3>Profile Photo</h3>
              
              <div className="form-group">
                <label htmlFor="image">Upload Photo *</label>
                <input type="file" id="image" accept="image/*" onChange={handleImageChange} className="file-input" required={!isEdit} />
                <small className="form-hint">Recommended: Square image, 400x400px</small>
              </div>

              {formData.image && (
                <div className="image-preview">
                  <img src={typeof formData.image === 'string' ? formData.image : URL.createObjectURL(formData.image)} alt="Preview" />
                </div>
              )}
            </div>

            <div className="form-actions-sticky">
              <button type="button" onClick={() => navigate('/admin/team')} className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">{isEdit ? 'Update' : 'Add Member'}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeamForm;

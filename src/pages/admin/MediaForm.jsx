import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminPages.css';

function MediaForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    uploadedBy: 'Admin',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/admin/media');
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>{isEdit ? 'Edit Album' : 'Create New Album'}</h1>
          <p>{isEdit ? 'Update album details' : 'Add a new photo album'}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-grid">
          <div className="form-main">
            <div className="form-card">
              <div className="form-group">
                <label htmlFor="title">Album Title *</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Enter album title" required />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Describe the album" rows="4" required />
              </div>

              <div className="form-group">
                <label>Upload Images *</label>
                <div className="upload-area" onClick={() => document.getElementById('images-upload').click()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  <h4>Click to upload images</h4>
                  <p>JPG, PNG (Multiple files allowed)</p>
                </div>
                <input type="file" id="images-upload" multiple accept="image/*" onChange={handleImagesChange} style={{ display: 'none' }} />
              </div>

              {formData.images.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
                  {formData.images.map((image, index) => (
                    <div key={index} style={{ position: 'relative', aspectRatio: '1', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e0e0e0' }}>
                      <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <button type="button" onClick={() => removeImage(index)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'rgba(220, 53, 69, 0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-sidebar">
            <div className="form-card">
              <h3>Album Settings</h3>
              
              <div className="form-group">
                <label htmlFor="date">Date *</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="uploadedBy">Uploaded By</label>
                <input type="text" id="uploadedBy" name="uploadedBy" value={formData.uploadedBy} onChange={handleChange} />
              </div>

              <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '6px', fontSize: '0.9rem', color: '#666' }}>
                <strong>Images: {formData.images.length}</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>First 4 images will be used as preview</p>
              </div>
            </div>

            <div className="form-actions-sticky">
              <button type="button" onClick={() => navigate('/admin/media')} className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">{isEdit ? 'Update' : 'Create Album'}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MediaForm;

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminPages.css';

function ResourcesForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Curriculum',
    fileType: 'PDF',
    file: null,
    showInAll: false
  });

  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({ ...prev, file: e.dataTransfer.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/admin/resources');
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>{isEdit ? 'Edit Resource' : 'Upload New Resource'}</h1>
          <p>{isEdit ? 'Update resource details' : 'Add a new educational resource'}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-grid">
          <div className="form-main">
            <div className="form-card">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="Enter resource title" required />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Describe the resource" rows="5" required />
              </div>

              <div className="form-group">
                <label>Upload File *</label>
                <div className={`upload-area ${dragActive ? 'dragover' : ''}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop} onClick={() => document.getElementById('file-upload').click()}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <h4>{formData.file ? formData.file.name : 'Click to upload or drag and drop'}</h4>
                  <p>PDF, DOC, ZIP, MP4 (Max 100MB)</p>
                </div>
                <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: 'none' }} />
              </div>
            </div>
          </div>

          <div className="form-sidebar">
            <div className="form-card">
              <h3>Resource Settings</h3>
              
              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange}>
                  <option value="Curriculum">Curriculum</option>
                  <option value="Teaching Materials">Teaching Materials</option>
                  <option value="Policies">Policies</option>
                  <option value="Forms">Forms</option>
                  <option value="Multimedia">Multimedia</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="fileType">File Type</label>
                <select id="fileType" name="fileType" value={formData.fileType} onChange={handleChange}>
                  <option value="PDF">PDF</option>
                  <option value="DOC">DOC</option>
                  <option value="ZIP">ZIP</option>
                  <option value="MP4">MP4</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" name="showInAll" checked={formData.showInAll} onChange={handleChange} />
                  Show in "All" filter
                </label>
                <small className="form-hint">Display this resource when "All" category is selected</small>
              </div>
            </div>

            <div className="form-actions-sticky">
              <button type="button" onClick={() => navigate('/admin/resources')} className="btn btn-secondary">Cancel</button>
              <button type="submit" className="btn btn-primary">{isEdit ? 'Update' : 'Upload'}</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResourcesForm;

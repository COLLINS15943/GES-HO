import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AdminPages.css';

/**
 * Blog Form - Create/Edit blog posts
 */
function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Announcements',
    priority: 'MEDIUM',
    author: '',
    tags: '',
    image: null,
    status: 'Draft'
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // TODO: Fetch blog data if editing
  useEffect(() => {
    if (isEdit) {
      // const fetchBlog = async () => {
      //   const data = await blogAPI.getById(id);
      //   setFormData(data);
      // };
      // fetchBlog();
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setLoading(true);
    
    try {
      // TODO: Call API
      // if (isEdit) {
      //   await blogAPI.update(id, formData);
      // } else {
      //   await blogAPI.create(formData);
      // }
      
      console.log('Form submitted:', formData);
      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog post');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = async () => {
    setFormData(prev => ({ ...prev, status: 'Draft' }));
    handleSubmit(new Event('submit'));
  };

  const handlePublish = async () => {
    setFormData(prev => ({ ...prev, status: 'Published' }));
    handleSubmit(new Event('submit'));
  };

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h1>{isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
          <p>{isEdit ? 'Update blog post details' : 'Add a new announcement or article'}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-grid">
          {/* Left Column */}
          <div className="form-main">
            <div className="form-card">
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter blog post title"
                  className={errors.title ? 'error' : ''}
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Brief summary of the blog post"
                  rows="3"
                  className={errors.excerpt ? 'error' : ''}
                />
                {errors.excerpt && <span className="error-message">{errors.excerpt}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="content">Content *</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your blog post content here (HTML supported)"
                  rows="15"
                  className={errors.content ? 'error' : ''}
                />
                {errors.content && <span className="error-message">{errors.content}</span>}
                <small className="form-hint">You can use HTML tags for formatting</small>
              </div>

              <div className="form-group">
                <label htmlFor="tags">Tags</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="Enter tags separated by commas"
                />
                <small className="form-hint">Example: Training, Professional Development</small>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-sidebar">
            <div className="form-card">
              <h3>Publish Settings</h3>
              
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Announcements">Announcements</option>
                  <option value="Training">Training</option>
                  <option value="Policies">Policies</option>
                  <option value="Events">Events</option>
                  <option value="Updates">Updates</option>
                  <option value="Blogs">Blogs</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="author">Author *</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="Author name"
                  className={errors.author ? 'error' : ''}
                />
                {errors.author && <span className="error-message">{errors.author}</span>}
              </div>
            </div>

            <div className="form-card">
              <h3>Featured Image</h3>
              
              <div className="form-group">
                <label htmlFor="image">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                <small className="form-hint">Recommended size: 1200x630px</small>
              </div>

              {formData.image && (
                <div className="image-preview">
                  <img 
                    src={typeof formData.image === 'string' ? formData.image : URL.createObjectURL(formData.image)} 
                    alt="Preview" 
                  />
                </div>
              )}
            </div>

            <div className="form-actions-sticky">
              <button 
                type="button" 
                onClick={() => navigate('/admin/blog')} 
                className="btn btn-secondary"
                disabled={loading}
              >
                Cancel
              </button>
              <button 
                type="button" 
                onClick={handleSaveDraft} 
                className="btn btn-outline"
                disabled={loading}
              >
                Save Draft
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Saving...' : isEdit ? 'Update' : 'Publish'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;

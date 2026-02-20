import { useState } from 'react';
import './Media.css';

function Media() {
  const [expandedGalleries, setExpandedGalleries] = useState({});
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);

  const toggleGallery = (galleryId) => {
    setExpandedGalleries(prev => ({
      ...prev,
      [galleryId]: !prev[galleryId]
    }));
  };

  const toggleSelectionMode = () => {
    setSelectionMode(!selectionMode);
    if (selectionMode) {
      setSelectedImages([]); // Clear selections when exiting selection mode
    }
  };
  
  const clearSelection = () => {
    setSelectedImages([]);
  };

  const toggleImageSelection = (imageUrl) => {
    setSelectedImages(prev => {
      if (prev.includes(imageUrl)) {
        return prev.filter(url => url !== imageUrl);
      } else {
        return [...prev, imageUrl];
      }
    });
  };

  const selectAllInGallery = (galleryImages) => {
    const allSelected = galleryImages.every(img => selectedImages.includes(img));
    if (allSelected) {
      // Deselect all from this gallery
      setSelectedImages(prev => prev.filter(url => !galleryImages.includes(url)));
    } else {
      // Select all from this gallery
      setSelectedImages(prev => [...new Set([...prev, ...galleryImages])]);
    }
  };

  const downloadSelectedImages = async () => {
    if (selectedImages.length === 0) return;

    // For single image, download directly
    if (selectedImages.length === 1) {
      const link = document.createElement('a');
      link.href = selectedImages[0];
      link.download = `image-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // For multiple images, download one by one with delay
    for (let i = 0; i < selectedImages.length; i++) {
      const link = document.createElement('a');
      link.href = selectedImages[i];
      link.download = `image-${Date.now()}-${i + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    alert(`${selectedImages.length} images downloaded successfully!`);
  };

  const galleries = [
    {
      id: 1,
      title: 'Jesi AI Training For Teachers 2025',
      description: 'Highlights from day one and day two of Jesi AI training',
      date: '7/10/2025',
      uploadedBy: 'Admin',
      previewImages: [
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400'
      ],
      allImages: [
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400'
      ]
    },
    {
      id: 2,
      title: 'Jesi AI Training For Teachers 2025',
      description: 'Highlights from day one and day two of Jesi AI training',
      date: '7/10/2025',
      uploadedBy: 'Admin',
      previewImages: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400'
      ],
      allImages: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400',
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400',
        'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400'
      ]
    }
  ];

  return (
    <div className="media">
      {/* Hero Section */}
      <section className="media-hero">
        <h1>Media</h1>
        <p>Catch a glimpse of our activities, events, and milestones as we work together to promote quality education across Ho Municipality</p>
      </section>

      {/* Gallery Section */}
      <section className="media-content">
        {selectedImages.length >= 2 && (
          <div className="selection-actions-bar">
            <div className="selection-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{selectedImages.length} of 32 Selected</span>
            </div>
            <button className="action-btn download-all-btn" onClick={downloadSelectedImages}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download All
            </button>
          </div>
        )}
        
        <div className="media-container">
          {galleries.map(gallery => {
            const isExpanded = expandedGalleries[gallery.id];
            const imagesToShow = isExpanded ? gallery.allImages : gallery.previewImages;
            
            return (
              <div key={gallery.id} className="gallery-section">
                <div className="gallery-header">
                  <div className="gallery-info">
                    <h2>{gallery.title}</h2>
                    <p className="gallery-description">{gallery.description}</p>
                    <div className="gallery-meta">
                      <span className="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        {gallery.date}
                      </span>
                      <span className="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Uploaded by {gallery.uploadedBy}
                      </span>
                    </div>
                  </div>
                  <div className="gallery-header-actions">
                    <button 
                      className="select-all-btn"
                      onClick={() => selectAllInGallery(gallery.allImages)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {gallery.allImages.every(img => selectedImages.includes(img)) ? 'Deselect All' : 'Select All'}
                    </button>
                    <button 
                      className={`view-all-btn ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => toggleGallery(gallery.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                      {isExpanded ? 'Collapse' : `View All (${gallery.allImages.length})`}
                    </button>
                  </div>
                </div>
                
                <div className="gallery-grid">
                  {imagesToShow.map((image, index) => {
                    const isSelected = selectedImages.includes(image);
                    return (
                      <div key={index} className={`gallery-item ${isSelected ? 'selected' : ''}`}>
                        <img src={image} alt={`${gallery.title} ${index + 1}`} />
                        <div className="gallery-item-overlay">
                          <button 
                            className={`checkbox-overlay-btn ${isSelected ? 'checked' : ''}`}
                            onClick={() => toggleImageSelection(image)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </button>
                          <button className="download-overlay-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                              <polyline points="7 10 12 15 17 10"/>
                              <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                          Download
                        </button>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Download Guidelines Section */}
      <section className="download-guidelines">
        <div className="guidelines-container">
          <div className="guidelines-section">
            <h3>Usage Rights</h3>
            <ul>
              <li>Photos are for educational promotional use only</li>
              <li>Attribution to GES Ho Municipal required for public use</li>
              <li>Commercial use requires prior written permission</li>
            </ul>
          </div>
          
          <div className="guidelines-section">
            <h3>Technical Information</h3>
            <ul>
              <li>High-resolution images available for download</li>
              <li>Multiple formats supported (PNG, JPEG)</li>
              <li>Compressed archives available for bulk downloads</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Media;

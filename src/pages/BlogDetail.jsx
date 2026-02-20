import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      priority: 'HIGH',
      category: 'Training',
      title: 'New Teacher Training Program Launch',
      excerpt: 'We are excited to announce the launch of our comprehensive teacher training program designed to enhance classroom effectiveness and student engagement.',
      date: '1/15/2024',
      author: 'Dr. Kwame Asante',
      tags: ['Training', 'Professional Development'],
      image: '/images/Teachers-with-cert.png',
      content: `
        <p>We are excited to announce the launch of our comprehensive teacher training program designed to enhance classroom effectiveness and student engagement. This program represents a significant investment in our educators and their professional development.</p>
        
        <p>The innovative program features a significant investment in our educators and their professional development, offering an array of resources specifically designed to support teachers in their professional journey. The program is designed to be flexible, allowing teachers to participate at their own pace while maintaining their teaching responsibilities.</p>
        
        <h2>Program Highlights</h2>
        
        <h3>Core Components</h3>
        <ul>
          <li>Classroom Management Strategies - Best practices and tools for maintaining an engaging, productive and safe learning environment</li>
          <li>Technology Integration - Effective use of educational technology to enhance learning outcomes</li>
          <li>Assessment and Evaluation - Modern continuous and formative assessment methodologies</li>
          <li>Curriculum Innovation - Techniques to effectively adapt and personalize curriculum while maintaining educational standards</li>
        </ul>
        
        <h3>Workshop Schedule</h3>
        <p>The program will be delivered through a blend of in-person workshops and online modules, with hands-on practice, building with the expertise you. Participants will engage in collaborative discussions, share best practices, and receive personalized feedback.</p>
        
        <h3>Impact Facilitation</h3>
        <p>Each participant will be assigned an experienced mentor who will provide guidance and support throughout the program. Mentors will help teachers apply new strategies in their classrooms and provide ongoing feedback to ensure successful implementation.</p>
        
        <h3>Expected Outcomes</h3>
        <p>Upon completion of this comprehensive training program:</p>
        <ul>
          <li>Teachers will have enhanced pedagogical skills</li>
          <li>Improved student engagement and learning outcomes</li>
          <li>Effective use of modern teaching tools and resources</li>
          <li>Stronger professional networks and peer learning groups</li>
          <li>Increased job satisfaction and professional confidence</li>
        </ul>
        
        <h3>Registration Information</h3>
        <p>To register for this exciting new training program, teachers will be given pre-registration slots through provided links on our official WhatsApp and Facebook pages. Registration closes on [date], so we encourage all interested teachers to register early.</p>
        
        <p>We encourage all teachers to take advantage of this excellent professional development opportunity. For questions or additional information, please contact our professional development team at training@ges-ho.gov.gh.</p>
      `
    },
    {
      id: 2,
      priority: 'MEDIUM',
      category: 'Announcements',
      title: 'Curriculum Updates for 2024 Academic Year',
      excerpt: 'Important updates to the curriculum guidelines that all teachers need to be aware of for the upcoming academic year.',
      date: '1/10/2024',
      author: 'Mrs. Akosua Mensah',
      tags: ['Curriculum', 'Updates'],
      image: '/images/Municipal-build.png',
      content: `
        <p>Important updates to the curriculum guidelines that all teachers need to be aware of for the upcoming academic year. These changes reflect our commitment to providing quality education that meets international standards.</p>
        
        <h2>Key Changes</h2>
        <p>The updated curriculum includes enhanced focus on critical thinking, problem-solving skills, and practical application of knowledge. Teachers are encouraged to review the new guidelines thoroughly.</p>
        
        <h3>Implementation Timeline</h3>
        <ul>
          <li>Phase 1: Introduction and training sessions</li>
          <li>Phase 2: Pilot implementation in select schools</li>
          <li>Phase 3: Full rollout across all institutions</li>
        </ul>
        
        <p>For detailed information and resources, please visit our curriculum portal or contact the curriculum development office.</p>
      `
    },
    {
      id: 3,
      priority: 'HIGH',
      category: 'Events',
      title: 'Annual Teachers Conference 2024',
      excerpt: 'Join us for our annual teachers conference featuring keynote speakers, workshops, and networking opportunities.',
      date: '1/8/2024',
      author: 'Mr. Emmanuel Kpogo',
      tags: ['Conference', 'Networking'],
      image: '/images/home-pic.png',
      content: `
        <p>Join us for our annual teachers conference featuring keynote speakers, workshops, and networking opportunities. This year's theme focuses on "Innovation in Education: Preparing Students for Tomorrow."</p>
        
        <h2>Conference Highlights</h2>
        <ul>
          <li>Keynote addresses from education leaders</li>
          <li>Interactive workshops and breakout sessions</li>
          <li>Networking opportunities with peers</li>
          <li>Exhibition of educational resources and technology</li>
        </ul>
        
        <h3>Registration Details</h3>
        <p>Early bird registration is now open. Register before the deadline to secure your spot and take advantage of discounted rates.</p>
      `
    },
    {
      id: 4,
      priority: 'MEDIUM',
      category: 'Updates',
      title: 'Digital Learning Resources Available',
      excerpt: 'New digital learning resources have been made available to support remote and hybrid learning environments.',
      date: '1/5/2024',
      author: 'ICT Department',
      tags: ['Digital', 'Resources'],
      image: '/images/Municipal-build.png',
      content: `
        <p>New digital learning resources have been made available to support remote and hybrid learning environments. These resources are designed to enhance teaching and learning experiences.</p>
        
        <h2>Available Resources</h2>
        <ul>
          <li>Interactive learning modules</li>
          <li>Video tutorials and demonstrations</li>
          <li>Assessment and evaluation tools</li>
          <li>Collaborative platforms for student engagement</li>
        </ul>
        
        <p>Access these resources through our online portal using your teacher credentials.</p>
      `
    },
    {
      id: 5,
      priority: 'HIGH',
      category: 'Policies',
      title: 'Updated Teacher Promotion Guidelines',
      excerpt: 'Review the updated guidelines for teacher promotions and career advancement opportunities within the directorate.',
      date: '1/3/2024',
      author: 'HR Department',
      tags: ['Promotion', 'Career'],
      image: '/images/Teachers-with-cert.png',
      content: `
        <p>Review the updated guidelines for teacher promotions and career advancement opportunities within the directorate. These guidelines reflect our commitment to recognizing and rewarding excellence in teaching.</p>
        
        <h2>Promotion Criteria</h2>
        <ul>
          <li>Years of service and experience</li>
          <li>Professional development and qualifications</li>
          <li>Teaching effectiveness and student outcomes</li>
          <li>Contributions to school and community</li>
        </ul>
        
        <h3>Application Process</h3>
        <p>Teachers interested in promotion should submit their applications through the HR portal. All applications will be reviewed by the promotion committee.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <div className="blog-detail">Post not found</div>;
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail-container">
        <button className="back-button" onClick={() => navigate('/blog')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Blog
        </button>

        <article className="blog-detail-content">
          {post.image && (
            <div className="blog-detail-image">
              <img src={post.image} alt={post.title} />
            </div>
          )}

          <div className="blog-detail-header">
            <div className="blog-detail-tags">
              <span className={`priority-badge ${post.priority.toLowerCase()}`}>{post.priority}</span>
              <span className="category-tag">{post.category}</span>
            </div>

            <h1>{post.title}</h1>

            <div className="blog-detail-meta">
              <span className="meta-date">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                {post.date}
              </span>
              <span className="meta-author">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                {post.author}
              </span>
            </div>
          </div>

          <div className="blog-detail-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="blog-detail-footer">
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="post-tag">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" x2="7.01" y1="7" y2="7"/>
                  </svg>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogDetail;

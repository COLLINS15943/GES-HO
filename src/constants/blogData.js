// Blog Page Constants

export const BLOG_FILTERS = ['All', 'Announcements', 'Training', 'Policies', 'Events', 'Updates', 'Blogs'];

export const BLOG_POSTS = [
  {
    id: 1,
    priority: 'HIGH',
    category: 'Training',
    title: 'New Teacher Training Program Launch',
    excerpt: 'We are excited to announce the launch of our comprehensive teacher training program designed to enhance classroom effectiveness and student engagement.',
    date: '1/15/2024',
    author: 'Dr. Kwame Asante',
    tags: ['Training', 'Professional Development']
  },
  {
    id: 2,
    priority: 'MEDIUM',
    category: 'Announcements',
    title: 'Curriculum Updates for 2024 Academic Year',
    excerpt: 'Important updates to the curriculum guidelines that all teachers need to be aware of for the upcoming academic year.',
    date: '1/10/2024',
    author: 'Mrs. Akosua Mensah',
    tags: ['Curriculum', 'Updates']
  },
  {
    id: 3,
    priority: 'HIGH',
    category: 'Events',
    title: 'Annual Teachers Conference 2024',
    excerpt: 'Join us for our annual teachers conference featuring keynote speakers, workshops, and networking opportunities.',
    date: '1/8/2024',
    author: 'Mr. Emmanuel Kpogo',
    tags: ['Conference', 'Networking']
  },
  {
    id: 4,
    priority: 'MEDIUM',
    category: 'Updates',
    title: 'Digital Learning Resources Available',
    excerpt: 'New digital learning resources have been made available to support remote and hybrid learning environments.',
    date: '1/5/2024',
    author: 'ICT Department',
    tags: ['Digital', 'Resources']
  },
  {
    id: 5,
    priority: 'HIGH',
    category: 'Policies',
    title: 'Updated Teacher Promotion Guidelines',
    excerpt: 'Review the updated guidelines for teacher promotions and career advancement opportunities within the directorate.',
    date: '1/3/2024',
    author: 'HR Department',
    tags: ['Promotion', 'Career']
  },
  {
    id: 6,
    priority: 'MEDIUM',
    category: 'Blogs',
    title: 'The Power of Project-Based Learning in Ghanaian Classrooms',
    excerpt: 'Explore how project-based learning can transform student engagement and critical thinking skills in the local context.',
    date: '1/20/2024',
    author: 'Dr. Yaa Asantewaa',
    tags: ['Education', 'Teaching Methods']
  },
  {
    id: 7,
    priority: 'MEDIUM',
    category: 'Blogs',
    title: 'Integrating Low-Cost EdTech Tools in Rural Schools',
    excerpt: 'Practical tips and tools for teachers to leverage technology in classrooms with limited resources.',
    date: '1/18/2024',
    author: 'Mr. Kofi Mensah',
    tags: ['Technology', 'Rural Education']
  },
  {
    id: 8,
    priority: 'MEDIUM',
    category: 'Blogs',
    title: 'Fostering a Growth Mindset in Students and Teachers',
    excerpt: 'Strategies for cultivating resilience and a love for learning among both educators and students.',
    date: '1/16/2024',
    author: 'Mrs. Ama Darko',
    tags: ['Mindset', 'Professional Growth']
  },
  {
    id: 9,
    priority: 'MEDIUM',
    category: 'Blogs',
    title: 'Navigating Teacher Burnout: A Guide to Well-being',
    excerpt: 'Practical advice and resources on managing stress and maintaining a healthy work-life balance.',
    date: '1/14/2024',
    author: 'Dr. Kwesi Boateng',
    tags: ['Wellness', 'Mental Health']
  },
  {
    id: 10,
    priority: 'HIGH',
    category: 'Training',
    title: 'Advanced Classroom Management Techniques',
    excerpt: 'Learn effective strategies for maintaining discipline and creating a positive learning environment.',
    date: '1/12/2024',
    author: 'Prof. Abena Osei',
    tags: ['Training', 'Classroom Management']
  },
  {
    id: 11,
    priority: 'MEDIUM',
    category: 'Training',
    title: 'Digital Literacy Training for Educators',
    excerpt: 'Enhance your digital skills with our comprehensive training program for modern teaching.',
    date: '1/9/2024',
    author: 'ICT Training Unit',
    tags: ['Training', 'Technology']
  },
  {
    id: 12,
    priority: 'HIGH',
    category: 'Announcements',
    title: 'School Reopening Guidelines 2024',
    excerpt: 'Important information regarding the reopening of schools and safety protocols for the new term.',
    date: '1/11/2024',
    author: 'Directorate Office',
    tags: ['Announcements', 'Safety']
  },
  {
    id: 13,
    priority: 'MEDIUM',
    category: 'Announcements',
    title: 'New Assessment Framework Implementation',
    excerpt: 'Details on the new continuous assessment framework being rolled out across all schools.',
    date: '1/7/2024',
    author: 'Assessment Unit',
    tags: ['Announcements', 'Assessment']
  },
  {
    id: 14,
    priority: 'HIGH',
    category: 'Events',
    title: 'Regional Science Fair 2024',
    excerpt: 'Students and teachers are invited to participate in the annual regional science fair.',
    date: '1/6/2024',
    author: 'Science Department',
    tags: ['Events', 'Science']
  },
  {
    id: 15,
    priority: 'MEDIUM',
    category: 'Events',
    title: 'Parent-Teacher Association Meeting',
    excerpt: 'Join us for the quarterly PTA meeting to discuss student progress and school development.',
    date: '1/4/2024',
    author: 'PTA Coordinator',
    tags: ['Events', 'Community']
  },
  {
    id: 16,
    priority: 'MEDIUM',
    category: 'Updates',
    title: 'New Library Resources Added',
    excerpt: 'The school library has been updated with new books and digital resources for teachers and students.',
    date: '1/2/2024',
    author: 'Library Services',
    tags: ['Updates', 'Resources']
  },
  {
    id: 17,
    priority: 'LOW',
    category: 'Updates',
    title: 'Infrastructure Improvement Updates',
    excerpt: 'Progress report on ongoing infrastructure improvements across schools in the municipality.',
    date: '12/28/2023',
    author: 'Infrastructure Unit',
    tags: ['Updates', 'Infrastructure']
  },
  {
    id: 18,
    priority: 'HIGH',
    category: 'Policies',
    title: 'New Code of Conduct for Teachers',
    excerpt: 'Review the updated code of conduct and professional ethics guidelines for all teaching staff.',
    date: '12/30/2023',
    author: 'HR Department',
    tags: ['Policies', 'Ethics']
  },
  {
    id: 19,
    priority: 'MEDIUM',
    category: 'Policies',
    title: 'Leave Application Policy Updates',
    excerpt: 'Important changes to the leave application process and approval procedures.',
    date: '12/26/2023',
    author: 'HR Department',
    tags: ['Policies', 'Administration']
  }
];

export const RECENT_UPDATES = [
  { title: 'New Teacher Training Program Launch', date: '2/18/2025' },
  { title: 'Curriculum Updates for 2025 Academic Year', date: '2/16/2025' },
  { title: 'Annual Teachers Conference 2024', date: '1/5/2025' }
];

export const BLOG_CONTACT_INFO = {
  email: 'info@ges-ho.gov.gh',
  phone: '+233 25 6781 500'
};

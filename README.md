# GES Ho Municipal Website

A modern, responsive website for the Ghana Education Service Ho Municipal Directorate.

## Project Structure

```
ges-website/
├── public/              # Static assets
│   ├── images/         # Image files
│   └── logos/          # Logo files
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── AdminLayout.jsx
│   ├── constants/      # Application constants and data
│   │   ├── index.js           # Central export file
│   │   ├── homeData.js        # Home page constants
│   │   ├── aboutData.js       # About page constants
│   │   ├── blogData.js        # Blog page constants
│   │   ├── resourcesData.js   # Resources page constants
│   │   └── contactData.js     # Contact page constants
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Resources.jsx
│   │   ├── Contact.jsx
│   │   ├── TeacherPortal.jsx
│   │   ├── Media.jsx
│   │   └── admin/      # Admin dashboard pages
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Application entry point
└── package.json

```

## Key Features

- Responsive design for all devices
- Admin dashboard for content management
- Blog/Announcements system with filtering
- Resources library with search
- Teacher portal (URL-only access)
- Contact information and department details

## Constants Organization

All static data is organized in the `src/constants/` folder:

- **homeData.js**: Statistics, services, quick access items
- **aboutData.js**: Mission, vision, core values, team members, achievements
- **blogData.js**: Blog posts, filters, recent updates
- **resourcesData.js**: Resources, categories, popular downloads
- **contactData.js**: Contact information, departments, portal features

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Admin Access

Admin dashboard is accessible only by typing `/admin` in the URL.

## Teacher Portal Access

Teacher portal is accessible only by typing `/teacher-portal` in the URL.

## Notes for Backend Integration

- All data is currently stored in constants files
- Replace constants with API calls when backend is ready
- Admin forms are ready for backend integration
- File upload functionality needs backend endpoint configuration

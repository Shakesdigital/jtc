# Jinja Town Church Website

A modern, responsive website for Jinja Town Church in Uganda, built with React and optimized for Netlify deployment. The site features a beautiful design inspired by clean layouts and warm colors, providing an engaging experience for both local and global audiences.

## 🌟 Features

### Public Website
- **Responsive Homepage** with hero section, featured sermons, ministries preview, and upcoming events
- **About Us** page with mission, vision, values, and leadership team
- **Ministries** section with detailed pages for each ministry program
- **Church Services** with schedule and sermon archive
- **Interactive Events Calendar** with registration functionality
- **Multimedia Gallery** with video/audio players and download capabilities
- **Contact Form** with integrated Google Maps
- **Prayer Request System** with privacy controls
- **Donation Platform** with secure payment integration
- **Blog/News** section with search and filtering
- **Mobile-first responsive design**
- **Accessibility features** (ARIA labels, keyboard navigation)

### Admin Dashboard
- **Secure Authentication** with JWT tokens
- **Content Management** for sermons, events, ministries, and blog posts
- **Media Library** with upload and organization tools
- **User Management** with role-based access control
- **Analytics Dashboard** with site statistics
- **Prayer Request Management**
- **Donation Tracking and Reports**

## 🎨 Design

The website design is inspired by https://four12global.com/ featuring:
- **Color Palette**: Deep red/burgundy (#760C01, #AD1D0F) with gold accents (#D4AF37)
- **Typography**: Clean sans-serif fonts (Quicksand, Roboto)
- **Layout**: Modern grid system with card-based components
- **Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Images**: Uganda-themed visuals and church event photography

## 🛠 Tech Stack

### Frontend
- **React 18+** with functional components and hooks
- **React Router** for client-side routing
- **Tailwind CSS** for styling and responsive design
- **Framer Motion** for animations
- **React Query** for data fetching and caching
- **React Hook Form** for form management
- **React Player** for multimedia content
- **Axios** for API communication

### Backend Integration
- **Netlify Functions** for serverless API endpoints
- **MongoDB Atlas** for cloud database
- **JWT Authentication** for admin security
- **Stripe/PayPal** for donation processing
- **Email Integration** for contact forms

### Build & Deployment
- **Create React App** as build tool
- **Netlify** for hosting and deployment
- **Automatic HTTPS** and custom domain support
- **Environment variables** for configuration

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   ├── Layout.js
│   ├── LoadingSpinner.js
│   ├── ErrorMessage.js
│   ├── ProtectedRoute.js
│   └── ScrollToTop.js
├── contexts/           # React contexts
│   └── AuthContext.js
├── pages/             # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Ministries.js
│   ├── MinistryDetail.js
│   ├── ChurchService.js
│   ├── Sermons.js
│   ├── SermonDetail.js
│   ├── Events.js
│   ├── EventDetail.js
│   ├── Multimedia.js
│   ├── Contact.js
│   ├── Donate.js
│   ├── Blog.js
│   ├── BlogPost.js
│   ├── PrayerRequests.js
│   ├── NotFound.js
│   └── admin/
│       ├── AdminLogin.js
│       └── AdminDashboard.js
├── services/          # API and utilities
│   └── api.js
├── App.js
├── index.js
└── index.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- MongoDB Atlas account
- Netlify account (for deployment)

### Installation

1. **Clone and install dependencies:**
```bash
cd JTCapp
npm install
```

2. **Install Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

3. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
REACT_APP_API_BASE_URL=http://localhost:8888/.netlify/functions
REACT_APP_SITE_URL=http://localhost:3000
```

4. **Start development server:**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🌐 Deployment on Netlify

### Automatic Deployment
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on every push to main branch

### Environment Variables on Netlify
Configure these in your Netlify dashboard:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/jinja-town-church
JWT_SECRET=your-super-secure-jwt-secret
SENDGRID_API_KEY=your-sendgrid-api-key
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
SITE_URL=https://jinjatownchurch.org
```

### Custom Domain
1. Add your custom domain in Netlify settings
2. Configure DNS records with your domain provider
3. SSL certificate will be automatically generated

## 📊 API Endpoints

The frontend expects these serverless function endpoints:

```
/api/ministries          - GET, POST
/api/ministries/:id      - GET, PUT, DELETE
/api/sermons             - GET, POST
/api/sermons/:id         - GET, PUT, DELETE
/api/events              - GET, POST
/api/events/:id          - GET, PUT, DELETE
/api/blog                - GET, POST
/api/blog/:id            - GET, PUT, DELETE
/api/prayer-requests     - GET, POST
/api/contact             - POST
/api/donations           - POST
/api/auth/login          - POST
/api/auth/verify         - GET
/api/media               - GET, POST
/api/settings            - GET, PUT
```

## 🔐 Security Features

- **JWT Authentication** for admin access
- **Protected Routes** for admin dashboard
- **Input Validation** on all forms
- **XSS Protection** with sanitized content
- **HTTPS Enforcement** via Netlify
- **Environment Variables** for sensitive data
- **Rate Limiting** on API endpoints

## 📱 Mobile Optimization

- **Mobile-first Design** with responsive breakpoints
- **Touch-friendly Interface** with proper tap targets
- **Optimized Images** with lazy loading
- **Fast Loading** with code splitting and caching
- **Offline Support** with service workers (optional)

## ♿ Accessibility

- **ARIA Labels** for screen readers
- **Keyboard Navigation** support
- **High Contrast** color ratios
- **Semantic HTML** structure
- **Focus Management** in interactive elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Four12 Global](https://four12global.com/)
- Icons from [Feather Icons](https://feathericons.com/)
- Images from church events and Uganda photography
- Built with ❤️ for the Jinja Town Church community

## 📞 Support

For technical support or questions about the website:
- **Email**: tech@jinjatownchurch.org
- **GitHub Issues**: Create an issue in this repository
- **Church Contact**: info@jinjatownchurch.org

---

**Made with 🤖 Generated with [Claude Code](https://claude.ai/code)**

**Co-Authored-By: Claude <noreply@anthropic.com>**
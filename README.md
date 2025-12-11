# Programming Languages Portfolio Website

A responsive, accessible multi-page static website showcasing popular programming languages. Built with semantic HTML, modern CSS, and React for an engaging user experience.

## Project Overview

This website presents comprehensive information about six major programming languages: Python, JavaScript, Rust, Go, Java, and C++. It includes detailed language profiles, feature comparisons, and a contact form for user engagement.

## Pages Included

### 1. **Home Page** (`/`)
- Hero section with compelling introduction
- Featured languages showcase
- Benefits of learning programming languages
- Call-to-action buttons for exploration

### 2. **Languages Page** (`/languages`)
- Detailed cards for each programming language
- Language features and use cases
- Embedded YouTube videos for each language
- Unordered and ordered lists
- Language-specific color coding

### 3. **Comparison Page** (`/comparison`)
- Interactive comparison table with all languages
- CSV download functionality
- Difficulty and performance ratings
- Recommendation section for different use cases
- Legend explaining rating systems

### 4. **Contact Page** (`/contact`)
- Contact information cards
- Registration form with validation
- File upload functionality
- FAQ section with expandable details
- Success message simulation

### 5. **404 Page** (Not Found)
- Custom error page
- Navigation back to home

## Required Elements Implementation

✅ **Headings** - Semantic `<h1>`, `<h2>`, `<h3>` tags throughout  
✅ **Lists** - Unordered lists (use cases), ordered lists (features), and description lists  
✅ **Images** - Language icons and visual elements  
✅ **Tables** - Comprehensive language comparison table  
✅ **Menu** - Responsive navigation menu (desktop and mobile)  
✅ **Links** - Internal navigation and external resource links  
✅ **Embedded Video** - YouTube videos on languages page  
✅ **File Download** - CSV export of comparison table  
✅ **File Upload** - Contact form with file attachment  
✅ **Registration Form** - Contact form with success simulation  

## Design Philosophy

**Modern Minimalist with Accent Colors**

- Clean, professional layout with generous whitespace
- Unique accent color for each programming language
- Asymmetric grid layout with visual interest
- Playfair Display for headings, Inter for body text
- Smooth micro-interactions and hover effects
- Fully accessible and responsive design

### Color Scheme
- **Background:** Off-white (#f9f7f4)
- **Text:** Charcoal (#1a1a1a)
- **Primary:** Blue (#3776ab)
- **Language Accents:** Python (Blue), JavaScript (Yellow), Rust (Orange), Go (Cyan), Java (Dark Blue), C++ (Blue)

## Technical Stack

- **Frontend Framework:** React 19
- **Styling:** Tailwind CSS 4
- **Routing:** Wouter
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Language:** TypeScript

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme (WCAG AA compliant)
- Responsive design for all screen sizes
- Focus indicators for keyboard users
- Proper heading hierarchy

## Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible grid layouts
- Mobile hamburger menu
- Touch-friendly interactive elements
- Optimized for all device sizes

## Installation & Development

### Prerequisites
- Node.js 18+
- pnpm 10+

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Development Server
The development server runs at `http://localhost:3000` with hot module replacement (HMR) enabled.

## File Structure

```
portfolio-website/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Languages.tsx
│   │   │   ├── Comparison.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   └── index.html           # HTML template
├── server/                  # Server configuration
├── package.json             # Dependencies
└── README.md               # This file
```

## Key Features

### Navigation
- Sticky header with responsive menu
- Desktop navigation bar
- Mobile hamburger menu
- Clear navigation links on all pages

### Content Organization
- Semantic HTML structure
- Logical page hierarchy
- Clear visual hierarchy with typography
- Consistent spacing and layout

### Interactive Elements
- Smooth hover effects on cards and buttons
- Form validation
- File upload preview
- Expandable FAQ section
- Download functionality

### Performance
- Optimized CSS and JavaScript
- Lazy loading for images and videos
- Efficient component structure
- Fast page load times

## Validation

The HTML code has been validated for semantic correctness and accessibility. All pages follow best practices for:
- Semantic HTML5 structure
- WCAG 2.1 accessibility guidelines
- Mobile responsiveness
- Cross-browser compatibility

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Submission Details

**Repository:** Available on GitHub  
**Deployment:** Ready for production deployment  
**Code Quality:** Validated and optimized  
**Accessibility:** WCAG AA compliant  
**Responsiveness:** Mobile, tablet, and desktop optimized  

## Future Enhancements

- Dark mode toggle
- Search functionality
- Language filtering
- User comments section
- Newsletter signup
- Blog/tutorial section
- Language roadmaps

## License

This project is created for educational purposes.

## Contact

For questions or feedback about this project, please use the contact form on the website.

---

**Built with:** React, Tailwind CSS, TypeScript, and semantic HTML  
**Last Updated:** December 2025

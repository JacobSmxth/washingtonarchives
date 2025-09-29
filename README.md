# George Washington Digital Museum - React Version

A modern, interactive digital museum built with React 19, Next.js 14, and Tailwind CSS, exploring the life, leadership, and legacy of George Washington.

## 🚀 Features

### Modern Tech Stack
- **React 19**: Latest React features with improved performance
- **Next.js 14**: App Router, Server Components, and optimizations
- **Tailwind CSS v3**: Utility-first CSS framework with custom design system
- **TypeScript**: Full type safety throughout the application

### Interactive Experience
- **Smooth Navigation**: Seamless transitions between sections
- **Keyboard Controls**: Navigate with arrow keys for accessibility
- **Image Modals**: Click any image to view in full-screen mode
- **Loading Animations**: Beautiful loading screen and progressive loading
- **Responsive Design**: Optimized for all screen sizes

### Advanced Animations
- **Intersection Observer**: Content animates as you scroll
- **Staggered Animations**: Elements appear with timed delays
- **Hover Effects**: Interactive cards and buttons with smooth transitions
- **Custom Keyframes**: Museum-style elegant animations
- **Performance Optimized**: Hardware-accelerated animations

### Performance Features
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO Optimized**: Proper meta tags and structured data
- **Progressive Enhancement**: Works without JavaScript

## 📚 Content Sections

1. **Home** - Introduction and exhibition highlights
2. **Youth** - Early life and family background
3. **Early Military** - French and Indian War experience
4. **Revolutionary War** - Leadership during independence
5. **Constitutional Convention** - Creating American government
6. **Presidency** - Two terms and presidential precedents
7. **Farewell Address** - Final guidance to the nation
8. **Legacy** - Enduring impact and modern perspectives
9. **On Slavery** - Complex relationship with slavery
10. **Mount Vernon** - His beloved estate and home

## 🛠 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd /home/jsmitty/Documents/Academic/Courses/History/projectWebsite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette
- **Museum Brown**: #8b4513 - Primary brand color
- **Museum Brown Light**: #a0522d - Secondary color
- **Museum Cream**: #fafafa - Background color
- **Museum Dark**: #2c2c2c - Text color
- **Quote Background**: #f8f4f0 - Quote containers

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Crimson Text (content)

### Custom Components
- `Navigation` - Responsive navigation with smooth scrolling
- `Section` - Main content container with animations
- `QuoteBlock` - Styled historical quotes
- `HighlightCard` - Interactive feature cards
- `ImageModal` - Full-screen image viewer
- `LoadingScreen` - Elegant loading animation
- `OptimizedImage` - Performance-optimized images

## 🚀 Performance Optimizations

- **Image Optimization**: Automatic WebP conversion and responsive images
- **Lazy Loading**: Images and content load as needed
- **Code Splitting**: Route-based code splitting
- **Prefetching**: Critical resources preloaded
- **Caching**: Optimized caching strategies
- **Bundle Analysis**: Optimized bundle sizes

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1200px

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: Proper ARIA labels
- **High Contrast**: Museum color scheme with good contrast
- **Focus Management**: Clear focus indicators
- **Semantic HTML**: Proper heading hierarchy

## 🔧 Customization

### Adding New Sections
1. Update `src/data/sections.ts` with new section data
2. Add navigation item to `navigationItems` array
3. Content will automatically render with existing components

### Styling Modifications
- Edit `tailwind.config.ts` for theme changes
- Modify `src/app/globals.css` for custom CSS
- Update color variables in the design system

### Component Extensions
- All components are in `src/components/`
- TypeScript interfaces in `src/types/`
- Reusable patterns for easy extension

## 📊 Analytics & Monitoring

The application includes hooks for performance monitoring:
- Core Web Vitals tracking
- Intersection Observer metrics
- Loading time analysis
- User interaction tracking

## 🔒 Security

- Content Security Policy ready
- XSS protection through React
- No external scripts (fonts loaded via Next.js)
- Static generation for security

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Static Export
```bash
npm run build
npm run export
```

### Other Platforms
The application works on any platform supporting Node.js or static hosting.

## 📝 Educational Value

### Historical Accuracy
- Content based on scholarly research
- Primary source quotes and documents
- Balanced presentation of complex topics
- Modern historical perspectives

### Learning Features
- Chronological organization
- Interactive exploration
- Visual storytelling
- Accessible academic content

## 🤝 Contributing

This is an academic project. For improvements:
1. Focus on historical accuracy
2. Maintain accessibility standards
3. Follow React/Next.js best practices
4. Preserve the museum aesthetic

## 📜 Credits

- **Content**: Based on historical scholarship and primary sources
- **Images**: Public domain historical images from Wikimedia Commons
- **Fonts**: Google Fonts (Playfair Display, Crimson Text)
- **Framework**: Next.js, React, Tailwind CSS

## 📚 Further Reading

For those interested in learning more about George Washington:
- *Washington: A Life* by Ron Chernow
- *His Excellency: George Washington* by Joseph Ellis
- Mount Vernon Digital Collections
- Library of Congress Washington Papers

---

*"I hope I shall possess firmness and virtue enough to maintain what I consider the most enviable of all titles, the character of an honest man."* — George Washington, 1783
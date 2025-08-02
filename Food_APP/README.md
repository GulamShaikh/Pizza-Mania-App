# 🍕 Pizza Mania - Modern Food Delivery App

A stunning, responsive pizza restaurant website built with React and enhanced with smooth GSAP animations. Features an interactive menu, dynamic gallery, and professional design optimized for the food delivery industry.

![Pizza Mania Banner](./src/assets/img1.avif)

## ✨ Features

### 🎨 **Modern Design**

- Clean, professional pizza restaurant theme
- Orange and red gradient color scheme
- Mobile-first responsive design
- Professional typography and spacing

### 🚀 **Advanced Animations**

- GSAP-powered scroll animations
- ScrollTrigger integration
- Smooth page transitions
- Interactive hover effects
- Staggered element animations

### 🍕 **Interactive Components**

- Dynamic navigation with burger menu
- Category-filtered menu system
- Image gallery with smooth transitions
- Animated food showcase
- Professional hero section

### 📱 **User Experience**

- Fully responsive across all devices
- Keyboard navigation support
- Smooth scrolling between sections
- Loading states and error handling
- Accessibility-focused design

## 🛠️ Tech Stack

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| **React 18**        | Frontend framework          |
| **Vite**            | Build tool and dev server   |
| **GSAP**            | Animation library           |
| **ScrollTrigger**   | Scroll-based animations     |
| **Tailwind CSS**    | Utility-first CSS framework |
| **JavaScript ES6+** | Modern JavaScript features  |

## 🚀 Quick Start

### Prerequisites

- Node.js (v16.0 or higher)
- npm (v7.0 or higher) or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/GulamShaikh/Pizza-Mania-App.git
   cd Pizza-Mania-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View in browser**

   ```
   http://localhost:5173/
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
Pizza-Mania-App/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/                     # Static assets
│   │   ├── img1.avif - img6.avif  # Pizza images
│   │   ├── drink1.avif - drink3.avif # Beverage images
│   │   ├── logo.png               # Brand logo
│   │   ├── idle.jpeg              # Food items
│   │   ├── dosa.jpeg              # Traditional dishes
│   │   ├── puri.jpeg              # Menu items
│   │   ├── marco.jpeg             # Chef/staff photos
│   │   └── pexels-*.jpg           # Professional food photography
│   ├── components/                # React components
│   │   ├── Navbar.jsx             # Navigation with animations
│   │   ├── Hero.jsx               # Landing hero section
│   │   ├── Menu.jsx               # Interactive menu system
│   │   ├── Gallery.jsx            # Image gallery
│   │   ├── ImageMarquee.jsx       # Scrolling image display
│   │   └── [other components]
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
├── netlify.toml                   # Netlify deployment config
└── README.md                      # Project documentation
```

## 🎯 Component Overview

### 🧭 **Navbar Component**

- **Animated burger menu** with smooth transitions
- **Responsive navigation** that adapts to screen size
- **Keyboard accessibility** with arrow key navigation
- **Logo integration** with professional branding
- **Overlay system** with backdrop blur effects

### 🍕 **Menu Component**

- **Category filtering** (Pizza, Beverages, Combos)
- **Product cards** with hover animations
- **Discount badges** and pricing display
- **Add to cart functionality** ready for integration
- **Responsive grid layout** for all screen sizes

### 🖼️ **Gallery Component**

- **Dynamic image loading** from local assets
- **Smooth transitions** between images
- **Professional food photography** display
- **Responsive masonry layout**
- **Lazy loading** for performance

### 🎪 **ImageMarquee Component**

- **Infinite scrolling** image carousel
- **GSAP-powered smooth animations**
- **Pause on hover** functionality
- **Multiple speed controls**
- **Seamless loop transitions**

### 🏠 **Hero Section**

- **Eye-catching landing area** with call-to-action
- **Animated text elements** with staggered reveals
- **Background imagery** with parallax effects
- **Mobile-optimized layouts**
- **Professional brand messaging**

## 🎨 Animation System

### GSAP Integration

```javascript
// Scroll-triggered animations
gsap.registerPlugin(ScrollTrigger);

// Staggered element animations
gsap.fromTo(
  elements,
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.1 }
);

// Smooth menu transitions
gsap.to(menuElement, {
  x: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
});
```

### Animation Features

- **Scroll triggers** for viewport-based animations
- **Hover effects** with smooth scale and opacity changes
- **Menu transitions** with elastic easing
- **Loading animations** for better UX
- **Parallax scrolling** effects

## 🖼️ Asset Management

### Image Optimization

- **AVIF format** for modern browsers (smaller file sizes)
- **JPEG fallbacks** for compatibility
- **Compressed assets** for faster loading
- **Local storage** for better performance
- **Responsive images** for different screen sizes

### Asset Categories

- **Pizza Images**: High-quality food photography
- **Beverages**: Drink photography and graphics
- **Brand Assets**: Logo and brand elements
- **Staff Photos**: Professional team imagery
- **Background Images**: Supporting visual elements

## 🎯 Key Features Implementation

### Responsive Navigation

```jsx
// Mobile-friendly burger menu with smooth animations
const toggleNavbar = () => {
  if (isOpen) {
    closeNavbar();
  } else {
    openNavbar();
  }
  setIsOpen(!isOpen);
};
```

### Dynamic Menu Filtering

```jsx
// Category-based product filtering
const [activeCategory, setActiveCategory] = useState("pizza");
const filteredProducts = products[activeCategory];
```

### Smooth Scrolling

```jsx
// Animated scroll to sections
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
};
```

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

### Mobile Optimizations

- Touch-friendly navigation
- Optimized image sizes
- Simplified layouts
- Fast loading times

## 🚀 Performance Optimizations

- **Lazy loading** for images
- **Code splitting** with React
- **Asset compression** (AVIF/WebP)
- **Efficient animations** with GSAP
- **Minimal bundle size** with Vite

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--orange-600: #ea580c
--red-600: #dc2626

/* Gradients */
background: linear-gradient(to right, #ea580c, #dc2626)

/* Neutral Colors */
--gray-50: #f9fafb
--gray-900: #111827
```

### Typography

- **Headings**: Bold, modern sans-serif
- **Body Text**: Clean, readable fonts
- **Accent Text**: Gradient text effects

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📦 Dependencies

### Core Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "gsap": "^3.12.2",
  "tailwindcss": "^3.3.0"
}
```

### Development Dependencies

```json
{
  "@vitejs/plugin-react": "^4.0.3",
  "vite": "^4.4.5",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24"
}
```

## 🌟 Future Enhancements

### Planned Features

- [ ] **Shopping Cart System** - Full e-commerce functionality
- [ ] **User Authentication** - Customer accounts and profiles
- [ ] **Online Ordering** - Complete order management
- [ ] **Payment Integration** - Stripe/PayPal integration
- [ ] **Order Tracking** - Real-time order status
- [ ] **Admin Dashboard** - Menu and order management
- [ ] **Customer Reviews** - Rating and review system
- [ ] **Loyalty Program** - Points and rewards system

### Technical Improvements

- [ ] **Progressive Web App** (PWA)
- [ ] **Server-Side Rendering** (Next.js migration)
- [ ] **Database Integration** (MongoDB/PostgreSQL)
- [ ] **API Development** (Node.js/Express)
- [ ] **Testing Suite** (Jest, React Testing Library)
- [ ] **CI/CD Pipeline** (GitHub Actions)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow React best practices
- Use meaningful commit messages
- Write clean, commented code
- Test on multiple devices
- Maintain consistent styling

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP** for powerful animation capabilities
- **Tailwind CSS** for utility-first styling
- **Vite** for lightning-fast development
- **React** for the excellent framework
- **Pexels** for high-quality stock photography

## 👨‍💻 Author

**[Gulam Dastgir]** - _Developer_

- 💼 LinkedIn: [Gulam-Shaikh](https://in.linkedin.com/in/gulam-shaikh)
- 🐙 GitHub: [@GulamShaikh](https://github.com/GulamShaikh)
- 📧 Email: gulamshaikh2455@gmail.com

## 📞 Support

If you found this project helpful, please:

- ⭐ **Star the repository**
- 🐛 **Report bugs** via Issues
- 💡 **Suggest features** via Issues
- 🤝 **Contribute** via Pull Requests

---

<div align="center">
  <strong>Built with ❤️ for the pizza community</strong>
  <br>
  <sub>© 2024 Pizza Mania. All rights reserved.</sub>
</div>

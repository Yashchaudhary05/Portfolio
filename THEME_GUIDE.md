# 🎨 Portfolio Theme Summary

## 🌑 Dark Mode (Default)

### Color Palette
```
Dark Theme Backgrounds:
- dark-50:  #1e1b2e (Lightest dark)
- dark-100: #1a1825
- dark-200: #16141f
- dark-300: #121019
- dark-400: #0e0c13
- dark-500: #0a080d (Mid dark)
- dark-600: #080609
- dark-700: #060507
- dark-800: #040305
- dark-900: #000000 (Pure black)

Accent Colors:
- Red:    #dc2626 (light) / #991b1b (dark)
- Purple: #9333ea (light) / #6b21a8 (dark)
```

### Visual Elements
- **Backgrounds**: Gradient from dark-100 → dark-200 → dark-300
- **Cards**: dark-100 with purple-900/30 borders
- **Text**: Gray-100 (light text on dark)
- **Accents**: Red-600 and Purple-600
- **Hover**: Red-400 and Purple-400
- **Glass Effect**: backdrop-blur with opacity

### Component Styles

#### Navbar
- Glass effect when scrolled
- Custom toggle slider (☀️/🌙)
- Red-purple hover states
- Backdrop blur

#### Hero Section
- Animated rotating ring (purple)
- Profile image with gradient overlay
- Floating badges
- Red-purple SVG icons
- Grid layout

#### Projects Carousel
- 4 project slides
- Navigation arrows
- Dot indicators
- Grid thumbnails
- Smooth transitions
- Unsplash background images

#### Cards
- Dark-100 background
- Purple-900/30 borders
- Glass effect
- Hover scale animations
- Red-purple gradients

#### Buttons
- Gradient: from-red-600 to-purple-600
- Hover: from-red-700 to-purple-700
- Rounded full
- Shadow effects

#### Forms
- Dark-100 inputs
- Purple-900 borders
- Red-500 focus ring (light)
- Purple-500 focus ring (dark)

## ☀️ Light Mode

### Color Palette
```
Backgrounds:
- White / Gray-50 / Gray-100

Accent Colors:
- Blue highlights
- Maintained red-purple accents
```

### Toggle Behavior
- Persisted in localStorage
- Smooth transition between modes
- Body class management
- All components adapt

## 🎭 Animations

### Framer Motion
```javascript
// Fade in from bottom
initial: { opacity: 0, y: 20 }
whileInView: { opacity: 1, y: 0 }
transition: { duration: 0.5 }

// Scale on hover
whileHover: { scale: 1.05 }

// Tap effect
whileTap: { scale: 0.95 }
```

### Custom Keyframes
```css
@keyframes float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-20px) }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 1 }
  50% { opacity: 0.5 }
}
```

## 🎨 Gradients

### Background Gradients
```
Dark Mode:
- from-dark-100 via-dark-200 to-dark-300
- from-dark-300 via-dark-200 to-dark-100
- from-dark-400 via-dark-300 to-dark-200

Accent Gradients:
- from-red-600 to-purple-600
- from-red-500 via-purple-500 to-pink-500
```

### Text Gradients
```css
.gradient-text {
  background: linear-gradient(to right, #dc2626, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## 🔘 Toggle Switch

### HTML Structure
```html
<div class="toggle-switch" onClick={toggleDarkMode}>
  <span class={isDarkMode ? 'active' : ''}>🌙</span>
  <span class={!isDarkMode ? 'active' : ''}>☀️</span>
</div>
```

### CSS Styling
```css
- Width: 60px
- Height: 30px
- Border radius: 15px
- Background: dark-200 / gray-300
- Emoji indicators
- Smooth transitions
```

## 📱 Responsive Breakpoints

```javascript
Tailwind Breakpoints:
- sm:  640px  (Mobile landscape)
- md:  768px  (Tablet)
- lg:  1024px (Desktop)
- xl:  1280px (Large desktop)
- 2xl: 1536px (Ultra-wide)
```

## 🎯 Design Principles

1. **Dark by Default**: Professional, modern look
2. **Red-Purple Theme**: Unique, memorable branding
3. **Glass Effects**: Depth and sophistication
4. **Smooth Animations**: Professional feel
5. **Responsive**: Works on all devices
6. **Accessible**: Good contrast, readable

## 🌟 Unique Features

✨ **Custom Toggle**: Emoji-based, not icon buttons
✨ **Project Carousel**: Full-featured with navigation
✨ **Glass Morphism**: Modern UI trend
✨ **Floating Elements**: Dynamic, engaging
✨ **Grid Layouts**: Organized, clean
✨ **Dark Gradients**: Depth without heaviness

## 🎨 Component Color Summary

| Component | Background | Accent | Border |
|-----------|------------|--------|--------|
| Navbar | Glass blur | Red-Purple hover | Purple-900/30 |
| Hero | Dark gradient | Red-Purple badges | Dashed purple |
| About | Dark-100 to 300 | Red-600 | Purple-900/30 |
| Experience | Dark gradient | Purple timeline | Red-400 |
| Projects | Dark-200 to 300 | Carousel colors | Purple-900/30 |
| Skills | Dark gradient | Red icons | Purple-900/30 |
| Contact | Dark-100 to 300 | Red-Purple form | Purple-900/50 |
| Footer | Dark-400 to 200 | Red-Purple links | Purple-900/30 |

## 🖌️ Typography

```
Font Family: Default system fonts
Headings: Font-bold, Gradient text
Body: Gray-100 (dark) / Gray-900 (light)
Links: Gray-400 with colored hover
```

## 🎯 Accessibility

- High contrast ratios
- Focus indicators
- Keyboard navigation
- ARIA labels
- Semantic HTML
- Screen reader friendly

---

**Theme Philosophy**: Modern, professional, and memorable with a unique dark red-purple aesthetic that sets you apart from typical blue portfolios.

**Built with care using Tailwind CSS custom theme configuration and Framer Motion animations.**

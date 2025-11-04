# 🚀 Deployment Guide - Yash Chaudhary Portfolio

## 📋 Pre-Deployment Checklist

### 1. Add Your Profile Picture
Before running the portfolio, you need to add your profile picture:

**Option A: Using PowerShell Script (Recommended)**
```powershell
# Run the provided script
.\copy-image.ps1
```

**Option B: Manual Copy**
1. Place your profile picture in the `public` folder
2. Rename it to `profile.jpg`
3. Path should be: `public/profile.jpg`

### 2. Install Dependencies
```powershell
# Navigate to the Portfolio directory
cd "C:\Users\yachaudh\Downloads\PYTHON\Portfolio"

# Install all npm packages
npm install
```

## 🖥️ Local Development

### Start Development Server
```powershell
npm run dev
```

This will:
- Start Vite dev server on `http://localhost:5173`
- Enable hot module replacement (HMR)
- Open in your default browser automatically

### Preview Production Build
```powershell
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Initial Setup
1. **Create GitHub Repository**
   ```powershell
   cd "C:\Users\yachaudh\Downloads\PYTHON\Portfolio"
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Create Repository on GitHub**
   - Go to https://github.com/new
   - Name: `portfolio` (or any name)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**
   ```powershell
   git remote add origin https://github.com/yashchaudhary05/portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to GitHub Pages**
   ```powershell
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Navigate to "Pages" section
   - Source: `gh-pages` branch
   - Click "Save"

Your portfolio will be live at: `https://yashchaudhary05.github.io/portfolio/`

#### Update Deployment
After making changes:
```powershell
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

### Option 2: Replit Deployment

#### Setup
1. **Go to Replit**
   - Visit https://replit.com
   - Click "Create Repl"
   - Choose "Import from GitHub"
   - Paste your repository URL

2. **Files Already Configured**
   - `.replit` - Run configuration
   - `replit.nix` - Dependencies

3. **Deploy**
   - Click the "Run" button
   - Replit will automatically build and serve
   - Share the generated URL

#### Replit URL Pattern
Your live site: `https://<repl-name>.<username>.repl.co`

### Option 3: Netlify (Alternative)

1. **Build Your Project**
   ```powershell
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 4: Vercel (Alternative)

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Deploy**
   ```powershell
   vercel
   ```

Follow the prompts to deploy.

## 🎨 Customization After Deployment

### Update Personal Information
Edit these files:
- `src/components/Hero.jsx` - Main intro
- `src/components/About.jsx` - About section
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Projects showcase
- `src/components/Skills.jsx` - Skills and certifications
- `src/components/Contact.jsx` - Contact info

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  dark: {
    50: '#your-color',
    // ... customize dark theme
  }
}
```

### Add More Projects
Edit `src/components/Projects.jsx` and add to the `projects` array:
```javascript
{
  id: 5,
  title: 'Your New Project',
  description: 'Description here',
  image: 'https://images.unsplash.com/...',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/...',
  demo: 'https://...',
  gradient: 'from-blue-500 to-green-500'
}
```

## 🔧 Troubleshooting

### Port Already in Use
```powershell
# Kill process on port 5173
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process -Force

# Or use a different port
npm run dev -- --port 3000
```

### Build Errors
```powershell
# Clear node modules and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Images Not Loading
- Ensure `profile.jpg` is in `public` folder
- Check image paths in components
- Verify Unsplash URLs are valid

### GitHub Pages 404
- Check `vite.config.js` has correct `base` path
- Ensure repository name matches base path
- Verify `gh-pages` branch exists

## 📱 Testing

### Responsive Design
Test on different screen sizes:
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

Use browser DevTools (F12) to test responsive design.

### Browser Compatibility
Test on:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### Dark/Light Mode Toggle
- Click the sun/moon toggle in navbar
- Verify theme persists on page reload
- Check all components in both modes

## 🎯 Performance Optimization

### Already Implemented
- ✅ Lazy loading with React Suspense
- ✅ Framer Motion animations
- ✅ Tailwind CSS purging
- ✅ Vite production optimizations

### Additional Optimizations
```powershell
# Analyze bundle size
npm run build
```

Check the `dist` folder size. Should be under 500KB for good performance.

## 📊 Analytics (Optional)

### Add Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

## 🔒 Environment Variables (Optional)

Create `.env` file for sensitive data:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access in code:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
```

## 📧 Contact Form Integration (Optional)

### Using EmailJS
1. Sign up at https://www.emailjs.com
2. Get your credentials
3. Install EmailJS:
   ```powershell
   npm install @emailjs/browser
   ```
4. Update `Contact.jsx` with EmailJS integration

## 🎉 Launch Checklist

Before going live:
- [ ] Profile picture added
- [ ] All personal info updated
- [ ] Links tested (GitHub, LinkedIn, Email)
- [ ] Projects showcase complete
- [ ] Dark/Light mode tested
- [ ] Responsive design verified
- [ ] No console errors
- [ ] Performance check passed
- [ ] Deployed successfully
- [ ] Custom domain configured (optional)

## 🌟 Next Steps

1. Share your portfolio URL on LinkedIn
2. Add to your GitHub profile README
3. Include in job applications
4. Update regularly with new projects

## 📞 Support

For issues or questions:
- Check the main `README.md`
- Review `SETUP.md` for installation help
- Open issue on GitHub repository

---

**Good luck with your deployment! 🚀**

Built with ❤️ using React, Vite, and Tailwind CSS
